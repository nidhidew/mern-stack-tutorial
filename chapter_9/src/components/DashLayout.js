import {Outlet} from 'react-router-dom'
import DashHeader from './DashHeader'
import DAshFooter from './DAshFooter'

const DashLayout = () => {
  return (
    <>
        <DashHeader />
        <div className='dash-container'>
            <Outlet />
        </div>
        <DAshFooter />
    </>
  )
}

export default DashLayout
