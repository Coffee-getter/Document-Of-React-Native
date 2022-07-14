/*
 * @Author: heye
 * @Date: 2022-07-13 17:06:05
 * @LastEditors: heye
 * @LastEditTime: 2022-07-14 15:22:42
 * @FilePath: \new-project\redux\reducers\cartReducer.js
 * @Description:
 *
 */
let defaultState = {
    selectedItems: {
        items: [],
        restaurantName: '',
    },
};

export let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newState = { ...state };
            newState.selectedItems = {
                items: [...newState.selectedItems.items, action.payload.item],
                restaurantName: action.payload.restaurantName,
            };
            // console.log('newState', newState);
            return newState;
        }
        case 'REMOVE_FROM_CART': {
            let newState = { ...state };
            newState.selectedItems = {
                items: [
                    ...newState.selectedItems.items.filter(
                        (item) => item.title !== action.payload.item.title,
                    ),
                ],
                restaurantName: action.payload.restaurantName,
            };
            // console.log('newState', newState);
            return newState;
        }

        default:
            return state;
    }
};
