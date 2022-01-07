import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes/types';

const DOGS_API_KEY = '7bae01d4-ff93-4aac-a7cc-73f61f39b178';

const fetchDogs = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_DOGS_PENDING
    });

    try {
      axios.defaults.headers.common['x-api-key'] = DOGS_API_KEY;
      const { data } = await axios.get('https://api.thedogapi.com/v1/breeds');
      dispatch({
        type: ActionType.GET_DOGS_SUCCESS,
        payload: data
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.GET_DOGS_ERROR,
          payload: err.message
        });
      }
    }
  };
};
export default fetchDogs;
