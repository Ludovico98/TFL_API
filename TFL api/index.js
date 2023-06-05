function fetchData() {
    const startLocation = document.getElementById('start-location').value;
    const destination = "111 Buckingham Palace Road London, SW1W 0DT";
    const walkingSpeed = "Slow";
    const apiKey = "92f8f284495c4629a9419d6df2efb899";
    
    const endpoint = `https://api.tfl.gov.uk/Journey/JourneyResults/${startLocation}/to/${encodeURIComponent(destination)}?walkingSpeed=${walkingSpeed}&app_key=${apiKey}`;
  
    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
      .then(response => {
        console.log(response.status);
        return response.text();
      })
      .then(data => {
        console.log(data); // Display the retrieved data in the browser console
        displayData(data); // Pass the data to the displayData function
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


