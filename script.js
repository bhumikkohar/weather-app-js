let apiKey = "14c48e6872d8d40a027db3c265c5788a";

let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    let city = document.getElementById("cityInput").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        .then(response => response.json())

        .then(data => {

            if (data.cod !== 200) {
                document.getElementById("weatherResult").innerHTML = "City not found";
                return;
            }

            let cityName = data.name;
            let temp = data.main.temp;
            let weather = data.weather[0].main;
            let icon = data.weather[0].icon;

            document.getElementById("weatherResult").innerHTML = `
            <div class="city">${cityName}</div>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
            <div class="temp">${temp}°C</div>
            <div>${weather}</div>`;

        });

});

document.getElementById("cityInput").addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        searchBtn.click();
    }

});