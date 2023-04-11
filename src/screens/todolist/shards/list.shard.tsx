import { CheckCircledIcon, CircleIcon } from '@radix-ui/react-icons';
import { useCoreStore } from '../../../lib';
import clsx from 'clsx';

export const ListShard = () => {
  const { todoList, handleCompleteTodo, handleUpdateTodo, handleResetTodoList } = useCoreStore();

  return (
    <div className="bg-zinc-800 w-[90%] px-4 rounded-lg ">
      {todoList.map((todo) => (
        <div className="flex gap-2 w-[100%]" key={todo.id}>
          <button onClick={() => handleCompleteTodo(todo.id)}>
            {todo.isCompleted ? (
              <CheckCircledIcon className="text-emerald-500 w-5 h-5" />
            ) : (
              <CircleIcon className="text-gray-400 w-5 h-5" />
            )}
          </button>

          <input
            readOnly={todo.isCompleted}
            className={clsx('bg-transparent outline-none capitalize', todo.isCompleted && 'line-through opacity-40')}
            type="text"
            value={todo.label}
            onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
          />
        </div>
      ))}

      <button onClick={handleResetTodoList}>a</button>
    </div>
  );
};
