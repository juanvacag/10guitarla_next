import { useState, useEffect } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] =useState([]);

  useEffect(() => {
      const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
      setCarrito(carritoLS);
  },[])

  useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito));
  },[carrito])

  const agregarCarrito = (producto) => {
    if(carrito.some(articulo => articulo.id === producto.id)) {
      //console.log('Producto Duplicado');
      const carritoActualizado = carrito.map(articulo => {
        if(articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });

      setCarrito(carritoActualizado);
    } else {
      //console.log('Nuevo Producto');
      setCarrito([...carrito, producto]);
    }
  };

  const actualizarCantidad = producto =>{
    const carritoActualizado = carrito.map(articulo => {
      if(articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });

    setCarrito(carritoActualizado);
  };

  return (
    <Component 
      {...pageProps} 
      carrito={carrito} 
      agregarCarrito={agregarCarrito} 
      actualizarCantidad={actualizarCantidad}
    />
  )}

export default MyApp
