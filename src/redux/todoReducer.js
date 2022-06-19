import { ADD_ITEM, SET_CHECK_TASK, SET_ACTIVE_FILTER, SET_COMPLETED_FILTER, SET_ALL_FILTER, SET_CLEAR_TASKS } from './todoActions'

const initialState = {
    items: [],
    filter: {
        isAllFilter: true,
        isActiveFilter: false,
        isCompletedFilter: false
    }
};

const todoReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]

            };
        case SET_CHECK_TASK:
            return {
                ...state,
                items: [...state.items].map((el) => el.id === action.payload ? { ...el, isCompleted: !el.isCompleted } : el)

            };
        case SET_ACTIVE_FILTER:
            return {
                ...state,
                filter: {
                    isAllFilter: false,
                    isActiveFilter: true,
                    isCompletedFilter: false
                }
            };
        case SET_COMPLETED_FILTER:
            return {
                ...state,
                filter: {
                    isAllFilter: false,
                    isActiveFilter: false,
                    isCompletedFilter: true
                }
            };
        case SET_ALL_FILTER:
            return {
                ...state,
                filter: {
                    isAllFilter: true,
                    isActiveFilter: false,
                    isCompletedFilter: false
                }
            };
        case SET_CLEAR_TASKS:
            return {
                ...state,
                items: [],
                filter: {
                    isAllFilter: true,
                    isActiveFilter: false,
                    isCompletedFilter: false
                }
            };

        default:
            return state;
    }

}

export default todoReducer;