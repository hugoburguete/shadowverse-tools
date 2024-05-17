import { useRouteError } from 'react-router-dom';
import Header from '../../../components/blocks/Header';
import P from '../../../components/typography/Paragraph';

function GeneralErrorPage() {
  let error = useRouteError();
  console.error(error);

  // TODO: Make the Layout component reusable
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-vulcan-900">
        <P>An error has occurred</P>
      </main>
    </>
  );
}

export default GeneralErrorPage;
