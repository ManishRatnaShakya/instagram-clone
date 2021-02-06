import React from 'react'
import UserNotification from './UserNotification/UserNotification'
import './Notification.css'
function Notification({data}) {
    console.log("notification",data)
    return (
        <div>
            {data && data.map(d=><div><UserNotification profile_picture={d.user.profile_image.small} username={d.user.instagram_username} /><hr/>  </div>)}
        </div>
    )
}

export default Notification
