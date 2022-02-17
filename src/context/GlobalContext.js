import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { globalReducer } from './GlobalReducer';
export const GlobalContext = createContext();

const initialDefaultState = {
  query: '',
  search: '',
  cart: [],
  selectedCategory: '',
};

export const GlobalProvider = ({ children }) => {
  let retrievedState = null;
  const initialState = retrievedState ?? initialDefaultState;
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node,
};
