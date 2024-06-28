import React from 'react'
import { useForm } from 'react-hook-form';

export default function FormTwo() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({mode:'onChange'});
  return (
    <>
      <form onSubmit={handleSubmit()}>
        <div>
          <label className=' mr-4'>name</label>
          <input
            {...register('name', { required: true,minLength:10 })}
            type='text'
            className='border-black border-2 p-2'
          />
          {errors.name && <p className=' text-red-700'>invalid name</p>}
        </div>
        <div className='mt-3'>
          <label className=' mr-4'>password</label>
          <input
            {...register('pass', { required: true })}
            type='password'
            className=' border-black border-2 p-2'
          />
          {errors.pass && <p className=' text-red-700'>invalid pass</p>}
        </div>
        <button type='submit' className='bg-blue-600 rounded p-3 m-10'>
          submit
        </button>
      </form>
    </>
  );
}
