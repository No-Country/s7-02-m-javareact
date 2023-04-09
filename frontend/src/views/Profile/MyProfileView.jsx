import React from 'react'

function MyProfileView() {
  return (
    <div style={{border:"2px solid blue"}} className="profile-container flex max-sm:flex-col overflow-x-hidden items-center justify-center"  >
            <div className='container-column flex-col items-center w-4/6 p-3 max-sm:w-11/12  max-sm:p-0' ></div>
            <div className='container-column flex-col items-center w-4/6  max-sm:w-11/12  max-sm:p-0' ></div>
    </div>
  )
}

export default MyProfileView