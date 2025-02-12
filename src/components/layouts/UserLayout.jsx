import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "./Sidebar";

const UserLayout = () => {
  return (
    <div>
      {/* header */}
      <Header />

      <Container fluid>
        <Row>
          <Col md={3} xl={2} className="bg-dark text-white">
            <div className="p3">
              <div>Welcome Back</div>
              <h4>Shukra Tamang</h4>
            </div>
            <hr />
            <Sidebar />
          </Col>
          <Col md={9} xl={10}>
            {/* main body */}
            <main className="main">
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
