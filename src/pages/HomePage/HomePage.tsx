import React from 'react';
import Button from '../../components/Button';
import Image from '../../components/Image';
import Wrapper from '../../components/Wrapper';
import Heading from '../../components/typography/Heading';
import P from '../../components/typography/Paragraph';
import Small from '../../components/typography/Small';

export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <section className="text-center mt-16 mb-24 px-6 max-w-md mx-auto">
        <Heading level={1}>Shadowverse Tools</Heading>
        <P>
          A website with useful tools to make Shadowverse Evolve easier to play.
        </P>
      </section>

      <section className="mb-6">
        <Wrapper>
          <div className="grid md:grid-cols-2 gap-4 md:gap-28">
            <div className="flex flex-col justify-center">
              <Small className="mb-4 inline-block dark:text-transparent bg-gradient-to-r from-indigo-300 to-indigo-400 bg-clip-text">
                Newly added
              </Small>
              <Heading level={2}>Deck Builder</Heading>
              <P className="mb-4">
                Create, edit and share your deck builds using the Shadowverse
                Tools deck builder.
              </P>
              <Button asLink to="/deck" className="self-start">
                Find out more
              </Button>
            </div>
            <div className="border border-vulcan-300 rounded-lg p-2">
              <Image
                src="./deck-builder-preview.png"
                alt="deck builder preview"
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Home;
