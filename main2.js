class User {
    constructor({ name, surname, email, role }) {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.role = role;
      this.messages = [];
    }

    receiveMessage(from, message) {
        this.messages.push({ from, message });
      }

      showMessagesHistory() {
        console.log(`Messages for ${this.email}:`);
        for (const message of this.messages) {
          console.log(`${message.from.email} -> ${this.email}: ${message.message}`);
        }
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

class Tutoring { 
    constructor() { 
        this.students = []; 
        this.teachers = []; 
    } 
    getStudentByName(name, surname) { 
        let retVal; 
        for(let student of this.students) 
        { 
            if(student.name === name && student.surname === surname) 
            { 
                retVal = student; 
            } 
        } 
        return retVal; 
    } 
    getTeacherByName(name, surname) { 
        let retVal; 
        for(let teacher of this.teachers) { 
            if(teacher.name === name && teacher.surname === surname) { 
                retVal = teacher; 
            } } return retVal; 
        } 
    getStudentsForTeacher(teacher) { 
            let retVal = []; 
            for(let student of this.students) { 
                if(ExtendedUser.match(teacher, student).length) { 
                    retVal.push(student); 
                } 
            } 
            return retVal; 
        } 
    getTeacherForStudent(student) {
        let retVal = []; 
        for(let teacher of this.teachers) { 
            if(ExtendedUser.match(teacher, student).length) { 
                retVal.push(teacher); 
            } 
        } 
        return retVal; 
    } 
    addStudent(name, surname, email) { 
        this.students.push(
            new Student({name, surname, email})); 
        } 
    addTeacher(name, surname, email) { 
        this.teachers.push(new Teacher({name, surname, email})); 
    } 
}


class ExtendedTutoring extends Tutoring {
    constructor() {
      super();
    }
  
    sendMessages(from, to, message) {
      for (let recipient of to) {
        recipient.receiveMessage(from, message);
      }
    }
    
  }



  let tutoring = new ExtendedTutoring();
  tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
  tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
  tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
  let to = [];
  to.push(tutoring.getStudentByName('Rafael', 'Fife'));
  to.push(tutoring.getStudentByName('Kelly', 'Estes'));
  tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');
  for(let user of to) {
      user.showMessagesHistory();
  }
  // -> PaulaThompkins@jourrapide.com -> rfife@rhyta.com: test message
  // -> PaulaThompkins@jourrapide.com -> k_estes@dayrep.com: test message