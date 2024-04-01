{// Example asynchronous function
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000); // Simulating asynchronous operation with a delay
  });
}

// Using async/await to consume the asynchronous function
async function fetchDataExample() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Calling the async function
fetchDataExample();
}