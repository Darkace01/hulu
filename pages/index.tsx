import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/Nav';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Hulu</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Nav />
    </div>
  );
};

export default Home;
