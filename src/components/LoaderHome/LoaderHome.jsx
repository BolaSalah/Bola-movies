import { CircularProgress} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export default function LoaderHome() {
  const loader = useSelector((state) => state.loader.loader);
  return (
    <>
      {loader && (
        <div className='flex justify-center items-center h-[80vh]'>
          <CircularProgress />
        </div>
      )}
    </>
  );
}
