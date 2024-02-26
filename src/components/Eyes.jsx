import React, { useEffect,useState } from 'react'

const Eyes = () => {
  
    const [rotate, setrotate] = useState(0)

    useEffect(() => {
     window.addEventListener("mousemove",(e)=>{
    let MouseX = e.clientX;
    let MouseY = e.clientY;

    let deltaX = MouseX - window.innerWidth/2;
    let deltaY = MouseY - window.innerHeight/2;
 
    var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
       setrotate(angle-180)
     })
    })
    

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
         <div data-scroll data-scroll-speed="-0.7" className=' relative w-full h-screen bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
          <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
            <div className='w-[15vw] flex justify-center items-center h-[15vw] rounded-full bg-zinc-100 '>
            <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
            <div className='w-10 h-10 rounded-full bg-zinc-100'> </div>
                </div>
            </div>
            </div>
            <div className='w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100 '>
            <div className='w-2/3 h-2/3 rounded-full relative bg-zinc-900'>
            <div style={{transform : `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
            <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                </div>
                </div>
            </div>
          </div>
         </div>
    </div>
  )
}

export default Eyes