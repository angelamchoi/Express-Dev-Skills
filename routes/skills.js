const express = require('express');

const router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.post('/', skillsCtrl.create);

router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.delete('/:id', skillsCtrl.destroy);

module.exports = router;