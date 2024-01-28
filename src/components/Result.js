import React from 'react';

function Result({result}) {

  return (
    <div class="bg-white w-11/12 md:w-8/12 xl:w-1/3 shadow-md rounded-lg p-5 flex flex-col">
      <h3 class="text-3xl font-bold mb-3">Resultado</h3>
      <p class="whitespace-pre-line">{result.all_text}</p>
      <p class="whitespace-pre-line mb-4">{result.serie_text}</p>
      <p>El resultado final es <span class="text-white bg-green-500 p-1 rounded-md font-bold">{result.result}</span> </p>
    </div>
  )
}

export default Result;