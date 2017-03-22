export const addTodo = (todo) => ({ type: 'todos/ADD_TODO', payload: todo })

export const updateTodoText = (todoText) => ({ type: 'todos/UPDATE_TODO_TEXT', payload: todoText })

export const completeTodo = (todoId) => ({ type: 'todos/COMPLETE_TODO', payload: todoId })

export const deleteTodo = (todoId) => ({ type: 'todos/DELETE_TODO', payload: todoId })

export function CompleteTodo(todoId) {
	return (dispatch) => {
		dispatch(updateTodoText());
	}
}
export function deleteTodo(todoId) {
	return (dispatch) => {
		dispatch(updateTodoText());
	}
}