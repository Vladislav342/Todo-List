export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IAddTodo {
  title: string;
  completed: boolean;
}
