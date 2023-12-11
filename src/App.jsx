import React from 'react'
import MainRouter from "@/routers/MainRouter"

function Home() {
  return (
    <div className='bg-slate-800 w-full h-full overflow-x-hidden'>
      <MainRouter></MainRouter>
    </div>
  )
}

export default Home