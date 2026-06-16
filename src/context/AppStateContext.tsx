import { createContext, useContext, useReducer } from 'react';

type State = {
  loading: boolean;
  error: string | null;
  success: boolean;
};

type Action =
  | { type: 'LOADING' }
  | { type: 'SUCCESS' }
  | { type: 'ERROR'; payload: string }
  | { type: 'RESET' };

const initialState: State = {
  loading: false,
  error: null,
  success: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'LOADING':
      return { loading: true, error: null, success: false };
    case 'SUCCESS':
      return { loading: false, error: null, success: true };
    case 'ERROR':
      return { loading: false, error: action.payload, success: false };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const AppStateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const AppStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within provider');
  return ctx;
};