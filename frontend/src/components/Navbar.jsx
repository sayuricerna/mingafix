import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapIcon, DocumentTextIcon, UserCircleIcon, BellIcon } from '@heroicons/react/24/outline'; 

const navItems = [
  { name: 'Mapa', path: '/map', icon: MapIcon },
  { name: 'Reportes', path: '/reports', icon: DocumentTextIcon },
  { name: 'Perfil', path: '/profile', icon: UserCircleIcon },
  { name: 'Notif.', path: '/notifications', icon: BellIcon },
];

const Navbar = () => {
  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto
                 bg-white shadow-2xl border-t border-gray-100 
                 flex justify-around items-center h-16 z-10"
    >
      {navItems.map((item) => (
        <NavLink 
          key={item.name} 
          to={item.path} 
          className={({ isActive }) => `
            flex flex-col items-center justify-center 
            text-sm font-medium w-full h-full 
            transition duration-150 ease-in-out
            text-gray-500
            ${isActive 
              ? 'text-azul-oscuro border-t-2 border-azul-oscuro -mt-0.5' 
              : 'hover:text-azul-claro'
            }
          `}
        >
          <item.icon className="w-6 h-6" />
          <span className="text-xs mt-0.5">{item.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;