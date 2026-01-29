import axios from "axios";
import type { LoaderFunctionArgs } from "react-router";

export const loadTodos = async (args: LoaderFunctionArgs) => {
  await new Promise((r) => setTimeout(r, 5000));

  const { request } = args;

  console.log("request.url", request.url);
  //http://localhost:5173/todo/list/1?limit=test1111&test=hi
  const url = new URL(request.url);

  const limit = Number(url.searchParams.get("limit"));
  const page = Number(url.searchParams.get("page"));
  // number | NAN

  console.log("limit", limit);

  const res = await axios.get("https://jsonplaceholder.typicode.com/todos", {
    params: {
      _page: isNaN(page) ? 1 : page,
      _limit: isNaN(limit) ? 10 : limit,
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
