



function TodoFilter({ items, filter, onClearTasks, onActiveFilter, onCompletedFilter, onAllFilter }) {

    return (
        <div className="todoFilter">
            <div className="todoFilter__inner">
                <span className="todoFilter__itemsLeft">{`${items.filter((el) => el.isCompleted === false).length} items left`}</span>
            </div>
            <div className="todoFilter__inner">
                <button onClick={onAllFilter} className={filter.isAllFilter ? "todoFilter__allBtn button active" : "todoFilter__allBtn button"}>All</button>
                <button onClick={onActiveFilter} className={filter.isActiveFilter ? "todoFilter__activeBtn button active" : "todoFilter__activeBtn button"}>Active</button>
                <button onClick={onCompletedFilter} className={filter.isCompletedFilter ? "todoFilter__completedBtn button active" : "todoFilter__completedBtn button"}>Completed</button>
            </div>
            <button className="todoFilter__clearBtn button" onClick={onClearTasks}>Clear completed</button>
        </div>
    )
}

export default TodoFilter