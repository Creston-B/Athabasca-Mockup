import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Container, Col, Card } from "react-bootstrap";
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
        <Row id="About" className="title-row mt-4 mb-2">
          <Col>
            <h1 className="mainhead">Kikapekiskwewin</h1>
            <h4 className="subhead">
              Why are cultural values so important to Indigenous people involved
              in research with Indigenous people?
            </h4>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <p>
              This two-day, in-person and online event and outreach activities
              explores the central theme of &quot;parallel pathways&quot; to research
              ethics by 1) centering and exploring how Indigenous people want to
              advance self-determination through Indigenous research ethics; and
              2) considering how REB representatives and financial
              administrators can be responsive and accountable to assertions of
              Indigenous self-determination. By bringing together Indigenous
              researchers, Indigenous people involved in research, members of
              research ethics boards, scholars from the international community,
              and national leaders of Indigenous organizations, we will discuss
              the possibilities of advancing parallel pathways to research
              ethics using Indigenous values that inform Indigenous legal
              traditions (Borrows, 2019).
            </p>
            <p>
              To open possibilities for &apos;imagining otherwise&apos;, these discussions
              will be grounded in an understanding of how some international
              post-secondary organizations operationalize research ethics. The
              forum will begin with Auger, Greene, Nath, and Tait presenting the
              paper, &quot;Wisdom Seeking Together&quot;: Circling around Research Ethics.
              We will follow cultural protocols and invite three co-creators of
              Auger&apos;s research who chose not to remain anonymous to this event.
              The proposal aims to bring together international experts to
              consult on the perspective articulated in the research literature
              for the purpose of assessing what consensus there.
            </p>
          </Col>
        </Row>
        <Row id="Team" className="mt-4 mb-4">
          <h4>Hosts</h4>
          <UserCarousel profiledata={profiledata} role="host"></UserCarousel>
        </Row>
        <Row className="mt-4 mb-4">
          <h4>Presenters</h4>
          <UserCarousel
            profiledata={profiledata}
            role="presenter"
          ></UserCarousel>
        </Row>
        <Row className="mt-4 mb-4">
          <h4>Schedule</h4>
          <p>TBA - TODO</p>
        </Row>
        <Row id="Present" className="mt-4 mb-4 mw-lg m-auto">
          <Col className="p-2 ">
            <h4>Submit a presentation</h4>
            <Form className="container border border-3 rounded">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Presentation Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Provide a brief description of your presentation"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Attach Files</Form.Label>
                <Form.Control type="file"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="submit" className="w-25"></Form.Control>
              </Form.Group>
            </Form>
          </Col>
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
        description:
          "Associate Professor of Indigenous Studies, Athabasca University",
        image: "/jauger-linkedin.jfif",
        linkedin: "https://www.linkedin.com/in/dr-josie-auger-5902b169/",
      },
      {
        name: "Dr. Nisha Nath",
        role: "host",
        description:
          "Assistant Professor of Equity Studies, Athabasca University",
        image: "/nnath-linkedin.jfif",
        linkedin: "https://www.linkedin.com/in/nisha-nath-phd-aa4b0a94/",
      },
      {
        name: "Dr. Carolyn Greene",
        role: "host",
        description:
          "Associate Professor of Criminal Justice, Athabasca University",
      },
      {
        name: "Myra Tait",
        role: "host",
        description:
          "Assistant Professor of Governence and Law & Management, Athabasca University",
        image: "/mtait-linkedin.jfif",
        linkedin: "https://www.linkedin.com/in/myra-j-tait-lawyer-592bbb53/",
      },
      {
        name: "Research Assistant",
        role: "host",
        description: "Position TBA",
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
