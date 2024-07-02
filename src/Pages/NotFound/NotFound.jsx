import React from 'react'
import notfounfImage from "../../../public/notFound.jpg"
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='flex justify-center h-[100vh]'>
      <Link to={''}>
        <img src={notfounfImage} alt='notfounfImage' />
      </Link>
    </div>
  );
}
