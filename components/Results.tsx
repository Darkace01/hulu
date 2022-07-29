import React from 'react';
import { Movie } from '../types';
import Thumbnail from './Thumbnail';
interface Props {
  requests: Movie[];
}
function Results({ requests }: Props) {
  console.log(requests);
  return (
    <div>
      {requests?.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
