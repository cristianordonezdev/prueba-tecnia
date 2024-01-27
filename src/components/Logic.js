import React, { useEffect } from 'react';

const getFibonacci = (n) => {
  let first_iteration = 0; let secondary_iteration = 1; let result = 0;
  for (let i = 0; i < n - 1; i++) {
    result = first_iteration + secondary_iteration;  
    first_iteration = secondary_iteration;
    secondary_iteration = result 
  }
  return result;
}

const getTriangularNumber = (n) => {
  return (n * (n + 1)) / 2
}

const getPrimeNumber = (n) => {
  const primes = []
  
  for (let dividend = 2; primes.length < n; dividend++) {
    let counter_divisiors = 0;
    for (let divisior = 0; divisior <= dividend ; divisior++) {
      if (dividend % divisior === 0) counter_divisiors += 1
    }
    if (counter_divisiors === 2) primes.push(dividend);
  }
  return primes[primes.length - 1];
}

const getSerie = (n) => {
  return (-3 * getPrimeNumber(n)) - (getFibonacci(n)) + (5 * getTriangularNumber(n + 1))
}

function MiComponente() {
  useEffect(() => {
    console.log('Numero=',6)

    console.log('fibonacci = ', getFibonacci(6))
    console.log('Number triangular = ', getTriangularNumber(6 + 1))
    console.log('Numeros primos = ', getPrimeNumber(6))
    console.log('serie = ', getSerie(6))
  }, []);
  
  return <h1>Hey aqui va mi logica! </h1>;
}

export default MiComponente;