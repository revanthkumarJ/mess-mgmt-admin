import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

const logoutUser = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("details");
    })
    .catch((error) => {
      "error in logging out user";
    });
};

export { logoutUser };
