import Axios from "axios";

export const fetchPosts = () => async (dispatch, getState) => {
  /* DISPATCHS THE ACTION TO THE REDUCER */
  dispatch({ type: "FETCH_POSTS_REQUEST" });

  try {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", error });
  }
};

// /* THE INNER FUNCITON IS IS ASYNC FUNCTION THAT THUNK ALLOWS US TO RETURN AS A ACTION */
// export const fetchPosts = () => async (dispatch, getState) => {
//   const response = await Axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );

//   // console.log(response.data);

//   /* We manually return the action as a object cuz we're in the async function  */
//   dispatch({
//     type: "FETCH_POSTS",
//     payload: response.data,
//   });
//};
