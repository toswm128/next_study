import Link from "next/link";

const Index = () => (
  <div>
    <p>index page</p>
    <Link href="/main">
      <a>main</a>
    </Link>
  </div>
);

export default Index;
