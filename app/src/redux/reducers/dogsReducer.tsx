import { Action, ActionType } from '../actionTypes/types';

export interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

interface State {
  dogs: Breed[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  dogs: [],
  loading: false,
  error: null
};
// eslint-disable-next-line default-param-last
const dogsReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_DOGS_PENDING:
      return { loading: true, dogs: [], error: null };
    case ActionType.GET_DOGS_SUCCESS:
      return { loading: false, dogs: action.payload, error: null };
    case ActionType.GET_DOGS_ERROR:
      return { loading: false, error: action.payload, dogs: [] };

    default:
      return state;
  }
};

export default dogsReducer;
