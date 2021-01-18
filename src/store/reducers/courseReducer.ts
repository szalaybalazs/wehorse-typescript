import { FETCH_COURSES, WISHLIST, WISHLIST_FILTER } from '../actions/types';
import { iState } from '../../types';
// The initial redux state
const initialState: iState = {
  courseList: [],
  wishlistFilter: false,
};

// Create reducer object
// (Syntacticaly better than the switch statement, still should be split to multiple files)
const reducers = {
  [FETCH_COURSES]: (state: iState, action: any) => ({ ...state, courseList: action.payload }),
  [WISHLIST_FILTER]: (state: iState, action: any) => ({ ...state, wishlistFilter: action.payload }),
  [WISHLIST]: (state: iState, action: any) => {
    // Copy the course ist
    const courseList = [...state.courseList];
  
    // Get the index of the course in the courselist
    const index = courseList.findIndex(course => course.courseId === action.payload.courseId);
    // Check if course is in the list, and then update the list
    if (courseList[index]) courseList[index].wishListFlag = action.payload.isWishlisted;
 
    // Update local state
    return { ...state, courseList };
  }
}

const resolver = (state = initialState, action: any) => {
  if (reducers[action.type]) return reducers[action.type](state, action)
  return state;
}

export default resolver;
