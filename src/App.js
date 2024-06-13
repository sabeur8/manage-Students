import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Student from './components/Student.js';

function App() {
  const [students,setStudents] = useState([
    {student : "Saber Ben Hamouda" , astronomy : "A+ 98.4%", introductoryLogic : "A 94%", intermediateLogic : "A+ 99.3%"},
    {student : "Ahmed Ben Hamouda" , astronomy : "B 88.4%", introductoryLogic : "A 92%", intermediateLogic : "A 91.3%"},
    {student : "Asma Ben Hamouda" , astronomy : "C 78.4%", introductoryLogic : "A 80%", intermediateLogic : "A+ 95.3%"},
    {student : "ALi Ben Hamouda" , astronomy : "A+ 98.4%", introductoryLogic : "A 85%", intermediateLogic : "D 60.3%"}
  ]);
  const [ArrNewStudent,setArrNewStudent] = useState([]);
  const [newSubject,setNewSubject] =useState('');
  
  const handleInputStudent = (e) =>{
    const newStudent = e.target.value;
    setArrNewStudent(newStudent.split(" "))
  }
  const handleInputSubject = (e) =>{
    const newSubject = e.target.value;
    setNewSubject(newSubject);
  }

  const mapper =(element) =>(
    <Student data = {element} />
  )

  const [mappedStudents,setMappedStudents] = useState(students.map(mapper));
  
  
  const handleAddStudent = () =>{
    setStudents(
      (oldStudents) => 
        {const newStudents =oldStudents.concat([
          {student :ArrNewStudent[0] ,astronomy : ArrNewStudent[1], introductoryLogic :  ArrNewStudent[2] ,intermediateLogic :ArrNewStudent[3] }
        ]);
        setMappedStudents(newStudents.map(mapper));
        return newStudents;
      }
    );
  }
  

  const handleAddSubject = () =>{
    setStudents(
      (oldStudents)=>{
        const newStudents = oldStudents.map( obj =>{return {...obj, [newSubject] : ' '}} )
        setMappedStudents(newStudents.map(mapper));
        return newStudents;
      }
    );
    console.log(students);
  }
  const mappedSubjects= Object.keys(students[0]).map((key)=>(<td>{key}</td>))
  console.log(Object.keys(students));

  return (
    <div>
      <div class="container">
        <div class="header">
            <h1>Students</h1>
            <h2>All Classes</h2>
        </div>
        <div class="term">
            <span>Academic Term:</span>
            <select>
                <option>semestre 1 </option>
                <option value="semester2">Semester 2</option>
            </select>
            <button onClick={handleAddStudent}>Add Student</button> 
            <input className='new student' type='text' placeholder='nom note1 note2 notn ...' onChange={handleInputStudent}/>
            
            <button onClick={handleAddSubject} >Add subject</button>
            <input className='new subject ' type='text' placeholder='new subject' onChange={handleInputSubject}/>
        </div>
      </div>
      <table>
        <tr>
          {mappedSubjects}
        </tr>
        {mappedStudents}
      </table>
    </div>
  );
}

export default App;
