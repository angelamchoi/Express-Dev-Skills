const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.json());

// takes anything submitted by a form and adds it to the req.body
app.use(express.urlencoded({ extended: false }));
// looks at the form submitted, IF there is a property on the req.body === _method, then convert the current verb to the type of verb in the _method value

/**
 * req.body = { _method: 'DELETE' }
 */
app.use(methodOverride('_method'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  console.log('Saving Req Timestamp');
  req.time = new Date().toLocaleTimeString();
  next();
});

// Routers
app.use('/', indexRouter);
app.use('/skills', skillsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;