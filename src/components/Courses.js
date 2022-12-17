import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://server-site-for-learning-app.vercel.app/olp")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <Row xs={1} md={2} className=" container mx-auto mt-5 g-4">
        {courses.map((course) => {
          return (
            <Col className="h-100">
              <Card className="h-100">
                <Card.Img
                  style={{ height: "500px" }}
                  variant="top"
                  src={course.imgUrl}
                />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <p>Duration: {course.time}</p>
                  <h4>Description: {course.description.slice(0, 50)}...</h4>
                  <Link to={`/${course.id}`}>
                    <button className="btn btn-primary">Details</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Courses;
