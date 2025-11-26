import { useState, useEffect } from "react";
type ArrayItem = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export function useEgor(url: string) {
  const [data, setData] = useState<ArrayItem[]>([]);
  const [error, setError] = useState<TError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
}
