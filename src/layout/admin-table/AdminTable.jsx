import React from 'react'
import { useLocation } from 'react-router-dom'

const AdminTable = () => {
    const {pathname} = useLocation()
    console.log(pathname );
  return (
    <div className="admin-table">
      <form>
        <input type="text" placeholder="Write product..." required="required"/>
        <button>Add Products</button>
      </form>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default AdminTable