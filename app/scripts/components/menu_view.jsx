var React = require('react');
var Backbone = require('backbone');

var MenuItemCollection = require('../models/menu.js').MenuItemCollection;
var MenuItem = require('../models/menu.js').MenuItem;
var TemplateComponent = require('./template.jsx').TemplateComponent;
var menuItems = require('../menu_items.js');

var OrderComponent = React.createClass({
  render: function(){
    console.log(this.props.collection);
    var orderList = this.props.collection.map(function(content){
      return (
        <tr key={content.get('id')}>
          <td>{content.get('item')}</td>
          <td>{content.get('price')}</td>
        </tr>
      )
    });
    var itemPriceArr = this.props.collection.map(function(content){
      return content.get('price');
    });
    var subtotal = itemPriceArr.reduce(function(pValue, cValue){
      return pValue + cValue;
    },0);
    console.log(subtotal);
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
              <td>${subtotal}</td>
            </tr>
          </tfoot>
          <tbody>
            {orderList}
          </tbody>
        </table>
        <button type="button" className="btn btn-primary btn-lg btn-block">Check Out</button>
      </div>
    );
  }
});

var MenuList = React.createClass({
  handleItem: function(content){
    this.props.collection.create({
      id: content.id, item: content.item, description: content.description, price: content.price
    });
    this.forceUpdate();
    console.log(this.props.collection);
  },
  render: function(){
    var self = this;
    var menuListItems = this.props.menuItems.map(function(content){
      var handleItem = this.handleItem.bind(this, content);
      return (

        <tr key={content.id}>
          <td>
            <h4>{content.item}</h4>
            <p>{content.description}</p>
            <button onClick={handleItem} type="button" className="btn btn-info">${content.price}</button>
          </td>
        </tr>
      );
    }.bind(this));
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
  getInitialState: function(){
    var collection = new MenuItemCollection();
    var model = new MenuItem();
    return {
      model: model,
      collection: collection
    };
  },
  componentWillMount: function(){
    var self = this;
    var collection = this.state.collection;
    this.state.collection.fetch().then(function(){
        self.setState({collection: collection});
    });

  },
  render: function(){
    return (
      <TemplateComponent>
        <MenuList menuItems={menuItems} collection={this.state.collection} model={this.state.model}/>
        <OrderComponent collection={this.state.collection} model={this.state.model}/>
      </TemplateComponent>
    );
  }
});

module.exports = {
  MenuContainer: MenuContainer
};
