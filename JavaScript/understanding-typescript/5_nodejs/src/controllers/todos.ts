import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res
    .status(201)
    .json({ message: 'TODOが作成されました', createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const newText = (req.body as { text: string }).text;

  let todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Todoが見つかりませんでした。');
  }

  TODOS[todoIndex] = new Todo(todoId, newText);

  res.json({ message: '更新しました', updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  let todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Todoが見つかりませんでした。');
  }

  TODOS.splice(todoIndex, 1);

  res.json({ message: '削除しました' });
};
