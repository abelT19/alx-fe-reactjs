function UserCard({ user }) {
  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "300px",
      }}
    >
      <img
        src={user.avatar_url}
        alt="avatar"
        style={{ width: "80px", borderRadius: "50%" }}
      />
      <h2>{user.login}</h2>
      <p>Name: {user.name || "N/A"}</p>
      <p>Public Repos: {user.public_repos}</p>
      <a href={user.html_url} target="_blank">
        View GitHub Profile
      </a>
    </div>
  );
}

export default UserCard;
