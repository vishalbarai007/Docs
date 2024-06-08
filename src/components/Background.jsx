import React from 'react'

function Background() {
  return (
    <div className='fixed w-full h-screen z-[2]'>
        <div className=' absolute top-[5%] w-full py-10 flex justify-center font-semibold text-xl'>VACATION WORK LIST.</div>
        <h1 className='absolute top-1/2 left-1/2 text-[13vw] text-zinc-950 font-semibold -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter'>Docs.</h1>
    </div>
  )
}

export default Background;