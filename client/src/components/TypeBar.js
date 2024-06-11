import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '..'
import { ListGroup } from 'react-bootstrap'

const TypeBar = observer(() => {
  const { device } = useContext(Context)
  return (
    <ListGroup>
      {device.types.map((type) => {
        return (
          <ListGroup.Item
            active={type.id === device.selectedType.id}
            onClick={() => device.setSelectedType(type)}
            style={{ cursor: 'pointer' }}
            key={type.id}
          >
            {type.name}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
})

export default TypeBar
