const React = require('react');
const BarCode = require('./BarCode');
const QrCode = require('./QrCode');
const data = require('./data');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Page">
          <h1>Products</h1>
          {data.products.map(function(value) {
            return <BarCode value={value} />;
          })}
        </div>
        <div className="Page">
          <h1>Baskets</h1>
          {data.baskets.map(function(value) {
            return <QrCode value={value} />;
          })}
        </div>
        <div className="Page">
          <h1>Tote bins</h1>
          {data.toteBins.map(function(value) {
            return <QrCode value={value} />;
          })}
        </div>
        <div className="Page">
          <h1>Shelves</h1>
          {data.shelves.map(function(value) {
            return <QrCode value={value} />;
          })}
        </div>
      </div>
    );
  }
}

module.exports = App;
