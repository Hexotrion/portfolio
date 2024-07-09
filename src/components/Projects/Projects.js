import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import todo from "../../Assets/Projects/todo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat app"
              description="group Chat Room or Workspace to hangout with friends built using socket.io."
              ghLink="https://github.com/Hexotrion/chat_app"
              demoLink="https://chat-frontend-hexotrion.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo app"
              description="It is simple to-do app with user authentication using jwt."
              ghLink="https://github.com/Hexotrion/todo_frontend"
              demoLink="https://todo-frontend-hexotrion.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
