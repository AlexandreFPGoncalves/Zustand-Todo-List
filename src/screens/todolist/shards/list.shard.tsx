import { CheckCircledIcon, CircleIcon, TrashIcon } from '@radix-ui/react-icons';
import { useCoreStore } from '../../../lib';
import clsx from 'clsx';
import { Shards } from '../shards';

export const ListShard: React.FC = () => {
  const todoList = useCoreStore((state) => state.todoList);
  const { handleCompleteTodo, handleUpdateTodo, handleDeleteTodo } = useCoreStore();

  return (
    <>
      {todoList.length > 0 ? (
        <div className="transaction flex h-[40%] flex-col gap-2 overflow-y-scroll">
          {todoList.map((todo) => (
            <div key={todo.id} className="flex items-center gap-2 rounded bg-zinc-900 p-3 shadow-2xl">
              {todo.isCompleted ? (
                <CheckCircledIcon
                  onClick={() => handleCompleteTodo(todo.id)}
                  className="h-5 w-5 cursor-pointer text-violet-500 transition-colors hover:text-violet-600"
                />
              ) : (
                <CircleIcon
                  onClick={() => todo.label !== '' && handleCompleteTodo(todo.id)}
                  className={clsx(
                    'h-5 w-5 text-gray-400 transition-colors hover:text-violet-500',
                    todo.label && 'cursor-pointer',
                    todo.label === '' && 'cursor-not-allowed opacity-50'
                  )}
                />
              )}

              <input
                placeholder="new todo"
                type="text"
                readOnly={todo.isCompleted}
                className={clsx(
                  'w-full bg-transparent capitalize outline-none transition-colors',
                  todo.isCompleted && 'line-through opacity-50'
                )}
                value={todo.label}
                onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
              />

              <TrashIcon
                onClick={() => handleDeleteTodo(todo.id)}
                className={'h-5 w-5 cursor-pointer text-red-400 hover:text-red-500'}
              />
            </div>
          ))}
        </div>
      ) : (
        <Shards.EmptySpaceShard />
      )}
    </>
  );
};
