import React, { Component } from 'react'
import { Button } from 'antd'
// import './Admin.css'
import './Admin.less'
// import './Admin.scss'
export default class Admin extends Component {
  render() {
    return (
      <div className='admin-container'>
        Admin
        <Button type="primary">按鈕1</Button>
      </div>
    )
  }
}
