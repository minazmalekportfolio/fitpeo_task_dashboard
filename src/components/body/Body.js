import React from 'react'
import TotalCards from './TotalCards'
import Profit from './Profit'
import { BarChart } from 'react-bootstrap-icons'
import ImpLinksComponent from './ImpLinksComponent'
import RecentOrdersComp from './RecentOrdersComp'
import FeedbackComp from './FeedbackComp'
import { Col, Row } from 'react-bootstrap'
import BarChartComponent from './BarChartComponent'

const Body = () => {
  return (
    <section className='section-body'>
    <div className='container-fluid'>
      <h1 className='title text-white'>Dashboard</h1>
      <Row className='g-3'>
        <Col sm={8}>
          <TotalCards className='h-100' />
        </Col>
        <Col sm={4}>
          <Profit className='h-100'  />
        </Col>
        
        <Col sm={8}>
        <BarChartComponent className='h-100'  />
        </Col>
        <Col sm={4}>
        <ImpLinksComponent className='h-100'  />
        </Col>
        
        <Col sm={8}>
        <RecentOrdersComp  className='h-100' />
        </Col>
        <Col sm={4}>
        <FeedbackComp className='h-100'  />
        </Col>

      </Row>
    </div>
    </section>
  )
}

export default Body