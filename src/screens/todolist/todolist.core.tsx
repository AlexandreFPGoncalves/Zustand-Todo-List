import { Shards } from './shards';

export const TodoList: React.FC = () => {
  return (
    <div className="mx-2 flex h-screen w-screen max-w-xl flex-col">
      <div className="flex h-full w-full flex-col justify-center gap-10">
        <Shards.InputShard />
        <Shards.ListShard />
      </div>
      <Shards.FooterShard />
    </div>
  );
};
