import { findAllByLabelText } from '@testing-library/react';
import React, {useState} from 'react';


const Hookform = props =>  {
    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmedPassword] = useState("");


    return (
        <>
        <form className= "col-5 mx-auto my-5">
            <div className="form-group">
                <label>First Name : </label>
                <input 
                    type="text"  
                    className="form-control"
                    name="firstname"
                    value= {firstname}
                    onChange={(e)=> setFirstname(e.target.value)}
                />
                <span className="text-danger">{firstname.length > 2 ? "" : "First Name must be 3 characters."}</span>
            </div>
            <div className="form-group">
                <label>Last Name : </label>
                <input 
                    type="text"  
                    className="form-control"
                    name="lastname"
                    value= {lastname}
                    onChange={(e)=> setLastname(e.target.value)}
                />
                <span className="text-danger">{lastname.length > 2 ? "" : "Last Name must be 3 characters."}</span>
            </div>
            <div className="form-group">
                <label>Email : </label>
                <input 
                    type="text"  
                    className="form-control"
                    name="email"
                    value= {email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <span className="text-danger">{email.length > 4 ? "" : "Email must be 5 characters."}</span>
            </div>
            <div className="form-group">
                <label>Password : </label>
                <input 
                    type="text"  
                    className="form-control"
                    name="password"
                    value= {password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <span className="text-danger">{password.length > 7 ? "" : "Password must be 8 characters."}</span>
            
            </div>
            <div className="form-group">
                <label>Confirm Password : </label>
                <input 
                    type="text"  
                    className="form-control"
                    name="confirmPassword"
                    value= {confirmPassword} 
                    onChange={(e)=> setConfirmedPassword(e.target.value)}
                />
                
                

            </div>
        
            

        </form> 
        <div className="col-5 mx-auto card">
            <h4 className="card-title">Your Form Info</h4>
            <p className="card-text">First Name: {firstname}</p>
            <p className="card-text">Last Name: {lastname}</p>
            <p className="card-text">Email: {email}</p>
            <p className="card-text">Password: {password}</p>
            <p className="card-text">Confirm PassWord: {confirmPassword}</p>

        </div>
        </>
    );
}

export default Hookform; 