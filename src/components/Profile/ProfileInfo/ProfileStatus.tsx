import React, { useState } from "react";




const ProfileStatus = (props: any) => {

  const [editMode, setEditMode] = useState(false)



  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
  }

  return (
    <div>
      {!editMode
        ? <div>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
        : <div>
          <input value={props.status} autoFocus={true} onBlur={deactivateEditMode} />
        </div>
      }
    </div>
  )

}

export default ProfileStatus