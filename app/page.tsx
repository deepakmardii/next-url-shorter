import Hero from '@/components/Hero'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Main/>
    </div>
  )
}

export default page
