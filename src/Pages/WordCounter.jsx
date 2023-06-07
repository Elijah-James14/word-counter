import { useState } from "react";

const WordCounter = () => {
  const [character, setCharacter] = useState(0);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");

  function countCharacter(e) {
    setMessage(e.target.value);
    const letterLength = e.target.value.length;
    const wordsLength = e.target.value.split(" ").length;

    setCharacter(letterLength);
    setTotal(wordsLength);
  }
  function clearArea() {
    setMessage("");
    setTotal(0);
    setCharacter(0);
  }
  return (
    <section className="max-w-7xl m-auto max-h-80">
      <div className="text-center mt-7">
        <h1 className="font-bold text-2xl">Word Counter</h1>
        <p>Free Online character and word Counter</p>
      </div>

      <div className="flex flex-col m-auto w-96 h-96 text-center mt-7">
        <textarea
          id="count"
          value={message}
          onChange={countCharacter}
          rows="10"
          cols="50"
          className=" shadow-xl w-full h-3/4"
        />
        <button
          onClick={clearArea}
          className="bg-gray-400 font-bold p-3 text-white mt-8 rounded"
        >
          Clear
        </button>
      </div>
      <div className="flex justify-between w-96 m-auto">
        <span className="bg-blue-800 p-2 rounded text-white">
          Character: {character}
        </span>
        <span className="bg-blue-800 p-2 rounded text-white">
          Words: {total}
        </span>
      </div>
    </section>
  );
};

export default WordCounter;
