import { Container, Row, Col, CardHeader, Card, CardText } from "reactstrap";
import "./style.css";

function WhatIsLoanShark() {
  return (
    <main className="wrapper">
      <section>
        <div className="margin">
          <h1 className="text-header-homepage">What is Loan Shark?</h1>
          <p className="text-homepage">
            Loan Shark is a loan tracker. Plan and simple. It allows you to
            keeps tabs on all of the loan information that you need. With loan
            shark you can have the abuility to make sure that you can take a
            bite out of student loans.
          </p>
        </div>
      </section>

      <section className="cards" id="cards">
        <ul>
          <li className="card-body">
            <h3>Student Debt </h3>
            <hr />
            <p className="sub-header">
              About one-third of adults under age 30 have student loan debt.
            </p>
            <hr />
            <p>
              Among adults ages 18 to 29, 34% say they have outstanding student
              loans for their own education.
            </p>
          </li>
          <li className="card-body">
            <h3>Financial Struggles </h3>
            <hr />
            <p className="sub-header">
              Young college graduates with student loans are more likely than
              those without loans to report struggling financially.
            </p>
            <hr />
            <p>
              Student loan holders give a more downbeat assessment of their
              personal financial situation compared with their peers who don’t
              have outstanding student debt.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <div className="margin">
          <h1>What can Loan Shark do for you?</h1>
          <p className="text-homepage">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam qui
            libero impedit animi quos quidem pariatur consectetur. Mollitia
            porro quam reprehenderit sequi in distinctio sapiente libero autem!
            Nesciunt, cupiditate nihil. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vel consequatur adipisci, minus architecto tempore
            maiores officia dolorem magni ad dicta esse reiciendis ex, voluptate
            atque velit quibusdam corporis commodi alias.
          </p>
        </div>
      </section>

      {/* A foe footer */}
      <section className="footer">
        <h1>Want to Join?</h1>
        <article>
          <p>Sign up now to eat up student debt!</p>
          <a className="footer-button" href="/register">
            Sign Up Now
          </a>
        </article>
      </section>
    </main>
  );
}

export default WhatIsLoanShark;
