import { useEffect } from 'react'
import '../styles/dashboard.css'
import DashboardHeader from './DashboardHeader'

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Blogsite | Dashboard'
  })

  return (
    <>
      <DashboardHeader />
    </>
  )
}

export default Dashboard
