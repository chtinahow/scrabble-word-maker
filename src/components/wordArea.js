const Tram = require('tram-one')

const html = Tram.html()

const noteStyle =`
  width: 100%;
`

module.exports = (attrs, children) => {
  return html`
    <div>
      <div>
        <textarea
          style=${noteStyle}
          rows="10"
        ></textarea>
      </div>
    </div>
  `
}
