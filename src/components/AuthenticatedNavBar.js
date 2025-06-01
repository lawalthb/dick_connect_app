import DashboardIcon from '@/Images/Icons/DashboardIcon';
import ConnectingIcon from '@/Images/Icons/ConnectingIcon';
import ChatIcon from '@/Images/Icons/ChatIcon';
import LivestreamIcon from '@/Images/Icons/LivestreamIcon';
import AdvertisingIcon from '@/Images/Icons/AdvertisingIcon';
import SettingsIcon from '@/Images/Icons/SettingsIcon';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';

const AuthenticatedNavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const subNav = [
    { name: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
    { name: 'Connecting', path: '/connecting', icon: ConnectingIcon },
    { name: 'Chat', path: '/chat', icon: ChatIcon },
    { name: 'Livestream', path: '/livestream', icon: LivestreamIcon },
    { name: 'Advertising', path: '/advertising', icon: AdvertisingIcon },
    { name: 'Settings', path: '/settings', icon: SettingsIcon },
  ];

  const handleNavClick = (path) => {
    if (pathname !== path) {
      router.push(path);
    }
  };

  return (
    <div className="h-[72px] w-[90%] rounded-xl bg-white flex items-center justify-end gap-40 mx-auto mt-5">
      <div className="flex gap-1">
        {subNav.map((nav, index) => {
          const IconComponent = nav.icon;
          const isActive = nav.path === pathname;

          return (
            <div
              key={index}
              onClick={() => handleNavClick(nav.path)}
              className={`flex items-center gap-3 hover:bg-[rgba(162,0,48,0.29)] hover:text-[#A20030] ${
                isActive
                  ? 'bg-[rgba(162,0,48,0.29)] text-[#A20030]'
                  : 'text-[#444750]'
              } px-5 py-3 rounded-lg cursor-pointer transition-colors duration-200`}
            >
              <IconComponent
                className={`size-5 hover:stroke-[#A20030] ${isActive ? 'stroke-[#A20030]' : 'stroke-[#444750]'}`}
                aria-label={`${nav.name} Icon`}
              />
              <h3 className="font-normal text-sm leading-5">{nav.name}</h3>
            </div>
          );
        })}
      </div>
      <div className="flex gap-3 items-center mr-5">
        <IoMdNotificationsOutline className="text-[#444750] size-8 cursor-pointer" />
        {/* <img src="" alt="User Image" /> */}
        <RxAvatar className="text-[#444750] size-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default AuthenticatedNavBar;
