export default function Price() {

  return (
    <></>
    // <>
    //   {loader ? (
    //     <div className='flex justify-center'>
    //       <div className='max-w-[1800px] flex justify-center mt-6'>
    //         <div className='flex flex-row flex-wrap justify-center w-full'>
    //           {Array.apply(null, { length: 8 }).map((e, i) => (
    //             <Stack className='sm:w-2/4 md:w-1/4 px-3 mb-10' key={i}>
    //               <div className='w-11/12'>
    //                 <Skeleton
    //                   variant='rectangular'
    //                   height={240}
    //                   className='xl:w-[300px] lg:w-[250px]'
    //                 />
    //                 <div className=' space-y-0 flex flex-col items-center'>
    //                   <Skeleton variant='text' width={150} className='h-7' />
    //                   <Skeleton variant='text' height={100} width={180} />
    //                 </div>
    //               </div>
    //             </Stack>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     <div className='flex justify-center'>
    //       <div className='max-w-[1300px] flex justify-center flex-col mt-6 '>
    //         <div className='flex flex-row flex-wrap'>
    //           {moviesList.length >= 1 ? (
    //             moviesList.map((movie) => (
    //               <div
    //                 className='sm:w-2/4 md:w-1/4 mb-10 px-3 text-white'
    //                 key={movie.id}
    //               >
    //                 <button
    //                   className='bg-[#2f3856]'
    //                   onClick={() => {
    //                     navigate(`/details/${movie.id}`);
    //                   }}
    //                 >
    //                   <CardActionArea>
    //                     <Typography
    //                       gutterBottom
    //                       component='div'
    //                       className='h-5 overflow-hidden text-white '
    //                     >
    //                       {movie.title}
    //                     </Typography>
    //                     <CardMedia
    //                       component='img'
    //                       height='140'
    //                       image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    //                       className='h-60 mt-3 '
    //                       alt='green iguana'
    //                     />
    //                     <CardContent className='mb-5'>
    //                       <Typography
    //                         variant='body2'
    //                         className='h-16 overflow-hidden'
    //                       >
    //                         {movie.overview}
    //                       </Typography>
    //                     </CardContent>
    //                   </CardActionArea>
    //                 </button>
    //               </div>
    //             ))
    //           ) : (
    //             <div>nooooooooo</div>
    //           )}
    //           <div className='mx-auto flex flex-row justify-center items-center mb-10'>
    //             <button
    //               className='mx-10 bg-blue-900 rounded-md p-5'
    //               value={'next'}
    //               onClick={(e) => {
    //                 toAnotherPage(e);
    //               }}
    //             >
    //               next
    //             </button>
    //             <div>page : {counter}</div>
    //             <button
    //               className={`mx-10 bg-blue-900 rounded-md p-5 ${
    //                 counter == 1 ? ' cursor-not-allowed bg-blue-100' : ''
    //               }`}
    //               value={'previous'}
    //               onClick={(e) => {
    //                 toAnotherPage(e);
    //               }}
    //               disabled={counter == 1}
    //             >
    //               previous
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
}
