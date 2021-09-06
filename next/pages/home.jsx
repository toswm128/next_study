import Link from "next/link";
import { useState } from "react";

const Home = ({ res }) => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(res);

  return (
    <div>
      <h1>hello</h1>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          setList([...list, value]);
        }}
      >
        제출
      </button>
      {list.map(current => {
        return (
          <div>
            <Link href={"/about/" + current}>{current}</Link>
          </div>
        );
      })}
    </div>
  );
};

Home.getInitialProps = () => {
  // context.query.id = 'test'
  const res = ["hello", "myNameIs", "minsu"];
  return { res };
};

export default Home;
