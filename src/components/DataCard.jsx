import React from 'react'

function DataCard({ money, totalType, css }) {
  return (
    <div className={`flex items-center justify-center bg-slate-200 p-4 rounded-xl shadow-md text-center mx-5 ${css}`} >
      <div>
        <span className='grid grid-flow-row font-semibold text-gray-800'>{totalType}</span>
        <p className={`font-semibold text-xl`}>{money}</p>
      </div>
    </div>
  )
}

export default DataCard