import "./App.css";
import {
  Jumbotron,
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Jumbotron>
            <h1 className="display-3">LOAN SHARK</h1>
            <p className="lead">Track your student loans!</p>
            <hr className="my-2" />
            <p>Enter your loan info.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Whats LOAN SHARK</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </div>

      <Button color="primary" size="lg" block>
        Sign Up Now
      </Button>
      <Button color="primary" size="lg" block>
        Sign In
      </Button>
    </div>
  );
}

export default App;
