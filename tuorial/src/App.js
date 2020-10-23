import React from "react";
import useAxios from "./useAxios";

function App() {
  const { loading, data, error } = useAxios({
    url: "https://yts-proxy.now.sh/list_movies.json",
  });
  console.log(
    `Loading : ${loading}\n Error : ${Error}\n data: ${JSON.stringify(data)}`
  );
  console.log(loading, data, error);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
