const initialState = {
  allPosts: [],
  bookedPosts: [],
  loading: true
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_POSTS":
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter(p => p.booked),
        loading: false
      };
    case "BOOKED_POST":
      const allPosts = state.allPosts.map(p => {
        if (p.id === action.payload) {
          p.booked = !p.booked;
        }
        return p;
      });
      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter(p => p.booked)
      };
    case "DELETE_POST":
      return {
        ...state,
        allPosts: state.allPosts.filter(post => post.id !== action.payload),
        bookedPosts: state.bookedPosts.filter(post => post.id !== action.payload)
      };
    case "ADD_POST":
      return {
        ...state,
        allPosts: [{...action.payload}, ...state.allPosts]
      }
    default:
      return state;
  }
};
