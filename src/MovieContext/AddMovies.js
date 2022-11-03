import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovies = () => {
  const [movies, setMovie] = useContext(MovieContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovie((prevMovies) => [...prevMovies, { name: name }, { price, price }]);
  };
  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" onChange={updateName} />
      <input type="text" name="price" onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovies;