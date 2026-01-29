import axios from "axios";
import type { LoaderFunctionArgs } from "react-router";

export const loadTodos = async (args: LoaderFunctionArgs) => {
  const { params } = args;
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos", {
    params: {
      _page: params.page || "1",
      _limit: 10,
    },
  });
  return res.data;
};

export const loadTodoById = async ({ params }: LoaderFunctionArgs) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`,
  );

  return res.data;
};

// (event)=>
// loadTodos(something)
