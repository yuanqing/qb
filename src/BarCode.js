const React = require('react')
const jsBarCode = require('jsbarcode')

class BarCode extends React.Component {
  componentDidMount () {
    jsBarCode(this.refs.svg, this.props.value, {
      displayValue: false
    })
  }
  render () {
    const value = this.props.value
    return (
      <div className='BarCode'>
        <svg ref='svg' />
        <span>{value}</span>
      </div>
    )
  }
}

module.exports = BarCode
