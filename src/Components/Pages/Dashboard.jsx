import React from 'react'
import Topnav from './Topnav'
import Sidenav from './Sidenav'
import {Row, Col} from "react-bootstrap"
import Main from './Main'

function Dashboard() {
  return (
    <div>
      <Topnav />
      <div>
        <div>
          <Row>
            <Col md={2}>
              <Sidenav />
            </Col>
            <Col md={10}>
              <Main/>
            </Col>
          </Row>
        </div>

      </div>
          
         
    </div>
  )
}

export default Dashboard
