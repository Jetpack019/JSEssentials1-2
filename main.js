class User {
    constructor({ name, surname, email, role }) {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.role = role;
    }
}


  
  class ExtendedUser extends User {
    constructor({ name, surname, email, role }) {
      super({ name, surname, email, role });
    }
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.name = firstName;
      this.surname = lastName;
    }
  
    static match(teacher, student, courseName) {
      if (courseName) {
        const studentCourse = student.courses.find(
          (course) => course.courseName === courseName
        );
  
        if (!studentCourse) {
          return undefined; // Student is not interested in this course.
        }
  
        const teacherCourse = teacher.courses.find(
          (course) => course.courseName === courseName
        );
  
        if (teacherCourse && teacherCourse.level === studentCourse.level) {
          return { course: courseName, level: teacherCourse.level };
        } else {
          return undefined; // No match for the course.
        }
      } else {
        const matches = [];
  
        for (const studentCourse of student.courses) {
          const teacherCourse = teacher.courses.find(
            (course) => course.courseName === studentCourse.courseName
          );
  
          if (teacherCourse && teacherCourse.level >= studentCourse.level) {
            matches.push({
              course: studentCourse.courseName,
              level: teacherCourse.level,
            });
          }
        }
  
        return matches;
      }
    }
  }
  
  class Teacher extends ExtendedUser {
    constructor({ name, surname, email }) {
      super({ name, surname, email, role: 'teacher' });
      this.courses = [];
    }
  
    addCourse(courseName, level) {
      this.courses.push({ courseName, level });
    }
  
    editCourse(courseName, newLevel) {
      const courseIndex = this.courses.findIndex(
        (course) => course.courseName === courseName
      );
      if (courseIndex !== -1) {
        this.courses[courseIndex].level = newLevel;
      }
    }
  }
  
  class Student extends ExtendedUser {
    constructor({ name, surname, email }) {
      super({ name, surname, email, role: 'student' });
      this.courses = [];
    }
  
    addCourse(courseName, level) {
      this.courses.push({ courseName, level });
    }
  
    editCourse(courseName, newLevel) {
      const courseIndex = this.courses.findIndex(
        (course) => course.courseName === courseName
      );
      if (courseIndex !== -1) {
        this.courses[courseIndex].level = newLevel;
      }
    }
  }
  
  let student1 = new Student({
    name: 'Rafael',
    surname: 'Fife',
    email: 'rfife@rhyta.com',
  });
  let student2 = new Student({
    name: 'Kelly',
    surname: 'Estes',
    email: 'k_estes@dayrep.com',
  });
  let teacher1 = new Teacher({
    name: 'Paula',
    surname: 'Thompkins',
    email: 'PaulaThompkins@jourrapide.com',
  });
  
  student1.addCourse('maths', 2);
  student1.addCourse('physics', 4);
  teacher1.addCourse('maths', 4);
  
  let match = ExtendedUser.match(teacher1, student1);
  console.log(match); 
  
  teacher1.editCourse('maths', 1);
  match = ExtendedUser.match(teacher1, student1);
  console.log(match); 
  
  teacher1.addCourse('physics', 4);
  match = ExtendedUser.match(teacher1, student1, 'physics');
  console.log(match); 
  