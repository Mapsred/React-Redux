/**
 * Created by maps_red on 11/10/16.
 */
import * as types from './constants';

export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}
