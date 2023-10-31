import { useSelector } from "react-redux";
import Data from "./Data";
import HomeFoo from "./HomeFoo";

let style = {
  display: "flex",
  justifyContent: "space-evenly",
  height: "95vh",
};

let line = {
  borderLeft: "3px solid gray",
};
let home = {
  flex: "1",
};

const Home = () => {
  return (
    <div style={style}>
      <div className="home" style={home}>
        <h1>Home</h1>
        <HomeFoo />
      </div>
      <div className="line" style={line}></div>
      <Data />
    </div>
  );
};

export default Home;
