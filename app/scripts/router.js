var React = require('react');
var ReactDom = require('react-dom');
var Backbone = require('backbone');

var HomeNavigator = require('./components/main_view.jsx').HomeNavigator;
var MenuContainer = require('./components/menu_view.jsx').MenuContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'menu/': 'menu'
  },
  index: function(){
    ReactDom.render(
      React.createElement(HomeNavigator, {router: this}),
      document.getElementById('app')
    );
  },
  menu: function(){
    ReactDom.render(
      React.createElement(MenuContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
