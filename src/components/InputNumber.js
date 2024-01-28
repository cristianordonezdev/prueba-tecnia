import React from 'react';
import getSerie from './Logic'

function InputNumber({number, setNumber, setResult}) {

  const changeInput = (event) => {
    setNumber(event.target.value);
  }

  const handleClick = () => {
    setResult(getSerie(parseInt(number)));
  }

  return (
    <div class="bg-white w-11/12 md:w-8/12 xl:w-1/3 shadow-md rounded-lg p-5 flex flex-col mb-5">
      <h3 class="text-3xl font-bold">Serie</h3>
      <p class="font-bold text-slate-400 mb-5">Serie(n) = -3primo(n) - fibonacci(n) + 5triangular(n + 1)</p>
      <h5 class="w-full mb-2">Número</h5>
      <input onChange={changeInput} value={number} type="number" placeholder="Número" class="border-2 border-gray-400 rounded-lg p-3 w-full mb-5 h-16"/>
      <button disabled={!number || parseInt(number) === 0 || number.length === 0} onClick={handleClick} class="bg-blue-500 p-2 text-white rounded-lg font-bold h-12 hover:bg-blue-400 ease-out duration-300">Obtener serie</button>
    </div>
  )
}

export default InputNumber;