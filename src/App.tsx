import './App.css'
import platform from 'platform'
import { useState, useEffect } from 'react'

function App() {
  const [ip, setIp] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIp(data.ip));
  }, []);

  return (
    <main className='flex flex-col'>
      <div className='console-font bg-[#242424] w-fit m-10 rounded-xl'>
        <div className='flex flex-row justify-center'>
          <h1>/usr/bin/webfetch</h1>
        </div>
        <div className='bg-[#181818] rounded-b-xl flex flex-col p-10'>
          <h1><span className='text-blue-400'>$ [~]&gt;</span> webfetch</h1>
          <div className='flex flex-row flex-wrap'>
            <p className='text-lime-500'>
              <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/^\\/^\\\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}               {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0_|__|\u00A0\u00A0O|\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}                      {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\\/\u00A0\u00A0\u00A0\u00A0\u00A0/~\u00A0\u00A0\u00A0\u00A0\u00A0\\_/\u00A0\\\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}                        {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\\____|__________/\u00A0\u00A0\\\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}                                                                           {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\\_______\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\\\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}                              {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`\\\u00A0\u00A0\u00A0\u00A0\u00A0\\\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\\\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}    {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\\\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"} {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\\\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"} {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\\\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"} {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\\\u00A0\\\u00A0\u00A0\u00A0\u00A0"}     {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\\\u00A0\u00A0\\\u00A0\u00A0\u00A0"}     {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0_----_\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\\\u00A0\u00A0\u00A0\\\u00A0"}                                   {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0_-~\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0~-_\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0|"}                                     {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0(\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0(\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0_-~\u00A0\u00A0\u00A0\u00A0_--_\u00A0\u00A0\u00A0\u00A0~-_\u00A0\u00A0\u00A0\u00A0\u00A0_/\u00A0\u00A0\u00A0|\u00A0"}                                                              {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\\\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0~-____-~\u00A0\u00A0\u00A0\u00A0_-~\u00A0\u00A0\u00A0\u00A0~-_\u00A0\u00A0\u00A0\u00A0~-_-~\u00A0\u00A0\u00A0\u00A0/\u00A0"}                                                                                           {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0~-_\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0_-~\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0~-_\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0_-~\u00A0\u00A0"}                                               {"\u00A0\u00A0\u00A0\u00A0"} <br />
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0~--______-~\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0~-___-~\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}                                                                             {"\u00A0\u00A0\u00A0\u00A0"} <br />
            </p>
            <p className='text-white'>
              <br />
              <span className='text-rose-600'>root</span>@<span className='text-rose-600'>{ip}</span>                                          <br /> 
              <span>{"-".repeat(`root@${ip}`.length)}</span>                                                                                                                    <br />
              <span className='text-rose-600'>OS: </span>{platform.os?.toString()}                                                             <br />
              <span className='text-rose-600'>Browser: </span>{platform.name}                                                                  <br />
              <span className='text-rose-600'>Version: </span>{platform.version}                                                               <br />
              <span className='text-rose-600'>Resolution: </span>{window.screen.width}x{window.screen.height}                                  <br />
              <span className='text-rose-600'>Language: </span>{navigator.language}                                                            <br />
              <span className='text-rose-600'>Timezone: </span>{Intl.DateTimeFormat().resolvedOptions().timeZone}                              <br /> 
              <span className='text-rose-600'>Touch Screen: </span>{('ontouchstart' in window || navigator.maxTouchPoints > 0) ? 'Yes' : 'No'} <br />
              <span className='text-rose-600'>IP Address: </span>{ip}                                                                          <br />
              <span className='text-rose-600'>Kawaii: </span><span className='text-pink-400'>Yes :3</span>
            </p>
          </div>
          
        </div>
      </div>
      <div className='flex flex-col m-6 poppins-font gap-4'>
        <h1 className='text-3xl underline'>Infrequently Asked Questions</h1>

        <h1 className='text-2xl'>What is this?</h1>
        <h2 className='text-base'>- webfetch is a neofetch clone that was made to run on most modern browsers.</h2>
        
        <h1 className='text-2xl'>Why doesn't it display all my system details?</h1>
        <h2 className='text-base'>- Most browsers restrict websites from accessing sensitive system information for security purposes.</h2>

        <h1 className='text-2xl'>Is it customizable?</h1>
        <h2 className='text-base'>- Not at this moment however I may decide to implement it.</h2>
      </div>
      <div className='flex flex-col console-font mt-10 items-center'>
        <h1>Made with ❤️ by Seth</h1>
        <h1>No Rights Reserved</h1>
      </div>
    </main>
  )
}

export default App
