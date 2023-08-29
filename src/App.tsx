import React from 'react';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    setResult(result.concat(e.currentTarget.name));
  }

  function clear() {
    setResult('');
  }

  function handleDelete() {
    setResult(result.slice(0, -1));
  }

  function calculate() {
    setResult(eval(result));
  }

  return (
    <div className='flex justify-center items-center bg-black min-h-screen'>
      <div className='max-w-screen-sm mx-auto h-96'>
        <form className='pl-16 bg-transparent'>
          <input
            type='text'
            placeholder='0'
            value={result}
            className='mb-10 px-4 text-right text-xl text-white bg-transparent'
          />
        </form>
        <div className='grid grid-cols-4 gap-2 text-xl'>
          <button
            onClick={clear}
            className='bg-gray-400 text-black rounded-full'
          >
            AC
          </button>
          <button
            onClick={handleDelete}
            name='+/-'
            className='bg-gray-400 text-black rounded-full'
          >
            +/-
          </button>
          <button
            onClick={handleClick}
            name='%'
            className='bg-gray-400 text-black rounded-full'
          >
            %
          </button>
          <button
            name='/'
            onClick={handleClick}
            className='bg-orange-400 text-white text-xl rounded-full'
          >
            &divide;
          </button>
          <button
            name='7'
            onClick={handleClick}
            className='bg-gray-700 text-white rounded-full'
          >
            7
          </button>
          <button
            name='8'
            onClick={handleClick}
            className='bg-gray-700 text-white rounded-full'
          >
            8
          </button>
          <button
            name='9'
            onClick={handleClick}
            className='bg-gray-700 text-white rounded-full'
          >
            9
          </button>
          <button
            name='*'
            onClick={handleClick}
            className='bg-orange-400 text-white text-xl rounded-full'
          >
            &times;
          </button>
          <button
            name='4'
            onClick={handleClick}
            className='bg-gray-700 text-white rounded-full'
          >
            4
          </button>
          <button
            name='5'
            onClick={handleClick}
            className='bg-gray-700 text-white rounded-full'
          >
            5
          </button>
          <button
            name='6'
            onClick={handleClick}
            className='bg-gray-700 text-white rounded-full'
          >
            6
          </button>
          <button
            name='-'
            onClick={handleClick}
            className='bg-orange-400 text-white text-xl rounded-full'
          >
            -
          </button>
          <button
            name='1'
            onClick={handleClick}
            className='bg-gray-700 text-white rounded-full'
          >
            1
          </button>
          <button
            name='2'
            onClick={handleClick}
            className='bg-gray-700 text-white rounded-full'
          >
            2
          </button>
          <button
            name='3'
            onClick={handleClick}
            className='bg-gray-700 text-white rounded-full'
          >
            3
          </button>
          <button
            name='+'
            onClick={handleClick}
            className='bg-orange-400 text-white text-xl rounded-full'
          >
            +
          </button>

          <button
            name='0'
            onClick={handleClick}
            className='w-full col-span-2 pl-6 bg-gray-700 text-white text-left rounded-full'
          >
            0
          </button>
          <button
            name='.'
            onClick={handleClick}
            className='bg-gray-700 text-white rounded-full'
          >
            .
          </button>
          <button
            onClick={calculate}
            className='bg-orange-400 text-white text-xl rounded-full'
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
