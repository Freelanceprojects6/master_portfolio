/*import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
} from "react-icons/si";
import {
  DiMysql,
  DiJira,
  //DiAtlassian,
  
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Toolstack;
*/

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
} from "react-icons/si";
import {
  DiMysql,
  DiJira,
} from "react-icons/di";
import { FaFigma, FaBlender } from "react-icons/fa";  // Importing Figma and Blender icons

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Visual Studio Code Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* MySQL Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>

      {/* Jira Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJira />
      </Col>

      {/* Figma Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>

      {/* Blender Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <FaBlender />
      </Col>
    </Row>
  );
}

export default Toolstack;
