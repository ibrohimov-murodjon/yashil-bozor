import React from 'react'
import './MpSidebar.scss'

const MpSidebar = () => {
  return (
    <aside className="aside">
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          <li className="active">
            <h5>House Plants</h5>
            <h5>(33)</h5>
          </li>
          <li>
            <h5>Flowers</h5>
            <h5>(12)</h5>
          </li>
          <li>
            <h5>Juniper</h5>
            <h5>(65)</h5>
          </li>
          <li>
            <h5>Small Plants</h5>
            <h5>(39)</h5>
          </li>
          <li>
            <h5>Big Plants</h5>
            <h5>(23)</h5>
          </li>
          <li>
            <h5>Soils</h5>
            <h5>(17)</h5>
          </li>
          <li>
            <h5>Vitamins</h5>
            <h5>(39)</h5>
          </li>
        </ul>
      </div>
      <div className="size">
        <h2>Size</h2>
        <ul>
          <li className="active">
            <h5>Small</h5>
            <h5>(119)</h5>
          </li>
          <li>
            <h5>Medium</h5>
            <h5>(86)</h5>
          </li>
          <li>
            <h5>Large</h5>
            <h5>(78)</h5>
          </li>
        </ul>
      </div>
      <div className="price">
        <h2>Price</h2>
        <input type="range" min={"0"} max={"10"} step={"1"} />
        <h5>
          Price: <span className="active">$39-$1230</span>
        </h5>
        <button>Filter</button>
      </div>
    </aside>
  )
}

export default MpSidebar