import React, { useState, useEffect } from 'react';
import { Card, ToggleButton } from '@material-ui/core';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products and categories from API endpoints
    axios.get('/api/products').then((response) => {
      setProducts(response.data.products);
    });

    axios.get('/api/products/categories').then((response) => {
      setCategories(response.data.categories);
    });
  }, []);

  return (
    <div>
      <div>
        {categories.map((category) => (
          <ToggleButton key={category.id} value={category.id}>
            {category.name}
          </ToggleButton>
        ))}
      </div>
      <div>
        {products.map((product) => (
          <Card key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div>{product.name}</div>
            <div>{product.price}</div>
            <button>Add to Cart</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
