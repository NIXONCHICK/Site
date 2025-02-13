import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import Shop from '../pages/Shop'
import { useContext } from 'react'
import { Context } from '../index'

const AppRouter = () => {
  const { user } = useContext(Context)
  console.log(user)
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />
        })}
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />
      })}
      <Route path="*" element={<Shop />} />
    </Routes>
  )
}

export default AppRouter
