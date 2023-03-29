import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Category({filterByCategory,allCategory}) {
  return (
    <Row className='my-2 mb-5'> 
    <Col sm="12" className='d-flex justify-content-center'>
        {
          allCategory.length>=1 ?(allCategory.map((cat)=>
          {
            return(

              
                <div>
                <button onClick={()=>filterByCategory(cat)} style={{border:'1px solid red'}} className='btn mx-2'>{cat}</button>
            </div>
       
            )
          })):<h3>لا يوجد تصنيفات</h3>
        }
        </Col>
    </Row>
  )
}

export default Category