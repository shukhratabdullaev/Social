import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from "react";




const ProfileStatus = (props: ProfileStatusType) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)



  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode
        ? <div>
          <span 
          // onDoubleClick={activateEditMode}
          style={{cursor: 'pointer'}}
          >{props.status || "Write here your status"}</span>
          <button type={'button'} onClick={activateEditMode}>Edit status</button>
        </div>
        : <div>
          <input value={status} onChange={onStatusChangeHandler} autoFocus={true} onBlur={deactivateEditMode} />
        </div>
      }
    </div>
  )

}

export default ProfileStatus








type ProfileStatusType = {
  status: string
  updateUserStatus: (status: string) => void
}