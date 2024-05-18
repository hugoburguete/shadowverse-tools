import List from '../typography/List';
import ListItem from '../typography/ListItem';
import P from '../typography/Paragraph';

export type ErrorListProps = {
  errors: string[];
};

const ErrorList = ({ errors }: ErrorListProps): JSX.Element => {
  return (
    <>
      <P className="mt-5">Unable to perform request:</P>
      <List>
        {errors.map((err, index) => (
          <ListItem key={`error-${index}`}>{err}</ListItem>
        ))}
      </List>
    </>
  );
};

export default ErrorList;
