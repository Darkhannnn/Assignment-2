document.addEventListener("DOMContentLoaded", () => {
    const weatherForm = document.getElementById("weatherForm");
    const cityInput = document.getElementById("cityInput");
    const weatherResult = document.getElementById("weatherResult");

    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const coordinates = document.getElementById("coordinates");
    const feelsLike = document.getElementById("feelsLike");
    const humidity = document.getElementById("humidity");
    const pressure = document.getElementById("pressure");
    const windSpeed = document.getElementById("windSpeed");
    const country = document.getElementById("country");
    const rainVolume = document.getElementById("rainVolume");    
    const weatherIcon = document.getElementById("weatherIcon");

    const airQuality = document.getElementById("aqi");
    const airCategory = document.getElementById("category")
    const primaryPollutant = document.getElementById("primaryPollutant");


    const autoFillButton = document.getElementById('autoFillButton');
    
    const ipApiUrl = 'https://ipapi.co/json/';
    
    autoFillButton.addEventListener('click', async () => {
        try {
            const response = await fetch(ipApiUrl);
            if (!response.ok) {
                throw new Error('Unable to fetch location data.');
            }
    
            const data = await response.json();
            const city = data.city;
    
            if (city) {
                cityInput.value = city;
            } else {
                alert('Could not determine your city.');
            }
        } catch (error) {
            console.error('Error fetching location data:', error);
            alert('Failed to fetch your location. Please try again.');
        }
    });


    weatherForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const city = cityInput.value.trim();
        if (!city) return alert("Please enter a city name!");

        try {
            const response = await fetch(`/api/weather?city=${city}`);

            const data = await response.json();

            cityName.textContent = city;
            temperature.textContent = data.temperature;
            description.textContent = data.description;
            coordinates.textContent = `Lat: ${data.coordinates.lat}, Lon: ${data.coordinates.lon}`;
            feelsLike.textContent = data.feels_like;
            humidity.textContent = data.humidity;
            pressure.textContent = data.pressure;
            windSpeed.textContent = data.wind_speed;
            country.textContent = data.country;
            rainVolume.textContent = data.rainVolume;

            airQuality.textContent = data.airQuality;
            airCategory.textContent = data.airCategory;
            primaryPollutant.textContent = data.dominantPollutant;

            weatherIcon.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;            
            weatherIcon.classList.remove("hidden");
            weatherResult.classList.remove("hidden");
            
            const location = { lat: data.coordinates.lat, lng: data.coordinates.lon };

            const map = new google.maps.Map(document.getElementById("map"), {
                center: location,
                zoom: 12,
            });
        
        } catch (error) {
            alert("Error fetching weather data. Please try again!");
            alert(error)
            alert(data)
            console.error(error);
        }
    });
});
