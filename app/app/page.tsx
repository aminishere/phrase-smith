"use client";
import React, { useState } from 'react';
import { WiStars } from "react-icons/wi";
import { MdClose } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

// const apiUrl = process.env.GEMINI_API_KEY as string

// console.log(apiUrl)

// console.log(process.env.GEMINI_API_KEY as string)

function Page() {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [loading, setloading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setKeywords([...keywords, inputValue]);
    setInputValue('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleRemoveKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i!== index));
  };

  const handleGenerate = () => {
    setloading(true)
    // console.log("Keywords:", keywords);

    let joined_keywords = keywords.join(', ');
      
    const apiKey = 'AIzaSyAXRklaaViEWVgOd7qNiaYjLoY1pMS49zE';
    // console.log(apiKey)
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
    
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };
    
    async function run() {
      const parts = [
        {text: "Generate a human firendly prompt using the given keywords : "},
        {text: joined_keywords}
      ];
    
      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        });
        setloading(false)
        // console.log(result.response.text());
        setResult(result.response.text());
    }
      
    run();
  };

  return (
    <div className=' relative z-0 flex flex-col justify-center items-center pt-40'>
        <div className=' relative z-0 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <h1 className='text-5xl font-bold'>GENERATE YOUR PROMPT</h1>
          <div className='w-[400px] h-1 bg-purple-500'></div>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-row justify-center items-center pt-20 gap-10'>
          <input
            className='bg-black justify-center items-center text-center border-b-2 text-2xl py-5 px-10 rounded-full w-[800px]'
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter your Keywords'
            />
          <div className='flex flex-row gap-5'>
              <button className='px-4 py-2 bg-purple-600 rounded-md flex justify-center items-center gap-1'>
                  Add
                  <span className='text-2xl'>
                      <IoMdAdd/>
                  </span>
              </button>
          </div>
        </form>
        <ul className='flex gap-10 pt-5 mx-20 flex-wrap justify-center items-center'>
          {keywords.map((keyword, index) => (
              <li key={index} className='flex flex-row justify-between gap-2 bg-purple-900 px-6 py-2 rounded-full'>
              {keyword}
              <button onClick={() => handleRemoveKeyword(index)} className='text-red-500'>
                <MdClose size={20} />
              </button>
            </li>
          ))}
        </ul>
        <button onClick={handleGenerate} className='px-4 py-2 bg-purple-600 rounded-md flex justify-center items-center gap-1 mt-10'>
          Generate
            <span className='text-2xl'>
                <WiStars />
            </span>
        </button>
        </div>

        {loading && (
            <div className='absolute z-10 w-full h-full bg-black flex justify-center items-center'>
                <svg className=' w-32 h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF156D" stroke="#FF156D" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF156D" stroke="#FF156D" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF156D" stroke="#FF156D"  r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
            </div>
        )}
        
        {result && 
            <div className='my-20 mx-20 text-center bg-gradient-to-br from-blue-500 to-purple-500 px-20 py-10 rounded-md'>
                <h1 className=' text-3xl pb-5 font-semibold'>Generated Prompt</h1>
                <p>{result}</p>
            </div>
        }
    </div>
  );
}

export default Page;
