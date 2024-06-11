import { Card, Col, Image } from 'react-bootstrap'
import star from '../assets/star.png'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({ device, brand }) => {
  const navigate = useNavigate()
  return (
    <Col md={3} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border="light">
        <Image
          width={150}
          height={150}
          src={'http://localhost:5000/' + device.img}
        />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>{brand}</div>
          <div className="d-flex align-items-center">
            <div>{device.raining}</div>
            <Image src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
}

export default DeviceItem
