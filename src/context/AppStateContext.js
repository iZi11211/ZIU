import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useReducer } from 'react';
const initialState = {
    loading: false,
    error: null,
    success: false,
};
function reducer(state, action) {
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
const AppStateContext = createContext(null);
export const AppStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (_jsx(AppStateContext.Provider, { value: { state, dispatch }, children: children }));
};
export const useAppState = () => {
    const ctx = useContext(AppStateContext);
    if (!ctx)
        throw new Error('useAppState must be used within provider');
    return ctx;
};
