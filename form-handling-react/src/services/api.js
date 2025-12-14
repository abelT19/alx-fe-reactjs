export const registerUser = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User Registered:", data);
      resolve({ message: "Registration successful!" });
    }, 1000);
  });
};
