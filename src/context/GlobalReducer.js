export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return { ...state, query: action.payload };
    case 'GET_SEARCH':
      return { ...state, search: action.payload };
    case 'FILTER_BY_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'UPDATE_CART':
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
