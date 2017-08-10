const Tram = require('tram-one')
const app = new Tram()

const header = require('./components/header')
const words = require('./components/wordArea')

const html = Tram.html({
  header, words
})

const home = (state) => {
  console.log("hello babe")
  return html`
    <div>
      <header> </header>
      <words><words>
    </div>
  `
}

app.addRoute('/', home)
app.start('.main')
