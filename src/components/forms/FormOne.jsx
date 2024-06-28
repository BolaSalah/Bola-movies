import React, { useState } from 'react'
import img1 from '../../../public/eye-password-hide.png';
import img2 from '../../../public/eye.png';

export default function FormOne() {
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,pass);
    }
    const handleEye = (e) => {
        if (e.target.src == `http://localhost:5173${img1}`) {
            e.target.src = img2
            setShowPassword(true)
        }
        else {
            e.target.src = img1
            setShowPassword(false);
        }
    }

  return (
    <>
      <form>
        <div>
          <label className=' mr-4'>
            name
          </label>
          <input type='text' className='border-black border-2 p-2' name='nameValue' onChange={(e)=>{handleName(e)}}  />
        </div>
        <div className='mt-3'>
          <label className=' mr-4'>
            password
          </label>
            <div className='flex'>
              <input type={showPassword ? "text" : "password"} className=' border-black border-2 p-2' onChange={(e)=>{handlePass(e)}}></input>
              <img src={img1} alt="img" className='w-6 hover:cursor-pointer' onClick={(e)=>{handleEye(e)}} />
            </div>
          </div>
        <button onClick={(e)=>{handleSubmit(e)}} type='submit' className='bg-blue-600 rounded p-3 m-10'>
          submit
        </button>
      </form>
    </>
  );
}
