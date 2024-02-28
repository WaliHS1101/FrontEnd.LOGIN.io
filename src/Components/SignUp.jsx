import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
    const [UserName, setUserName] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [UserPassword, setUserPassword] = useState("");

    function signUp(e) {

        e.preventDefault();

        if (UserName === "" || UserEmail === "" || UserPassword === "") {
            alert("Fill the form")
        }

        else {
            alert(UserName)
            console.log(UserName)
        }

    }


    return (
        <>
            <div className='container '>
                <div className='col-lg-4 col-12 m-auto p-3 border rounded border-1 border-danger mt-3'>
                    <form action="" className='text-center' onSubmit={signUp}>
                        <h1>Sign Up</h1>
                        <label htmlFor="Name" className='form-label m-2'>Name</label>
                        <input type="text" className='form-control m-2' onChange={(e) => { setUserName(e.target.value) }} />
                        <label htmlFor="Email" className='form-label m-2'>Email</label>
                        <input type="email" className='form-control m-2' onChange={(e) => { setUserEmail(e.target.value) }} />
                        <label htmlFor="password" className='form-label m-2'>Password</label>
                        <input type="password" className='form-control m-2' onChange={(e) => { setUserPassword(e.target.value) }} />
                        <Link to="/SignIn"><p>don't have account SignUp here</p></Link>
                        <input type="submit" className='btn btn-success m-2 ' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp