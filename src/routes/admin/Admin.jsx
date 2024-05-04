import React from 'react'
import './Admin.scss'
import AdminSidebar from '../../layout/admin-sidebar/AdminSidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className="Admin">
      <div className="admin-sidebar">
        <AdminSidebar />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  )
}

export default Admin