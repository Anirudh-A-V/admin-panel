import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

import { useStateContext } from '../contexts/ContextProvider'
import { userProfileData } from '../data/dummy'
import { Button } from '.'

import avatar from '../data/avatar.jpg'

const UserProfile = () => {
  const { activeMenu, setActiveMenu, clicked, setScreenSize, handleClick, screenSize, currentColor } = useStateContext();
  return (
    <div className='nav-item absolute right-1 top16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg dark:text-gray-200'>
          User Profile
        </p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bg-HoverColor='light-gray'
          size='2xl'
          borderRadius='50%'
          // Func={() => handleClick('userProfile')}
        />
      </div>
    </div>
  )
}

export default UserProfile