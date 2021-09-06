import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  return (
    <div>
      <p>{router.query.name}</p>
    </div>
  );
};
