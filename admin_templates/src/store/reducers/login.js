import * as TYPE from './../action-types/index';
const initialState = {
    token: ''
}

const reducer = (state = initialState, { type, payload = null}) => {
    switch(type) {
      case TYPE.ADMIN_LOGIN:
        return add(state, payload);
        default:
            return state;
    }
}

function add(state, payload) {
    if (state.token.length !== 0) {
        const data = [...state.token, payload];
        return Object.assign({}, state, {data});
    }
}

export default reducer;