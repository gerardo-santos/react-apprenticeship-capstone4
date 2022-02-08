export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return { ...state, query: action.payload };
    case 'GET_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
