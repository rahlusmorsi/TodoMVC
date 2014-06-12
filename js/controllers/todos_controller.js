Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo : function () {
			// get todo title set by text field
			var title = this.get('newTitle');
			if(!title.trim()){ return; }

			// create new todo model
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			// clear the new todo text field
			this.set('newTitle', '');

			// save new model
			todo.save();
		},
		
		remaining: function () {
			console.log("remaining was just called.");
			console.log(this.filterBy('isCompleted', false));
			return this.filterBy('isCompleted', false).get('length');
		}.property('@each.isCompleted'),

		inflection: function () {
			var remaining = this.get('remaining');
			return remaining === 1 ? 'item' : 'items';
		}.property('remaining')
	}
});