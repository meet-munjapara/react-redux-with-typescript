import axios from "axios";
import { Action, ActionType } from "../ActionTypes";

export const getComments = (postId: string) => {
  return async (dispatch: React.Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_POST_COMMENTS_REQUEST,
    });

    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      console.log("data:", data);
      dispatch({
        type: ActionType.GET_POST_COMMENTS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_POST_COMMENTS_FAIL,
        payload: error.message,
      });
    }
  };
};
