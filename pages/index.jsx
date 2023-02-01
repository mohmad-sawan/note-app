import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title={'Home'}>
      <main className={styles.main}>
        <h1>Hi</h1>
      </main>
    </Layout>
  );
}
