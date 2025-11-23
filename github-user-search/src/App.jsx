import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { searchGithubUser } from "./services/github";

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setError("");
    setUserData(null);

    try {
      const data = await searchGithubUser(username);
      setUserData(data);
    } catch (err) {
      setError("User not found!");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
