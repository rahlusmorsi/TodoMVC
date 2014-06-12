Todos.TodoController = Ember.ObjectController.extend({
	actions: {
		editTodo: function(){
			this.set('isEditing', true)
		},

		acceptChanges: function(){
			this.set('isEditing', false);

			if (Ember.isEmpty(this.get('model.tile'))) {
				this.send('removeTodo');
			}
			else{
				this.get('model').save();
			}
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