// setTimeout(() => {
    
//     if (screen.width > 960) {
//     pendo.showGuideById('RxYqXOlTbOSfYtvUDRiL6-Rhgww')
// }
// else {

//     alert('More than 960');
// }
//     }, 3000);


/*let active = false;

function toggle() {
  let toggle = document.querySelector(".toggle");
  let text = document.querySelector(".text");
  active = !active;
  if (active) {
    toggle.classList.add("active");
    text.innerHTML = "ON";
    
  } else {
    toggle.classList.remove("active");
    text.innerHTML = "OFF";
/*pendo.showGuideById('-uqTaMGPpQsNoTIF1eM77TSuoJ4')
	  pendo.track("Toggle", {
/*		  Type: "Changed status"
	  });*/



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

let today, h;
function show(){
today = new Date(),h = today.getHours();
      if(h>=15 && h<24){
          pendo.showGuideById('s3HvZVlDql5rUXOdgjBaAobarXw')

      }    
}

// JS for Accordion Dropdown

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
var elements = document.getElementsByClassName("item");
var subElements = document.getElementsByClassName("sub");
var arrLi1 = ['Dato 1 sub 1', 'Dato 2 sub 1', 'dato 3 sub 1'];
var arrLi2 = ['Dato 1 sub 2', 'Dato 2 sub 2', 'dato 3 sub 2', 'dato 4 sub 2'];

let creaLi = function(itemClass, arr){
  let newUL =document.createElement('UL');
  newUL.className = 'sub';
  for (let i = 0; i < arr.length; i++){
    let newLi = document.createElement('li');
    newLi.innerHTML = arr[i];
    newUL.appendChild(newLi);
    itemClass.appendChild(newUL);
  };
  itemClass.getElementsByClassName("sub")[0].addEventListener("mouseleave", function(event){
    //-- soluzione 1 (senza il parametro 'event' nella function)
    // console.log(elements[index].getElementsByClassName("sub").length);
    // elements[index].getElementsByClassName("sub")[0].remove();
    // -- soluzione 2, più efficace
    event.target.remove();
  });
};

let creaSub = function(index) {
  elements[index].addEventListener("mouseover", function() {
     // alert("Clicked index: " + index);
  if (!this.getElementsByClassName("sub").length > 0) {
      toglisub('sub');
      switch(index){
        case 0: //link a Home
          break;
        case 1:
          creaLi(this, arrLi1);
          break;
        case 2:
          creaLi(this, arrLi2);
          break;
        default:
        }
      };
    });
  };

for(let i = 0; i < elements.length; i++) {
  creaSub(i);
};

let toglisub = function removeElementsByClass(Cls){
    const elements = document.getElementsByClassName(Cls);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    };
}
