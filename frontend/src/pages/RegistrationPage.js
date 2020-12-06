import React,{ useState} from "react";

import {registerUser} from '../actions/auth.actions/registerUser';
import {connect} from 'react-redux';


const RegistrationPage = () =>{
    const [userData,setUserData] = useState({
        name : '',
        lastName: '',
        userName: '',
        email: '',
        password:''

    });
    const {name,lastName,userName,email,password} = userData;
    const onChange = e => setUserData({[e.target.userName]: e.target.value});
    
    return(
        <div>
            <div>
                <label>Name</label>
                <input type = "text" name = "name" value = {name} onChange = {e => onChange(e)}/>

            </div>
            <br />
            <div>
                <label>Last Name</label>
                <input type = "text" name="lastName" value = {lastName} onChange = {e => onChange(e)}/>
            </div>
            <br/>
            <div>
                <label>Username</label>
                <input type = "text" name="userName" value = {userName} onChange = {e => onChange(e)}/>
            </div>
            <br/>
            <div>
                <label>email</label>
                <input type = "text" name="email" value = {email} onChange = {e => onChange(e)}/>
            </div>
            <br/>
            <div>
                <label>password</label>
                <input type = "text" name="password" value = {password} onChange = {e => onChange(e)}/>
            </div>
            <br/>
            <button onClick = {() => registerUser(userData)}>Submit form</button>
        </div>
    );
};
export default connect(null,{registerUser})(RegistrationPage);