import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'

const AppRouter = () => {
  const isAuth = false
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} component={Component} exact />
        })}
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} component={Component} exact />
      })}
    </Routes>
  )
}

export default AppRouter
