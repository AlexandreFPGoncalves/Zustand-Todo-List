import { images } from '../../../assets';
import { useCoreStore } from '../../../lib';

export const EmptySpaceShard: React.FC = () => {
  const handleNewTodoOnClick = useCoreStore((state) => state.handleNewTodo);

  return (
    <div className="flex h-[40%] flex-col items-center pt-[10%] text-center font-semibold">
      <img height={128} width={128} src={images.tasks} className="mb-8 ml-4" />
      <text>List is Currently Empty</text>
      <text>
        Create a New{' '}
        <span
          onClick={() => handleNewTodoOnClick('')}
          className="cursor-pointer font-bold text-violet-500 hover:text-violet-600"
        >
          To-Do
        </span>
      </text>
    </div>
  );
};
