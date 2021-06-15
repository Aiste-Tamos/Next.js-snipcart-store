import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
         {products.map(product => {
           return (
             <div key={product.id} className={styles.card}>
               <img src={product.image} alt={`Preview of ${product.title}`}></img>
               <h3>{product.title}</h3>
               <p>{product.description}</p>
               <p>{product.price} Eur</p>
               <p>
                 <button>Add to Cart</button>
               </p>
             </div>
           )
         })}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
      <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key="MTllZjRkZmYtZmZhYi00MTJlLThjZDgtOThkY2FmZTE3MjY2NjM3NTkzMzY3Mjc4MTc2MjMz" />
    </div>
  )
}
