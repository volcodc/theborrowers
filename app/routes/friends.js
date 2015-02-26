import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		save: function(){
			console.log('+- save action in friends route');
			return true;
		},
		cancel: function(){
			console.log('+- cancel action in friends route');
			return true;
		},
		delete: function(){
			var _this = this;

			friend.destroyRecord().then(function() {
				_this.transitionTo('friends.index');
			});
		}
	}
});
