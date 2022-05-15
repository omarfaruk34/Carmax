import React from 'react';
// import {signInWithGoogle} from "../../Hooks/useFirebase"
// import useAuth from '../../Hooks/useAuth';
import useAuth from "../../Hooks/useAuth"
function Login() {
  const {signInWithGoogle} = useAuth();
  // cobst {sigb} = useAuth
  return (
    <div> 
        <div className='d-grid text-center  p-5'>
        <h1 className='text-danger'>Login Here </h1>
    <form className='m-5'>
      
        <label>
<input type="email" placeholder='Email' className='border-0' />
</label><br/><br/>
<label>
<input type="password" placeholder='Password' className='border-0'  />
</label><br/><br/>

<label >
{/* <input type="submit" onClick={()=>processToLogin(email,password)} value="Login" className="bg-primary text-light border-0"/> */}
</label><br/>


</form>
{/* <button onClick={signInWithGoogle}>Google</button> */}
    </div>
    </div>
  )
}

export default Login;