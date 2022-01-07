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
        <Row className="title-row">
          <Col>
            <h1 className="mainhead">Kikapekiskwewin</h1>
            <h4 className="subhead">
              Why are cultural values so important to Indigenous people involved
              in research with Indigenous people? aaaaaaaaaaaaaaaa aaaaa
              aaaaaaaaaaaaaaaa aaaaaa Why are cultural values so important to
              Indigenous people involved in research with Indigenous people?
              aaaaaaaaaaaaaaaa aaaaa aaaaaaaaaaaaaaaa aaaaaa
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>A project description.</Col>
        </Row>
        <Row>
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
            </Card>
          </Col>
          <Col>Image 2</Col>
          <Col>Image 3</Col>
        </Row>
      </Container>
    </Layout>
  );
}
