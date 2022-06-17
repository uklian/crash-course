import React from 'react'



const Message = ({color,error,width}) => {
  return (
    <div>
      <div className={`alert alert-${color}`} role='alert'>
			 {error}
		 </div>
    </div>
  )
}

export default Message