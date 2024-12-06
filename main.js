let city = document.getElementById("city")
let final; 
let forcastList=[];
let myContact=document.getElementById("contact")
let daysList=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let monthsList=["January","February","March","April","May","June","July","August","September","October","November","December"]
let d = new Date();
let day=d.getDay();
let dayn=d.getDate();
let month=d.getMonth();
let dt;
let da;
if (day==5)
    {
        dt=6;
        da=0;
    }
    else if(day==6)
    {
    dt=0;
    da=1
    }
    else if (day<5)
    {
        dt=day+1;
        da=day+2;
    }



let searchC = document.getElementById("searchCity") 
let searchButton=document.getElementById("searcButton")
searchC.addEventListener("input",function(){
    getLocations(searchC.value)
})

async function getLocations(term){
let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ae97fbe167ae423dafb123852240412&q=${term}&days=3`)
if (response.ok){
final = await response.json();
forcastList=final.forecast.forecastday;
d=(final.location.localtime);


displayData();
}
}
function displayData()
{
let cartona="";
cartona+=`   <div class="col-md-4 column rounded-start">
      <div class="d-flex justify-content-between px-2 text-secondary">
        <p>${daysList[day]}</p>
        <p>${dayn}${monthsList[month]}</p>
      </div>
      <div class="mt-3 ps-3">
        <p class="text-secondary fs-5">${final.location.name}</p>
        <span class=" text-white fw-bolder" id="temp">${final.current.temp_c}</span>
        <div class="w-50">
            <img src="https:${final.current.condition.icon}" class="w-50" alt="status icon">
        </div>
        <span class="text-info">${final.current.condition.text}</span>
        <div class="d-flex gap-3 mt-3">
            <div class="d-flex">
                <div class="w-50">
                    <img src="Images/icon-umberella.png" class="w-75" alt="umbrella icon">
                </div>
                <span class="text-secondary">${forcastList[0].day.daily_chance_of_rain}%</span>
            </div>
            <div class="d-flex">
                <div class="w-50">
                    <img src="Images/icon-wind.png" class="w-75" alt="wind icon">
                </div>
                <span class="text-secondary">${final.current.wind_kph}Km/h</span>
            </div>
            <div class="d-flex">
                <div class="w-50">
                    <img src="Images/icon-compass.png" class="w-75" alt="compass">
                </div>
                <span class="text-secondary">${final.current.wind_dir}</span>
            </div>
        


        </div>

      </div>  
     </div>

    <div class="col-md-4 column2 pb-5">
        <div class="text-center">
            <p class="mb-5 text-secondary">${daysList[dt]}</p>
            <div class="w-50 mx-auto mb-4">
            <img src="https:${forcastList[1].day.condition.icon}" class="w-25 mb-3" alt="status icon">
        </div>
            <span class="text-white fs-4 fw-bold"> ${forcastList[1].day.maxtemp_c} C</span>
            <br>
                <span class="text-secondary">${forcastList[1].day.mintemp_c} C</span>
            <br>
            <br>
            <span class="text-info">${forcastList[1].day.condition.text}</span>


        </div>


    </div>
    <div class="col-md-4 column pb-5 rounded-end">
        <div class="text-center">
            <p class="mb-5 text-secondary">${daysList[da]}</p>
            <div class="w-50 mx-auto mb-4">
            <img src="https:${forcastList[2].day.condition.icon}" class="w-25 mb-3" alt="status icon">
        </div>
            <span class="text-white fs-4 fw-bold"> ${forcastList[2].day.maxtemp_c} C</span>
            <br>
                <span class="text-secondary">${forcastList[2].day.mintemp_c} C</span>
            <br>
            <br>
            <span class="text-info">${forcastList[2].day.condition.text}</span>


        </div>


    </div>
`
document.getElementById("rowData").innerHTML=cartona;
}
getLocations("cairo")

myContact.addEventListener("click",function(){
    window.location='./contact.html'
})