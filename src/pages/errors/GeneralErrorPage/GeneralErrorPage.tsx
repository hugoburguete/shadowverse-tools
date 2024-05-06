import { useRouteError } from 'react-router-dom';

function GeneralErrorPage() {
  let error = useRouteError();
  console.error(error);

  return <div>An error has occurred</div>;
}

export default GeneralErrorPage;
