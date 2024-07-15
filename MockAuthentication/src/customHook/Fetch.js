import { useEffect, useState } from "react";

function useFetch(updateMsg) {
  const [msg, setmsg] = useState("");
  const [writter, setauthor] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const val = await fetch("https://type.fit/api/quotes");
      const ans = await val.json();
      const randomIndex = Math.floor(Math.random() * ans.length);
      const Text = ans[randomIndex].text;
      const word = ans[randomIndex].author;
      const Author = word.split(",")[0];
      setauthor(Author);
      setmsg(Text);
    };
    fetchdata();
  }, [updateMsg]);

  return { msg, writter };
}

export default useFetch;
