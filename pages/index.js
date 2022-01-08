import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import UserCarousel from "../components/UserCarousel";

export default function Home({ profiledata }) {
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
        <Row className="mt-4 mb-4">
          <h4>Hosts</h4>
          <UserCarousel profiledata={profiledata} role="host"></UserCarousel>
        </Row>
        <Row className="mt-4 mb-4">
          <h4>Presenters</h4>
          <UserCarousel profiledata={profiledata} role="presenter"></UserCarousel>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const profiledata = {
    defaultImage: "/sample-user.png",
    profiles: [
      {
        name: "Dr. Josie Auger",
        role: "host",
        description: "Associate Professor of Indigenous Studies, Athabasca University",
        image: "/jauger-linkedin.jfif",
      },
      {
        name: "Dr. Nisha Nath",
        role: "host",
        description: "Assistant Professor of Equity Studies, Athabasca University",
        image: "/nnath-linkedin.jfif",
      },
      {
        name: "Dr. Carolyn Greene",
        role: "host",
        description: "Associate Professor of Criminal Justice, Athabasca University",
      },
      {
        name: "Myra Tait",
        role: "host",
        description: "Assistant Professor of Governence and Law & Management, Athabasca University",
        image: "/mtait-linkedin.jfif",
      },
    ],
  };

  if (!profiledata) {
    return {
      notFound: true,
    };
  }

  return {
    props: { profiledata },
  };
}
