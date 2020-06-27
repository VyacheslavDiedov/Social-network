import React,  {useState, useEffect} from 'react';
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    const activateEditMode = () => {
        setEditMode(true);
    }

    useEffect(() => {
        setStatus(props.status)
        },[props.status])


    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
        return (
            <>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange}
                               autoFocus={true}
                               onBlur={deactivateEditMode}
                               value={status}
                        />
                    </div>
                }
            </>
        )
}

export default ProfileStatusWithHook;