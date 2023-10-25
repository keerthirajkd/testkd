setTimeout(() => {
    
    if (screen.width > 960) {
    pendo.showGuideById('RxYqXOlTbOSfYtvUDRiL6-Rhgww')
}
else {

    alert('More than 960');
}
    }, 3000);


//let active = false;

// function toggle() {
//   let toggle = document.querySelector(".toggle");
//   let text = document.querySelector(".text");
//   active = !active;
//   if (active) {
//     toggle.classList.add("active");
//     text.innerHTML = "ON";
//     guide.hide({stayHidden: true});

//     console.log("Pendo Track Event Called with status 'ON'")
    
//   } else {
//     toggle.classList.remove("active");
//     text.innerHTML = "OFF";
// pendo.showGuideById('RxYqXOlTbOSfYtvUDRiL6')
//     console.log("Pendo Track Event Called with status 'OFF'")
//   }
// }


//$('#exampleModal').on('shown.bs.modal', function () {
  // $('#myInput').trigger('focus')
//})
// function getDateTime() {
//         var now     = new Date(); 
//         var year    = now.getFullYear();
//         var month   = now.getMonth()+1; 
//         var day     = now.getDate();
//         var hour    = now.getHours();
//         var minute  = now.getMinutes();
//         var second  = now.getSeconds(); 
//         if(month.toString().length == 1) {
//              month = '0'+month;
//         }
//         if(day.toString().length == 1) {
//              day = '0'+day;
//         }   
//         if(hour.toString().length == 1) {
//              hour = '0'+hour;
//         }
//         if(minute.toString().length == 1) {
//              minute = '0'+minute;
//         }
//         if(second.toString().length == 1) {
//              second = '0'+second;
//         }   
//         var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
//          return dateTime;
//     }

//     // example usage: realtime clock
//     setInterval(function(){
//         currentTime = getDateTime();
//         document.getElementById("digital-clock").innerHTML = currentTime;
//     }, 1000);

    let malam = document.getElementById("keerthiraj"), 
    pagi = document.getElementById("pendo"),
    siang = document.getElementById("mangalore"), 
    today, h;

function show(){

  today = new Date(),h = today.getHours();
  
  if(h >= 3){
      if(h>=7 && h<10){
        keerthiraj.style.display = 'none';
        pendo.style.display = 'none';
        mangalore.style.display = 'block';
      }
      else if(h>= 12 && h<14){
        keerthiraj.style.display = 'block';
        pendo.style.display = 'none';
        mangalore.style.display = 'none';
      }
      else if(h>=17){
          //pendo.showGuideById('RxYqXOlTbOSfYtvUDRiL6-Rhgww')

        keerthiraj.style.display = 'none';
        pendo.style.display = 'block';
        mangalore.style.display = 'none';
      }    
  }else{
      malam.style.display = 'none';
      pagi.style.display = 'block';
      siang.style.display = 'none';
  }
}

