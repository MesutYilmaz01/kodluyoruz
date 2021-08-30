document.body.style.backgroundColor = "#212529"
setInterval(showTime,500)
let name = prompt("Adiniz")
let firstDiv = document.querySelector("div:first-child")
firstDiv.classList.add("text-center")
let img = document.createElement("img")
img.src = "https://cdn.sanity.io/images/9kdepi1d/production/65c832d202a503b15d99e628f4313782f3ef50db-300x62.png";
img.classList.add("rounded")
firstDiv.append(img)
let secondDiv = document.createElement("div")
secondDiv.classList.add("text1","text-center")
secondDiv.innerHTML = "Merhaba, "
firstDiv.append(secondDiv)
let strong = document.createElement("strong")
secondDiv.append(strong)
let span = document.createElement("span")
span.innerHTML = `${name} !`
strong.append(span)
secondDiv.innerHTML += " Hosgeldin!"
let clock = document.createElement("div")
clock.id = "myClock"
clock.classList.add("clock")
firstDiv.append(clock)
let thirdDiv = document.createElement("div")
thirdDiv.classList.add("text2","text-center")
thirdDiv.innerHTML = "tarihinde "
let strong2 = document.createElement("strong")
strong2.innerHTML = "Kodluyoruz Frontend Web Development Patikasi"
thirdDiv.append(strong2)
thirdDiv.innerHTML += "'nin Javascript bolumu 1. Odevindesiniz."
firstDiv.append(thirdDiv)
function showTime(){
	let today = new Date()
	let days = ['Pazartesi','Sali','Carsamba','Persembe','Cuma','Cumartesi','Pazar']
	if(today.getMinutes() < 10)
		minute = "0"+today.getMinutes()
	else
		minute = today.getMinutes()
	if(today.getSeconds() < 10)
		second = "0"+today.getSeconds()
	else{
		second = today.getSeconds()
	}
	let time = today.getHours() + ":" + minute + ":" + second + " " + days[today.getDay()-1]
	let div = document.querySelector("#myClock")
	div.innerHTML = time
	console.log(time)
}
