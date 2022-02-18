import { globalReducer } from '../context/GlobalReducer';

describe('Global Reducer', () => {
  test('updates query correctly', () => {
    const initialState = {
      query: '',
      search: '',
      cart: [],
      selectedCategory: '',
    };

    const updatedQuery = globalReducer(initialState, {
      type: 'UPDATE_QUERY',
      payload: 'new-query',
    });
    expect(updatedQuery.query).toBe('new-query');
  });

  test('updates search correctly', () => {
    const initialState = {
      query: 'kitchen',
      search: '',
      cart: [],
      selectedCategory: '',
    };

    const updatedSearch = globalReducer(initialState, {
      type: 'GET_SEARCH',
      payload: initialState.query,
    });
    expect(updatedSearch.search).toBe(initialState.query);
  });

  test('filters by category correctly', () => {
    const initialState = {
      query: '',
      search: '',
      cart: [],
      selectedCategory: '',
    };

    const selectedCategory = globalReducer(initialState, {
      type: 'FILTER_BY_CATEGORY',
      payload: 'category-id',
    });
    expect(selectedCategory.selectedCategory).toBe('category-id');
  });

  test('updates cart correctly', () => {
    const initialState = {
      query: '',
      search: '',
      cart: [],
      selectedCategory: '',
    };

    const newCart = [
      {
        id: 'my-id',
        name: 'cool sofa',
        image: 'image-url',
        price: 100,
        category: 'furniture',
        stock: 22,
        amount: 1,
      },
    ];

    const updatedCart = globalReducer(initialState, {
      type: 'UPDATE_CART',
      payload: newCart,
    });
    expect(updatedCart.cart[0]).toHaveProperty('name');
  });

  test('returns default state case', () => {
    const initialState = {
      query: '',
      search: '',
      cart: [],
      selectedCategory: '',
    };

    const defaultCase = globalReducer(initialState, {
      type: null,
      payload: null,
    });
    expect(defaultCase.query).toBe('');
  });
});
