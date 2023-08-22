import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom"
import './NavBaro.css'




const NavBaro = () => {
  const navigate = useNavigate();
  return (
    <div className='mainContainer'>
      
      <Navbar className='bar'>
        <Container className='one'>
          <Navbar.Brand onClick={()=>navigate("/home")}
         className='point'
         >Comsats</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className='bar'>
        <Container className='one'>
          <Navbar.Brand>welcome to universe of IT .the place of programmers and developers</Navbar.Brand>
        </Container>
      </Navbar>
     
      <br />
      <Navbar  className='bar'>
        <Container className='one'>
          <Navbar.Brand onClick={()=>navigate("/about")}
          className='point'
          >
            <img
              alt=""
              src="https://1.bp.blogspot.com/-k0Jkv-KyWM4/XeNiEoxvd_I/AAAAAAAABuA/T7lBjvZVa_QDCy9Gm-NYY2qrebcp_N_tgCLcBGAsYHQ/s1600/comsats%2Blogo.jpg"
              
            />{' '}
            Comsats University Islamabad
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default NavBaro
