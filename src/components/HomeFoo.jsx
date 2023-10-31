import { useDispatch, useSelector } from "react-redux";
import DisplayPosts from "./DisplayPosts";
import { getPostsAsync } from "../app/postSlice";
import { useEffect, useRef, useState } from "react";

const HomeFoo = () => {
  let cont = useRef();
  let get = useSelector((state) => state.posts);
  const [showAll, setShowAll] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, []);

  if (get.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="posts_container" ref={cont}>
        {showAll
          ? get.posts?.map((item) => {
              return <DisplayPosts key={item.id} data={item} />;
            })
          : get.posts.slice(0, 10).map((item) => {
              return <DisplayPosts key={item.id} data={item} />;
            })}
        <button
          className="show_all"
          onClick={() => {
            setShowAll(!showAll);
            cont.current.scrollTo(0, 0);
          }}
        >
          {showAll ? "show less..." : "show all..."}
        </button>
      </div>
    </div>
  );
};

export default HomeFoo;
