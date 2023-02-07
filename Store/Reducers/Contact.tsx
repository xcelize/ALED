import {SETCONTACTS} from '../Actions/Contact';
import {Contact} from '../../Types/Contact';

const initialState = {
  contactList: [] as Contact[],
};

function contacts(state = initialState, action: any) {
  let nextState;
  switch (action.type) {
    case SETCONTACTS: {
      nextState = {
        ...state,
        contactList: [...state.contactList, action.value],
      };
      return nextState || state;
    }
    default:
      return state;
  }
}

export default contacts;
