
var dreamCountries = [
  {name: "Harry", countries:["India", "China", "Australia","New Zealand"]},
  {name: "Olivia", countries:["Mexico", "France", "Thailand", "Italy"]},
  {name: "Emma", countries:["Japan", "Greece", "Italy", "Spain"]},
  {name: "Sophia", countries:["Canada", "Japana", "Peru", "Australia"]},
  {name: "James", countries:["India", "Greece", "Portugal", "Switzerland"]}
]

var out = ''
out += `<h3>${dreamCountries[0].name}</h3><hr><br>`
out += `<ul>Dream Countries:`
out += `<li> ${dreamCountries[0].countries[0]}</li>`
out += `<li>${dreamCountries[0].countries[1]}</li>`
out += `<li>${dreamCountries[0].countries[2]}</li>`
out += `<li>${dreamCountries[0].countries[3]}</li>`
out += `<ul><br>`
out += `<h3>${dreamCountries[1].name}</h3><hr><br>`
out += `<ul>Dream Countries:`
out += `<li> ${dreamCountries[1].countries[0]}</li>`
out += `<li>${dreamCountries[1].countries[1]}</li>`
out += `<li>${dreamCountries[1].countries[2]}</li>`
out += `<li>${dreamCountries[1].countries[3]}</li>`
out += `<ul><br>`
out += `<h3>${dreamCountries[2].name}</h3><hr><br>`
out += `<ul>Dream Countries:`
out += `<li> ${dreamCountries[2].countries[0]}</li>`
out += `<li>${dreamCountries[2].countries[1]}</li>`
out += `<li>${dreamCountries[2].countries[2]}</li>`
out += `<li>${dreamCountries[2].countries[3]}</li>`
out += `<ul><br>`
out += `<h3>${dreamCountries[3].name}</h3><hr><br>`
out += `<ul>Dream Countries:`
out += `<li> ${dreamCountries[3].countries[0]}</li>`
out += `<li>${dreamCountries[3].countries[1]}</li>`
out += `<li>${dreamCountries[3].countries[2]}</li>`
out += `<li>${dreamCountries[3].countries[3]}</li>`
out += `<ul><br>`
out += `<h3>${dreamCountries[4].name}</h3><hr><br>`
out += `<ul>Dream Countries:`
out += `<li> ${dreamCountries[4].countries[0]}</li>`
out += `<li>${dreamCountries[4].countries[1]}</li>`
out += `<li>${dreamCountries[4].countries[2]}</li>`
out += `<li>${dreamCountries[4].countries[3]}</li>`
out += `<ul><br>`

document.getElementById("dreamCountries").innerHTML = out

setInterval(()=> makeTime('time'), 1000)

const makeTime = el => {
	let t = new Date()
	let h = t.getHours()
	let m = t.getMinutes()
	let s = t.getSeconds()
	let e = document.getElementById(el)
	if (e) e.innerHTML = `${nn(h)}:${nn(m)}:${nn(s)}`
}

const nn = a => a < 10 ? `0${a}` : a
