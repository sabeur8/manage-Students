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
  const [newSubject,setNewSubject]=useState('');

  const mapper =(element) =>(
    <Student data = {element}/>
  )

  const [mappedStudents,setMappedStudents] = useState(students.map(mapper));
  const handleInput = (e) =>{
    const newSubject = e.target.value.trim();
    setNewSubject(newSubject);
  }
  
  const handleAddSubject = () =>{
    setStudents(
      (oldStudents) => 
        {const newStudents =oldStudents.concat([newSubject]);
        setMappedStudents(newStudents.map(mapper));
        return newStudents;
      }
    );
  }


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
                <option value="semester2">Semester 2</option>
                <option>semestre 1 </option>
            </select>
            <button>Add Student</button>
            <button onClick={handleAddSubject}>Add subject</button>
            <input type='text' onChange={handleInput}/>
        </div>
      </div>
      <table>
        <tr>
          <td>Students</td>
          <td>Astronomy</td>
          <td>Intermediate Logic</td>
          <td>Introductory Logic</td>
        </tr>
        {mappedStudents}
      </table>
    </div>
  );
}

export default App;
