const initialState = {
   items: []
};

const actions = {
   ADD_BOOK: 'ADD_TO_CART',
   REMOVE_BOOK: 'REMOVE_FROM_CART'
}

export default (state = initialState, action) => {
   switch (action.type) {
      case actions.ADD_BOOK:
         return {
            ...state,
            items: [
               ...state.items,
               action.payload,
            ]
         };
      case actions.REMOVE_BOOK:
         return {
            ...state,
            items: state.items.filter(elem => elem.id !== action.payload)
         }
      default:
         return state;
   }
}