import React from "react";

function Student (props) {
    return(
        <tr> 
      <td>{props.data.student}</td>
      <td>{props.data.astronomy}</td>
      <td>{props.data.intermediateLogic}</td>
      <td>{props.data.introductoryLogic}</td>
    </tr>
    )
}
export default Student;