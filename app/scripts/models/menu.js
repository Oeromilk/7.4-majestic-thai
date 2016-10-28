var Backbone = require('backbone');

var MenuItem = Backbone.Model.extend({

});

var MenuItemCollection = Backbone.Collection.extend({
  model: MenuItem
});

module.exports = {
  MenuItem: MenuItem,
  MenuItemCollection: MenuItemCollection
};
