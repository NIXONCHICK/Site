import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '..'
import { Row, Card } from 'react-bootstrap'

const BrandBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <Row>
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          style={{ cursor: 'pointer', width: 150 }}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  )
})

export default BrandBar
