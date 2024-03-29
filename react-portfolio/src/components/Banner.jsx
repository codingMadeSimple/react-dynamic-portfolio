import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col sx={12} md={6} xl={7}>
            <span className="tagline">Welcome to the Animated Portfolio</span>
            <h1>{"Hi I'm codingIsSimple'"}<span className="wrap">web developer</span></h1>
            <p>
              As a web developer, I lean towards the front-end. However, I love everything data. From
              responsive layouts to creating and applying ERD's, I thrive on turning ideas into realities. Whether
              it's building a user-friendly interface or creating a relational database, I always enjoy the process of breaking down a problem into it's smallest parts in order to come up with simplest solution.
            </p>
            <button onClick={()=>console.log('connect')}>Let's connect</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;