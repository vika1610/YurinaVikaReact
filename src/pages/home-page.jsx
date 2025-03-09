import Link from 'next/link';

export const HomePage = () => {
  return (
    <div>
      Home page <br />
      <Link href='/restaurants'>show restaurants</Link>
    </div>
  );
};
