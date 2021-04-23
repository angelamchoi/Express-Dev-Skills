const skills = [
    { id: 1, skill: 'HTML', done: true },
    { id: 2, skill: 'CSS',  done: true },
    { id: 3, skill: 'JavaScript', done: true },
    { id: 4, skill: 'React', done: false},
    { id: 5, skill: 'Python', done: false}
  ];
  
  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find((skill) => skill.id === parseInt(id));
  }
  
  function getAll() {
    return skills;
  }
  
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function destroy(id) {
    const idx = skills.findIndex((skill) => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }
  
  module.exports = {
    getAll,
    getOne,
    create,
    destroy,
  };