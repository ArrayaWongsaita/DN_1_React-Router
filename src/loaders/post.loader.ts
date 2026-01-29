import axios from "axios";
import type { LoaderFunctionArgs } from "react-router";
export const loadPosts = async ({ params }: LoaderFunctionArgs) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
    params: {
      _page: params.page,
      _limit: 10,
    },
  });

  return res.data;
};
