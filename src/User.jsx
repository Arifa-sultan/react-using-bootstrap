import React from "react";
class User extends React.Component{
    render(){
        console.warn("render method");
        return(
            <div>
                <h1>user component</h1>
            </div>
        )
    }
}
export default User;