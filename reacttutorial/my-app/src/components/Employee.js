import React from "react";
class Employee extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: "sarvesh"

        }
    }

    updateEmployee(){
        this.setState({
            firstName : "darvesh",

        })
    }

    render(){
        return(
            <div>
                <h1>employee details</h1>

                <p> {this.state.firstName}</p>

                <button onClick={()=>this.updateEmployee()}>update employee</button>
            </div>

            
        )
    }
}

export default Employee;