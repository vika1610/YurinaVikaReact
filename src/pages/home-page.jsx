import { Link } from 'react-router';

export const HomePage = () => {
  return (
    <div>
      Home page <br />
      <Link to='/restaurants'>show restaurants</Link>
    </div>
  );
};
