import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='bottomCenter'>
    <button
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
      onClick={() => customFunc()}
      style={{ color }}
      type='button'
    >
      <span
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
        style={{ backgroundColor: dotColor }}
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
);
const handleClick = (prop) => console.log(prop);
const Navbar = () => {
  const { activeMenu, setactiveMenu } = useStateContext();

  return (
    <nav className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <NavButton
        customFunc={() => setactiveMenu((prevActiveMenu) => !prevActiveMenu)}
        title='Menu'
        color='blue'
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <NavButton
          customFunc={() => handleClick('cart')}
          title='Menu'
          color='blue'
          icon={<FiShoppingCart />}
        />
        <NavButton
          customFunc={() => handleClick('chat')}
          title='Menu'
          color='blue'
          dotColor='#03C9D7'
          icon={<BsChatLeft />}
        />
        <NavButton
          customFunc={() => handleClick('notification')}
          title='Menu'
          dotColor='#03C9D7'
          color='blue'
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          >
            <img className='rounded-full w-8 h-8' src={avatar} alt='avatar' />
            <p>
              <span className='text-gray-400 text-14'>Hi,</span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>

      </div>
    </nav>
  );
};

export default Navbar;
