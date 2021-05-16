import Link from "next/link";
import Layout from "../components/layout";

const ProfileLink = props => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      <a>Go to {props.profile}'s profile</a>
    </Link>
  </div>
);

const Index = () => (
  <Layout>
    <h1>Friends List</h1>
    <ProfileLink profile="jake" />
    <ProfileLink profile="peter" />
    <ProfileLink profile="yumi" />
  </Layout>
);

export default Index;
