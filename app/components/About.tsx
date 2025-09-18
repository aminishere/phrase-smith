import React from 'react'

function About() {
  return (
    <div className=' mx-20 py-56'>
        <div className=''>
            <div className='flex flex-row items-center gap-5'>
                <h1 className=' text-2xl'>ABOUT</h1>
                <div className='line w-20 h-1 bg-purple-600'></div>
            </div>
            <h2 className=' text-9xl font-bold'>Phrase Smith</h2>
        </div>
        <div className=' text-xl pt-5'>
            A platform to harnesses the power of advanced AI to provide engaging prompts. 
            Easy-to-use interface and powerful AI engine make it simple to generate prompts tailored to specific needs.
        </div>
    </div>
  )
}

export default About
