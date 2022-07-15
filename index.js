
    let studentRecords = [ {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ] 


// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']


let name = studentRecords.map((item) => item.name.toUpperCase());
console.log(name);





// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

let marks = studentRecords.filter((item) => item.marks>50)
console.log(marks);

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.



let students = studentRecords.filter((item) => (item.marks>50 && item.id> 120))
console.log(students);



// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let totalMarks = studentRecords.reduce((acc,curr) => acc += curr.marks,0)
console.log(totalMarks);


// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let studentMarks = studentRecords.filter((item) => item.marks>50).map(item => item.name)
console.log(studentMarks);






// Question 6: This time we are required to print the sum of marks of the students with id > 120.




let marksSum = studentRecords.filter((item) => item.id>120).reduce((acc,curr) => acc += curr.marks,0);
console.log(marksSum);



// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

for(let i = 0; i<studentRecords.length;i++){
    if(studentRecords[i].marks<50){
        studentRecords[i].marks +=15;
    }
}
let total = studentRecords.filter((item) => item.marks>50).reduce((acc,curr) => acc += curr.marks,0);

console.log(total);
// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
    const studentProto = {
    initialiser(studentName,studensclass,rollNumber){
this.studentName = studentName;
this.studensclass = studensclass;
this.rollNumber = rollNumber;
    }
}
let firstStudent = Object.create(studentProto)
firstStudent.initialiser('pallavi',12,50);
console.log(firstStudent);

let secondStudent = Object.create(studentProto)
firstStudent.initialiser('deeksha',11,20);
console.log(firstStudent);

let thirdStudent = Object.create(studentProto)
firstStudent.initialiser('prakriti',10,35);
console.log(firstStudent);
let fourthStudent = Object.create(studentProto)
firstStudent.initialiser('hina',9,32);
console.log(firstStudent);

let fifthStudent = Object.create(studentProto)
firstStudent.initialiser('sakshi',12,40);
console.log(firstStudent);

let sixthStudent = Object.create(studentProto)
firstStudent.initialiser('raksha',6,25);
console.log(firstStudent);

