import { TodoListItem } from './'

function TodoList({ items, filter, onCheckTask }) {
    return (
        <ul className="todoList">
            {
                filter.isActiveFilter ?
                    items.filter((el) => el.isCompleted === false).map((item) => {
                        return <TodoListItem key={item.id} item={item} onCheckTask={onCheckTask} />
                    })

                    :

                    filter.isCompletedFilter ?
                        items.filter((el) => el.isCompleted === true).map((item) => {
                            return <TodoListItem key={item.id} item={item} onCheckTask={onCheckTask} />
                        })

                        :

                        items.map((item) => {
                            return <TodoListItem key={item.id} item={item} onCheckTask={onCheckTask} />
                        })
            }
        </ul>
    )
}

export default TodoList