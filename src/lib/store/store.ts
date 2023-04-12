import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { CoreStore, CoreStoreState, CoreStoreActions } from './store.types';
import { v4 as uuid } from 'uuid';

const initialState: CoreStoreState = {
  todoList: [
    { id: '1', label: 'do the dishes', isCompleted: false },
    { id: '2', label: 'walk cat', isCompleted: false },
    { id: '3', label: 'haircut', isCompleted: false },
  ],
};

const actions = (set: any): CoreStoreActions => {
  const handleCompleteTodo = (id: string) => {
    set(
      (state: CoreStoreState) => ({
        todoList: state.todoList.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)),
      }),
      false,
      'complete_todo'
    );
  };

  const handleUpdateTodo = (id: string, newLabel: string) => {
    set(
      (state: CoreStoreState) => ({
        todoList: state.todoList.map((todo) => (todo.id === id ? { ...todo, label: newLabel } : todo)),
      }),
      false,
      'update_todo'
    );
  };

  const handleNewTodo = (label: string) => {
    set(
      (state: CoreStoreState) => {
        const newTodo = {
          id: uuid(),
          label: label,
          isCompleted: false,
        };

        state.todoList = [...state.todoList, newTodo];
      },
      false,
      'new_todo'
    );
  };

  const handleCompleteAllTodos = () => {
    set(
      (state: CoreStoreState) => ({
        todoList: state.todoList.map((todo) => ({ ...todo, isCompleted: true })),
      }),
      true,
      'complete_all_todos'
    );
  };

  const handleCleanTodoList = () => {
    set(
      (state: CoreStoreState) => {
        state.todoList = [];
      },
      true,
      'clean_todo_list'
    );
  };

  const handleResetTodoList = () => {
    set(
      (state: CoreStoreState) => {
        state.todoList = initialState.todoList;
      },
      true,
      'reset_todo_list'
    );
  };

  return {
    handleCompleteTodo,
    handleUpdateTodo,
    handleNewTodo,
    handleCompleteAllTodos,
    handleCleanTodoList,
    handleResetTodoList,
  };
};

export const useCoreStore = create<CoreStore>()(
  devtools(
    immer(
      persist(
        (set) => ({
          ...initialState,
          ...actions(set),
        }),
        {
          name: 'TODO.STORE',
          storage: createJSONStorage(() => sessionStorage),
        }
      )
    ),
    {
      name: 'TODO.STORE',
    }
  )
);
