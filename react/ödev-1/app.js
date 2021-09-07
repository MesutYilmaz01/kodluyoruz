import app from "./lib/service.js"

console.log(app(1).then(item => console.log(item)))