import React from 'react';
import { useState } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    
    
    
    return (
        <div>
            <h1>Products</h1>
        </div>
    )
}

export default ProductList;