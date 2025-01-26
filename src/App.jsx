// bootstrap in react 
// import React from 'react';
// import Button from 'react-bootstrap/Button'; // Import Button from React-Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function App() {
//   return (
//     <div className="App">
//       <h1>Bootstrap Buttons in React</h1>
//       {/* button  */}
//       <Button variant="primary">Primary</Button>
//       <Button variant="secondary">Secondary</Button>
//       <Button variant="success">Success</Button>
//       <Button variant="danger">Danger</Button>
//       <Button variant="warning">Warning</Button>
//       <Button variant="info">Info</Button>
//       <Button variant="light">Light</Button>
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//     </div>
//   );
// }
// function App(){
//     const students = ['Anil','sindhu','sam','peter']
//     // map looping 
//     // students.map((items)=>{
//     //     console.warn('my name:',items)
//     // })
//     // for(let i=0;i<students.length;i++)
//     // {
//     //     console.warn("in for loop my name is  ", students[i])
//     // }
//     return(
//         <div className='App'>
//             <h1>handle array with</h1>
//             {
//                 students.map((data)=>
//                 <h1>{data}</h1>
//                 )
//             }
//         </div>
//     )
// }

// export default App;

// import Table from 'react-bootstrap/Table';

// function BasicExample() {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }

// export default BasicExample;
// nested list with nested array 
// import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function NestedList() {
//   return (
//     <div className="container mt-5">
//       <h1>Nested List Example</h1>
//       <ListGroup>
//         <ListGroup.Item>
//           Parent Item 1
//           <ListGroup className="mt-2">
//             <ListGroup.Item>Child Item 1.1</ListGroup.Item>
//             <ListGroup.Item>Child Item 1.2</ListGroup.Item>
//           </ListGroup>
//         </ListGroup.Item>
//         <ListGroup.Item>
//           Parent Item 2
//           <ListGroup className="mt-2">
//             <ListGroup.Item>Child Item 2.1</ListGroup.Item>
//             <ListGroup.Item>Child Item 2.2</ListGroup.Item>
//             <ListGroup>
//               <ListGroup.Item>Grandchild Item 2.2.1</ListGroup.Item>
//             </ListGroup>
//           </ListGroup>
//         </ListGroup.Item>
//         <ListGroup.Item>
//           Parent Item 3
//         </ListGroup.Item>
//       </ListGroup>
//     </div>
//   );
// }

// export default NestedList;
// reuse component in react 
// import React from "react";
// import Student from "./Student";
// function App(){
//     const user=[
//         {
//             names:'arifa',emal:'arifa@test.com',contact:'11'
//         },
//         {
            
//             names:'anil',emal:'anil@test.com',contact:'11'
//         },
//         {
            
//             names:'anil',emal:'anil@test.com',contact:'11'
//         },
//     ]
//     return(
//         <div className="App">
// <h1>reuse component</h1>
// {
    
//     user.map((items,i)=>
//     <Student data= {items}/>
//     )
// }
//         </div>
//     )
// }
// export default App;
// fragment 
<>
{/* <h1>hello</h1> */}
</>
import React, { useState } from "react";
import Student from "./Student";

function ParentComponent() {
  const [childData, setChildData] = useState(""); // Child data yahan save hoga

  // Callback function to receive data
  const handleChildData = (data) => {
    setChildData(data); // Child se data yahan set ho jayega
  };

  return (
    <div>
      <h1>Data from Child: {childData}</h1>
      <Student onSendData={handleChildData} />
    </div>
  );
}

export default ParentComponent;
