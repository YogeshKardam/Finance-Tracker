import React from 'react'

function InfoCard({title,amount,date,type,css,hidden,ondelete}) {
  return (
    <>
      <div className='flex items-center justify-center'>
        <div>
          <div className='bg-gradient-to-r from-purple-300 to-indigo-300 md:w-245 w-auto px-2  rounded-xl bfg-red-500 h-12 flex items-center justify-center mx-1'>
          <div className={`grid grid-flow-col gap-5 sm:gap-15 md:gap-8 lg:gap-11 items-center md:text-xl ${css}`}>
            <div className='text-center md:w-30 md:h-8 lg:w-40 lg:h-10'>{title}</div>
            <div className='text-center md:w-30 md:h-8 lg:w-40 lg:h-10'>{amount}</div>
            <div className='text-center md:w-30 md:h-8 lg:w-40 lg:h-10'>{date}</div>
            <div className='text-center md:w-30 md:h-8 lg:w-40 lg:h-10'>{type}</div>
            <button 
            className={`bg-gradient-to-r from-purple-500 to-indigo-500 p-2 text-black rounded-xl font-semibold ${hidden ? "hidden" : ""} `}
            onClick={ondelete}
            >Delete</button>
            
          </div>
        </div>
          <div className='w-full flex justify-center items-center'>
            <div className="bg-purple-400 w-full my-1 h-0.5"></div>
          </div>
        </div>
        
      </div>
      
      
    </>
  )
}

export default InfoCard