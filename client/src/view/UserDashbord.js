import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Message from "../components/Message";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .post("/api/user/get/users")
      .then((res) => {
        // successfully get data
        setUsers(res.data.data);
        setLoading(false); // done
        setError("");
      })
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false); // no more loading
        setUsers([]); // no more success
      });
  }, []);

  return (
    <div>
      <center>
        <h1>This is my user dashboard page</h1>
        {loading ? <Loader /> : null}

        {error ? <Message color={"danger"} error={error} /> : null}
        <div style={{ marginTop: "2rem" }}>
          {users && users.length
            ? users.map((user, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      border: "1px solid #ccc",
                      padding: "0.5rem",
                      width: "40%",
                      margin: "2px",
                    }}
                  >
                    {user.name}
                    <div>{user.phone}</div>
                  </div>
                );
              })
            : null}
        </div>
      </center>
    </div>
  );
};

export default UserDashboard;
