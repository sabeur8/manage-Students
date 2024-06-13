import React from "react";
function Student (props) {

  const mapper = (key) => (
    <td> {props.data[key]}</td>
  )
  const mappedStudents = Object.keys(props.data).map(mapper)
  

    return(
        <tr>
     {mappedStudents}
    </tr>
    )
}
export default Student;