import React, { useState } from 'react'


export default function Message(props) {

  const [hovered, setHoverd] = useState(false)
  const [clicked, setCklicked] = useState(false)
  const [clickedForEdit, setClickedForEdit] = useState(false)
  const [changeValue, setChangeValue] = useState(props.content)
  const [changed, setChanged] = useState(false)


//   const handeleMouse = ()=>{
//       setHoverd(true)
//   }
//   const handleLeave= ()=>{
//       setHoverd(false)
//   }
  

//   function handleClick(){
//     if(clicked=== false){
//       setCklicked(true)
//     }else{
//       setCklicked(false)
//     }
//     console.log(props.id);
//   }

  // const deleteClick = ()=>{
  //   props.handleDelete(props.id)
  // }

//   const editClick = ()=>{
//     setClickedForEdit(true)
//     setCklicked(false)
//   }
//   const handleChange = (event)=>{
//     const value = event.target.value
//     setChangeValue(value)
//   }
//   const handleSubmitForEdit = (e)=>{
//      e.preventDefault() 
//      setClickedForEdit(false)
//      axiosInstance.patch(`/editMessage/${props.id}`, {
//       user1: props.name,
//       user2: props.user2,
//       messageId: props.id,
//       content: changeValue
//     })
  
//   }
  const handleClickEdit = ()=>{}
    
  const msgContent = ()=>{
    
      return(
        <span>
        {props.content} 
        <div className= {props.classes[2]} >
          {/* <span className={props.classes[5]} >{hovered && <FaAngleDown size={"1.7rem"} />} </span> */}
        </div> 
     </span> 
      )

 
  }

//   const deleteClick = ()=>{
//     if(clicked=== false){
//       setCklicked(true)
//     }else{
//       setCklicked(false)
//     }
//     props.handleDelete(props.id)
    
//   }
  
  return (

    
    <div className={`d-flex ${props.classes[0]} mb-4`}>
     {props.whichOne === "bot" && <div className="img_cont_msg">
          <img src={"data:image/png;base64,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"} className="rounded-circle user_img_msg"/>
        </div> } 
        <div className={props.classes[1]}>
          <span>
             {props.content} 
          </span> 
            
            <div className="block"></div>
        
            <span className={props.classes[4]} >{props.time}</span>
        </div>
        {props.whichOne ==="main" && <div className="img_cont_msg">
          <img src={"https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"} className="rounded-circle user_img_msg"/>
        </div> } 
    </div>

  )   
}