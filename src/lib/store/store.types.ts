export interface CoreStoreState {
  todoList: { id: string; label: string; isCompleted: boolean }[];
}

export interface CoreStoreActions {
  handleCompleteTodo(id: string): void;
  handleUpdateTodo(id: string, newLabel: string): void;
  handleCompleteAllTodos(): void;
  handleCleanTodoList(): void;
  handleResetTodoList(): void;
}

export interface CoreStore extends CoreStoreState, CoreStoreActions {}
