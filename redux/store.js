/*
 * @Author: heye
 * @Date: 2022-07-13 17:06:27
 * @LastEditors: heye
 * @LastEditTime: 2022-07-13 17:33:40
 * @FilePath: \new-project\redux\store.js
 * @Description:
 *
 */
import { legacy_createStore as createStore } from 'redux';

import reducer from './reducers/index';

function configureStore(initialState) {
    const store = createStore(reducer, initialState);
    return store;
}
export default configureStore;
