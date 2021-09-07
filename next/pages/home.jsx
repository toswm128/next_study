import Link from "next/link";
import { useState } from "react";
import useStores from "../Hooks/useStore";
import { observer, inject } from "mobx-react";

const Home = props => {
  const [value, setValue] = useState("");
  const { handleList } = props.store;
  const { li, handleList } = props.store;
  const [list, setList] = useState([...li]);
  console.log(props.res);
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
          handleList([...list, value]);
        }}
      >
        제출
      </button>
      {list.map((current, index) => {
        return (
          <div key={index}>
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

export default inject("store")(observer(Home));
