const names = document.querySelector('.weather-top__name'),
    numbersCelsius = document.querySelector('.number'),
    clearText = document.querySelector('.weather-top__text'),
    timeTimelineOne = document.querySelector('#one'),
    timeTimelineTwo = document.querySelector('#two'),
    timeTimelineThree = document.querySelector('#three'),
    timeTimelineFour= document.querySelector('#four'),
    timeTimelineFive = document.querySelector('#five'),
    timelineNumberOne = document.querySelector('#oneNum'),
    timelineNumberTwo = document.querySelector('#twoNum'),
    timelineNumberThree = document.querySelector('#threeNum'),
    timelineNumberFour = document.querySelector('#fourNum'),
    timelineNumberFive = document.querySelector('#fiveNum'),
    imgIcons = document.querySelectorAll('.timeline-vector'),
    leftUpTime = document.querySelector('.left-time'),
    rightDownTime = document.querySelector('.right-time'),
    realFeel = document.querySelector('.realfeel-number'),
    humidityNum = document.querySelector('.procent-number'),
    pressureNum = document.querySelector('.pressure-number');


    function timeResult(time){
        const result = new Date(time * 1000);
        let timeOne = result.getHours();
        let timeTwo = result.getMinutes();
        timeOne = timeOne < 10 ? "0" + timeOne : timeOne;
        timeTwo = timeTwo < 10 ? "0" + timeTwo : timeTwo; 
        const timeResult = `${timeOne}:${timeTwo}`;
        return timeResult;
    }
    

async function getWeather(){

    try{
        
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=46.975033&lon=31.994583&appid=7815ff6095b1dc4ef1f156d8567affed')
        const data = await response.json();
        
        const temperature = data.main.temp;
        const humidityCelc = data.main.humidity;
        const weather = data.weather[0].description;
        const cityName = data.name;
        const windSpeed  = data.wind.speed;
        const timestamp = data.dt;
        const upTime = data.sys.sunrise;
        const downTime = data.sys.sunset;
        const timezone = data.timezone;
        const pressureHpa = data.main.pressure;
        console.log(data);


        
        const result = Math.round(temperature - 273.15);





        const humidityResult = `${humidityCelc}${'%'}`,
        pressureResult = `${pressureHpa}${'hPa'}`;



        clearText.textContent = `${weather}`;
        numbersCelsius.textContent = `${result}`;
        names.textContent = `${cityName}`;
        timeTimelineOne.textContent = `${timestamp}`;
        leftUpTime.textContent = `${timeResult(upTime)}`;
        rightDownTime.textContent = `${timeResult(downTime)}`;
        realFeel.textContent = `${result}`;
        humidityNum.textContent = `${humidityResult}`;
        pressureNum.textContent = `${pressureResult}`;

        return {temperature, humidityCelc, weather, cityName, windSpeed, timestamp, upTime, downTime, timezone, pressureNum};
    } catch(err){
        console.log('Error');
    }
}

getWeather();



async function getDay(){
    try{
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=46.9765&lon=31.9943&appid=7815ff6095b1dc4ef1f156d8567affed&units=metric')
        const data = await response.json();
        console.log(data.list[0].weather);

        const timeOne = data.list[0].dt;
        const tempCelcOne = data.list[0].main.temp;
        const timeTwo = data.list[1].dt;
        const tempCelcTwo = data.list[1].main.temp;
        const timeThree = data.list[2].dt;
        const tempCelcThree = data.list[2].main.temp;
        const timeFour = data.list[3].dt;
        const tempCelcFour = data.list[3].main.temp;
        const timeFive = data.list[4].dt;
        const tempCelcFive = data.list[4].main.temp;

        timeTimelineOne.textContent = `${timeResult(timeOne)}`;
        timeTimelineTwo.textContent = `${timeResult(timeTwo)}`;
        timeTimelineThree.textContent = `${timeResult(timeThree)}`;
        timeTimelineFour.textContent = `${timeResult(timeFour)}`;
        timeTimelineFive.textContent = `${timeResult(timeFive)}`;
        timelineNumberOne.textContent = `${Math.round(tempCelcOne)}`;
        timelineNumberTwo.textContent = `${Math.round(tempCelcTwo)}`;
        timelineNumberThree.textContent = `${Math.round(tempCelcThree)}`;
        timelineNumberFour.textContent = `${Math.round(tempCelcFour)}`;
        timelineNumberFive.textContent = `${Math.round(tempCelcFive)}`;

        return {timeOne, timeTwo, timeThree, timeFour, timeFive, tempCelcOne, tempCelcTwo, tempCelcThree, tempCelcFour, tempCelcFive};
    } catch(err){
        console.log('DayError');
    }
}
getDay();

