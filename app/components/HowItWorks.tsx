import React from 'react'

function HowItWorks() {
  return (
    <div className='py-40 flex justify-center items-center'>
        <div className=' z-10 mx-20 flex flex-col justify-center items-center'>
            <div className=' flex justify-center items-center flex-col'>
                <div className='flex flex-row items-center gap-5'>
                    <div className='line w-20 h-1 bg-purple-600'></div>
                    <h1 className=' text-2xl'>HOW IT</h1>
                    <div className='line w-20 h-1 bg-purple-600'></div>
                </div>
                <h1 className=' text-9xl font-bold'>WORKS</h1>
            </div>
            <div className='flex flex-row flex-wrap gap-20 pt-10 justify-center items-center'>
                <div className=' min-w-60 max-w-96 h-auto bg-gray-600 bg-opacity-40 shadow-purple-500 shadow-md flex flex-col justify-center text-center px-10 py-10 rounded-md'>
                    <h1 className=' text-2xl font-bold pb-4'>Input the Topic</h1>
                    <p className=' text-gray-200 text-lg'>Enter a topic or keywords that inspire you.</p>
                </div>
                <div className=' min-w-60 max-w-96 h-auto bg-gray-600 bg-opacity-40 shadow-purple-500 shadow-md flex flex-col justify-center text-center px-10 py-10 rounded-md'>
                    <h1 className=' text-2xl font-bold pb-4'>Click Generate</h1>
                    <p className=' text-gray-200 text-lg'>Watch as PhraseSmith crafts a unique prompt tailored to the input.</p>
                </div>
                <div className=' min-w-60 max-w-96 h-auto bg-gray-600 bg-opacity-40 shadow-purple-500 shadow-md flex flex-col justify-center text-center px-10 py-10 rounded-md'>
                    <h1 className=' text-2xl font-bold pb-4'>Inspire Your Creativity</h1>
                    <p className=' text-gray-200 text-lg'>Use the generated prompt to kickstart next project, story, or brainstorming session.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks