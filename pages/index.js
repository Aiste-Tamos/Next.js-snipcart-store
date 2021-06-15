import React, {useState} from "react";
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {

  const[products, setProducts] = useState([]);

  fetch('https://fakestoreapi.com/products/')
  .then(response => response.json())
  .then(products => setProducts(products));
  
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         E-store
        </h1>

        <p className={styles.description}>
          <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
            <strong>Cart:</strong> <span className="snipcart-total-price">&euro;0.00</span>
          </a>
        </p>

        <div className={styles.grid}>
         {products.map(product => {
           return (
             <div key={product.id} className={styles.card}>
               <img src={product.image} alt={`Preview of ${product.title}`}></img>
               <h3>{product.title}</h3>
               <p>{product.description}</p>
               <p>&euro;{product.price}</p>
               <p>
                 <button className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.title}
                  data-item-url="/"
                  data-item-price={product.price}
                 >Add to Cart</button>
               </p>
             </div>
           )
         })}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
      <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key="MTllZjRkZmYtZmZhYi00MTJlLThjZDgtOThkY2FmZTE3MjY2NjM3NTkzMzY3Mjc4MTc2MjMz" data-currency="eur" />
    </div>
  )
}
