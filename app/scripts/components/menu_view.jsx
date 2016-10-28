var React = require('react');

var TemplateComponent = require('./template.jsx').TemplateComponent;

var MenuList = React.createClass({
  render: function(){

    return (
      <div className="col-md-8 col-md-offset-2">
        <table className="table">
          <thead>
            <tr>
              <th><h3>Curry</h3></th>
            </tr>
          </thead>
          <tbody>
            <tr className="well">
              <td><h4>Item Name</h4><p>item description</p><button>price here</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
})

var MenuContainer = React.createClass({
  render: function(){
    return (
      <TemplateComponent>
        <MenuList />
      </TemplateComponent>
    );
  }
})

module.exports = {
  MenuContainer: MenuContainer
};
