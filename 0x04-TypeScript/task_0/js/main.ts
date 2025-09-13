// Define an interface for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "Accra",
};

const student2: Student = {
  firstName: "Mary",
  lastName: "Smith",
  age: 22,
  location: "Kumasi",
};

// Put them into an array
const studentsList: Student[] = [student1, student2];

// Render a table in Vanilla JS
const table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cellName = row.insertCell();
  const cellLocation = row.insertCell();

  cellName.textContent = student.firstName;
  cellLocation.textContent = student.location;
});