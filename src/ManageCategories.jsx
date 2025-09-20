import React, { useState, useEffect } from "react";
import "./ManageCategories.css";
import productsData from "./products.json"; // JSON file with valid URLs

function ManageCategories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load products from JSON
    setProducts(productsData);
  }, []);

  return (
    <div className="manage-container">
      <h2>Manage Categories</h2>

      <div className="add-product">
        <input type="text" placeholder="Category" />
        <input type="text" placeholder="Product Name" />
        <input type="number" placeholder="Price (Rs)" />
        <input type="number" placeholder="Cycle (Days)" />
        <input type="number" placeholder="Daily Income (Rs)" />
        <input type="number" placeholder="Total Income (Rs)" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Badge" />
        <button>Add Product</button>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th style={{background:"#f5f569ff"}}>Image</th>
            <th style={{background:"#f5f569ff"}}>Name</th>
            <th style={{background:"#f5f569ff"}}>Category</th>
            <th style={{background:"#f5f569ff"}}>Price</th>
            <th style={{background:"#f5f569ff"}}>Cycle</th>
            <th style={{background:"#f5f569ff"}}>Daily</th>
            <th style={{background:"#f5f569ff"}}>Total</th>
            <th style={{background:"#f5f569ff"}}>Badge</th>
            <th style={{background:"#f5f569ff"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} width="50" />
              </td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.cycle}</td>
              <td>{item.daily}</td>
              <td>{item.total}</td>
              <td>{item.badge}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageCategories;
