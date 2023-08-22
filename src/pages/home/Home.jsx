import React from 'react'
import NavBar from '../../components/navbars/NavBaro'
import TableOne from '../../components/table/TableOne'
import AccordianOne from '../../components/accordian/AccordianOne'
import './Home.css'

const Home = () => {
  return (
    <div className='homey' >
      <NavBar/>
      <TableOne/>
      <AccordianOne/>
    </div>
  )
}

export default Home


