import React, {useState, useEffect } from "react";
import Head from 'next/head';
import * as styles from '../styles/Home.module.css';

export default function Home() {

  const[products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = 'https://fakestoreapi.com/products/';

  // fetch(apiUrl)
  // .then(response => response.json())
  // .then(products => setProducts(products));

  useEffect(() => {
    const fetchData = async() => {
      setIsLoading(true);
      const res = await fetch(apiUrl);
      const products = await res.json();
      setProducts(products);
      setIsLoading(false)
    };
    fetchData();
  }, [setProducts]);
    
  
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="E-store created using Next.js, Snipcart and Fakestore API."/>
        <title>E-store</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         E-store
        </h1>

        <p className={styles.total}>
          <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
            <strong>Cart:</strong> <span className="snipcart-total-price">&euro;0.00</span>
          </a>
        </p>
        
        {isLoading && <p>Loading...</p>}

        <div className={styles.grid}>
         {products.map(product => {
           return (
             <div key={product.id} className={styles.card}>
               
               <img src={`${product.image}?tr=w-80`} alt={`Preview of ${product.title}`} width="80" height="80" loading="lazy"></img>
               <h3>{product.title}</h3>
               <p>{product.description}</p>
               <div className={styles.priceBtnContainer}>
               <span>&euro;{product.price}</span>
               <p>
                 <button className={`snipcart-add-item ${styles.button}`}
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.title}
                  data-item-url="/"
                  data-item-price={product.price}
                 >
                   <span className={styles.span}>Add to Cart</span></button>
               </p>
               </div>
             </div>
           )
         })}
        </div>
      </main>

      <footer className={styles.footer}>
        <span>Have a great day!</span>
      </footer>
      <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key="MTllZjRkZmYtZmZhYi00MTJlLThjZDgtOThkY2FmZTE3MjY2NjM3NTkzMzY3Mjc4MTc2MjMz" data-currency="eur" data-config-modal-style="side"/>
    </div>
  )
}
