import Jumbotron from "../components/cards/Jumbotron";

// try to pass parameters to Jumbotron component through props
export default function Home() {
    return (
      <div>
        <Jumbotron title="Hello World" subTitle="Welcome to React E-Commerce"/>
      </div>
    );
  }
  