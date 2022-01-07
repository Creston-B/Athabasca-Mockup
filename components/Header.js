import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import styles from '../styles/Home.module.scss'
import Image from 'next/dist/client/image'

export default class HeaderComponent extends Component {
  render() {
    return(
      <header className={'header', styles.header}>
        <NavComponent/>
      </header>
    )
  }
}

class NavComponent extends Component {
  render() {
    return(
    <Navbar
    expand='lg'
    className='navbar'
    >
      <Navbar.Brand href='/' className='navbar-brand'>
        <Image src='/Athabasca_University_Logo_2017.svg' alt='Athabasca Logo' width={140} height={50} priority/>
        </Navbar.Brand>
        <div className='right'>
      <Navbar.Toggle className='navbar-toggle' aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
            <Nav.Link href='/About'>
              <span className='btn btn-info btn-lg'>About</span>
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    )
  }
}