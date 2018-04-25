const React = require('react')
const Codes = {
  BarCode: require('./BarCode'),
  QrCode: require('./QrCode')
}
const data = require('./data')

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        {Object.keys(data).map(function (title) {
          const { codes, type } = data[title]
          const Code = Codes[type]
          return (
            <div className='Page'>
              <h1>{title}</h1>
              {codes.map(function (value) {
                return <Code value={value} />
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

module.exports = App
