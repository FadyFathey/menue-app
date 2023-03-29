import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
function ItemsList({itemsDate}) {
    
return (
<Row >
    <Zoom>
    {
        itemsDate.length>=1?(itemsDate.map((item)=>
        {
                return(
                    <Col key={item.id} sm='12' className='mb-3  ' >
                    <Card style={{color:"white"}} className=' bg-black d-flex flex-row'>
                    <Card.Img className='img-item' variant="top" src={item.imgUrl} />
                    <Card.Body>
                        <Card.Title className='d-flex justify-content-between'>
                        
                            <div className="item-title">{item.title}</div>
                            <div className="item-price">{item.price}</div>    
                        
                        </Card.Title>
                        <Card.Text className='py-2'>
                        {item.description}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                )
        })):<h3 className='text-center'>لايوجد اصناف</h3>
    }
   </Zoom>
</Row>
)
}

export default ItemsList