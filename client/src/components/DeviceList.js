import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '..'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
  const { device } = useContext(Context)
  return (
    <Row>
      {device.devices.map((deviceData) => (
        <DeviceItem
          key={deviceData.id}
          device={deviceData}
          brand={device.brands[deviceData.brandId - 1].name}
        />
      ))}
    </Row>
  )
})

export default DeviceList
