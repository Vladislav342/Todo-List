import { ITodo, IAddTodo } from '@/types/ITodo';

export async function getTodoData(): Promise<ITodo[]> {
  const fetchMemes = async (): Promise<ITodo[]> => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=10',
    );
    if (!res.ok) {
      throw new Error('Failed to get Todos');
    }
    const memes: ITodo[] = await res.json();
    return memes;
  };

  let allTodos: ITodo[] = await fetchMemes();
  return allTodos.sort((a, b) => (a.id < b.id ? 1 : -1));
}

export async function removeTodo(id: number): Promise<void | string> {
  const fetchRemoveMem = async (): Promise<void | string> => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: 'DELETE',
      },
    );

    if (!res.ok) {
      throw new Error('Failed to remove the Mem');
    }

    const result: void | string = await res.json();
    return result;
  };

  const removedMem = await fetchRemoveMem();
  return removedMem;
}

export async function createTodo({
  title,
  completed,
}: IAddTodo): Promise<ITodo> {
  const fetchNewMem = async (): Promise<ITodo> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        completed,
      }),
    });

    if (!res.ok) {
      throw new Error('Failed to create a Todo');
    }

    const todo: ITodo = await res.json();
    return todo;
  };

  const newTodo = await fetchNewMem();
  return newTodo;
}
