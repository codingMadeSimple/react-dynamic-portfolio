import {Container, Row, Col} from 'react-bootstrap';

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col sx={12} md={6} xl={7}>
            <span className="tagline">Welcome to the Animated Portfolio</span>
            <h1>{"Hi I'm codingIsSimple'"}<span className="wrap">web developer</span></h1>
            <p></p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;