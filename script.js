let active = false;

function toggle() {
  let toggle = document.querySelector(".toggle");
  let text = document.querySelector(".text");
  active = !active;
  if (active) {
    toggle.classList.add("active");
    text.innerHTML = "ON";

/* pendo.track("TOGGLE_STATUS", {
 toggleState: "ON"
 });

 console.log("Pendo Track Event Called with status 'ON'")
    
 } else {
 toggle.classList.remove("active");
 text.innerHTML = "OFF";

  pendo.track("TOGGLE_STATUS", {
    toggleState: "OFF"
    });

    console.log("Pendo Track Event Called with status 'OFF'")
  }
}*/
if(toggleState == "OFF"){
  pendo.showGuideById('s3HvZVlDql5rUXOdgjBaAobarXw')
  console.log("Toggle is ON")
}
else{
  console.log("toggle is ON")
}

$('#exampleModal').on('shown.bs.modal', function () {
  // $('#myInput').trigger('focus')
})
