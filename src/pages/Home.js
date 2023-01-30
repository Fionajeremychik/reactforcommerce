
import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";

// try to pass parameters to Jumbotron component through props
export default function Home() {
    const [auth, setAuth] = useAuth();
    return (
      <div>
        <Jumbotron title="Hello World" />
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </div>
    );
  }
  