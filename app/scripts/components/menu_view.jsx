var React = require('react');
var Backbone = require('backbone');

var TemplateComponent = require('./template.jsx').TemplateComponent;
var menuItems = require('../menu_items.js');

var OrderComponent = React.createClass({
  render: function(){
    return (
      <div className="col-md-3">
        <div>Your Order</div>
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>Subtotal</td>
              <td>Overall price</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>Sample Text</td>
              <td>$9.99</td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="btn btn-primary btn-lg btn-block">Check Out</button>
      </div>
    );
  }
});

var MenuList = React.createClass({
  getInitialState: function(){
    return {
      item: '',
      price: ''
    };
  },
  handleItem: function(e){
    e.preventDefault();

    console.log(this.props);
  },
  render: function(){
    var self = this;
    var menuListItems = this.props.menuItems.map(function(content){

      return (

        <tr key={content.id}>
          <td>
            <h4>{content.item}</h4>
            <p>{content.description}</p>
            <button onClick={self.handleItem} type="button" className="btn btn-info">${content.price}</button>
          </td>
        </tr>
      );
    });
    return (
      <div className="col-md-9">
        <table className="table">
          <thead>
            <tr>
              <th><h3>Curry</h3></th>
            </tr>
          </thead>
          <tbody  className="well">
            {menuListItems}
          </tbody>
        </table>
      </div>
    );
  }
});

var MenuContainer = React.createClass({
  render: function(){
    return (
      <TemplateComponent>
        <MenuList menuItems={menuItems} />
        <OrderComponent />
      </TemplateComponent>
    );
  }
});

module.exports = {
  MenuContainer: MenuContainer
};
