const initialState = {
   searchQuery: '',
   filterBy: 'all'
};

const actions = {
   SET_FILTER: 'SET_FILTER',
   SET_QUERY: 'SET_QUERY'
}

export default (state = initialState, action) => {
   switch (action.type) {  
      case actions.SET_QUERY:
         return {
            ...state,
            searchQuery: action.payload,
         };    
      case actions.SET_FILTER:
         return {
            ...state,
            filterBy: action.payload,
         };
      default:
         return state;
   }
}