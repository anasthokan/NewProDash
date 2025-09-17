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
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Cycle</th>
            <th>Daily</th>
            <th>Total</th>
            <th>Badge</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.imageUrl} alt={item.name} width="50" />
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
