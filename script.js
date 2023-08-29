let active = false;

function toggle() {
  let toggle = document.querySelector(".toggle");
  let text = document.querySelector(".text");
  active = !active;
  if (active) {
    toggle.classList.add("active");
    text.innerHTML = "ON";
    console.log("Pendo Track Event Called with status 'ON'")
    
  } else {
    toggle.classList.remove("active");
    text.innerHTML = "OFF";
pendo.showGuideById('s3HvZVlDql5rUXOdgjBaAobarXw')
    console.log("Pendo Track Event Called with status 'OFF'")
  }
}


$('#exampleModal').on('shown.bs.modal', function () {
  // $('#myInput').trigger('focus')
})
