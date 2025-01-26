// import React from "react"
// class Student extends React.Component{
//     render(){
//         return(
//             <div style={{backgroundColor:"blue", margin:20}} className="App">
//                 Student{this.props.name}

// import { useState } from "react"

                
//             </div>
//         )
//     }
// }
// export default Student;
// if condition 
// import { useState } from "react";
// function Student()
// {
//     const [logedin,setlggedin]=useState(3)

//     return(
//         <div>
//             {/* {logedin?<h1>welcome Ali</h1>:<h1>welcome guest</h1>} */}
//             ?{logedin==1?<h1>welcome use 1</h1>:logedin==2?<h1>welcomme user2</h1>:<h1>wwelcome user3</h1>}

           
//         </div>
//     )
// }
// export default Student;
// import React from 'react'
// import { TbJewishStar } from "react-icons/tb";
// class Student extends React.Component{
//     render()
//     {
//         console.log("render",this.props)
//         return(
//             <div>
//                 <h1>user1</h1>
//             </div>
//         )
//     }
// }
// export default Student;
// componentdid mount in lifr cycle 
// use of calling api 
// function Student(props)
// {
//     return(
//         <div>
//             <span>{props.data.names}</span>
//             <span>{props.data.emal}</span>
//             <span>{props.data.address}</span>
//         </div>
//     )
// }
// export default Student;
import React from "react";

function Student({ onSendData }) {
  const sendDataToParent = () => {
    const data = "Hello from Child!"; // Ye data Parent ko bhejna hai
    onSendData(data); // Parent ka function call aur data bhejna
  };

  return (
    <div>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}

export default Student;
