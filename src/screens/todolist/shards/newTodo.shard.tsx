import { PlusIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useCoreStore } from '../../../lib';

export const NewTodoShard = () => {
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
    <div className="flex flex-row">
      {label && <PlusIcon className="flex align-middle mt-1 cursor-pointer" onClick={handleInputOnClick} />}
      <input
        type="text"
        className={'w-full bg-transparent outline-none'}
        placeholder="New Todo"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        onKeyDown={handleInputOnKeyDown}
      />
    </div>
  );
};
