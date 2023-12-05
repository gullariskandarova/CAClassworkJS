let curCity = "Ganja";
let BASE_URL = `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`;
const dataW = document.querySelector(".dataWeather");

function getWeather() {
  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dataW.innerHTML = `
        <p>${data.location.name}, ${data.location.country}</p>
        <img src="${data.current.condition.icon}" alt="">
        <p>${data.current.condition.text}</p>
        <p>${data.current.temp_c}</p>
        <p>${data.current.temp_f}</p>
        <p>${data.current.last_updated_epoch}</p>
    `;
    });
}
getWeather();

// Form.submit.addevent
