import { UserContext } from "../Contexts/User";
import { useContext } from "react";
import Login from "./Login";
import Enter from "../img/enter.png";
import Exit from "../img/exit.png";

const LoginArea = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="loginarea">
      <p>{user}</p>

      {user ? (
        <button><img src={Exit} alt ="exit" className="exitIcn"
          onClick={() => {
            setUser(null);
          }}
        />
        </button>
      ) : (
        <button><img src={Enter} alt ="enter" className="enterIcn"
          onClick={async () => {
            const user = await Login();
            setUser(user);
          }}
        />
        </button>
      )}
    </div>
  );
};

export default LoginArea;
