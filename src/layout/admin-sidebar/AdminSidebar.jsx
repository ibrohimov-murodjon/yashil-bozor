import React from 'react'
import './AdminSidebar.scss'
import { NavLink, Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <aside className='sidebar'>
        <h2>
            <Link to='/'>Yashil Bozor</Link>
        </h2>
            <ul className="menu__list">
                <li className='list__item'>
                    <NavLink className={({isActive})=> isActive ? 'link link--active' : 'link'} to=''>Manage Products</NavLink>
                </li>
                <li className='list__item'>
                    <NavLink className={({isActive})=> isActive ? 'link link--active' : 'link'} to='sellers'>Sellers</NavLink>
                </li>
                <li className='list__item'>
                    <NavLink className={({isActive})=> isActive ? 'link link--active' : 'link'} to='manage-hashar'>Manage Hashars</NavLink>
                </li>
            </ul>
    </aside>
  )
}

export default AdminSidebar