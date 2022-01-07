import { Breed } from '../reducers/dogsReducer';

// eslint-disable-next-line no-shadow
export enum ActionType {
  GET_DOGS_PENDING = 'GET_DOGS_PENDING',
  GET_DOGS_SUCCESS = 'GET_DOGS_SUCCESS',
  GET_DOGS_FAIL = 'GET_DOGS_FAIL',
  GET_DOGS_ERROR = 'GET_DOGS_ERROR'
}

interface actionPending {
  type: ActionType.GET_DOGS_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_DOGS_SUCCESS;
  payload: Breed[];
}

interface actionFail {
  type: ActionType.GET_DOGS_ERROR;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
