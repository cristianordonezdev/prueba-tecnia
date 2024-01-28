
const getFibonacci = (n) => {
  let first_iteration = 0; let secondary_iteration = 1; let result = 0; const text = [1]
  for (let i = 0; i < n - 1; i++) {
    result = first_iteration + secondary_iteration;  
    first_iteration = secondary_iteration;
    secondary_iteration = result;
    text.push(result)
  }
  
  // if (n === 1) {
  //   text.push(1);
  //   result = 1;
  // }
  
  return {value: result, text: `${text.join(', ')} = ${result}`};
}

const getTriangularNumber = (n) => {
  return {value: (n * (n + 1)) / 2, text: `${n} x (${n} + 1}) / 2 = ${(n * (n + 1)) / 2}`}
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
  return {value: primes[primes.length - 1], text: `${primes.join(', ')} = ${primes[primes.length - 1]}`};
}

const getSerie = (n) => {
  const prime_number = getPrimeNumber(n)
  const fibonacci = getFibonacci(n)
  const triangular_number = getTriangularNumber(n + 1)
  const result_serie = (-3 * prime_number.value) - (fibonacci.value) + (5 * triangular_number.value);

  return {result: result_serie, 
          all_text: `Números primos: ${prime_number.text}\n\nNúmero triangular: ${triangular_number.text}\n\nFibonacci: ${fibonacci.text}\n\n`,
          serie_text: `Serie(${n}) = (-3 * ${prime_number.value}) - ${fibonacci.value} + (5 * ${triangular_number.value}) = ${result_serie}`
        }
}
export default getSerie;