const React = require('react')
const QrCodeReact = require('qrcode.react')

class QrCode extends React.Component {
  render () {
    const value = this.props.value
    return (
      <div className='QrCode'>
        <QrCodeReact value={value} />
        <span>{value}</span>
      </div>
    )
  }
}

module.exports = QrCode
