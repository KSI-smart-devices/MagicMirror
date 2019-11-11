const months = [
	"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

const el = {
	clock: document.querySelector("#clock"),
	date:  document.querySelector("#date"),
}

const clock = {
	hour: document.querySelector("#clock-hour"),
	divider: document.querySelector("#clock-divider"),
	minute: document.querySelector("#clock-minute"),
}

function updateClock(){
	const time = new Date();
	const hour = time.getHours()
	const minute = time.getMinutes()
	clock.hour.innerText = hour;
	clock.minute.innerText = minute;
	clock.divider.classList.toggle("black")
}

function updateDate(){
	const time = new Date();
	el.date.innerText = time.getDate() + " " + months[time.getMonth()];
}

function init(){
	updateClock();
	updateDate();
	setInterval(updateClock,500);
}

init();