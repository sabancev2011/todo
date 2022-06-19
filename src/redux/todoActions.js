export let ADD_ITEM = "ADD_ITEM";
export let SET_CHECK_TASK = "SET_CHECK_TASK";
export let SET_ACTIVE_FILTER = "SET_ACTIVE_FILTER";
export let SET_COMPLETED_FILTER = "SET_COMPLETED_FILTER";
export let SET_ALL_FILTER = "SET_ALL_FILTER";
export let SET_CLEAR_TASKS = "SET_CLEAR_TASKS";

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
  })

export const setCheckTask = (id) => ({
    type: SET_CHECK_TASK,
    payload: id
  })

  export const setActiveFilter = () => ({
    type: SET_ACTIVE_FILTER
  })

  export const setCompletedFilter = () => ({
    type: SET_COMPLETED_FILTER
  })

 export const setAllFilter = () => ({
    type: SET_ALL_FILTER
  })

  export const setClearTasks = () => ({
    type: SET_CLEAR_TASKS
  })