import { Jumbotron } from 'reactstrap';
import { Button } from 'reactstrap';
import './style.css';
import logo from '../../img/loansharklogo.png'

function Jumbo() {
    return (
        <header className="App-header">
        <div>
          <Jumbotron>
            <div>
              <img className="logo" src={logo}/>
            </div>
            <p className="tagline">Take a bite out of Student Debt!</p>
            <p className="lead">
              <Button>Learn More</Button>
            </p>
          </Jumbotron>
        </div>
      </header> 
    )
}

export default Jumbo;
// jumbotron heading with style

// login button