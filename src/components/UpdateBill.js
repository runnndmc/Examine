import React, { useState } from 'react'

const UpdateBill = (props) => {


    return(

         <h2>HIIII</h2>

    )

}

export default UpdateBill

/* 
const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    }

 <label>Name</label>
        <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
        <label>Username</label>
        <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />
        <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
        <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>

export default EditUserForm; */