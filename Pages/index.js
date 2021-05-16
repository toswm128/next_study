import Link from "next/link";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";

const ProfileLink = props => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      <a>Go to {props.profile}'s profile</a>
    </Link>
  </div>
);

const Index = props => (
  <Layout>
    <h1>Friends List {props.profiles[0]}</h1>
    {props.profiles.map((profile, index) => (
      <ProfileLink key={index} profile={profile} />
    ))}
  </Layout>
);

Index.getInitialProps = async function () {
  const res = [{ name: "minsu" }, { name: "pepsi" }, { name: "haha" }];
  // const data = await res.json();

  return {
    profiles: res.map(profile => profile.name),
  };
};

export default Index;
