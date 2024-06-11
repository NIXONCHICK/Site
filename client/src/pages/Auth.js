import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userAPI'
import { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'

const Auth = observer(() => {
  const { user } = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
        console.log(data)
      } else {
        data = await registration(email, password)
      }
      user.setUser(data)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3"
            placeholder="Введите ваш email..."
          />
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3"
            placeholder="Введите ваш пароль..."
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            <Button onClick={click} variant={'outline-success'}>
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
            {isLogin ? (
              <div>
                Нет аккаунта?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
          </Row>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth
