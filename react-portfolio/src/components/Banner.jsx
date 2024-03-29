import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";



export const Banner = () => {

  //Loop through words on screen
  const [loopNum, setLoopNum] = useState(0);
  //DIs the word being deleted or typed out
  const [isDeleting, setIsDeleting] = useState(false);
  //Words on screen
  const toRotate = ['Web Developer', 'Web Design', 'UI-UX Design'];
  //Which text is being shown
  const [text, setText] = useState('');
  //Time for letters appearing
  const period = 2000;
  //Randomize time for letters appearing
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  //Index of the word being shown
  const [index, setIndex] = useState(0);


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    //Cool effect for typing out words
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col sx={12} md={6} xl={7}>
            <span className="tagline">Welcome to the Animated Portfolio</span>
            <h1>{"Hi I'm Colin Spangelo"}<span className="wrap"> {text} </span></h1>
            <p>
              As a web developer, I lean towards the front-end. However, I love everything data. From
              responsive layouts to creating and applying ERD's, I thrive on turning ideas into realities. Whether
              it's building a user-friendly interface or creating a relational database, I always enjoy the process of breaking down a problem into it's smallest parts in order to come up with simplest solution.
            </p>
            <button onClick={() => console.log('connect')}>Let's connect</button><ArrowRightCircle size={25} />
          </Col>
          <Col sx={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;