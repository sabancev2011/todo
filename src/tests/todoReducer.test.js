import todoReducer from "../redux/todoReducer";
import { addItem, setCheckTask, setActiveFilter, setCompletedFilter, setAllFilter, setClearTasks,  } from "../redux/todoActions";


const state = {
    items: [
        { id: 1, text: 'hello1', isCompleted: false },
        { id: 2, text: 'hello2', isCompleted: false },
        { id: 3, text: 'hello3', isCompleted: false },
        { id: 4, text: 'hello4', isCompleted: false }
    ],
    filter: {
        isAllFilter: true,
        isActiveFilter: false,
        isCompletedFilter: false
    }
};

it('new task should be added', () => {
    let action = addItem({
        id: 5,
        text: 'hello5',
        isCompleted: false
    })

    let newState = todoReducer(state, action);

    expect(newState.items.length).toBe(5)
})

it('task should be toggled', () => {
    let action = setCheckTask(1)

    let newState = todoReducer(state, action);

    expect(newState.items[0].isCompleted).toBe(true)
})

it('active filter should be enabled', () => {
    let action = setActiveFilter()

    let newState = todoReducer(state, action);

    expect(newState.filter.isActiveFilter).toBe(true)
})

it('completed filter should be enabled', () => {
    let action = setCompletedFilter()

    let newState = todoReducer(state, action);

    expect(newState.filter.isCompletedFilter).toBe(true)
})

it('all filter should be enabled', () => {
    let action = setAllFilter()

    let newState = todoReducer(state, action);

    expect(newState.filter.isAllFilter).toBe(true)
})

it('all filter should be enabled', () => {
    let action = setAllFilter()

    let newState = todoReducer(state, action);

    expect(newState.filter.isAllFilter).toBe(true)
})

it('all tasks should be cleaned', () => {
    let action = setClearTasks()

    let newState = todoReducer(state, action);

    expect(newState.items.length).toBe(0)
})
