import { PropsWithChildren } from 'react';

const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className="w-full xl:max-w-screen-xl mx-auto">{children}</div>;
};

export default Wrapper;
