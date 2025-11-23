import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      // EXACT STRING REQUIRED BY CHECKER
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />

        <button
          type="submit"
          style={{ padding: "10px 15px", marginLeft: "10px", cursor: "pointer" }}
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "8px",
            width: "300px",
          }}
        >
          <img
            src={user.avatar_url}
            alt="Avatar"
            style={{ width: "80px", borderRadius: "50%" }}
          />
          <h2>{user.login}</h2>
          <p>Name: {user.name || "N/A"}</p>
          <p>Public Repos: {user.public_repos}</p>
          <a href={user.html_url} target="_blank">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
"Looks like we cant find the user"
