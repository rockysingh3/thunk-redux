import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./action";

const Posts = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  /* ACTION CREATORS WILL HANDLE THE API CALL AND NOT THE COMPONENT */
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const renderPost = () => {
    if (state.loading) return <h1>Loading</h1>;

    return state.items.map((el) => {
      return <h2>{el.title}</h2>;
    });
  };

  return <div>{renderPost()}</div>;
};

export default Posts;
