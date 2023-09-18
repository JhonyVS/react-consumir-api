import '../styles/Product.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
 
function Product() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        // Realizar la solicitud GET a tu API aquí
        axios.get('http://localhost:8080/products')
        .then((response) => {
        setData(response.data); // Almacena los datos en el estado
        setLoading(false); // Cambia el estado de carga a falso
        })
        .catch((error) => {
      console.error('Error al cargar datos de la API:', error);
      setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Cargando...</div>;
    }
  
    return (
        <div>
        <h2>Datos de la API:</h2>
            {data.map((item) => (
            <div key={item.idProduct}>
                <p className='product-name'>Product name: {item.name}</p>
                <p className='product-value'>Value: {item.value}</p>
            {/* Agrega más campos según sea necesario */}
            </div>
        ))}
        </div>
    );
  }
  

export default Product
