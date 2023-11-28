import React from 'react'
import { useContext, useState } from 'react'
import "./css/Tags.css"
import AdminOptions from '../Components/AdminOptions/AdminOptions'
import UpLoadTag from '../Components/UpLoadTag/UpLoadTag'
import EditTags from '../Components/GetTags/EditTags'



function Tags() {
  return (
    <div className='tags'>
        <AdminOptions/>
        
        <div className="edit-tags">
        <UpLoadTag/>
        <EditTags/>
      </div>
    </div>
  )
}

export default Tags