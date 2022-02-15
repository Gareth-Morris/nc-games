import { UserContext } from "../Contexts/User";
import { useContext } from "react";
import Login from "./Login";

const LoginArea = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <p>{user}</p>

      {user ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await Login();
            setUser(user);
          }}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default LoginArea;
