import React from 'react'

export default function MessageUser() {
  return (
    <div className="d-flex justify-content-end mb-4">
        <div className="msg_cotainer_send">
            Ok, thank you have a good day
            <span className="msg_time_send">9:10 AM, Today</span>
        </div>
        <div className="img_cont_msg">
           <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
        </div>
    </div>
  )
}
