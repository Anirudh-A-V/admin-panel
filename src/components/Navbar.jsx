import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const Navbutton = ({ title, Func, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={Func}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, clicked, setClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <Navbutton title='Menu' Func={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} icon={<AiOutlineMenu />} color='blue' dotColor='blue' />
      <div className='flex'>
        <Navbutton
          title='Cart'
          Func={() => handleClick('cart')}
          icon={<FiShoppingCart />}
          color='blue'
          dotColor='blue'
        />
        <Navbutton
          title='Chat'
          Func={() => handleClick('chat')}
          icon={<BsChatLeft />}
          color='blue'
          dotColor='#03C9D7'
        />
        <Navbutton
          title='Notifications'
          Func={() => handleClick('notification')}
          icon={<RiNotification3Line />}
          color='blue'
          dotColor='#03C9D7'
        />
        <TooltipComponent
        content='Profile'
        position="BottomCenter"
        >
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}>
            <img src={avatar} alt='avatar' className='w-8 h-8 rounded-full' />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>John</span>
            </p>
            <MdKeyboardArrowDown  className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>

        {clicked.cart && <Cart />}
        {clicked.chat && <Chat />}
        {clicked.notification && <Notification />}
        {clicked.userProfile && <UserProfile />}

      </div>
    </div>
  )
}

export default Navbar