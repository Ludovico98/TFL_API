# TFL Journey API

This project provides an API for retrieving journey information using the Transport for London (TFL) API. It allows users to find journey information between two locations, including start location, destination, date and time, and travel mode.

## How to Test and lauch

To test the API, follow these steps:

1. Clone the repository and navigate to the project directory.
2. Open the `index.html` file in a web browser.
3. Enter the start location, destination, date and time, and select the travel mode.
4. Click the "Fetch Data" button to retrieve the journey information.
5. The journey information will be displayed below the input fields.


## API Documentation

The API uses the TFL API to retrieve journey information. It makes a GET request to the `/Journey` endpoint with the following parameters:

- `startLocation`: The start location for the journey 
- `destination`: The destination for the journey 
- `dateTime`: The date and time for the journey 
- `apiKey`: The API key for accessing the TFL service 

The API returns a JSON object with the journey information, including the result of the journey.

## Example Usage

GET /journey?startLocation=London&destination=Manchester&dateTime=2023-06-05T12:00:00&apiKey=YOUR_API_KEY 