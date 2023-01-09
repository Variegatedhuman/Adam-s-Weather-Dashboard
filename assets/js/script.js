let weather =  {
     apiKey: "c1997b3305d29a5d4309def698b8fa53",
     fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => {
            this.displayWeather(data)
            this.displayWeather2(data)
            this.displayWeather3(data)
            this.displayWeather4(data)
            this.displayWeather5(data)
            this.displayWeather6(data)
        });
     },
     displayWeather: function(data){
        let {name} = data.city;
        let date1 = data.list[0].dt;
        let format_date1 = new Date(date1*1000).toLocaleString()
        let {icon, description} = data.list[0].weather[0];
        let {temp, humidity} = data.list[0].main;
        let {speed} = data.list[0].wind;
        console.log (name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".date").innerText = "Forecast for today, " + format_date1;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " MPH";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/2000x1100/?" + name + "')";
     },
     displayWeather2: function(data){
        console.log(data)
        let {name} = data.city;
        let date2 = data.list[8].dt;
        let format_date2 = new Date(date2*1000).toLocaleString()
        let {icon, description} = data.list[8].weather[0];
        let {temp, humidity} = data.list[8].main;
        let {speed} = data.list[8].wind;
        console.log (name,icon,description,temp,humidity,speed);
        document.querySelector(".city-2").innerText = "Weather in " + name;
        document.querySelector(".date-2").innerText = "Forecast for " + format_date2;
        document.querySelector(".icon-2").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
        document.querySelector(".description-2").innerText = description;
        document.querySelector(".temp-2").innerText = temp + "°F";
        document.querySelector(".humidity-2").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind-2").innerText = "Wind speed: " + speed + " MPH";
     },
     displayWeather3: function(data){
        let {name} = data.city;
        let date3 = data.list[16].dt;
        let format_date3 = new Date(date3*1000).toLocaleString()
        let {icon, description} = data.list[16].weather[0];
        let {temp, humidity} = data.list[16].main;
        let {speed} = data.list[16].wind;
        console.log (name,icon,description,temp,humidity,speed);
        document.querySelector(".city-3").innerText = "Weather in " + name;
        document.querySelector(".date-3").innerText = "Forecast for " + format_date3;
        document.querySelector(".icon-3").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
        document.querySelector(".description-3").innerText = description;
        document.querySelector(".temp-3").innerText = temp + "°F";
        document.querySelector(".humidity-3").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind-3").innerText = "Wind speed: " + speed + " MPH";
     },
     displayWeather4: function(data){
        let {name} = data.city;
        let date4 = data.list[24].dt;
        let format_date4 = new Date(date4*1000).toLocaleString()
        let {icon, description} = data.list[24].weather[0];
        let {temp, humidity} = data.list[24].main;
        let {speed} = data.list[24].wind;
        console.log (name,icon,description,temp,humidity,speed);
        document.querySelector(".city-4").innerText = "Weather in " + name;
        document.querySelector(".date-4").innerText = "Forecast for " + format_date4;
        document.querySelector(".icon-4").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
        document.querySelector(".description-4").innerText = description;
        document.querySelector(".temp-4").innerText = temp + "°F";
        document.querySelector(".humidity-4").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind-4").innerText = "Wind speed: " + speed + " MPH";
     },
     displayWeather5: function(data){
        let {name} = data.city;
        let date5 = data.list[32].dt;
        let format_date5 = new Date(date5*1000).toLocaleString()
        let {icon, description} = data.list[32].weather[0];
        let {temp, humidity} = data.list[32].main;
        let {speed} = data.list[32].wind;
        console.log (name,icon,description,temp,humidity,speed);
        document.querySelector(".city-5").innerText = "Weather in " + name;
        document.querySelector(".date-5").innerText = "Forecast for " + format_date5;
        document.querySelector(".icon-5").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
        document.querySelector(".description-5").innerText = description;
        document.querySelector(".temp-5").innerText = temp + "°F";
        document.querySelector(".humidity-5").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind-5").innerText = "Wind speed: " + speed + " MPH";
     },
     displayWeather6: function(data){
      let {name} = data.city;
      let date6 = data.list[39].dt;
        let format_date6 = new Date(date6*1000).toLocaleString()
      let {icon, description} = data.list[39].weather[0];
      let {temp, humidity} = data.list[39].main;
      let {speed} = data.list[39].wind;
      console.log (name,icon,description,temp,humidity,speed);
      document.querySelector(".city-6").innerText = "Weather in " + name;
      document.querySelector(".date-6").innerText = "Forecast for " + format_date6;
      document.querySelector(".icon-6").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
      document.querySelector(".description-6").innerText = description;
      document.querySelector(".temp-6").innerText = temp + "°F";
      document.querySelector(".humidity-6").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind-6").innerText = "Wind speed: " + speed + " MPH";
   },
     search: function () {
        this.fetchWeather(document.querySelector(".searchBar").value);
        recentCity();
     }
};

document.querySelector(".searchBtn").addEventListener("click", function () {
    weather.search();
   

})

document.querySelector(".searchBar").addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
        weather.search();
         

    }


})

weather.fetchWeather("Chicago")


function recentCity () {


            let userSearch = document.querySelector(".searchBar").value;

            if (userSearch == "" || userSearch.length == 0 || userSearch == null) {
        
                alert("Please try a different city");
                return
        
            } else {
                let currentCity = {
                    userSearch: userSearch,
                }
                console.log(currentCity);
                let allCities = localStorage.getItem("allCities");
                if (allCities === null) {
                    allCities = [];
                } else {
                    allCities = JSON.parse(allCities);
                }
                if(allCities.indexOf(currentCity) !== -1){
                    return
                }
                allCities.push(currentCity);
                let newCity = JSON.stringify(allCities);
                localStorage.setItem("allCities", newCity);
            }
        
        
            let allCities = localStorage.getItem("allCities");
            allCities = JSON.parse(allCities);
        
            if (allCities !== null) {
        
                for (let i = 0; i < allCities.length; i++) {
        
                    let createLi = document.createElement("button");
                    createLi.textContent = allCities[i].userSearch;
                    let contentEL = document.querySelector(".content")
                    contentEL.appendChild(createLi);;
        
                }
            }


}


// function recentCity () {
//    const recentCitySearch = {
//          recentCitySearch: weather.search,
//    }
//    localStorage.setItem("recentCity", JSON.stringify(recentCity));

//    let recentCities = JSON.parse(localStorage.getItem("recentCity"));
//    if (recentCities !== null) {
//       document.getElementsByClassName(".content").innerHTML = recentCitySearch;
//   } else {
//     return;
//   }
//       let createLi = document.createElement("li");
//       createLi.textContent = recentCitySearch
//       recentCitySearch.push(recentCities)
//       console.log ()

//    let contentEL = document.querySelector(".content")
//       contentEL.appendChild(createLi);
// }

// function rejuvinateRecentCities () {
//       let recentCities = JSON.parse(localStorage.getItem("recentCity"));
//       if (recentCities !== null) {
//          document.getElementsByClassName(".content").innerHTML = recentCitySearch;
//      } else {
//        return;
//      }
//          let createLi = document.createElement("li");
//          createLi.textContent = recentCitySearch
//          recentCitySearch.push(recentCities)
//          console.log (recentCities)
//       }



// let createLi = document.createElement("li")
//             createLi.textContent = allScores[i].userData + " scored " + allScores[i].score + " point(s)";
//             highScore.appendChild(createLi);
               //         let currentScore = {
               //             userData: userData,
               //             score: score,
               //         }
               //         console.log(currentScore);
               //         let allScores = localStorage.getItem("allScores");
               //         if (allScores === null) {
               //             allScores = [];
               //         } else {
               //             allScores = JSON.parse(allScores);
               //         }
               //         allScores.push(currentScore);
               //         let newScore = JSON.stringify(allScores);
               //         localStorage.setItem("allScores", newScore);
               //         openLeaderBoard();
               //     }
               
               
               //     let allScores = localStorage.getItem("allScores");
               //     allScores = JSON.parse(allScores);
               
               //     if (allScores !== null) {
               
               //         for (let i = 0; i < allScores.length; i++) {
               
               //             let createLi = document.createElement("li");
               //             createLi.textContent = allScores[i].userData + " scored " + allScores[i].score + " point(s)";
               //             highScore.appendChild(createLi);



// //   function renderLastScore() {
// //     let lastScore = JSON.parse(localStorage.getItem("userScore"));
// //     if (lastScore !== null) {
// //     document.getElementsByClassName("user-Score").innerHTML = lastScore.user;
// //     document.getElementsByClassName("user-Score").innerHTML = lastScore.currentScore;
// //     } else {
// //       return;
// //     }
// //   }


// startButton.addEventListener("click", startQuiz)
// restartButton.addEventListener("click", function () {
//     window.location.replace("./index.html");

// });

// initialButton.addEventListener("click", function () {


//     let userData = initials.value;

//     if (userData == "" || userData.length == 0 || userData == null) {

//         alert("Please enter initials");
//         return

//     } else {
//         let currentScore = {
//             userData: userData,
//             score: score,
//         }
//         console.log(currentScore);
//         let allScores = localStorage.getItem("allScores");
//         if (allScores === null) {
//             allScores = [];
//         } else {
//             allScores = JSON.parse(allScores);
//         }
//         allScores.push(currentScore);
//         let newScore = JSON.stringify(allScores);
//         localStorage.setItem("allScores", newScore);
//         openLeaderBoard();
//     }


//     let allScores = localStorage.getItem("allScores");
//     allScores = JSON.parse(allScores);

//     if (allScores !== null) {

//         for (let i = 0; i < allScores.length; i++) {

//             let createLi = document.createElement("li");
//             createLi.textContent = allScores[i].userData + " scored " + allScores[i].score + " point(s)";
//             highScore.appendChild(createLi);


// function saveUserScore() {
//     let userScore = {
//       user: initials.value,
//       currentScore: score.value,
//     };
//     localStorage.setItem("userScore", JSON.stringify(userScore));
//   }

//   function renderLastScore() {
//     let lastScore = JSON.parse(localStorage.getItem("userScore"));
//     if (lastScore !== null) {
//     document.getElementsByClassName("user-Score").innerHTML = lastScore.user;
//     document.getElementsByClassName("user-Score").innerHTML = lastScore.currentScore;
//     } else {
//       return;
//     }
//   }


// startButton.addEventListener("click", startQuiz)
// restartButton.addEventListener("click", function () {
//     window.location.replace("./index.html");

// });

// initialButton.addEventListener("click", function () {


//     let userSearch = document.querySelector(".searchBar");

//     if (userSearch == "" || userData.length == 0 || userData == null) {

//         alert("Please try a different city");
//         return

//     } else {
//         let currentCity = {
//             userSearch: userSearch,
//         }
//         console.log(currentCity);
//         let allCities = localStorage.getItem("allCities");
//         if (allCities === null) {
//             allCities = [];
//         } else {
//             allCities = JSON.parse(allCities);
//         }
//         allCities.push(currentCity);
//         let newCity = JSON.stringify(allCities);
//         localStorage.setItem("allCities", newCity);
//     }


//     let allCities = localStorage.getItem("allCities");
//     allCities = JSON.parse(allCities);

//     if (allCities !== null) {

//         for (let i = 0; i < allCities.length; i++) {

//             let createLi = document.createElement("li");
//             createLi.textContent = allCities[i].userSearch;
//             let contentEL = document.querySelector(".content")
//             contentEL.appendChild(createLi);;

//         }
//     }
// });
