Todos.TodoController = Ember.ObjectController.extend({
	actions: {
		editTodo: function(){
			this.set('isEditing', true)
		}
	},

	isEditing: false,

	isCompleted: function (key, value){
		var model = this.get('model');

		if (value === undefined){
			// property used as getter
			return model.get('isCompleted');
		}
		else{
			// property used as setter
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted'),

});