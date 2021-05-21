import { Jumbotron } from 'reactstrap';
import { Button } from 'reactstrap';
import './style.css';

function Jumbo() {
    return (
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
    )
}

export default Jumbo;
// jumbotron heading with style

// login button