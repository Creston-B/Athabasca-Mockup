import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col, Card } from "react-bootstrap";

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kikapekiskwewin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles["main-container"]}>
        <Row className="title-row mt-4 mb-2">
          <Col>
            <h1 className="mainhead">Kikapekiskwewin</h1>
            <h4 className="subhead">
              Why are cultural values so important to Indigenous people involved
              in research with Indigenous people?
            </h4>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>A project description.</Col>
        </Row>
        <h4>The Team</h4>
        <Row xs={1} md={3} className="mb-5">
         
          <Col>
            <Card>
              <Image
                src="/sample-user.png"
                alt="sample user image"
                width={800}
                height={800}
                layout="responsive"
                className="card-image"

              />
              <Card.Body>
                <Card.Title>Person 1</Card.Title>
                <Card.Text>A quick description of the person in question</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col><Card>
              <Image
                src="/sample-user.png"
                alt="sample user image"
                width={800}
                height={800}
                layout="responsive"
                className="card-image"

              />
              <Card.Body>
                <Card.Title>Person 2</Card.Title>
                <Card.Text>A quick description of the person in question</Card.Text>
              </Card.Body>
            </Card></Col>
          <Col><Card>
              <Image
                src="/sample-user.png"
                alt="sample user image"
                width={800}
                height={800}
                layout="responsive"
                className="card-image"

              />
              <Card.Body>
                <Card.Title>Person 3</Card.Title>
                <Card.Text>A quick description of the person in question</Card.Text>
              </Card.Body>
            </Card></Col>
        </Row>
      </Container>
    </Layout>
  );
}
