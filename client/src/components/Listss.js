import Axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

const Example = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/prods")
      .then((res) => setProd(res.data))
      .catch((err) => console.log(err));
  }, []);

  // return (
  //   <div className="container-fluid">
  //     <div className="row ">
  //       {prod.map((item) => (
  //         <div class="col-sm-4">
  //           <div class="card">
  //             <div class="card-body">
  //               <h5 class="card-title">{item.name}</h5>
  //               <p class="card-text">{item.description}</p>
  //               <button class="btn btn-primary">{item.price}</button>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="container-fluid">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {prod.map((pro) => (
            <tr>
              <td>{pro.name}</td>
              <td>{pro.description}</td>
              <td>{pro.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Listss = () => {
  return (
    <>
      <Example />
    </>
  );
};

export default Listss;
