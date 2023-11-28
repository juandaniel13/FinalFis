import React from 'react'
import AdminOptions from '../Components/AdminOptions/AdminOptions'
import UploadDesing from '../Components/UploadDesing/UploadDesing'
import EditTags from '../Components/GetTags/EditTags'
import EditDesings from '../Components/EditDesings/EditDesings'
import "./css/ManageDesings.css"

function ManageDesings() {
  return (
    <div className='manage-desings'>
        <AdminOptions/>
        <div className="edit-desings">
        <UploadDesing/>
        <EditDesings/>
        </div>
    </div>
  )
}

export default ManageDesings