import React from 'react';
import Heading from '../../components/typography/Heading';

export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return <Heading level={1}>Home page</Heading>;
};

export default Home;
