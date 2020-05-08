var date = new Date();

try {document.getElementsByName('departure')[0].valueAsDate = date;}catch{}
try {document.getElementsByName('flightDeparture')[0].valueAsDate = date;}catch{}
try {document.getElementsByName('departure')[0].min = new Date().toISOString().split("T")[0];}catch{}
try {document.getElementsByName('return')[0].min = new Date().toISOString().split("T")[0];}catch{}
try {document.getElementsByName('flightDeparture')[0].min = new Date().toISOString().split("T")[0];}catch{}

function search(ele) {
    if (event.key === 'Enter') {
        alert(ele.value);
    }
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\],/g, ' '); // $& means the whole matched string
}

function clearSelect() {
    document.getElementsByClassName("nav-tab")[0].removeAttribute("selected");
    document.getElementsByClassName("nav-tab")[1].removeAttribute("selected");
    document.getElementsByClassName("nav-tab")[2].removeAttribute("selected");
    document.getElementsByClassName("nav-tab")[3].removeAttribute("selected");
    document.getElementById("book").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("check-in").style.display = "none";
    document.getElementById("flight-status").style.display = "none";
}

try {
var templateContent = document.querySelector('#airportsTemplate').content;}
catch{}

try {
document.querySelector('#from').addEventListener('keyup', function handler(event) {
    while (document.querySelector('#airports').children.length) document.querySelector('#airports').removeChild(document.querySelector('#airports').firstChild);
    var inputVal = new RegExp(document.querySelector('#from').value.trim(), 'i');
    var set = Array.prototype.reduce.call(templateContent.cloneNode(true).children, function searchFilter(frag, item, i) {
        if (inputVal.test(item.textContent) && frag.children.length < 6) frag.appendChild(item);
        return frag;
    }, document.createDocumentFragment());
    document.querySelector('#airports').appendChild(set);
});}
catch{}

try {
document.querySelector('#to').addEventListener('keyup', function handler(event) {
    while (document.querySelector('#airports2').children.length) document.querySelector('#airports2').removeChild(document.querySelector('#airports2').firstChild);
    var inputVal = new RegExp(document.querySelector('#to').value.trim(), 'i');
    var set = Array.prototype.reduce.call(templateContent.cloneNode(true).children, function searchFilter(frag, item, i) {
        if (inputVal.test(item.textContent) && frag.children.length < 6) frag.appendChild(item);
        return frag;
    }, document.createDocumentFragment());
    document.querySelector('#airports2').appendChild(set);
});}
catch{}

try {
document.querySelector('#departureAirport').addEventListener('keyup', function handler(event) {
    while (document.querySelector('#airports3').children.length) document.querySelector('#airports3').removeChild(document.querySelector('#airports3').firstChild);
    var inputVal = new RegExp(document.querySelector('#departureAirport').value.trim(), 'i');
    var set = Array.prototype.reduce.call(templateContent.cloneNode(true).children, function searchFilter(frag, item, i) {
        if (inputVal.test(item.textContent) && frag.children.length < 6) frag.appendChild(item);
        return frag;
    }, document.createDocumentFragment());
    document.querySelector('#airports3').appendChild(set);
});}
catch{}

function passengerChange() {
    document.getElementById('numberOfPassenger').innerHTML = parseInt(document.getElementById('adultSelection').value, 10) + parseInt(document.getElementById('childSelection').value, 10) + parseInt(document.getElementById('toddlerSelection').value, 10);
}

function switcharoo(x) {
	try {
    if (x.matches) { // If media query matches
        document.getElementById('hero').insertBefore(document.getElementById('slogan'), document.getElementById('main-action'));
    } else {
        document.getElementById('hero').insertBefore(document.getElementById('main-action'), document.getElementById('slogan'));
    }
    }catch{}
}

var x = window.matchMedia("(max-width:1015px)")
switcharoo(x) // Call listener function at run time
x.addListener(switcharoo) // Attach listener function on state changes

const body = document.querySelector("#header");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  try {
      if (currentScroll > 100) {
            document.getElementById("scroll-to-top").style.opacity = 1;
        } else {
            document.getElementById("scroll-to-top").style.opacity = 0;
        }
    }catch{}

  if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
  }
   
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
    console.log('here')
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
    console.log('here2')
  }
  lastScroll = currentScroll;
});

function airplaneOverlay(x) {
    document.getElementById("airplane-tooltip").getElementsByTagName('svg')[0].getElementsByTagName('circle')[1].style.fill = '#FFB215';
    document.getElementById("airplane-tooltip").getElementsByTagName('svg')[1].getElementsByTagName('circle')[1].style.fill = '#FFB215';
    document.getElementById("airplane-tooltip").getElementsByTagName('svg')[2].getElementsByTagName('circle')[1].style.fill = '#FFB215';
    document.getElementById("airplane-tooltip").getElementsByTagName('svg')[3].getElementsByTagName('circle')[1].style.fill = '#FFB215';
    document.getElementById("airplane-tooltip").getElementsByTagName('svg')[0].getElementsByTagName('circle')[0].style.stroke = '#FFB215';
    document.getElementById("airplane-tooltip").getElementsByTagName('svg')[1].getElementsByTagName('circle')[0].style.stroke = '#FFB215';
    document.getElementById("airplane-tooltip").getElementsByTagName('svg')[2].getElementsByTagName('circle')[0].style.stroke = '#FFB215';
    document.getElementById("airplane-tooltip").getElementsByTagName('svg')[3].getElementsByTagName('circle')[0].style.stroke = '#FFB215';

    if (document.getElementById("airplaneData").getElementsByTagName('div')[0].innerHTML == x.getAttribute("data-title") && document.getElementById("airplaneContent").style.display != "none") {
        document.getElementById("airplaneContent").style.display = "none";
        return;
    }

    x.getElementsByTagName('circle')[1].style.fill = '#f0f0f0';
    x.getElementsByTagName('circle')[0].style.stroke = '#f0f0f0';
    document.getElementById("airplaneContent").getElementsByTagName('img')[0].src = "img/" + x.getAttribute("data-title") + ".jpg";

    document.getElementById("airplaneData").getElementsByTagName('div')[0].innerHTML = x.getAttribute("data-title");
    document.getElementById("airplaneData").getElementsByTagName('div')[1].innerHTML = x.getAttribute("data-content");

    document.getElementById("airplaneContent").style.display = "block";
    document.getElementById("airplane-dropdown").removeAttribute("open");
}

try {
document.getElementById("book").getElementsByTagName("form")[0].addEventListener("submit", function(e){
    e.preventDefault();
    localStorage.clear();
    var book = {
        "flightType": document.getElementsByName("flightType")[0].value,
        "adultSelection": document.getElementsByName("adultSelection")[0].value,
        "childSelection": document.getElementsByName("childSelection")[0].value,
        "toddlerSelection": document.getElementsByName("toddlerSelection")[0].value,
        "price": document.getElementsByName("price")[0].value,
        "from": document.getElementsByName("from")[0].value,
        "to": document.getElementsByName("to")[0].value,
        "departure": document.getElementsByName("departure")[0].value,
        "return": document.getElementsByName("return")[0].value
    };

    window.localStorage.setItem("book", JSON.stringify(book));

    location.href = "reservations/book-a-flight.html";
});
}catch{}

try {
document.getElementById("book2").getElementsByTagName("form")[0].addEventListener("submit", function(e){
    e.preventDefault();
    localStorage.clear();
    var book = {
        "flightType": document.getElementsByName("flightType")[0].value,
        "adultSelection": document.getElementsByName("adultSelection")[0].value,
        "childSelection": document.getElementsByName("childSelection")[0].value,
        "toddlerSelection": document.getElementsByName("toddlerSelection")[0].value,
        "price": document.getElementsByName("price")[0].value,
        "from": document.getElementsByName("from")[0].value,
        "to": document.getElementsByName("to")[0].value,
        "departure": document.getElementsByName("departure")[0].value,
        "return": document.getElementsByName("return")[0].value
    };

    window.localStorage.setItem("book", JSON.stringify(book));

    location.href = "../reservations/book-a-flight.html";
});
}catch{}

function autoFillBook() {
	var book = JSON.parse(window.localStorage.getItem("book"));
	if (book === null) {
		return;
	}
	else {
		var validation = ["Akron, OH (CAK)", "Albany, NY (ALB)", "Allentown, PA (ABE)", "Atlantic City, NJ (ACY)", "Baltimore, MD (BWI)", "Binghamton, NY (BGM)", "Buffalo, NY (BUF)", "Charleston, WV (CRW)", "Cincinnati, OH (LUK)Clarksburg, WV (CKB)", "Cleveland, OH (CLE)", "Columbus, OH (CMH)", "Columbus, OH (LCK)", "Dayton, OH (DAY)", "Elmira, NY (ELM)", "Erie, PA (ERI)", "Farmingdale, NY (FRG)", "Hagerstown, MD (HGR)", "Harrisburg, PA (MDT)", "Huntington, WV (HTS)", "Islip, NY (ISP)", "Ithaca, NY (ITH)", "Latrobe, PA (LBE)", "Morgantown, WV (MGW)", "New York / Newark, NJ (EWR)", "New York, NY (JFK)", "New York, NY (LGA)", "Newburgh, NY (SWF)", "Niagara Falls, NY (IAG)", "Philadelphia, PA (PHL)", "Pittsburg, PA (PIT)", "Plattsburgh, NY (PBG)", "Rochester, NY (ROC)", "Salisbury, MD (SBY)", "State College, PA (SCE)", "Syracuse, NY (SYR)", "Toledo, OH (TOL)", "Trenton, NJ (TTN)", "Watertown, NY (ART)", "White Plains, NY (HPN)", "Wilkes-Barre, PA (AVP)", "Williamsport, PA (IPT)", "Wilmington, DE (ILG)", "Youngstown, OH (YNG)"]
		var errorContent = "";

        document.getElementsByName("flightType")[0].value = book["flightType"];
        document.getElementsByName("adultSelection")[0].value = book["adultSelection"];
        document.getElementsByName("childSelection")[0].value = book["childSelection"];
        document.getElementsByName("toddlerSelection")[0].value = book["toddlerSelection"];
        document.getElementsByName("price")[0].value = book["price"];
        document.getElementById("numberOfPassenger").innerHTML = +book["toddlerSelection"] + +book["childSelection"] + +book["adultSelection"];
        document.getElementsByName("from")[0].value = book["from"];
        document.getElementsByName("to")[0].value = book["to"];
        document.getElementsByName("departure")[0].value = book["departure"];
        document.getElementsByName("return")[0].value = book["return"];

        if (!validation.includes(book["from"])) {
        	errorContent += '<li>"From" destination must be valid; enter airport code or name and select in dropdown.</li>';
        }

        if (!validation.includes(book["to"])) {
        	errorContent += '<li>"To" destination must be valid; enter airport code or name and select in dropdown.</li>';
        }

        if ((new Date(book["departure"]).getTime() >= new Date(book["return"]).getTime())) {
        	errorContent += '<li>"Return date must be at least one day after departure."</li>';
        }

        if (book["adultSelection"] + book["childSelection"] + book["toddlerSelection"] === "000") {
        	errorContent += '<li>There must be at least one passenger.</li>';
        }

        if (errorContent != "") {
        	document.getElementById("errorContainer").style.display = "block";
        	document.getElementById("errorContent").innerHTML = errorContent;
			document.getElementById("continue").disabled = true;
        }
	}
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function flightCalendar() {
	var book = JSON.parse(window.localStorage.getItem("book"));

	if (book["flightType"] == "oneWay") {
		document.querySelector("#returnDiv").style.visibility = "hidden";
	}

	if (document.getElementById("errorContainer").style.display === "none") {
		var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		editDate = new Date(book["departure"]);
		editDate.setDate(editDate.getDate() - 3);

		document.getElementById("departureCalendar").getElementsByClassName("calendar-item")[0].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);
		document.getElementById("departureCalendar").getElementsByClassName("calendar-item")[1].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);
		document.getElementById("departureCalendar").getElementsByClassName("calendar-item")[2].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 0);
		document.getElementById("departureCalendar").getElementsByClassName("calendar-item")[3].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);
		document.getElementById("departureCalendar").getElementsByClassName("calendar-item")[3].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);
		document.getElementById("departureCalendar").getElementsByClassName("calendar-item")[4].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);
		document.getElementById("departureCalendar").getElementsByClassName("calendar-item")[5].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);
		document.getElementById("departureCalendar").getElementsByClassName("calendar-item")[6].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);

		var max = (+book["toddlerSelection"] + +book["childSelection"] + +book["adultSelection"])* 100 + 50;
		var min = max - 100;
		var priceList = [getRandomInt(min, max ), getRandomInt(min, max ), getRandomInt(min, max ), getRandomInt(min, max ), getRandomInt(min, max ), getRandomInt(min, max ), getRandomInt(min, max )]

		var extra = 0;
		if (book["price"] === "firstClass") {
			extra = 100;
		}

		for (i=0; i<7; i++) {
			var totalPrice = priceList[i] + extra;
			document.getElementById("returnCalendar").getElementsByClassName("calendar-item")[i].getElementsByTagName("div")[1].innerHTML = "$" + totalPrice;

		}

		for (i=0; i<7; i++) {
			document.getElementById("departureCalendar").getElementsByClassName("calendar-item")[i].getElementsByTagName("div")[1].innerHTML = "$" + priceList[i];
		}

		document.getElementById("departurePlace").innerHTML = book["from"] + " — " + book["to"];

	}

    var y = Array.prototype.slice.call( document.getElementById("seat-map").getElementsByClassName("grid-container")[0].children );
    for (i = 0; i < y.length/3; i++) {
    	var randomItem = y[Math.floor(Math.random()*y.length)];

    	if (randomItem.style.border == "none") {
    		continue;
    	}
    	randomItem.setAttribute("available", "true");
    	randomItem.style.background = "rgba(225, 151, 0, 0.35)";
    }

    var y = Array.prototype.slice.call( document.getElementById("seat-map").getElementsByClassName("grid-container2")[1].children );
    for (i = 0; i < y.length/3; i++) {
    	var randomItem = y[Math.floor(Math.random()*y.length)];
    	if (randomItem.style.border == "none") {
    		continue;
    	}
    	randomItem.setAttribute("available", "true");
    	randomItem.style.background = "rgba(21, 98, 255, 0.35)";
    }

    var y = Array.prototype.slice.call( document.getElementById("seat-map").getElementsByClassName("grid-container2")[2].children );
    for (i = 0; i < y.length/3; i++) {
    	var randomItem = y[Math.floor(Math.random()*y.length)];
    	if (randomItem.style.border == "none") {
    		continue;
    	}
    	randomItem.setAttribute("available", "true");
    	randomItem.style.background = "rgba(21, 98, 255, 0.35)";
	}

    var y = Array.prototype.slice.call( document.getElementById("seat-map").getElementsByClassName("grid-container2")[3].children );
    for (i = 0; i < y.length/3; i++) {
    	var randomItem = y[Math.floor(Math.random()*y.length)];
    	if (randomItem.style.border == "none") {
    		continue;
    	}
    	randomItem.setAttribute("available", "true");
    	randomItem.style.background = "rgba(21, 98, 255, 0.35)";
	}
}

function nextStep(x) {
	var book = JSON.parse(window.localStorage.getItem("book"));
	x.parentElement.classList.add("fadeOutRight");
	setTimeout( function() {
		x.parentElement.style.display = "none";
		if (book["flightType"] == "oneWay") {
			var step = +x.parentElement.id.slice(-1) + 2;
		    document.getElementById("progresschild").style.width = "450px";
		    document.getElementById("triangle-container").getElementsByTagName("span")[1].style.background = "#1562ff";
		    document.getElementById("triangle-container").getElementsByTagName("span")[2].style.background = "#1562ff";
		} else {
			var step = +x.parentElement.id.slice(-1) + 1;
		    document.getElementById("progresschild").style.width = "300px";
		    document.getElementById("triangle-container").getElementsByTagName("span")[1].style.background = "#1562ff";
		}
		document.getElementById("step" + step).classList.remove("fadeOutLeft");
		document.getElementById("step" + step).classList.remove("fadeOutRight");
		document.getElementById("step" + step).classList.remove("fadeInRight");
		document.getElementById("step" + step).classList.remove("fadeInLeft");
		document.getElementById("step" + step).classList.add("fadeInLeft");
		document.getElementById("step" + step).style.display = "block";
	}, 800);
}

function selectFlight(x) {
	document.getElementById("continue").removeAttribute("disabled");
	var sibling = x.parentElement.parentElement.childNodes;
	var time = sibling[1].innerHTML;
	var flightTime = sibling[3].innerHTML;
	var stops = sibling[5].innerHTML;
	var price = sibling[7].childNodes[3].innerHTML;

    var departureInfo = {
        "time": time,
        "flightTime": flightTime,
        "stops": stops,
        "price": price,
    };

    console.log(departureInfo)

	window.localStorage.setItem("departureInfo", JSON.stringify(departureInfo));
}

function selectDay(x) {
	var sibling = x.parentNode.firstChild;

	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== x) {
			sibling.setAttribute("selected", "false");
		}
		sibling = sibling.nextSibling;
	}

	if (x.getAttribute("selected") != "true") {

		x.setAttribute("selected", "true")

		console.log(document.getElementById("departureSelection").getElementsByTagName('tr')[0].getElementsByTagName('td')[0])
		var hour = getRandomInt(1, 10);
		if (getRandomInt(0, 2) == 1) {
			var AMPM = "PM";
		} else {
			var AMPM = "AM";
		}

		document.getElementById("departureSelection").getElementsByTagName('tr')[0].getElementsByTagName('td')[0].innerHTML = hour + ":" + getRandomInt(9, 60) + " " + AMPM +" — " + (hour + 2) + ":" + getRandomInt(9, 60) + " " + AMPM;

		var hour = getRandomInt(1, 10);
		if (getRandomInt(0, 2) == 1) {
			var AMPM = "PM";
		} else {
			var AMPM = "AM";
		}

		document.getElementById("departureSelection").getElementsByTagName('tr')[1].getElementsByTagName('td')[0].innerHTML = hour + ":" + getRandomInt(9, 60) + " " + AMPM +" — " + (hour + 2) + ":" + getRandomInt(9, 60) + " " + AMPM;

		var hour = getRandomInt(1, 10);
		if (getRandomInt(0, 2) == 1) {
			var AMPM = "PM";
		} else {
			var AMPM = "AM";
		}

		document.getElementById("departureSelection").getElementsByTagName('tr')[2].getElementsByTagName('td')[0].innerHTML = hour + ":" + getRandomInt(9, 60) + " " + AMPM +" — " + (hour + 2) + ":" + getRandomInt(9, 60) + " " + AMPM;

		var hour = getRandomInt(1, 3);

		document.getElementById("departureSelection").getElementsByTagName('tr')[0].getElementsByTagName('td')[1].innerHTML = hour + "h " + getRandomInt(9, 60) + "m";
		document.getElementById("departureSelection").getElementsByTagName('tr')[1].getElementsByTagName('td')[1].innerHTML = hour + "h " + getRandomInt(9, 60) + "m";
		document.getElementById("departureSelection").getElementsByTagName('tr')[2].getElementsByTagName('td')[1].innerHTML = hour + "h " + getRandomInt(9, 60) + "m";

		if (getRandomInt(0, 2) == 1) {
			var stop = "Nonstop";
		} else {
			var stop = "1 Stop";
		}

		document.getElementById("departureSelection").getElementsByTagName('tr')[0].getElementsByTagName('td')[2].innerHTML = stop;
		if (getRandomInt(0, 2) == 1) {
			stop = "Nonstop";
		} else {
			stop = "1 Stop";
		}

		document.getElementById("departureSelection").getElementsByTagName('tr')[1].getElementsByTagName('td')[2].innerHTML = stop;
		if (getRandomInt(0, 2) == 1) {
			stop = "Nonstop";
		} else {
			stop = "1 Stop";
		}

		document.getElementById("departureSelection").getElementsByTagName('tr')[2].getElementsByTagName('td')[2].innerHTML = stop;

		var price = document.querySelectorAll('.calendar-item[selected="true"]')[0].getElementsByTagName("div")[1].innerHTML;

		document.getElementById("departureSelection").getElementsByTagName('tr')[0].getElementsByTagName('td')[3].getElementsByTagName('label')[0].innerHTML = price;
		price = +price.substr(1) + getRandomInt(5, 15);
		document.getElementById("departureSelection").getElementsByTagName('tr')[1].getElementsByTagName('td')[3].getElementsByTagName('label')[0].innerHTML = "$" + price;
		price = +price + getRandomInt(5, 15);
		document.getElementById("departureSelection").getElementsByTagName('tr')[2].getElementsByTagName('td')[3].getElementsByTagName('label')[0].innerHTML = "$" + price;
	}

	document.getElementById("continue").disabled = true;
	document.getElementById("departure1").checked = false;
	document.getElementById("departure2").checked = false;
	document.getElementById("departure3").checked = false;
}

function flightCalendar2() {
	if (document.getElementById("errorContainer").style.display === "none") {
		var book = JSON.parse(window.localStorage.getItem("book"));
		var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		editDate = new Date(book["return"]);
		editDate.setDate(editDate.getDate() - 3);

		document.getElementById("returnCalendar").getElementsByClassName("calendar-item")[0].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);
		document.getElementById("returnCalendar").getElementsByClassName("calendar-item")[1].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);
		document.getElementById("returnCalendar").getElementsByClassName("calendar-item")[2].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 0);
		document.getElementById("returnCalendar").getElementsByClassName("calendar-item")[3].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);
		document.getElementById("returnCalendar").getElementsByClassName("calendar-item")[3].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);
		document.getElementById("returnCalendar").getElementsByClassName("calendar-item")[4].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);
		document.getElementById("returnCalendar").getElementsByClassName("calendar-item")[5].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);
		document.getElementById("returnCalendar").getElementsByClassName("calendar-item")[6].getElementsByTagName("div")[0].innerHTML = days[editDate.getUTCDay()] + ", " + months[editDate.getUTCMonth()] + " " + editDate.getUTCDate();
		editDate.setDate(editDate.getDate() + 1);

		var max = (+book["toddlerSelection"] + +book["childSelection"] + +book["adultSelection"])* 100 + 50;
		var min = max - 100;
		var priceList = [getRandomInt(min, max ), getRandomInt(min, max ), getRandomInt(min, max ), getRandomInt(min, max ), getRandomInt(min, max ), getRandomInt(min, max ), getRandomInt(min, max )]
		var extra = 0;

		if (book["price"] === "firstClass") {
			extra = 100;
		}

		for (i=0; i<7; i++) {
			var totalPrice = priceList[i] + extra
			document.getElementById("returnCalendar").getElementsByClassName("calendar-item")[i].getElementsByTagName("div")[1].innerHTML = "$" + totalPrice;

		}

		document.getElementById("returnPlace").innerHTML = book["to"] + " — " + book["from"];

	} else {
		return;
	}
}

function nextStep2(x) {
	var book = JSON.parse(window.localStorage.getItem("book"));
	x.parentElement.parentElement.classList.add("fadeOutRight");
	setTimeout( function() {
		x.parentElement.parentElement.style.display = "none";
		var step = +x.parentElement.parentElement.id.slice(-1) + 1;
		document.getElementById("step" + step).classList.remove("fadeOutLeft");
		document.getElementById("step" + step).classList.remove("fadeOutRight");
		document.getElementById("step" + step).classList.remove("fadeInRight");
		document.getElementById("step" + step).classList.remove("fadeInLeft");
		document.getElementById("step" + step).classList.add("fadeInLeft");
		document.getElementById("step" + step).style.display = "block";
	}, 800);

    document.getElementById("progresschild").style.width = "450px";
    document.getElementById("triangle-container").getElementsByTagName("span")[2].style.background = "#1562ff";
}

function selectFlight2(x) {
	document.getElementById("continue2").removeAttribute("disabled");
	var sibling = x.parentElement.parentElement.childNodes;
	var time = sibling[1].innerHTML;
	var flightTime = sibling[3].innerHTML;
	var stops = sibling[5].innerHTML;
	var price = sibling[7].childNodes[3].innerHTML;

    var returnInfo = {
        "time": time,
        "flightTime": flightTime,
        "stops": stops,
        "price": price,
    };

    console.log(returnInfo)

	window.localStorage.setItem("returnInfo", JSON.stringify(returnInfo));
}

function selectDay2(x) {
	var sibling = x.parentNode.firstChild;

	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== x) {
			sibling.setAttribute("selected", "false");
		}
		sibling = sibling.nextSibling;
	}

	if (x.getAttribute("selected") != "true") {

		x.setAttribute("selected", "true")

		console.log(document.getElementById("returnSelection").getElementsByTagName('tr')[0].getElementsByTagName('td')[0])
		var hour = getRandomInt(1, 10);
		if (getRandomInt(0, 2) == 1) {
			var AMPM = "PM";
		} else {
			var AMPM = "AM";
		}

		document.getElementById("returnSelection").getElementsByTagName('tr')[0].getElementsByTagName('td')[0].innerHTML = hour + ":" + getRandomInt(9, 60) + " " + AMPM +" — " + (hour + 2) + ":" + getRandomInt(9, 60) + " " + AMPM;

		var hour = getRandomInt(1, 10);
		if (getRandomInt(0, 2) == 1) {
			var AMPM = "PM";
		} else {
			var AMPM = "AM";
		}

		document.getElementById("returnSelection").getElementsByTagName('tr')[1].getElementsByTagName('td')[0].innerHTML = hour + ":" + getRandomInt(9, 60) + " " + AMPM +" — " + (hour + 2) + ":" + getRandomInt(9, 60) + " " + AMPM;

		var hour = getRandomInt(1, 10);
		if (getRandomInt(0, 2) == 1) {
			var AMPM = "PM";
		} else {
			var AMPM = "AM";
		}

		document.getElementById("returnSelection").getElementsByTagName('tr')[2].getElementsByTagName('td')[0].innerHTML = hour + ":" + getRandomInt(9, 60) + " " + AMPM +" — " + (hour + 2) + ":" + getRandomInt(9, 60) + " " + AMPM;

		var hour = getRandomInt(1, 3);

		document.getElementById("returnSelection").getElementsByTagName('tr')[0].getElementsByTagName('td')[1].innerHTML = hour + "h " + getRandomInt(9, 60) + "m";
		document.getElementById("returnSelection").getElementsByTagName('tr')[1].getElementsByTagName('td')[1].innerHTML = hour + "h " + getRandomInt(9, 60) + "m";
		document.getElementById("returnSelection").getElementsByTagName('tr')[2].getElementsByTagName('td')[1].innerHTML = hour + "h " + getRandomInt(9, 60) + "m";

		if (getRandomInt(0, 2) == 1) {
			var stop = "Nonstop";
		} else {
			var stop = "1 Stop";
		}

		document.getElementById("returnSelection").getElementsByTagName('tr')[0].getElementsByTagName('td')[2].innerHTML = stop;
		if (getRandomInt(0, 2) == 1) {
			stop = "Nonstop";
		} else {
			stop = "1 Stop";
		}

		document.getElementById("returnSelection").getElementsByTagName('tr')[1].getElementsByTagName('td')[2].innerHTML = stop;
		if (getRandomInt(0, 2) == 1) {
			stop = "Nonstop";
		} else {
			stop = "1 Stop";
		}

		document.getElementById("returnSelection").getElementsByTagName('tr')[2].getElementsByTagName('td')[2].innerHTML = stop;

		var price = document.querySelectorAll('.calendar-item[selected="true"]')[1].getElementsByTagName("div")[1].innerHTML;

		document.getElementById("returnSelection").getElementsByTagName('tr')[0].getElementsByTagName('td')[3].getElementsByTagName('label')[0].innerHTML = price;
		price = +price.substr(1) + getRandomInt(5, 15);
		document.getElementById("returnSelection").getElementsByTagName('tr')[1].getElementsByTagName('td')[3].getElementsByTagName('label')[0].innerHTML = "$" + price;
		price = +price + getRandomInt(5, 15);
		document.getElementById("returnSelection").getElementsByTagName('tr')[2].getElementsByTagName('td')[3].getElementsByTagName('label')[0].innerHTML = "$" + price;
	}

	document.getElementById("continue2").disabled = true;
	document.getElementById("return1").checked = false;
	document.getElementById("return2").checked = false;
	document.getElementById("return3").checked = false;
}

function goBack(x) {
	x.parentElement.parentElement.classList.add("fadeOutLeft");
	setTimeout( function() {
		x.parentElement.parentElement.style.display = "none";
		var step = +x.parentElement.parentElement.id.slice(-1) - 1;
		console.log(step);
		document.getElementById("step" + step).classList.remove("fadeOutLeft");
		document.getElementById("step" + step).classList.remove("fadeOutRight");
		document.getElementById("step" + step).classList.remove("fadeInLeft");
		document.getElementById("step" + step).classList.add("fadeInRight");
		document.getElementById("step" + step).style.display = "block";
	}, 800);
}

var passengerIteration = 0;

function selectPassenger(x){
	var book = JSON.parse(window.localStorage.getItem("book"));
	console.log(x.style.background)
	if (+book["toddlerSelection"] + +book["childSelection"] + +book["adultSelection"] > passengerIteration) {
		if (x.style.background != "") {
			if (x.style.background == "rgba(21, 98, 255, 0.8)" || x.style.background == "rgba(225, 151, 0, 0.8)") {
				return;
			}

			passengerIteration++;
			x.innerHTML = "P" + passengerIteration;

			if (x.style.background == "rgba(21, 98, 255, 0.35)") {
				x.style.background = "rgba(21, 98, 255, 1)";
			}

			if (x.style.background == "rgba(225, 151, 0, 0.35)"){
				x.style.background = "rgba(225, 151, 0, 1)";
			}

			if (+book["toddlerSelection"] + +book["childSelection"] + +book["adultSelection"] == passengerIteration) {
				document.getElementById("continue3").disabled = false;
			}
		}
	}
}

function nextStep3(x) {
	var book = JSON.parse(window.localStorage.getItem("book"));
	x.parentElement.parentElement.classList.add("fadeOutRight");
	setTimeout( function() {
		x.parentElement.parentElement.style.display = "none";
		var step = +x.parentElement.parentElement.id.slice(-1) + 1;
		document.getElementById("step" + step).classList.remove("fadeOutLeft");
		document.getElementById("step" + step).classList.remove("fadeOutRight");
		document.getElementById("step" + step).classList.remove("fadeInRight");
		document.getElementById("step" + step).classList.remove("fadeInLeft");
		document.getElementById("step" + step).classList.add("fadeInLeft");
		document.getElementById("step" + step).style.display = "block";
	}, 800);

    document.getElementById("progresschild").style.width = "100%";
    document.getElementById("triangle-container").getElementsByTagName("span")[3].style.background = "#1562ff";

    var y = 0;

    for(i = 0; i < +book["adultSelection"] + +book["childSelection"] + +book["toddlerSelection"]; i++) {
    	y += getRandomInt(50, 100) + getRandomInt(50, 100);
	}

    document.getElementById("e-ticket").getElementsByTagName("div")[1].innerHTML = book["from"];
    document.getElementById("e-ticket").getElementsByTagName("div")[3].innerHTML = book["to"];
    document.getElementById("e-ticket").getElementsByTagName("div")[5].innerHTML = book["departure"];
    document.getElementById("e-ticket").getElementsByTagName("div")[7].innerHTML = book["return"];
    document.getElementById("e-ticket").getElementsByTagName("div")[9].innerHTML = book["adultSelection"];
    document.getElementById("e-ticket").getElementsByTagName("div")[11].innerHTML = book["childSelection"];
    document.getElementById("e-ticket").getElementsByTagName("div")[13].innerHTML = book["toddlerSelection"];
    document.getElementById("e-ticket").getElementsByTagName("div")[15].innerHTML = "$" + y;
}

function loadSchedule() {
	var list = ["Akron, OH (CAK)", "Albany, NY (ALB)", "Allentown, PA (ABE)", "Atlantic City, NJ (ACY)", "Baltimore, MD (BWI)", "Binghamton, NY (BGM)", "Buffalo, NY (BUF)", "Charleston, WV (CRW)", "Cincinnati, OH (LUK)Clarksburg, WV (CKB)", "Cleveland, OH (CLE)", "Columbus, OH (CMH)", "Columbus, OH (LCK)", "Dayton, OH (DAY)", "Elmira, NY (ELM)", "Erie, PA (ERI)", "Farmingdale, NY (FRG)", "Hagerstown, MD (HGR)", "Harrisburg, PA (MDT)", "Huntington, WV (HTS)", "Islip, NY (ISP)", "Ithaca, NY (ITH)", "Latrobe, PA (LBE)", "Morgantown, WV (MGW)", "New York / Newark, NJ (EWR)", "New York, NY (JFK)", "New York, NY (LGA)", "Newburgh, NY (SWF)", "Niagara Falls, NY (IAG)", "Philadelphia, PA (PHL)", "Pittsburg, PA (PIT)", "Plattsburgh, NY (PBG)", "Rochester, NY (ROC)", "Salisbury, MD (SBY)", "State College, PA (SCE)", "Syracuse, NY (SYR)", "Toledo, OH (TOL)", "Trenton, NJ (TTN)", "Watertown, NY (ART)", "White Plains, NY (HPN)", "Wilkes-Barre, PA (AVP)", "Williamsport, PA (IPT)", "Wilmington, DE (ILG)", "Youngstown, OH (YNG)"];
	var hour = "9"
	var min = "00"

	function randomWord(length) {
	   var result           = '';
	   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	   var charactersLength = characters.length;
	   for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   return result;
	}

	function randomWordAlpha(length) {
	   var result           = '';
	   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	   var charactersLength = characters.length;
	   for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   return result;
	}

	function randomWordNumber(length) {
	   var result           = '';
	   var characters       = '0123456789';
	   var charactersLength = characters.length;
	   for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   return result;
	}

	for(i=0; i < 24; i++) {
		var x = getRandomInt(0, 3)
		if (x == 1) {
			min = +min + 5;
		} else if (x == 2) {
			min = +min + 10;
		}

		if (min.length == 1) {
			min += "0"
		} else if (+min > 59) {
			min = +min - 60;
			hour = +hour + 1;
			if (min.length != 1) {
				min += "0"
			}
		}

		min = min.toString();

		if (min.length == 1) {
			min += "0"
		}

		var div = document.createElement("div");
		div.className = "status-item";
		div.innerHTML = hour + ":" + min;
		document.getElementsByClassName("status-container")[0].appendChild(div);

		var item = list[Math.floor(Math.random()*list.length)];
		var item2 = item;

		while (item == item2) {
			var item2 = list[Math.floor(Math.random()*list.length)];
		}

		item = item.split("(").pop();
		item = item.substring(0, item.length - 1);
		item2 = item2.split("(").pop();
		item2 = item2.substring(0, item2.length - 1)

		var div = document.createElement("div");
		div.className = "status-item";
		div.innerHTML = item + "—" + item2;
		document.getElementsByClassName("status-container")[0].appendChild(div);

		var div = document.createElement("div");
		div.className = "status-item";
		div.innerHTML = randomWord(6);
		document.getElementsByClassName("status-container")[0].appendChild(div);

		var boarding;

		var div = document.createElement("div");
		div.className = "status-item";

		if (i < 5) {
			boarding = "Boarding at " + randomWordAlpha(1) + randomWordNumber(2);
			div.style.color = "green";
		} else if (i < 8) {
			boarding = "Go To Gate " + randomWordAlpha(1) + randomWordNumber(2);
			div.style.color = "green";
		} else {
			boarding = "Gate shown at " + (+hour + 1) + ":" + min;
		}

		div.innerHTML = boarding;
		document.getElementsByClassName("status-container")[0].appendChild(div);
	}
}

function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function loadMap() {
	var mymap = L.map('mapid').setView([41.203323, -77.194527], 6);
	var list = {"Akron, OH (CAK)": [41.0814, -81.5190], "Albany, NY (ALB)": [42.6526, -73.7562], "Allentown, PA (ABE)": [40.6505, -75.4346],"Atlantic City, NJ (ACY)": [39.4558, -74.5725], "Baltimore, MD (BWI)": [39.2904, -76.6122],"Binghamton, NY (BGM)": [42.2087, -75.9814],"Buffalo, NY (BUF)": [42.9397, -78.7295],"Charleston, WV (CRW)": [38.3714, -81.5935],
	"Cincinnati, OH (LUK)": [39.1038, -84.4294], "Clarksburg, WV (CKB)": [39.2806, -80.3445],"Cleveland, OH (CLE)": [41.4993, -81.6944],"Columbus, OH (CMH)": [39.9999, -82.8872],"Columbus, OH (LCK)": [39.8174, -82.9358],"Dayton, OH (DAY)": [39.9025, -84.2218],"Elmira, NY (ELM)": [42.0897965, -76.8077338],
	"Erie, PA (ERI)": [42.1292, -80.0851],"Farmingdale, NY (FRG)": [40.7261, -73.4168],"Hagerstown, MD (HGR)": [39.7051, -77.7312],"Harrisburg, PA (MDT)": [40.1942, -76.7577],
	"Huntington, WV (HTS)": [38.3684, -82.5578],"Islip, NY (ISP)": [40.7893, -73.0976],"Ithaca, NY (ITH)": [42.4911, -76.4585],
	"Latrobe, PA (LBE)": [40.2731, -79.4082],"Morgantown, WV (MGW)": [39.6453, -79.9203],"New York / Newark, NJ (EWR)": [40.6895, -74.1745],"New York, NY (JFK)": [40.6413, -73.7781],"New York, NY (LGA)": [40.7769, -73.8740],
	"Newburgh, NY (SWF)": [41.4984, -74.1009],"Niagara Falls, NY (IAG)": [43.1086, -78.9471],"Philadelphia, PA (PHL)": [39.8744, -75.2424],"Pittsburg, PA (PIT)": [40.4958, -80.2413],"Plattsburgh, NY (PBG)": [44.6521, -73.4679],"Rochester, NY (ROC)": [43.1225, -77.6666],
	"Salisbury, MD (SBY)": [38.3403, -75.5103],"State College, PA (SCE)": [40.7934, -77.8600],"Syracuse, NY (SYR)": [43.0481, -76.1474],"Toledo, OH (TOL)": [41.5878, -83.8091],"Trenton, NJ (TTN)": [40.2770, -74.8180],"Watertown, NY (ART)": [43.974785, -75.910759],"White Plains, NY (HPN)": [41.0683, -73.7087],
	"Wilkes-Barre, PA (AVP)": [41.3378, -75.7238],"Williamsport, PA (IPT)": [41.2452, -76.9188],
	"Wilmington, DE (ILG)": [39.6802, -75.6035],
	"Youngstown, OH (YNG)": [41.2575, -80.6672]
	};

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		minZoom: 4,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
	}).addTo(mymap);

	for (var i=0; i < Object.keys(list).length; i++) {
		var x = L.marker(Object.values(list)[i]);
		x.bindPopup(Object.keys(list)[i]);
		x.addTo(mymap);
	}
}

function chipSelection(x) {
    document.getElementsByClassName("chip")[0].setAttribute("selected", "false");
    document.getElementsByClassName("chip")[1].setAttribute("selected", "false");
    document.getElementsByClassName("chip")[2].setAttribute("selected", "false");
    document.getElementsByClassName("chip")[3].setAttribute("selected", "false");
    document.getElementsByClassName("chip")[4].setAttribute("selected", "false");   
    document.getElementsByClassName("chip")[5].setAttribute("selected", "false");   
    x.setAttribute("selected", "true");

    document.getElementsByClassName("careerSvg")[0].setAttribute("width", "24px");
    document.getElementsByClassName("careerSvg")[1].setAttribute("width", "24px");
    document.getElementsByClassName("careerSvg")[2].setAttribute("width", "24px");

    document.getElementsByClassName("careerParent")[0].classList.add('pre-animation');
    document.getElementsByClassName("careerParent")[1].classList.add('pre-animation');
    document.getElementsByClassName("careerParent")[2].classList.add('pre-animation');
    setTimeout(function(){

        document.getElementsByClassName("careerSvg")[0].setAttribute("viewBox", "0 0 512 512");
        document.getElementsByClassName("careerSvg")[1].setAttribute("viewBox", "0 0 512 512");
        document.getElementsByClassName("careerSvg")[2].setAttribute("viewBox", "0 0 512 512");

        document.getElementsByClassName("careerParent")[0].classList.remove('pre-animation');
        document.getElementsByClassName("careerParent")[1].classList.remove('pre-animation');
        document.getElementsByClassName("careerParent")[2].classList.remove('pre-animation');

        if (x.innerHTML == "Featured") {
            document.getElementsByClassName("careerSvg")[0].innerHTML = '<path d="M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z" class=""></path>';
            document.getElementsByClassName("careerTitle")[0].innerHTML = "Pilot, First Captain";
            document.getElementsByClassName("careerPara")[0].innerHTML = "Responsible for the operation of the aircraft and the safety of the plane and passengers.";

            document.getElementsByClassName("careerSvg")[1].innerHTML = '<path d="M296 464h-64V346.78l176.74-176.73c15.52-15.52 4.53-42.05-17.42-42.05H24.68c-21.95 0-32.94 26.53-17.42 42.05L184 346.78V464h-64c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40zM81.1 176h253.8L208 302.9 81.1 176zM432 0c-62.61 0-115.35 40.2-135.18 96h52.54c16.65-28.55 47.27-48 82.64-48 52.93 0 96 43.06 96 96s-43.07 96-96 96c-14.04 0-27.29-3.2-39.32-8.64l-35.26 35.26C379.23 279.92 404.59 288 432 288c79.53 0 144-64.47 144-144S511.53 0 432 0z"></path>'
            document.getElementsByClassName("careerSvg")[1].setAttribute("viewBox", "0 0 640 512");
            document.getElementsByClassName("careerTitle")[1].innerHTML = "Flight Attendant";
            document.getElementsByClassName("careerPara")[1].innerHTML = "Primary job is keeping airline passengers and crew safe.";

            document.getElementsByClassName("careerSvg")[2].innerHTML = '<path d="M464 128h-80V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM176 80h160v48H176V80zM48 432V176h80v256H48zm128 0V176h160v256H176zm288 0h-80V176h80v256z" class=""></path>';
            document.getElementsByClassName("careerTitle")[2].innerHTML = "Ramp Service Agent";
            document.getElementsByClassName("careerPara")[2].innerHTML = "Loads and unloads suitcases or luggage, and other cargo for transport via aircraft.";

        } else if (x.innerHTML == "Aircrew") {
            document.getElementsByClassName("careerSvg")[0].innerHTML = '<path d="M306.5 186.6l-5.7-42.6H328c13.2 0 24-10.8 24-24V24c0-13.2-10.8-24-24-24H56C42.8 0 32 10.8 32 24v96c0 13.2 10.8 24 24 24h27.2l-5.7 42.6C29.6 219.4 0 270.7 0 328c0 13.2 10.8 24 24 24h144v104c0 .9.1 1.7.4 2.5l16 48c2.4 7.3 12.8 7.3 15.2 0l16-48c.3-.8.4-1.7.4-2.5V352h144c13.2 0 24-10.8 24-24 0-57.3-29.6-108.6-77.5-141.4zM50.5 304c8.3-38.5 35.6-70 71.5-87.8L138 96H80V48h224v48h-58l16 120.2c35.8 17.8 63.2 49.4 71.5 87.8z" class=""></path>';
            document.getElementsByClassName("careerTitle")[0].innerHTML = "Coordinator, Flight Service";
            document.getElementsByClassName("careerPara")[0].innerHTML = "Prepare trip itineraries for flight crews and coordinate all the necessary logistics.";

            document.getElementsByClassName("careerSvg")[1].innerHTML = '<path d="M226.79 342.02C199 342.02 192.02 352 160 352c-31.97 0-38.95-9.98-66.79-9.98C21.12 342.02 0 403 0 434.67V472c0 22.09 17.91 40 40 40h240c22.09 0 40-17.91 40-40v-37.33c0-42.72-30.58-92.65-93.21-92.65zM272 464H48v-29.33c0-14.01 8.15-44.65 45.21-44.65 17.24 0 29.56 9.98 66.79 9.98 37.37 0 49.49-9.98 66.79-9.98 37.02 0 45.21 30.58 45.21 44.65V464zM160 320c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zm0-144c26.47 0 48 21.53 48 48s-21.53 48-48 48-48-21.53-48-48 21.53-48 48-48zM592 0H208c-26.47 0-48 22.25-48 49.59V96c9.69 0 32.27 3.13 48 9.52V48h384v320h-48v-48c0-17.67-14.33-32-32-32H384c-17.67 0-32 14.33-32 32v96h240c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0zm-96 368h-96v-32h96v32z" class=""></path>';
            document.getElementsByClassName("careerSvg")[1].setAttribute("viewBox", "0 0 640 512");
            document.getElementsByClassName("careerTitle")[1].innerHTML = "Flight Simulator Instructor";
            document.getElementsByClassName("careerPara")[1].innerHTML = " Conducts flight training in the flight training device (FTD), full flight simulator and classroom ground training.";

            document.getElementsByClassName("careerSvg")[2].innerHTML = '<path d="M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z" class=""></path>';
            document.getElementsByClassName("careerTitle")[2].innerHTML = "Pilot, First Captain";
            document.getElementsByClassName("careerPara")[2].innerHTML = "Responsible for the operation of the aircraft and the safety of the plane and passengers.";

        } else if (x.innerHTML == "Airport Services") {
            document.getElementsByClassName("careerSvg")[0].innerHTML = '<path d="M464 128h-80V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM176 80h160v48H176V80zM48 432V176h80v256H48zm128 0V176h160v256H176zm288 0h-80V176h80v256z" class=""></path>';
            document.getElementsByClassName("careerTitle")[0].innerHTML = "Ramp Service Agent";
            document.getElementsByClassName("careerPara")[0].innerHTML = "Loads and unloads suitcases or luggage, and other cargo for transport via aircraft.";

            document.getElementsByClassName("careerSvg")[1].innerHTML = '<path d="M224 96.1v48.8l29.7 29.7c-6.8-34.8 3.5-70.3 28.5-95.3 20.3-20.3 47.2-31.2 75-31.2h1.2L301 105.3l15.1 90.6 90.6 15.1 57.3-57.3c.3 28.3-10.6 55.5-31.2 76.1-9.3 9.3-20.2 16.4-31.8 21.6 1.8 1.6 3.9 2.9 5.6 4.6l30.7 30.7c10.5-6.3 20.5-13.9 29.4-22.9 38.1-38.1 53.7-94.3 40.7-146.6C504.4 105 495 95.4 483 92c-12.2-3.4-25.2.1-34 9l-58.7 58.6-32.4-5.4-5.4-32.4 58.6-58.6c8.9-8.9 12.3-21.9 8.9-34-3.3-12.1-13-21.5-25.2-24.5-53.2-13.2-107.9 2-146.6 40.6C238 55.5 229.7 67 222.9 79.2l1.1.8v16.1zM106 454c-12.8 12.8-35.3 12.8-48.1 0-6.4-6.4-10-15-10-24 0-9.1 3.5-17.6 10-24l134.4-134.4-33.9-33.9L24 372C8.5 387.5 0 408.1 0 430s8.5 42.5 24 58 36.1 24 58 24 42.5-8.5 58-24l100.9-100.9c-9.7-15.8-15.2-33.8-15.7-52.1L106 454zm395.1-58.3L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7z" class=""></path>'
            document.getElementsByClassName("careerTitle")[1].innerHTML = "Hangar Avionics Technician";
            document.getElementsByClassName("careerPara")[1].innerHTML = "Inspect, test, adjust and repair aircraft communication, navigation and flight control systems.";

            document.getElementsByClassName("careerSvg")[2].innerHTML = '<path d="M224 96.1v48.8l29.7 29.7c-6.8-34.8 3.5-70.3 28.5-95.3 20.3-20.3 47.2-31.2 75-31.2h1.2L301 105.3l15.1 90.6 90.6 15.1 57.3-57.3c.3 28.3-10.6 55.5-31.2 76.1-9.3 9.3-20.2 16.4-31.8 21.6 1.8 1.6 3.9 2.9 5.6 4.6l30.7 30.7c10.5-6.3 20.5-13.9 29.4-22.9 38.1-38.1 53.7-94.3 40.7-146.6C504.4 105 495 95.4 483 92c-12.2-3.4-25.2.1-34 9l-58.7 58.6-32.4-5.4-5.4-32.4 58.6-58.6c8.9-8.9 12.3-21.9 8.9-34-3.3-12.1-13-21.5-25.2-24.5-53.2-13.2-107.9 2-146.6 40.6C238 55.5 229.7 67 222.9 79.2l1.1.8v16.1zM106 454c-12.8 12.8-35.3 12.8-48.1 0-6.4-6.4-10-15-10-24 0-9.1 3.5-17.6 10-24l134.4-134.4-33.9-33.9L24 372C8.5 387.5 0 408.1 0 430s8.5 42.5 24 58 36.1 24 58 24 42.5-8.5 58-24l100.9-100.9c-9.7-15.8-15.2-33.8-15.7-52.1L106 454zm395.1-58.3L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7z" class=""></path>'
            document.getElementsByClassName("careerTitle")[2].innerHTML = "Maintenance Technician";
            document.getElementsByClassName("careerPara")[2].innerHTML = "Service aircrafts in accordance with FAA requirements to assure that all work is accomplished in a safe manner.";

        } else if (x.innerHTML == "Corporate") {
            document.getElementsByClassName("careerSvg")[0].innerHTML = '<path d="M416 320h-64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zm-16 144h-32v-96h32v96zm176-272h-64c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V224c0-17.67-14.33-32-32-32zm-16 272h-32V240h32v224zM256 192h-64c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V224c0-17.67-14.33-32-32-32zm-16 272h-32V240h32v224zM96 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM80 464H48v-64h32v64zM64 256c26.51 0 48-21.49 48-48 0-4.27-.74-8.34-1.78-12.28l101.5-101.5C215.66 95.26 219.73 96 224 96c6.15 0 11.97-1.26 17.38-3.37l95.34 76.27c-.35 2.33-.71 4.67-.71 7.1 0 26.51 21.49 48 48 48s48-21.49 48-48c0-2.43-.37-4.76-.71-7.09l95.34-76.27C532.03 94.74 537.85 96 544 96c26.51 0 48-21.49 48-48S570.51 0 544 0s-48 21.49-48 48c0 2.43.37 4.76.71 7.09l-95.34 76.27c-5.4-2.11-11.23-3.37-17.38-3.37s-11.97 1.26-17.38 3.37L271.29 55.1c.35-2.33.71-4.67.71-7.1 0-26.51-21.49-48-48-48s-48 21.49-48 48c0 4.27.74 8.34 1.78 12.28l-101.5 101.5C72.34 160.74 68.27 160 64 160c-26.51 0-48 21.49-48 48s21.49 48 48 48z" class=""></path>';
            document.getElementsByClassName("careerSvg")[0].setAttribute("viewBox", "0 0 608 512");
            document.getElementsByClassName("careerTitle")[0].innerHTML = "Director Financial Reporting";
            document.getElementsByClassName("careerPara")[0].innerHTML = "Manages the long-term strategy and oversees the financial reporting and corporate accounting operations and strategy.";

            document.getElementsByClassName("careerSvg")[1].innerHTML = '<path d="M496 232H208a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16zM64.3 368C38 368 16 389.5 16 416s22 48 48.3 48a48 48 0 0 0 0-96zm75.26-172.51a12.09 12.09 0 0 0-17 0l-63.66 63.3-22.68-21.94a12 12 0 0 0-17 0L3.53 252.43a11.86 11.86 0 0 0 0 16.89L51 316.51a12.82 12.82 0 0 0 17.58 0l15.7-15.59 72.17-71.74a11.86 11.86 0 0 0 .1-16.8zm0-160a12 12 0 0 0-17 0L58.91 98.65 36.22 76.58a12.07 12.07 0 0 0-17 0L3.53 92.26a11.93 11.93 0 0 0 0 16.95l47.57 47.28a12.79 12.79 0 0 0 17.6 0l15.59-15.58 72.17-72a12.05 12.05 0 0 0 .1-17z" class=""></path>'
            document.getElementsByClassName("careerTitle")[1].innerHTML = "Senior Product Manager";
            document.getElementsByClassName("careerPara")[1].innerHTML = "Responsible for setting the product vision, roadmap and establishing a well-refined backlog to achieve business objectives.";

            document.getElementsByClassName("careerSvg")[2].innerHTML = '<path d="M44.05 320.68l14.41 6.41A113 113 0 0 0 32.07 400v32h48v-32a65.49 65.49 0 0 1 36.18-58.57L154.36 318a39.31 39.31 0 0 0 21.71-35.15v-58.78l-15.27 9.06a19.64 19.64 0 0 0-10.26 12.8L143 271a26.2 26.2 0 0 1-15.35 16.78L117.17 292a26.12 26.12 0 0 1-20.36-.38l-33.26-14.8A26.21 26.21 0 0 1 48 252.88V140.53a19.67 19.67 0 0 1 5.75-13.9l7.34-7.34L49.46 96A14 14 0 0 1 48 89.82 9.82 9.82 0 0 1 57.82 80h105.09c86.76 0 157 70.37 157 157.17V432h48V237.17C367.93 124 276 32 162.91 32H57.82A57.89 57.89 0 0 0 0 89.82a62.22 62.22 0 0 0 5.15 24.72 67.51 67.51 0 0 0-5.15 26v112.34a74.26 74.26 0 0 0 44.05 67.8zM80.07 164a20 20 0 1 0 20-20 20 20 0 0 0-20 20zM368 464H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z" class=""></path>'
            document.getElementsByClassName("careerTitle")[2].innerHTML = "Network Strategy Analyst";
            document.getElementsByClassName("careerPara")[2].innerHTML = "Conducts economic evaluations of the Alaska Airlines network and determines operational feasibility by finding schedule change solutions.";

        } else if (x.innerHTML == "Customer Support") {
            document.getElementsByClassName("careerSvg")[0].innerHTML = '<path d="M496 232H208a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16zM64.3 368C38 368 16 389.5 16 416s22 48 48.3 48a48 48 0 0 0 0-96zm75.26-172.51a12.09 12.09 0 0 0-17 0l-63.66 63.3-22.68-21.94a12 12 0 0 0-17 0L3.53 252.43a11.86 11.86 0 0 0 0 16.89L51 316.51a12.82 12.82 0 0 0 17.58 0l15.7-15.59 72.17-71.74a11.86 11.86 0 0 0 .1-16.8zm0-160a12 12 0 0 0-17 0L58.91 98.65 36.22 76.58a12.07 12.07 0 0 0-17 0L3.53 92.26a11.93 11.93 0 0 0 0 16.95l47.57 47.28a12.79 12.79 0 0 0 17.6 0l15.59-15.58 72.17-72a12.05 12.05 0 0 0 .1-17z" class=""></path>';
            document.getElementsByClassName("careerTitle")[0].innerHTML = "Customer Services Supervisor";
            document.getElementsByClassName("careerPara")[0].innerHTML = "Supervises the activities of all Customer Service Agents in scheduling, training, attendance, discipline and performance.";

            document.getElementsByClassName("careerSvg")[1].innerHTML = '<path d="M320 352h-4.7c-12.15 0-24 2.9-35.5 6.8a173.73 173.73 0 0 1-111.63 0c-11.49-3.9-23.3-6.78-35.43-6.78H128A128 128 0 0 0 0 480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32 128 128 0 0 0-128-128zM49.61 464A80.14 80.14 0 0 1 128 400h4.74c5.12 0 11.49 1.35 20 4.24a221.75 221.75 0 0 0 142.42 0c8.6-2.91 15-4.27 20.11-4.27H320a80.14 80.14 0 0 1 78.39 64zm5.72-240a23.36 23.36 0 0 0 23.34-23.33V192c0-80.14 65.19-145.33 145.33-145.33S369.33 111.86 369.33 192v12.67a68.74 68.74 0 0 1-68.66 68.66h-23.5a38.74 38.74 0 0 0-37.84-30.66h-30.66a38.67 38.67 0 1 0 0 77.33h92A115.46 115.46 0 0 0 416 204.67V192C416 86.13 329.87 0 224 0S32 86.13 32 192v8.67A23.36 23.36 0 0 0 55.33 224zM224 128a64.07 64.07 0 0 1 64 64 63.21 63.21 0 0 1-8.76 31.73c7 4.86 13.41 10.55 18.29 17.6h3.14c12.69 0 23.35-6.88 29.94-16.71 3.18-10.39 5.39-21.19 5.39-32.62a112 112 0 0 0-224 0c0 28.2 10.78 53.66 28 73.35a70.73 70.73 0 0 1 28.54-42.05A63.22 63.22 0 0 1 160 192a64.07 64.07 0 0 1 64-64z" class=""></path>'
            document.getElementsByClassName("careerTitle")[1].innerHTML = "Customer Service Agent";
            document.getElementsByClassName("careerPara")[1].innerHTML = "Responsible for assisting customers by answering inquiries, ticketing, checking-in passengers, and boarding flights.";

            document.getElementsByClassName("careerSvg")[2].innerHTML = '<path d="M320 352h-4.7c-12.15 0-24 2.9-35.5 6.8a173.73 173.73 0 0 1-111.63 0c-11.49-3.9-23.3-6.78-35.43-6.78H128A128 128 0 0 0 0 480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32 128 128 0 0 0-128-128zM49.61 464A80.14 80.14 0 0 1 128 400h4.74c5.12 0 11.49 1.35 20 4.24a221.75 221.75 0 0 0 142.42 0c8.6-2.91 15-4.27 20.11-4.27H320a80.14 80.14 0 0 1 78.39 64zm5.72-240a23.36 23.36 0 0 0 23.34-23.33V192c0-80.14 65.19-145.33 145.33-145.33S369.33 111.86 369.33 192v12.67a68.74 68.74 0 0 1-68.66 68.66h-23.5a38.74 38.74 0 0 0-37.84-30.66h-30.66a38.67 38.67 0 1 0 0 77.33h92A115.46 115.46 0 0 0 416 204.67V192C416 86.13 329.87 0 224 0S32 86.13 32 192v8.67A23.36 23.36 0 0 0 55.33 224zM224 128a64.07 64.07 0 0 1 64 64 63.21 63.21 0 0 1-8.76 31.73c7 4.86 13.41 10.55 18.29 17.6h3.14c12.69 0 23.35-6.88 29.94-16.71 3.18-10.39 5.39-21.19 5.39-32.62a112 112 0 0 0-224 0c0 28.2 10.78 53.66 28 73.35a70.73 70.73 0 0 1 28.54-42.05A63.22 63.22 0 0 1 160 192a64.07 64.07 0 0 1 64-64z" class=""></path>'
            document.getElementsByClassName("careerTitle")[2].innerHTML = "Customer Service, Part-time";
            document.getElementsByClassName("careerPara")[2].innerHTML = "Responsible for assisting customers by answering inquiries, ticketing, checking-in passengers, and boarding flights.";

        } else if (x.innerHTML == "Software") {
            document.getElementsByClassName("careerSvg")[0].innerHTML = '<path d="M104 272h192v48h48v-48h192v48h48v-57.59c0-21.17-17.22-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 8.84 3.58 16.84 9.37 22.63S247.16 160 256 160h40v64H94.41C73.22 224 56 241.23 56 262.41V320h48v-48zm168-160V48h96v64h-96zm336 240h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-16 112h-64v-64h64v64zM368 352h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-16 112h-64v-64h64v64zM128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-16 112H48v-64h64v64z" class=""></path>';
            document.getElementsByClassName("careerSvg")[0].setAttribute("viewBox", "0 0 640 512");
            document.getElementsByClassName("careerTitle")[0].innerHTML = "Senior Solutions Architect";
            document.getElementsByClassName("careerPara")[0].innerHTML = "Defines the long-term strategy and leads in the design and implementation of technology solutions across the IT division.";

            document.getElementsByClassName("careerSvg")[1].innerHTML = '<path d="M395.5 267.5l-99-99c-4.7-4.7-12.3-4.7-17 0l-99 99c-7.6 7.6-2.2 20.5 8.5 20.5h67v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-84h67c10.7 0 16.1-12.9 8.5-20.5zm148.2-67.4C539.7 142.1 491.4 96 432 96c-7.6 0-15.1.8-22.4 2.3C377.7 58.3 328.1 32 272 32c-84.6 0-155.5 59.7-172.3 139.8C39.9 196.1 0 254.4 0 320c0 88.4 71.6 160 160 160h336c79.5 0 144-64.5 144-144 0-61.8-39.2-115.8-96.3-135.9zM496 432H160c-61.9 0-112-50.1-112-112 0-56.4 41.7-103.1 96-110.9V208c0-70.7 57.3-128 128-128 53.5 0 99.3 32.8 118.4 79.4 11.2-9.6 25.7-15.4 41.6-15.4 35.3 0 64 28.7 64 64 0 11.8-3.2 22.9-8.8 32.4 2.9-.3 5.9-.4 8.8-.4 53 0 96 43 96 96s-43 96-96 96z" class=""></path>'
            document.getElementsByClassName("careerSvg")[1].setAttribute("viewBox", "0 0 640 512");
            document.getElementsByClassName("careerTitle")[1].innerHTML = "Cloud Platforms Manager";
            document.getElementsByClassName("careerPara")[1].innerHTML = "Leads a team responsible for Liberty's enterprise server, storage and application delivery platforms.";

            document.getElementsByClassName("careerSvg")[2].innerHTML = '<path d="M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z" class=""></path>'
            document.getElementsByClassName("careerSvg")[2].setAttribute("viewBox", "0 0 576 512");
            document.getElementsByClassName("careerTitle")[2].innerHTML = "Software Developer Engineer";
            document.getElementsByClassName("careerPara")[2].innerHTML = "Continually seek to improve applications including system performance, functionality, code efficiency, and code defects.";
 

        }

    },300)
}