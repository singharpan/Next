import Link from "next/link";
import axios from "axios";
const Index = (props) => {
  console.log(props, "af");
  return (
    <React.Fragment>
      <h2>This is index</h2>
      <div>
        <Link href="/about">
          <a>Go to about page</a>
        </Link>
        {props.posts.map((post, i) => (
          <p key={i}>{post.title}</p>
        ))}
      </div>
    </React.Fragment>
  );
};

Index.getInitialProps = async () => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return {
    posts: posts.data,
  };
};

export default Index;
//getInitialProps is a life cycle name hook
//this life cycle run when component initially mount
//and it runs on both server and client
//what we return in posts..it will be passed as props to Index
