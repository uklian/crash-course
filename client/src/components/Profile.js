import React, { useState } from "react";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");

  function addPost() {
    if (post.length) {
      setPosts([...posts, post]);
      setPost("");
    }
  }

  function updatePost(e) {
    setPost(e.target.value);
  }

  return (
    <div>
      <center>
        <h1>This is my Profile page</h1>

        <form>
          <div>Add New Post</div>

          <textarea
            value={post}
            onChange={(e) => updatePost(e)}
            rows="5"
            cols="65"
          ></textarea>
        </form>

        <button onClick={addPost}>Add Post</button>

        <div style={{ marginTop: "2rem" }}>
          {posts && posts.length
            ? posts.map((post) => {
                return (
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: "0.5rem",
                      width: "40%",
                      margin: "2px",
                    }}
                  >
                    {post}
                  </div>
                );
              })
            : null}
        </div>
      </center>
    </div>
  );
};

export default Profile;
