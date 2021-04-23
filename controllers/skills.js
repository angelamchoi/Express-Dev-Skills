const Skill = require('../models/skill');

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    time: req.time,
  });
}


function show(req, res, next) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    skillNum: Skill.getAll().findIndex((skill) => skill.id === parseInt(req.params.id)) + 1,
  });
}

function newSkill(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function destroy(req, res) {
  const skillId = req.params.id;
  // Model is the one that handles the data management, all we need to do is give the unique id so that we can located the correct one to destroy
  Skill.destroy(skillId);
  res.redirect('/skills');
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  destroy,
};