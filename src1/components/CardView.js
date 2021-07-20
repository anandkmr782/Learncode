import React from 'react';
import {Card, CardText, CardBody,CardTitle} from 'reactstrap';
import {Link} from "react-router-dom";
import "./CardView.css";

const CardView = () => {
  return (
    <div>
    <div class="view">
      <Card class="cards">
        
        <CardBody>
          <CardTitle tag="h5">Java</CardTitle>
        </CardBody>
        <img width="40%" src="image/javai.png" alt="image/javai.png" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Link to="/java">Read More</Link>
          </CardBody>
        
      </Card>
      <Card class="cards">
        <CardBody>
          <CardTitle tag="h5">Python</CardTitle>
        </CardBody>
        <img width="40%" src="image/python.png" alt="image/python.png" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Link to="/python">Read More</Link>
        </CardBody>
      </Card>
      <Card class="cards">
        <CardBody>
          <CardTitle tag="h5">JavaScript</CardTitle>
        </CardBody>
        <img width="40%" src="image/js.png" alt="image/js.png" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Link to="/javascript">Read More</Link>
        </CardBody>
      </Card>
      <Card class="cards">
        <CardBody>
          <CardTitle tag="h5">Android</CardTitle>
        </CardBody>
        <img width="40%" src="image/android.png" alt="image/android.png" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Link to="/android">Read More</Link>
        </CardBody>
      </Card>
    </div>
    <div class="view">
      <Card class="cards">
        <CardBody>
          <CardTitle tag="h5">Advance Java</CardTitle>
        </CardBody>
        <img width="40%" src="image/javaj.png" alt="image/javaj.png" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Link to="/advjava">Read More</Link>
        </CardBody>
      </Card>
      <Card class="cards">
        <CardBody>
          <CardTitle tag="h5">C++</CardTitle>
        </CardBody>
        <img width="40%" src="image/cpp.png" alt="image/cpp.png" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Link to="/cpp">Read More</Link>
        </CardBody>
      </Card>
      <Card class="cards">
        <CardBody>
          <CardTitle tag="h5">React Js</CardTitle>
        </CardBody>
        <img width="40%" src="image/react.png" alt="image/react.png" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Link to="/reactj">Read More</Link>
        </CardBody>
      </Card>
      <Card class="cards">
        <CardBody>
          <CardTitle tag="h5">Sql</CardTitle>
        </CardBody>
        <img width="40%" src="image/sql.png" alt="image/sql.png" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Link to="/sql">Read More</Link>
        </CardBody>
      </Card>
    </div>
    </div>
  );
};

export default CardView;