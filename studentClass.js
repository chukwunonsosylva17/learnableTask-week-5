class Student {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName
        this.id = id;
        this.grades = [];
    }
    // Method to add new grades for a student
    addGrade(grade) {
        this.grades.push(grade);
    }
    // Method to calculate the average grade of a student
    calculateAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }
    // Method to display student details
    displayStudentInfo() {
        console.log(`Student Name: ${this.firstName} ${this.lastName}`);
        console.log(`Student ID: ${this.id}`);
            console.log(`Grades: ${this.grades.join(", ")}`);
        console.log(`Average Grade: ${this.calculateAverageGrade().toFixed(2)}`);
        ;
    }
   }
    // Define a StudentManagementSystem class
    class StudentManagementSystem {
    // Constructor to initialize an epmty array of students
    constructor() {
        this.students = [];
    }
    // Method to add a new student 
    addStudent(firstName, lastName, id) {
        const student = new Student(firstName, lastName, id);
        this.students.push(student);
        console.log(`Student added successfully!`);
    }
    // Method to display all students 
    displayStudentInfo() {
        if (this.students.length === 0) {
            console.log("No students in the system.");
        } else {
            this.students.forEach((student) => {
                student.displayStudentInfo();
                console.log("Students displayed successfully");   
            });
        }
    }
    // Method to find a student by ID
    findStudentById(id) {
        return this.students.find((student) => student.id === id);
    }
    // Method to delete a student by ID 
    deleteStudentById(id) {
        const studentIndex = this.students.findIndex((student => student.id === id));
        if (studentIndex === -1){
            console.log("Student not found in the system");
           return; 
        }
        this.students.splice(studentIndex, 1);
        console.log("Student deleted successfully");   
    }
    // Method to update a student grade by ID
    updateStudentGradeById(id, grade) {
        const student = this.findStudentById(id);
        if (!student){
            console.log("Student not found in the system");
        return;            
        }
        student.addGrade(grade);
        console.log("Grade added Successfully");
    }
    // Method to update students details by ID
    updateStudentDetailsById(id, firstName, lastName) {
        const student = this.findStudentById(id);
        if (!student){
          console.log("Student not found in the system");
        return;            
        }
        student.firstName = firstName;
        student.lastName = lastName;
        console.log("Student details updated successfully");
    }
    // Method to update student ID
    updateStudentId(id, newId) {
        const student = this.findStudentById(id);
        if (!student){
            console.log("Student not found in the system");
        return;            
        }
        student.id = newId;
        console.log("Student ID updated successfully");
    }
}

// For creating new StudentManagementSystem object
const studentManager = new StudentManagementSystem();

// For adding new students to the system
studentManager.addStudent("Chinonso", "Sylva", "ME6410");
studentManager.addStudent("Chinonso", "Okoye", "ME9966");

// For displaying of all students in the system 
studentManager.displayStudentInfo();

// For adding grades to students in the system
const student1 = studentManager.findStudentById("ME6410");
if (student1) {
    student1.addGrade(75);
    student1.addGrade(85);
    student1.addGrade(70);
    student1.addGrade(95);
}

const student2 = studentManager.findStudentById("ME9966");
if (student2) {
student2.addGrade(80)
student2.addGrade(75);
student2.addGrade(65);
student2.addGrade(70);
}

// For displaying of the student's details again after adding grades to them 
student1.displayStudentInfo();
student2.displayStudentInfo();

// For deleting a student by ID 
studentManager.deleteStudentById(6410);

// For updating a student grade by ID 
studentManager.updateStudentGradeById(9966, 90);

// For updating a student details by ID 
studentManager.updateStudentDetailsById("ME9966", "Chukwunonso", "Sylver");

// For updating a student ID
studentManager.updateStudentId("ME9966", "ME3310");

// For displaying of all students in the system
studentManager.displayStudentInfo();
