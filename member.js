function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JS', 'CSS', 'HTML'],
        salary: 2000,
        bonus: 1000,
        getSalary: function () {
            return this.salary + this.bonus;
        },
        setSalary: function (newSalary) {
            this.salary = newSalary;
        },
        addSkill: function (newSkill) {
            this.skills.push(newSkill);
        },
        removeSkill: function (skill) {
            this.skills = this.skills.filter(function (item) {
                return item !== skill;
            });
        },
        getSkills: function () {
            return this.skills;
        }
    };
    return member;
}