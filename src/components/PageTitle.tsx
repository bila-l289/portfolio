import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles: Record<string, string> = {
  '/': 'Home | Muhammad Bilal - Shopify & Marketing Expert',
  '/about': 'About Me | Muhammad Bilal',
  '/portfolio': 'Portfolio | My Recent Shopify Projects',
  '/services': 'Services & Packages | Shopify E-commerce Solutions',
  '/reviews': 'Client Reviews | What Brands Say About Me',
  '/contact': 'Contact Me | Let\'s Scale Your Brand',
};

export default function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] || 'Muhammad Bilal | Shopify Expert';
  }, [pathname]);

  return null;
}
