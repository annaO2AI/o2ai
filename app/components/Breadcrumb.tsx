import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <nav className="flex py-4 px-0 max-w-7xl mx-auto text-sm" aria-label="Breadcrumb">
      <ol className="inline-flex items-center">
        <li className="inline-flex items-center">
          <Link href="/" className="text-[#ffffff] hover:text-[#ffffff] flex gap-2 items-center">
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 4.4537L5.5 0.5L10.5 4.4537V10.6667C10.5 10.9663 10.3829 11.2536 10.1746 11.4654C9.96619 11.6773 9.68357 11.7963 9.38889 11.7963H1.61111C1.31643 11.7963 1.03381 11.6773 0.825437 11.4654C0.617063 11.2536 0.5 10.9663 0.5 10.6667V4.4537Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.83203 11.7966V6.14844H7.16536V11.7966" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <li key={href} className="inline-flex items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.73967 12.7996C5.43613 12.5177 5.41856 12.0432 5.70041 11.7397L9.22652 8L5.70041 4.26034C5.41856 3.9568 5.43613 3.48225 5.73967 3.2004C6.0432 2.91855 6.51775 2.93613 6.7996 3.23966L10.7996 7.48966C11.0668 7.77742 11.0668 8.22257 10.7996 8.51034L6.7996 12.7603C6.51775 13.0639 6.0432 13.0814 5.73967 12.7996Z" fill="white"/>
              </svg>
              {isLast ? (
                <span className="text-[#ffffff] capitalize">{segment}</span>
              ) : (
                <Link href={href} className="text-[#ffffff] hover:text-[#ffffff]">
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;