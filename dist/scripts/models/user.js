var UserModel = Backbone.Model.extend({
	defaults: {
		name: 'Marcus Doe',
		email: 'mdoe@gmail.com',
		role: 'Developer'
	}
});

var App = Backbone.Router.extend({

  routes: {
    "home":         "home",    
    "edit":        "edit",  
    "link": 		"search"   
  },

  