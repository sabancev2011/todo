import { Form, TodoList, TodoFilter } from './components';
import { useSelector, useDispatch } from "react-redux";
import { addItem, setCheckTask, setActiveFilter, setAllFilter, setClearTasks, setCompletedFilter } from './redux/todoActions';


function App() {

  let dispatch = useDispatch();
  let { items, filter } = useSelector((state) => state)

  let onAddItem = (item) => {
    dispatch(addItem(item))
  }

  let onCheckTask = (id) => {
    dispatch(setCheckTask(id))
  }

  let onActiveFilter = () => {
    dispatch(setActiveFilter())
  }

  let onCompletedFilter = () => {
    dispatch(setCompletedFilter())
  }

  let onAllFilter = () => {
    dispatch(setAllFilter())
  }

  let onClearTasks = () => {
    dispatch(setClearTasks())
  }

  return (
    <main className="todo">
      <div className="todo__wrapper">
        <h1 className="todo__title">todos</h1>
        <div className="todo__inner">
          <Form onAddItem={onAddItem} />
          <TodoList items={items} filter={filter} onCheckTask={onCheckTask} />
          <TodoFilter items={items} filter={filter} onClearTasks={onClearTasks} onActiveFilter={onActiveFilter} onCompletedFilter={onCompletedFilter} onAllFilter={onAllFilter} />
        </div>
      </div>
    </main>
  );
}

export default App;
