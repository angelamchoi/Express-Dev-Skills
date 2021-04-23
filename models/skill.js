const skills = [
    { id: 1, skill: '1️⃣HTML', done: true },
    { id: 2, skill: '2️⃣CSS',  done: true },
    { id: 3, skill: '3️⃣JavaScript', done: true },
    { id: 4, skill: '4️⃣Python', done: false},
    { id: 5, skill: '5️⃣React', done: false}
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