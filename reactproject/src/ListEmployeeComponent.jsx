import React, { Component } from 'react';
import EmployeeServices from "./EmployeeServices";
    
    class ListEmployeeComponent extends Component {

        constructor(){
            super();
            this.state={
                Employees:[]
            }
        }

        componentDidMount(){
            EmployeeServices.getEmployees().then((res)=>
            {
                this.setState({Employees:res.data});
            }
            );      
        }


        render() {
            return (
                <div>
                    <h2 className="text-center">Employee List</h2>
                    <div className="row"></div>
                    <table className = "table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <th>EmpId</th>
                                <th> First Name </th>
                                <th> Last Name </th>
                                <th> EmailId </th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                this.state.Employees.map(
                                    Employees=>
                                    <tr key={Employees.id}>
                                        <td>{Employees.id}</td>
                                        <td>{Employees.firstname}</td>
                                        <td>{Employees.lastname}</td>
                                        <td>{Employees.emailID}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            );
        }
    }
    
    export default ListEmployeeComponent;