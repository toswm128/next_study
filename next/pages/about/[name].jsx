import { useRouter } from "next/router";
import Link from "next/link";

function AboutName() {
  const router = useRouter();
  return (
    <div>
      <p>{router.query.name}</p>
      <Link href="/Home">
        <a>home</a>
      </Link>
    </div>
  );
}

export default AboutName;
