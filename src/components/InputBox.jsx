import React from 'react'

function InputBox({name, isDisabled, value, onchange, onclick, css, type}) {
  return (
    <div className={`my-3 mx-auto ${css}`}>
      <input
      type={type} 
      id={name}  
      className='bg-slate-200 p-0.5 lg:w-full md:w-35 md:h-8 sm:w-30 sm:h-8 w-38 text-center h-8 text-sm md:text-lg shadow focus:outline-none border focus:ring-2 focus:ring-purple-400 rounded' 
      disabled={isDisabled}
      value={value}
      onChange={onchange}
      onClick={onclick}
      placeholder={name}
      />
    </div>
  )
}

export default InputBox