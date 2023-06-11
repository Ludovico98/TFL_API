function fetchData() {
  const startLocation = document.getElementById('start-location').value;
  const destination = "111 Buckingham Palace Road London, SW1W 0DT";
  const apiKey = "TFL_API_KEY";
  const sortingMethod = document.getElementById('sorting-method').value;

  let endpoint = `https://api.tfl.gov.uk/Journey/JourneyResults/${encodeURIComponent(startLocation)}/to/${encodeURIComponent(destination)}?apiKey=${apiKey}`;

  // Add sorting method parameter
  if (sortingMethod === 'fastest') {
    endpoint += '&sort=fastest';
  } else if (sortingMethod === 'least-changes') {
    endpoint += '&sort=leastChanges';
  }

  // Fetch journey results
  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Display the retrieved data in the browser console
      displayData(data); // Pass the data to the displayData function
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function displayData(data) {
  const resultContainer = document.getElementById('result-container');
  resultContainer.textContent = JSON.stringify(data, null, 2);

  const fetchButton = document.getElementById('fetch-button');

  const downloadButton = document.createElement('button');
  downloadButton.textContent = 'Download JSON';
  downloadButton.addEventListener('click', () => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Open the JSON file in a new window
    window.open(url, '_blank');
    URL.revokeObjectURL(url);
  });

  fetchButton.parentNode.insertBefore(downloadButton, fetchButton.nextSibling);

  const clearButton = document.createElement('button');
  clearButton.textContent = 'Clear Data';
  clearButton.addEventListener('click', () => {
    resultContainer.textContent = '';
    fetchButton.parentNode.removeChild(downloadButton);
    fetchButton.parentNode.removeChild(clearButton);
  });

  fetchButton.parentNode.insertBefore(clearButton, downloadButton.nextSibling);
}

// Add event listener to the fetch button
const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', fetchData);
