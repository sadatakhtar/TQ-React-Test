import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Row>
        <Col>
          <h1>React Interview Project</h1>
          <p>
            Welcome to the TerraQuest React interview project! Please use this project to develop the test requirements
            within.
          </p>

          <hr />

          <Button onClick={() => history.push('/companies')}>View Companies</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
