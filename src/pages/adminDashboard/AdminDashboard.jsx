import React from 'react'
import Dashboard from '../../components/DriverDashboard/DriverDash'
import EducationalSection from '../../components/EducationalDash/EduDash'
import './adminDashboard.css'

const AdminDashboard = () => {
  return (
    <div className='adminDashboard'>
        <Dashboard />
        <EducationalSection />
    </div>
  )
}

export default AdminDashboard
