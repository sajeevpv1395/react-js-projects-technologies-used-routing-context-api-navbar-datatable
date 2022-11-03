import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

import Table from 'react-bootstrap/Table';
function ApiDataTAble() {
    const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  
    const getProductData = async () => {
      try {
        const data = await axios.get(
          "https://fakestoreapi.com/products"
        );
        console.log(data.data);
        setProduct(data.data);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      getProductData();
    }, []);
  return (
    <div>
        <h1>Api data</h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

     
<Table striped bordered hover>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">description</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
  {product
        .filter((item) => {
          if (search == "") {
            return item;
          } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <tr>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
          </tr>
          );
        })} 
   
   
  </tbody>
  </Table>
    </div>
  )
}

export default ApiDataTAble
