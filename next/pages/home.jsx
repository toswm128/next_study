import Link from "next/link";
import { useState } from "react";

const _home = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(["a", "b"]);

  return (
    <div>
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
      <div>hello</div>
      {list &&
        list.map(current => {
          return (
            <div>
              <Link href={"/about/" + current}>{current}</Link>
            </div>
          );
        })}
    </div>
  );
};

export default _home;
