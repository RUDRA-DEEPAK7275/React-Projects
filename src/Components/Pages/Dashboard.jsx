import React from 'react'
import Topnav from './Topnav'
import Sidenav from './Sidenav'
import {Row, Col} from "react-bootstrap"

function Dashboard() {
  return (
    <div>
      <Topnav />
      <div>
        <div>
          <Row>
            <Col md={4}>
              <Sidenav />
            </Col>
            <Col md={8}>
              
            </Col>
          </Row>
        </div>

      </div>
          
         
    </div>
  )
}

export default Dashboard
