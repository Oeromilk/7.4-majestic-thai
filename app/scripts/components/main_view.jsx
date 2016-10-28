var React = require('react');
var Backbone = require('backbone');

var TemplateComponent = require('./template.jsx').TemplateComponent;

var MenuNavigator = React.createClass({
  handleNavigate: function(e){
    e.preventDefault();

    this.props.router.navigate('menu/', {trigger: true});
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">Made-to-order Thai</h2>
          <h4 className="text-center">Just a click away</h4>
          <button onClick={this.handleNavigate} type="button" className="btn btn-primary btn-lg col-md-2 col-md-offset-5">Order Now</button>
        </div>
      </div>
    );
  }
});

var HomeNavigator = React.createClass({
  render: function(){
    return (
      <TemplateComponent>
        <MenuNavigator router={this.props.router}/>
      </TemplateComponent>
    );
  }
});

module.exports = {
  HomeNavigator: HomeNavigator
};
