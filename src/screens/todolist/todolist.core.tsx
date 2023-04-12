import { Shards } from './shards';

export const TodoList = () => {
  return (
    <div className="mx-4 flex flex-col w-screen gap-1 justify-center">
      <Shards.NewTodoShard />
      <Shards.ListShard />
    </div>
  );
};
