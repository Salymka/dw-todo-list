async function getMockDataJsonPlaceHolder() {
  try {
    // Fetch data from the API endpoint
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return the fetched data
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

export { getMockDataJsonPlaceHolder };
