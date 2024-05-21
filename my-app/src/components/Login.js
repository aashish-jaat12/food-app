import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Login() {

    const [data, setdatas] = useState({ email: "", password: "" })
    const Navigate = useNavigate()

    const handelclick = async (e) => {
        e.preventDefault();
        let result = await fetch("/loginpage",{
            method:'post',
            body: JSON.stringify({name:data.name , email:data.email ,location: data.location,password:data.password}),
            headers:{
                "Content-Type": "application/json"
            }})
            
             const datas = await result.json()
             console.log(datas)
             if(!datas.success){
              alert("invalid user")
             }else{
                localStorage.setItem("authtoken",datas.authtoken)
                
              Navigate("/")
             }
      }
  
    

    const onchande = (event) => {
        setdatas({ ...data, [event.target.name]: event.target.value })

    }
    return (

        <div className='container'>
            <form onSubmit={handelclick}>

                <div className="mb-3 text-white">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={data.email} onChange={onchande} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3 text-white">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={data.password} onChange={onchande} />
                </div>

                <button type="submit" className=" m-3 btn btn-success text-white">Submit</button>
                <Link to={"/signup"} className=" m-3 btn btn-danger text-white"> New User</Link>
            </form>
        </div>

    )
}

export default Login
