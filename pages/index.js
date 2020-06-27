import Link from "next/link";
const Index = () => {
  return (
    <React.Fragment>
      <h2>This is index</h2>
      <div>
        <Link href="/about">Go to about page</Link>
      </div>
    </React.Fragment>
  );
};

export default Index;
