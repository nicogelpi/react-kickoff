import * as Actions from './List.actions';

export const AddItem = item => {
  return dispatch => {
    dispatch({ type: Actions.ADD_ITEM, item });
  };
};

export const RemoveItem = id => {
  return dispatch => {
    dispatch({ type: Actions.REMOVE_ITEM, id});
  };
};