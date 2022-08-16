var crntDate = document.querySelector("#crntDate");
crntDate.textContent = moment().format("LL");

var futdate1 = document.querySelector("#futdate1");
futdate1.textContent = moment().add(1, "days").format("l");
var futdate2 = document.querySelector("#futdate2");
futdate2.textContent = moment().add(2, "days").format("l");
var futdate3 = document.querySelector("#futdate3");
futdate3.textContent = moment().add(3, "days").format("l");
var futdate4 = document.querySelector("#futdate4");
futdate4.textContent = moment().add(4, "days").format("l");
var futdate5 = document.querySelector("#futdate5");
futdate5.textContent = moment().add(5, "days").format("l");

var futimg1 = document.querySelector("#futimg1");
var futimg2 = document.querySelector("#futimg2");
var futimg3 = document.querySelector("#futimg3");
var futimg4 = document.querySelector("#futimg4");
var futimg5 = document.querySelector("#futimg5");

var futtemp1 = document.querySelector("#futtemp1");
var futtemp2 = document.querySelector("#futtemp2");
var futtemp3 = document.querySelector("#futtemp3");
var futtemp4 = document.querySelector("#futtemp4");
var futtemp5 = document.querySelector("#futtemp5");

var futspeed1 = document.querySelector("#futspeed1");
var futspeed2 = document.querySelector("#futspeed2");
var futspeed3 = document.querySelector("#futspeed3");
var futspeed4 = document.querySelector("#futspeed4");
var futspeed5 = document.querySelector("#futspeed5");

var futhumid1 = document.querySelector("#futhumid1");
var futhumid2 = document.querySelector("#futhumid2");
var futhumid3 = document.querySelector("#futhumid3");
var futhumid4 = document.querySelector("#futhumid4");
var futhumid5 = document.querySelector("#futhumid5");


// const getCity = async () => { 
//     const API_KEY = "";
//     const lat = 77; 
//     const lon = 1;
//     const response = await fetch( 
//         `https?`,
//         {
//             method: "GET",
//         }
//     );
// }


const get5DayForecast = async () => {
  // 1. Sign up on the API website and get an API key
  // 2. Figure out how to find the lattitude and longitude of a city
  const API_KEY = "5ff4279fabdf2be78d6098794c0e78cf";
  const lat = 51.5073;
  const lon = -0.1277;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`,
    {
      method: "GET",
    }
  );

  const data = await response.json();

  // temperature of day 1: data.list[0].main.temp
  futtemp1.innerHTML = data.list[0].main.temp + "F";
  futspeed1.innerHTML = data.list[0].wind.speed;
  futhumid1.innerHTML = data.list[0].main.humidity;
};

get5DayForecast();
