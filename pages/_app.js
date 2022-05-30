import { useState } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] =useState([]);

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



    
  }

  return <Component 
  {...pageProps} 
  carrito={carrito} 
  agregarCarrito={agregarCarrito} 
  />
}

export default MyApp
