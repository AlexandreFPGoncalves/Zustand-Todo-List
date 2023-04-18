import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useCoreStore } from '../../../lib';

export const InputShard: React.FC = () => {
  const { handleNewTodo } = useCoreStore();

  const [label, setLabel] = useState<string>('');

  const handleInputOnClick = (e: React.FormEvent) => {
    e.preventDefault();
    setLabel('');
    handleNewTodo(label);
  };

  const handleInputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.currentTarget.blur();
      setLabel('');
      handleNewTodo(label);
    }
  };

  return (
    <div className="static flex w-full items-center gap-2 rounded-2xl border-2 border-violet-600 p-3">
      <input
        type="text"
        className={'text-bold w-full bg-transparent font-semibold capitalize outline-none'}
        placeholder="New Todo"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        onKeyDown={handleInputOnKeyDown}
      />
      {label && (
        <PlusCircledIcon
          className="h-5 w-5 cursor-pointer transition-colors hover:text-violet-500"
          onClick={handleInputOnClick}
        />
      )}
    </div>
  );
};
