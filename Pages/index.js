import Link from "next/link";
import Layout from "../components/layout";
import useInput from "../hooks/useInput";
import { useState } from "react";

const ProfileLink = props => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      <a>Go to {props.profile}'s profile</a>
    </Link>
  </div>
);

const Index = props => {
  const text = useInput("");
  return (
    <>
      <Layout>
        <h1>Friends List {props.set[0].name}</h1>
        {props.set.map((profile, index) => (
          <ProfileLink key={index} profile={profile.name} />
        ))}
      </Layout>
      <input type="text" {...text} />
      <button
        onClick={() => {
          props.set.push({ name: text.value });
          console.log(props.set);
          text.setValue("");
        }}
      >
        제출
      </button>
    </>
  );
};

Index.getInitialProps = async function () {
  const res = [
    { name: "minsu" },
    { name: "pepsi" },
    { name: "haha" },
    { name: "sogong" },
    { name: "whatIsThis" },
    { name: "hello" },
    { name: "math" },
  ];
  // const [data, setData] = useState(res);
  // const res = await fetch("https://uinames.com/api/?amount=10");
  // const data = await res.json();

  return {
    profiles: res.map(profile => profile.name),
    set: res,
  };
};

export default Index;
