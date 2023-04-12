import { useState } from 'react';
import { useCoreStore } from '../../../lib';

export const NewTodoShard = () => {
  const { handleNewTodo } = useCoreStore();

  const [label, setLabel] = useState<string>('');

  const handleInputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.currentTarget.blur();
      setLabel('');
      handleNewTodo(label);
    }
  };

  return (
    <div>
      <input
        type="text"
        className={'w-full flex justify-items-center bg-transparent outline-none capitalize'}
        placeholder="New Todo"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        onKeyDown={handleInputOnKeyDown}
      />
    </div>
  );
};
