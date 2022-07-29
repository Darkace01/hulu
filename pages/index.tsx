import { request } from 'http';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import { Movie } from '../types';
import requests from '../utils/requests';
interface Props {
  results: Movie[];
}
export const Home: NextPage = ({ results }: Props) => {
  return (
    <div className=''>
      <Head>
        <title>Hulu</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Nav />
      <Results requests={results} />
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
};
