import { useEffect, useState } from "react";

const ChuckNorris = () => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    async function fetchJoke() {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data);
    }
    fetchJoke();
  }, []);

  return (
    <>
      <section className="flex flex-col text-center w-96 m-auto mt-7">
        <div>
          <h1 className="text-xl font-bold mb-5">ChuckNorris Jokes</h1>
          <p className="mb-10">
            Free JSON for hand curated Chuck Norris facts.
          </p>
        </div>
      </section>
      <p className="border p-5  text-center w-2/3 m-auto">{joke.value}</p>
    </>
  );
};

export default ChuckNorris;
