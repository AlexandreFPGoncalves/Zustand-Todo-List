import { CheckCircledIcon, CircleIcon, TrashIcon } from '@radix-ui/react-icons';
import { useCoreStore } from '../../../lib';
import clsx from 'clsx';

export const ListShard: React.FC = () => {
  const todoList = useCoreStore((state) => state.todoList);
  const { handleCompleteTodo, handleUpdateTodo, handleDeleteTodo } = useCoreStore();

  return (
    <div className="flex h-[40%] flex-col gap-1 overflow-y-scroll">
      {todoList.map((todo) => (
        <div key={todo.id} className="flex w-[100%] items-center gap-2 rounded bg-zinc-900 p-3 shadow-2xl">
          {todo.isCompleted ? (
            <CheckCircledIcon
              onClick={() => handleCompleteTodo(todo.id)}
              className="flex h-5 w-5 cursor-pointer text-violet-500"
            />
          ) : (
            <CircleIcon
              onClick={() => todo.label !== '' && handleCompleteTodo(todo.id)}
              className={clsx(
                'flex h-5 w-5 cursor-pointer text-gray-400',
                todo.label === '' && 'cursor-not-allowed opacity-50'
              )}
            />
          )}

          <input
            placeholder="new todo"
            type="text"
            readOnly={todo.isCompleted}
            className={clsx(
              'w-full resize-none bg-transparent capitalize outline-none transition-all',
              todo.isCompleted && 'line-through opacity-40'
            )}
            value={todo.label}
            onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
          />

          <TrashIcon onClick={() => handleDeleteTodo(todo.id)} className={'flex h-5 w-5  text-red-400'} />
        </div>
      ))}
    </div>
  );
};
