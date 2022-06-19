import { FcCheckmark } from 'react-icons/fc';

function TodoListItem({ item, onCheckTask }) {
    return (
        <li className="todoList__item" onClick={() => onCheckTask(item.id)}>
            <div className="todoList__itemIconWrapper">
                {
                    item.isCompleted &&
                    <FcCheckmark size="20px" />
                }
            </div>
            <span className={item.isCompleted ? "todoList__itemText isCompleted" : "todoList__itemText"}>{item.text}</span>
        </li>
    )
}

export default TodoListItem