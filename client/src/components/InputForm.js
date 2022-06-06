import React from "react";
import { useState } from "react";
import axios from "axios";

const InputForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [info, setInfo] = useState([]);
  const handle = () => {
    console.log(name);
    console.log(description);
    console.log(price);
    setInfo([...info, { name, description, price }]);

    axios.post("http://localhost:5000/prods/create", {
      name: name,
      description: description,
      price: price,
    });

    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div className="container-fluid">
      <div class="mb-3">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div class="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="description..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Price
        </label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="price..."
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handle()}
      >
        Submit
      </button>
      {/* <Listss info={info} /> */}
    </div>
  );
};

export default InputForm;
