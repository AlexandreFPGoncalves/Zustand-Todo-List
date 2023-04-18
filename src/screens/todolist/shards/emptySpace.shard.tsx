import { images } from '../../../assets';

export const EmptySpace: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <img height={128} width={128} src={images.tasks} />
      <span
        className="text-bold w-full bg-transparent text-center font-semibold capitalize outline-none"
        style={{ marginTop: '24px' }}
      >
        No To-Dos, create a new one!
      </span>
    </div>
  );
};
