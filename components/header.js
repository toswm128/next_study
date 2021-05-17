import Link from "next/link";

const Header = () => (
  <div>
    <Link href="/">
      <a>main</a>
    </Link>
    <Link href="p/profile">
      <a>profile</a>
    </Link>
  </div>
);

export default Header;
