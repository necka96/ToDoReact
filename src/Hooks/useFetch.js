import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    async function getData() {
      try {
        const res = await fetch(url, {
          signal: abortCont.signal,
          cache: "no-cache",
        });
        if (!res.ok) {
          throw Error("Ne mogu da fecujem podatke");
        }
        const data = await res.json();
        const advice = data.slip;
        setData(advice);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch abort");
        } else {
          setIsLoading(false);
          setError(error.message);
        }
      }
    }
    getData();
    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
