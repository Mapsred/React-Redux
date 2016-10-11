/**
 * Created by maps_red on 11/10/16.
 */
import * as types from '../actions/constants';

const initialState = {
    count: 0
};

export default function counter(state = initialState, action = {}) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}
