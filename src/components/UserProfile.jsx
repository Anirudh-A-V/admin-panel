import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

import { useStateContext } from '../contexts/ContextProvider'
import { userProfileData } from '../data/dummy'
import { Button } from '.'

import avatar from '../data/avatar.jpg'

const UserProfile = () => {
  const { currentColor, initialState, setClicked } = useStateContext();
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
          Func={() => setClicked(initialState)}
        />
      </div>
      <div className='flex gap-5 items-center mt-6 border-color border-b-1 pb-6'>
        <img
          className='rounded-full w-20 h-20'
          src={avatar}
          alt='avatar'
        />
        <div>
          <p className='font-semibold text-xl dark:text-gray-200'>Michael Roberts</p>
          <p className='text-sm text-gray-400 dark:text-gray-400'>
            Administrator</p>
          <p className='text-sm font-semibold text-gray-400 dark:text-gray-400'>
            info@shop.com</p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className='flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]'>
            <button
              type='button'
              className='text-xl rounded-lg p-3 hover:bg-light-gray'
              style={{ backgroundColor: item.iconBg, color: item.iconColor }}
            >
              {item.icon}
            </button>
            <div>
              <p className='font-semibold dark:text-gray-200'>
                {item.title}
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5'>
        <Button
          text='Logout'
          color='white'
          bgColor={currentColor}
          borderRadius='10px'
          width='full'
        />
      </div>
    </div>
  )
}

export default UserProfile