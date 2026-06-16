export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: crypto.randomUUID(),
                    title: action.payload.title,
                    completed: false,
                    createdAt: new Date(),
                },
            ];
        case 'DELETE':
            return state.filter(todo => todo.id !== action.payload.id);
        case 'TOGGLE':
            return state.map(todo => todo.id === action.payload.id
                ? { ...todo, completed: !todo.completed }
                : todo);
        case 'EDIT':
            return state.map(todo => todo.id === action.payload.id
                ? { ...todo, title: action.payload.title }
                : todo);
        default:
            return state;
    }
};
/*//

// tailwind version
import { Todo, Action } from '../types/todo.types';

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ];

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
};

//*/ 
