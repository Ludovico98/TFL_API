function fetchData() {
  const startLocation = document.getElementById('start-location').value;
  const destination = "111 Buckingham Palace Road London, SW1W 0DT";
  const apiKey = process.env.TFL_API_KEY;
  const sortingMethod = document.getElementById('sorting-method').value;
  const selectedDateTime = document.getElementById('selected-date').value;

  let endpoint = `https://api.tfl.gov.uk/Journey/JourneyResults/${encodeURIComponent(startLocation)}/to/${encodeURIComponent(destination)}?apiKey=${apiKey}`;

  // Add sorting method parameter
  if (sortingMethod === 'fastest') {
    endpoint += '&sort=fastest';
  } else if (sortingMethod === 'least-changes') {
    endpoint += '&sort=leastChanges';
  }

  // Add selected date and time parameter
  if (selectedDateTime) {
    const formattedDateTime = new Date(selectedDateTime).toISOString();
    endpoint += `&dateTime=${encodeURIComponent(formattedDateTime)}`;
  }

  // Fetch journey results
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Display the retrieved data in the browser console
      displayData(data); // Pass the data to the displayData function
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function fetchWalkingData() {
  const startLocation = document.getElementById('start-location').value;
  const destination = "111 Buckingham Palace Road London, SW1W 0DT";
  const apiKey = process.env.TFL_API_KEY;
  const selectedDateTime = document.getElementById('selected-date').value;

  let endpoint = `https://api.tfl.gov.uk/Journey/JourneyResults/${encodeURIComponent(startLocation)}/to/${encodeURIComponent(destination)}?mode=walking&apiKey=${apiKey}`;

  // Add selected date and time parameter
  if (selectedDateTime) {
    const formattedDateTime = new Date(selectedDateTime).toISOString();
    endpoint += `&dateTime=${encodeURIComponent(formattedDateTime)}`;
  }

  // Fetch walking data
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Display the retrieved data in the browser console
      displayData(data); // Pass the data to the displayData function
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function fetchTrainData() {
  const startLocation = document.getElementById('start-location').value;
  const destination = "111 Buckingham Palace Road London, SW1W 0DT";
  const apiKey = process.env.TFL_API_KEY;
  const selectedDateTime = document.getElementById('selected-date').value;

  let endpoint = `https://api.tfl.gov.uk/Journey/JourneyResults/${encodeURIComponent(startLocation)}/to/${encodeURIComponent(destination)}?mode=train&apiKey=${apiKey}`;

  // Add selected date and time parameter
  if (selectedDateTime) {
    const formattedDateTime = new Date(selectedDateTime).toISOString();
    endpoint += `&dateTime=${encodeURIComponent(formattedDateTime)}`;
  }

  // Fetch train data
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Display the retrieved data in the browser console
      displayData(data); // Pass the data to the displayData function
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function fetchBusData() {
  const startLocation = document.getElementById('start-location').value;
  const destination = "111 Buckingham Palace Road London, SW1W 0DT";
  const apiKey = process.env.TFL_API_KEY;
  const selectedDateTime = document.getElementById('selected-date').value;

  let endpoint = `https://api.tfl.gov.uk/Journey/JourneyResults/${encodeURIComponent(startLocation)}/to/${encodeURIComponent(destination)}?mode=bus&apiKey=${apiKey}`;

  // Add selected date and time parameter
  if (selectedDateTime) {
    const formattedDateTime = new Date(selectedDateTime).toISOString();
    endpoint += `&dateTime=${encodeURIComponent(formattedDateTime)}`;
  }

  // Fetch bus data
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Display the retrieved data in the browser console
      displayData(data); // Pass the data to the displayData function
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function fetchUndergroundData() {
  const startLocation = document.getElementById('start-location').value;
  const destination = "111 Buckingham Palace Road London, SW1W 0DT";
  const apiKey = process.env.TFL_API_KEY;
  const selectedDateTime = document.getElementById('selected-date').value;

  let endpoint = `https://api.tfl.gov.uk/Journey/JourneyResults/${encodeURIComponent(startLocation)}/to/${encodeURIComponent(destination)}?mode=tube&apiKey=${apiKey}`;

  // Add selected date and time parameter
  if (selectedDateTime) {
    const formattedDateTime = new Date(selectedDateTime).toISOString();
    endpoint += `&dateTime=${encodeURIComponent(formattedDateTime)}`;
  }

  // Fetch underground data
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Display the retrieved data in the browser console
      displayData(data); // Pass the data to the displayData function
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function fetchBikeData() {
  const startLocation = document.getElementById('start-location').value;
  const destination = "111 Buckingham Palace Road London, SW1W 0DT";
  const apiKey = process.env.TFL_API_KEY;
  const selectedDateTime = document.getElementById('selected-date').value;

  let endpoint = `https://api.tfl.gov.uk/Journey/JourneyResults/${encodeURIComponent(startLocation)}/to/${encodeURIComponent(destination)}?mode=bike&apiKey=${apiKey}`;

  // Add selected date and time parameter
  if (selectedDateTime) {
    const formattedDateTime = new Date(selectedDateTime).toISOString();
    endpoint += `&dateTime=${encodeURIComponent(formattedDateTime)}`;
  }

  // Fetch bike data
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Display the retrieved data in the browser console
      displayData(data); // Pass the data to the displayData function
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Display data function remains the same as before
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