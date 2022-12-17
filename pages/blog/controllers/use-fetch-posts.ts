import * as React from "react";

type Data = { name: string };

type State = {
  data: Data;
  isLoading: boolean;
};

type Actions = {};

export const useFetchPosts = (): [State, Actions] => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<Data>({ name: "" });

  React.useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    const fetchPosts = async () => {
      try {
        const result = await fetch("/api/blog");
        const data = await result.json();
        if (!ignore) {
          setData(data);
          setIsLoading(false);
        }
      } catch (e) {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      ignore = true;
      setIsLoading(false);
    };
  }, []);

  return [{ data, isLoading }, {}];
};
