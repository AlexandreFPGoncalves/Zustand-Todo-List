export interface CoreStoreState {
  todoList: { id: string; label: string; isCompleted: boolean }[];
}

export interface CoreStoreActions {
  handleCompleteTodo(id: string): void;
  handleUpdateTodo(id: string, newLabel: string): void;
  handleDeleteTodo(id: string): void;
  handleNewTodo(label: string): void;
  handleCompleteAllTodos(): void;
  handleCleanTodoList(): void;
  handleResetTodoList(): void;
}

export interface CoreStore extends CoreStoreState, CoreStoreActions {}
