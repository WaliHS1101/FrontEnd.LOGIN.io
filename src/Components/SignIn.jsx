import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SignIn() {
    const [UserEmail, setUserEmail] = useState("");
    const [UserPassword, setUserPassword] = useState("");

    function signIn(e) {

        e.preventDefault();

        if (UserEmail === "" || UserPassword === "") {
            alert("Fill the form")
        }

        else {
            alert(UserEmail)
            console.log(UserEmail)
        }

    }


    return (
        <>
            <div className='container '>
                <div className='col-lg-4 col-12 m-auto p-3 border rounded border-1 border-danger mt-3'>
                    <form action="" className='text-center' onSubmit={signIn}>
                        <h1>Sign In</h1>
                        <label htmlFor="Email" className='form-label m-2'>Email</label>
                        <input type="email" className='form-control m-2' onChange={(e) => { setUserEmail(e.target.value) }} />
                        <label htmlFor="password" className='form-label m-2'>Password</label>
                        <input type="password" className='form-control m-2' onChange={(e) => { setUserPassword(e.target.value) }} />
                        <Link to="/SignUp"><p>Already have account login here</p></Link>
                        <input type="submit" className='btn btn-success m-2 ' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn