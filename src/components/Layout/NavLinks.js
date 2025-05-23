import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Features' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact Us' },
];

const NavLinks = () => {
  return (
    <nav className="flex flex-col lg:flex-row gap-6 items-start">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-sm font-medium text-white hover:text-gray-300  lg:text-gray-600 lg:hover:text-gray-400 transition-colors`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
