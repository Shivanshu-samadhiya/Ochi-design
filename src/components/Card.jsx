import React from 'react'

const Card = () => {
  return (
    <div className='w-full h-screen flex gap-5 items-center px-32 bg-zinc-900'>
    <div className='cardcontainer h-[50vh] w-1/2 '>
      <div className='card relative rounded-xl w-full h-full  flex items-center justify-center bg-[rgb(0,77,67)]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute px-7 py-3 rounded-full border-[#ADD162] text-[#ADD162] border-2 left-10 bottom-10'>&copy;2019-2022</button>
      </div>
    </div>
    <div className='cardcontainer w-1/2 flex gap-5 h-[50vh]'>
    <div className='card relative flex items-center justify-center w-1/2 rounded-xl h-full  bg-[#1a2221]'>
    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute px-7 py-3 rounded-full border-2 left-10 bottom-10'>Rating 5.0 on Clutch</button>
    </div>
    <div className='card w-1/2 relative flex items-center justify-center rounded-xl h-full  bg-[#1a2221]'>
    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute px-7 py-3 rounded-full  border-2 left-10 bottom-10'>Business Bootcamp Alumni</button>
    </div>

        </div>
    </div>
  )
}

export default Card