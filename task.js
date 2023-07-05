// function calculateSum(numbers, callback) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     callback(sum);
//   }
  
//   // Define the callback function
//   function printSum(result) {
//     console.log("The sum is:", result);
//   }
  
//   // Create an array of the first 4 natural numbers
//   const numbers = [1, 2, 3, 4];
//   calculateSum(numbers, printSum)
  
  // // Call the calculateSum function and pass the numbers array and the callback function

  // function getSumPromise(numbers) {
  //   return new Promise((resolve, reject) => {
  //     if (numbers.length === 0) {
  //       reject('No numbers provided');
  //     } else {
  //       const sum = numbers.reduce((a, b) => a + b);
  //       resolve(sum);
  //     }
  //   });
  // }
  
  // const numbers = [1, 2, 3, 4];
  // getSumPromise(numbers)
  //   .then(sum => {
  //     console.log('Sum:', sum);
  //   })
  //   .catch(error => {
  //     console.log('Error:', error);
  //   });
  async function getSumAsync(numbers) {
    if (numbers.length === 0) {
      throw new Error('No numbers provided');
    } else {
      return numbers.reduce((a, b) => a + b);
    }
  }
  
  const numbers = [1, 2, 3, 4];
  (async () => {
    try {
      const sum = await getSumAsync(numbers);
      console.log('Sum:', sum);
    } catch (error) {
      console.log('Error:', error.message);
    }
  })();
  