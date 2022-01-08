import styles from "../styles/Home.module.scss";
import React, { Component } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { Card } from "react-bootstrap";

export default class UserCarousel extends Component {
  render() {

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    const { profiledata, role } = this.props;
    const profiles = profiledata.profiles.filter(user => user.role == role);

    if (Object.keys(profiles).length == 0){
      return(
        <div className="mt-4 mb-4"><h2>To be announced!</h2></div>
      )
    }

    return(
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {profiles.map(user => (
          <UserCard key={user.name} name={user.name} description={user.description} image={user.image || profiledata.defaultImage}></UserCard>
        ))}
      </Carousel>
    )
    }
}

class UserCard extends Component {
  render() {
    const { name, description, image } = this.props;
    return (
      <Card>
          <Image
            src={image}
            alt={name}
            width={800}
            height={800}
            layout="responsive"
            className="card-image"
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
    );
  }
}