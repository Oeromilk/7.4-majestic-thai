var React = require('react');

var TemplateComponent = React.createClass({
  render: function(){
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Majestic Thai</a>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
});

module.exports = {
  TemplateComponent: TemplateComponent
};
