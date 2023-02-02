import { Comment } from "../Reducer";

export enum ActionType {
  GET_POST_COMMENTS_REQUEST = "GET_POST_COMMENTS_REQUEST",
  GET_POST_COMMENTS_SUCCESS = "GET_POST_COMMENTS_SUCCESS",
  GET_POST_COMMENTS_FAIL = "GET_POST_COMMENTS_FAIL",
}

interface actionRequest {
  type: ActionType.GET_POST_COMMENTS_REQUEST;
}

interface actionSuccess {
  type: ActionType.GET_POST_COMMENTS_SUCCESS;
  payload: Comment[];
}

interface actionFail {
  type: ActionType.GET_POST_COMMENTS_FAIL;
  payload: string;
}

export type Action = actionRequest | actionSuccess | actionFail;
