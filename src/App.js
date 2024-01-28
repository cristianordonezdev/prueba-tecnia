import InputNumber from './components/InputNumber'
import Result from './components/Result';
import React, { useState } from 'react';

function App() {

  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  return (
    <div className="App" class="h-full min-h-screen bg-gray-200 flex flex-col items-center py-4 lg:py-10">
      <InputNumber setNumber={setNumber} number={number} setResult={setResult}></InputNumber>

      {result && (
        <Result result={result}></Result>
      )}
    </div>
  );
}

export default App;
