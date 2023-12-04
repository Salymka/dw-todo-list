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

async function getMockDataJsonPlaceHolderById(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

// All next func's is only give resource will not be really updated on the server but it will be faked as if

async function createMockDataJsonPlaceHolder(task) {
  try {
    const response = fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

async function updateMockDataJsonPlaceHolder(task) {
  try {
    const response = fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

async function deleteMockDataJsonPlaceHolder(task) {
  try {
    const response = fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

export {
  getMockDataJsonPlaceHolder,
  getMockDataJsonPlaceHolderById,
  createMockDataJsonPlaceHolder,
  updateMockDataJsonPlaceHolder,
  deleteMockDataJsonPlaceHolder,
};
