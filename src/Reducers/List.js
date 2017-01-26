import uuid from 'node-uuid';
import * as Actions from '~/Actions/List/List.actions';

export default (state = {items: []}, action) => {
  switch (action.type) {

  case Actions.ADD_ITEM:
    
    return {items: [...state.items, {...action.item, id: uuid.v4()}]};

  case Actions.REMOVE_ITEM:
    return {items: state.items.filter(item => item.id !== action.id)};
  
  default:
    return state;
  }
};