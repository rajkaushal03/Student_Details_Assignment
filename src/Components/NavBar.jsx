import React from 'react'
import { useAuthContext } from '../Context/AuthContext'

const NavBar = () => {
  const { userLoggedIn,setUserLoggedIn,setShowLoginForm } = useAuthContext()
  return (
    <div  >
      <div className='flex justify-between items-center bg-primary p-4  shadow-md '>
        <div className='flex items-center gap-3'>
          <h1 className='sm:text-4xl  font-black text-white'>BabyCode Academy</h1>
        </div>
        <div>


          {userLoggedIn ?
            <div className="flex gap-2">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://avatar.iran.liara.run/public/" />
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow cursor-pointer" onClick={() => setUserLoggedIn(prev => !prev)} >
                  Logout
                </div>
              </div>
            </div> : <button className='btn sm:btn-md sm:rounded-lg btn-xs capitalize bg-white text-black' onClick={() => setShowLoginForm(prev => !prev)} >LogIn</button>}
        </div>
      </div>
    </div>
  )
}

export default NavBar