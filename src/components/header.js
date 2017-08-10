const Tram = require('tram-one')

const html = Tram.html()

const headerStyle = `
  text-align:center;
`;

module.exports = (attrs, children) => {
  return html`
    <div>
      <h2 style=${headerStyle}>
        Scrabble Word Maker
      </h2>
    </div>
  `
}
