import { CheckCircledIcon, CircleIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { useCoreStore } from '../../../lib';
import clsx from 'clsx';

export const ListShard = () => {
  const todoList = useCoreStore((state) => state.todoList);
  const { handleCompleteTodo, handleUpdateTodo, handleResetTodoList, handleDeleteTodo } = useCoreStore();

  console.log('###', todoList);
  return (
    <>
      {todoList.length > 0 && (
        <div className="bg-zinc-900/30 rounded-md p-4 sm:backdrop-filter sm:backdrop-blur-lg break-normal">
          {todoList.map((todo) => (
            <div className="flex gap-2 w-[100%] " key={todo.id}>
              <button onClick={() => todo.label !== '' && handleCompleteTodo(todo.id)} className="flex mt-[2px] h-fit">
                {todo.isCompleted ? (
                  <CheckCircledIcon className="text-emerald-500 w-5 h-5" />
                ) : (
                  <CircleIcon
                    className={clsx('text-gray-400 w-5 h-5', todo.label === '' && 'cursor-not-allowed opacity-50')}
                  />
                )}
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)} className="flex mt-[2px] h-fit" key={todo.id}>
                <CrossCircledIcon
                  className={clsx('text-red-400 w-5 h-5', todo.label === '' && 'cursor-not-allowed opacity-50')}
                />
              </button>

              <textarea
                placeholder="new todo"
                readOnly={todo.isCompleted}
                className={clsx(
                  'bg-transparent outline-none capitalize w-full resize-none transition-all',
                  todo.isCompleted && 'line-through opacity-40'
                )}
                value={todo.label}
                onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      )}

      <button className="w-fit flex opacity-50" onClick={handleResetTodoList}>
        reset
      </button>
    </>
  );
};
