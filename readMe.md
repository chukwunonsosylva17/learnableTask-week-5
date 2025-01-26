# Code Description:
This example provides a starting points for Student Management System which are easy to maintain and extend.

## **1. Encapsulation:**
 * The Student class encapsulates the student's data (name, ID, grades) within its own object.
 * The calculateAverageGrade() method is also encapsulated within the class, providing controlled access to the student's data.

## **2. Abstraction:**
 * The user interacts with the Student class through its public methods (constructor, calculateAverageGrade(), displayStudentInfo()), without needing to know the internal implementation details.

## **3. Inheritance:**
 * Inheritance is used for Student class for it to potentialy inherit from User class, for you wanted to add specific attributes or behaviors and methods common to all people.

## **4. Polymorphism:**
 * The displayStudentdetails method is an example of polymorphism, as it can be called on any Student object regardless of its specific attributes and grades. Not directly used in this simplified example.
 <br> 
 
## **Key Features:**
 * Student Class:
   * Stores student data (firstName, lastName, id 
   * grades []).
   * Add student grades.
   * Calculates the average grade of the student.
   * Displays student details.
   * Find student by ID.
   * Delete student by ID.
   * Update student grade by ID.
   * Update student details by ID.
   * Update student ID.
<br>

 ## **Object-Oriented Principles:**
   * Encapsulation, abstraction, inheritance, and polymorphism are demonstrated (though basic examples of inheritance and polymorphism are not included).
<br>

 ## **Example Usage:**
   * Demonstrates how to create Student objects and use their methods.
<br>

 ## **Note:**
 * This example uses an array to store student grades. More data structure could be used to achieve the goal of the Student Management System.