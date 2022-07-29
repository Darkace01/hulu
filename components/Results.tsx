import React from 'react';
import { Movie } from '../types';
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';
interface Props {
  requests: Movie[];
}
function Results({ requests }: Props) {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center '>
      {requests?.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
