import { useDispatch } from "react-redux";
import { commentPost, deletePost, likePost } from "../app/postSlice";
import { useState } from "react";

const DisplayPosts = ({ data }) => {
  const [comment, setComment] = useState();
  let dispatch = useDispatch();
  const { id, image, thumbnail, title } = data;
  // let { likes, comments } = reactions;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(commentPost({ id, comment }));
  //   setComment("");
  // };

  return (
    <div className="post_items">
      <img src={image} alt="" />
      <button className="delete_post" onClick={() => dispatch(deletePost(id))}>
        x
      </button>
      <div className="react_btns">
        {/* <h3>❤️ {likes} likes</h3> */}
        {/* <button onClick={id}>like</button> */}
        <h3>{id}</h3>
      </div>
      <p className="title">{title}</p>
      <div className="comment_btn">
        <aside>
          <details>
            <summary>
              <h3>type comment...</h3>
            </summary>

            <div className="all_comments">
              {/* {comments.length > 0 ? (
                comments.map((item, i) => {
                  return (
                    <div key={i}>
                      <img src={thumbnail} alt="" />
                      <span>{item}</span>
                    </div>
                  );
                })
              ) : (
                <p>no comment yet</p>
              )} */}
              <div>
                <img src={thumbnail} alt="" />
              </div>
            </div>

            <form>
              <div className="comments_field">
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  value={comment || ""}
                  placeholder="leave a comment..."
                ></textarea>
              </div>
              <button>comment</button>
            </form>
          </details>
        </aside>
      </div>
    </div>
  );
};

export default DisplayPosts;
