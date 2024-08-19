import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
// const bg = require('/Users/krishnaprasadr/Projects/Prompt generation app/ai-prompt-app/public/Abstract liquid shape.jpg')

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center relative w-full h-[90vh] overflow-hidden'>
        <div className='mx-20 absolute z-10 pt-40 flex flex-col justify-center items-center'>
            <h3 className=' text-3xl font-bold drop-shadow-xl'>UNLOCK YOUR CREATIVITY WITH AI GENERATED PROMPTS USING</h3>
            <h1 className=' text-9xl font-extrabold from-purple-900 to-blue-800 drop-shadow-2xl'>PhraseSmith</h1>
            <Link href='/app'><div className='flex justify-center items-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 px-4 py-2 mt-10 text-lg font-semibold'>Get Started</div></Link>
        </div>
        <div className=' relative z-0 w-full bg-gradient-to-br from-purple-900 to-blue-900'>
            <img className=' w-full h-auto scale-125 opacity-70' 
            src="/bg-img.jpg" 
            alt='bg'
            />
        </div>
    </div>
  )
}

export default Hero