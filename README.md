# Weather App Documentation

## Overview

This is a web application that provides weather and air quality information for a given city. The app uses multiple APIs to fetch data, including weather details, air quality index, and the user's current location via IP. The user can either enter a city manually or click a button to use their current city based on their IP address.

---

## Features

- **Weather Information**: Displays current temperature, weather description, humidity, wind speed, pressure, and more.
- **Air Quality Index**: Shows the Air Quality Index (AQI) along with the primary pollutant and its category.
- **Map Integration**: Displays a map of the entered city using Google Maps API.
- **Automatic Location Detection**: Automatically fills the city input field with the user's current city based on IP geolocation.

---

## Setup Instructions

### Prerequisites

Before running the app locally, make sure you have the following installed:

- A modern web browser (Chrome, Firefox, etc.)
- A code editor (VSCode, Sublime Text, etc.)
- Node.js and npm (for running development servers or additional server-side functionality, if applicable)

---

## API Usage

### Weather API
API URL: /api/weather?city={cityName}
Request Type: GET
#### Parameters:
- city: The name of the city for which you want to fetch weather data.
#### Response:
- temperature: Current temperature in Celsius.
- description: A brief description of the weather (e.g., "Clear sky").
- coordinates: The latitude and longitude of the city.
- feels_like: The "feels like" temperature in Celsius.
- humidity: The current humidity in percentage.
- pressure: The atmospheric pressure in hPa.
- wind_speed: The wind speed in meters per second.
- country: The country where the city is located.
- rainVolume: The volume of rain in mm (if applicable).

### Air Quality API
API URL: /api/air-quality?lat={latitude}&lon={longitude}
Request Type: GET
#### Parameters:
- lat: Latitude of the city.
- lon: Longitude of the city.
#### Response:
- aqi: The Air Quality Index (AQI) for the given location.
- category: The category of the AQI (e.g., "Good", "Moderate").
- primaryPollutant: The primary pollutant detected in the air.

### IP Geolocation API
API URL: https://ipapi.co/json/
Request Type: GET
#### Response:
- city: The name of the city based on the user's IP.

---

## Student
Smagulov Darkhan SE-2308
