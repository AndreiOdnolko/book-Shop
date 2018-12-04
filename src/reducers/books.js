const initialState = {
   isReady: false,
   items: null,
};

const actions = {
   SET_BOOKS: 'SET_BOOKS',
   SET_IS_READY: 'SET_IS_READY',
}

export default (state = initialState, action) => {
   switch (action.type) {
      case actions.SET_BOOKS:
         return {
            ...state,
            items: action.payload,
            isReady: true
         };      
      case actions.SET_IS_READY:
         return {
            ...state,
            isReady: action.payload
         }
      default:
         return state;
   }
}