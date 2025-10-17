import * as z from 'zod/v4';
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;

}
export type TaskAction =
    { type: 'ADD_TODO', payload: string }
    |
    { type: 'TOGGLE_TODO', payload: number }
    |
    { type: 'DELETE_TODO', payload: number }


const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean()
});

const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number()
})

export const getTasksInitialState = (): TodoState => {

    const initialState = {
        todos: [],
        completed: 0,
        length: 0,
        pending: 0

    };

    const localStorageState = localStorage.getItem('tasks-state');
    if (!localStorageState) {
        return initialState
    }

    const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));
    if (result.error) {
        console.error(result.error);
        return initialState;
    }
    return JSON.parse(localStorageState)
}



export const taskReducer = (state: TodoState, action: TaskAction): TodoState => {


    switch (action.type) {

        case 'ADD_TODO':

            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false

            }
            const newState: TodoState = {
                ...state,
                todos: [...state.todos, newTodo]
            }
            return {
                ...newState,
                completed: newState.todos.filter((value: Todo) => value.completed).length,
                length: newState.todos.length,
                pending: newState.todos.filter((value: Todo) => !value.completed).length

            };
        case 'TOGGLE_TODO':
            const updateTodos = state.todos.map((value: Todo) => value.id === action.payload ? ({ ...value, completed: !value.completed }) : ({ ...value }));
            return {
                ...state,
                todos: [...updateTodos],
                completed: updateTodos.filter((value: Todo) => value.completed).length,
                length: updateTodos.length,
                pending: updateTodos.filter((value: Todo) => !value.completed).length

            };
        case 'DELETE_TODO':
            const afterDeletion = state.todos.filter((value: Todo) => value.id !== action.payload);
            return {
                ...state,
                todos: [...afterDeletion],
                completed: afterDeletion.filter((value: Todo) => value.completed).length,
                length: afterDeletion.length,
                pending: afterDeletion.filter((value: Todo) => !value.completed).length
            };
        default:
            return state;
    }
}