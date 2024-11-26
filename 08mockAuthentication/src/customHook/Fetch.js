import { useEffect, useState } from "react";

function useFetch(updateMsg) {
  const [msg, setmsg] = useState("");
  const [writter, setauthor] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const val = await fetch("/api");
      const ans = await val.json();
console.log(ans)
      // const randomIndex = Math.floor(Math.random() * ans.length);
      // const Text = ans[randomIndex].q;
      // const word = ans[randomIndex].a;
      const Text = ans[0].q;
      const Author = ans[0].a;
      // const Text = ans.q;
      // const Author = ans.a;
      // const Author = word.split(",")[0];
      setauthor(Author);
      setmsg(Text);
    };
    fetchdata();
  }, [updateMsg]);

  return { msg, writter };
}

export default useFetch;
