import React, { useEffect, useState } from 'react';
import Navbar from 'src/components/Navbar';

const Header = ({ onChangeTheme }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light')
  );
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    onChangeTheme(theme);
  }, [theme]);

  return (
    <div className='flex justify-between gap-5 px-10 items-center w-full h-[50px] shadow-2xl'>
      <Navbar />
    </div>
  );
}

export default Header;
