function weather(){
    
    cityname=cname.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5b4bee0ba241d092159faf007e166080`)
    .then(d=>d.json()).then(res=>displaydata(res)) 
  // console.log(displaydata);
  // if(cityname=='kakkanad'){
  //   window.location='weather.html'
  // }else{
  //   window.location='index.html'
  // }
}
function displaydata(citydetails){
    cname=citydetails.name
    temps=Math.floor(citydetails.main.temp-273)
    humid=citydetails.main.humidity
    winds=citydetails.wind.speed
    wether=citydetails.weather[0].main
    sy=citydetails.sys.sunrise
    sys=citydetails.sys.sunset
  
  

    htmldata=`
    <div class="box">
      
    <header>
        <nav class="navbar">
           
                
                <div class="logo-menu">
                    <i class="fa-solid fa-ellipsis-vertical"></i>                    </div>
                <div class="citynamebox">
<div class="logo-loca"><i class="fa-solid fa-location-dot" > ${ cname}</i></div>

                </div>
            
           <div class="logo-plus"><i class="fa-thin fa-plus"></i></div>
        </nav>
        
    </header>
  <main >
   <div class="image-container">
    <img src="./image/144Z_2107.w015.n001.440B.p15.440.jpg" alt="">
    <div class="temp">
       ${temps}&#176c
      </div>
   </div> 
<div class="container">
<div class="row">
<div class="col">
  <div class="mains"><i class="fa-solid fa-cloud"><p>${wether}</p></i></div>
</div>
<div class="col">
 <div><i class="fa-solid  fa-droplet"></i> <p >${humid}</p></div> 
</div>
<div class="col">
  <div class="wind"><i class="fa-solid fa-wind"></i> </div>
  <p >${winds}</p>
</div>
</div>
<div class="row">
<div class="col">
  <i class="fa-solid fa-sun"></i>
  <p >${sy}</p>
</div>
<div class="col">
  <p></p>
</div>
<div class="col">
  <i class="fa-regular fa-sun"></i>
  <p >${sys}</p>
</div>
</div>
</div>

 </main>
 <footer>
  <i class="fa-brands fa-facebook"></i>    
    <i class="fa-brands fa-twitter"></i>
  <i class="fa-brands fa-instagram"></i>

 </footer>

    `
    result.innerHTML=htmldata
}


