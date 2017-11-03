let defaultTodos = [];

const savedTodos = localStorage.getItem('todos');

if (savedTodos) {
	try {
		defaultTodos = JSON.parse(savedTodos);
		defaultTodos = defaultTodos.map(todo => todo); // Reset indexes
	} catch(e) {
		alert('There was a problem retrieving your saved todos');
	}
}

const todos = (state = defaultTodos, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: state.length++,
					text: action.text,
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map(todo => {
				return (todo.id === action.id)? {...todo, completed: !todo.completed} : todo;
			});
		case 'REMOVE_TODO':
			return state.filter(todo => todo.id !== action.id)
		default:
			return state;
	}
}

export default todos;