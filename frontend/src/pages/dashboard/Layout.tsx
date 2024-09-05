import { Footer } from '../../components'
import DashboardHeader from './DashboardHeader'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <DashboardHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout