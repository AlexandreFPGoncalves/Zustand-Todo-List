import { Shards } from './shards';

export const TodoList: React.FC = () => {
  return (
    <div className="mx-4 flex h-full w-screen max-w-xl flex-col justify-center gap-10">
      <Shards.InputShard />
      <Shards.ListShard />
      <Shards.FooterShard />
    </div>
  );
};
