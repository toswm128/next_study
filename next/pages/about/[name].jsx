import { useRouter } from "next/router";

function AboutName() {
  const router = useRouter();
  return (
    <div>
      <p>{router.query.name}</p>
    </div>
  );
}

export default AboutName;
