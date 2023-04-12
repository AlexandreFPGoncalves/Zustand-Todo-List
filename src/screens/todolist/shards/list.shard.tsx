import { CheckCircledIcon, CircleIcon } from '@radix-ui/react-icons';
import { useCoreStore } from '../../../lib';
import clsx from 'clsx';

export const ListShard = () => {
  const { todoList, handleCompleteTodo, handleUpdateTodo, handleResetTodoList } = useCoreStore();

  return (
    <>
      <div className="bg-zinc-900/30 rounded-md p-4 sm:backdrop-filter sm:backdrop-blur-lg break-normal">
        {todoList.map((todo) => (
          <div className="flex gap-2 w-[100%] " key={todo.id}>
            <button onClick={() => todo.label !== '' && handleCompleteTodo(todo.id)}>
              {todo.isCompleted ? (
                <CheckCircledIcon className="text-emerald-500 w-5 h-5" />
              ) : (
                <CircleIcon
                  className={clsx('text-gray-400 w-5 h-5', todo.label === '' && 'cursor-not-allowed opacity-50')}
                />
              )}
            </button>

            <input
              placeholder="new todo"
              readOnly={todo.isCompleted}
              className={clsx(
                'bg-transparent outline-none capitalize w-full transition-all',
                todo.isCompleted && 'line-through opacity-40'
              )}
              type="text"
              value={todo.label}
              onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button className="w-fit flex opacity-50" onClick={handleResetTodoList}>
        reset
      </button>
    </>
  );
};
