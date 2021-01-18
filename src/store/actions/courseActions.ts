import { FETCH_COURSES, WISHLIST, WISHLIST_FILTER } from './types';

type DISPATCH = (payload: any) => void;

/**
 * Load course list and update redux state
 * @param { boolean } wishlisted whether to show only wishlisted courses
 */
export const fetchCourses = (wishlisted:boolean = false) => async (dispatch: DISPATCH /* Should use the redux thunk type */) => {
  try {
    // Fetch course
    const res = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/api/courses?wishlisted=${wishlisted}`);
    const courses = await res.json();

    // Update state only if the response is an array (othervice there were an error - Should be handled!)
    if (Array.isArray(courses)) dispatch({ type: FETCH_COURSES, payload: courses });
  } catch(error) {
    console.warn('Failed to load courses: ', error);
  }
}

/**
 * Toggle wishlist filter state
 * @param { boolean } isWishlisted Wishlist filter state
 */
export const filterWishlished = (isWishlisted: boolean = false) => async (dispatch: DISPATCH) => dispatch({ type: WISHLIST_FILTER, payload: isWishlisted })

/**
 * Wishlist a course, update local and remote state
 * @param { int } courseId The id of the course
 * @param { boolean } isWishlisted The new wishlist state of the course
 */
export const wishlistCourse = (courseId: number, isWishlisted:boolean = false) => async (dispatch: DISPATCH) => {
  dispatch({ type: WISHLIST, payload: { courseId, isWishlisted } });

  // Updating remote db
  try {
    fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/api/wishlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ course: courseId, wishlist: isWishlisted })
    });
  } catch (error) {
    console.warn('Failed to update remote database', error);
  }
}