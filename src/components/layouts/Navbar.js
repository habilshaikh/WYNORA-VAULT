import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useAuth } from '../../context/AuthContext';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/security', label: 'Security' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#2B3C5E] border-b border-[#445678]'
          : 'bg-[#2B3C5E]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* LOGO — BrandWordmark */}
        {/* LOGO — inline Brand */}
<Link to="/" data-testid="navbar-logo" className="flex items-center">
  <img
    src="/LOGO.png"
    alt="Wynora Vault"
    style={{ height: '55px', width: 'auto' }}
  />
  <div className="flex flex-col justify-center">
    <span
      style={{
        color: '#D4AF37',
        fontWeight: 700,
        fontSize: '22px',
        letterSpacing: '0.08em',
        lineHeight: 1.2,
      }}
    >
      WYNORA VAULT
    </span>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: '#D4AF37',
        fontSize: '10px',
        letterSpacing: '0.12em',
        fontWeight: 500,
        opacity: 0.75,
      }}
    >
      <span>Personalized</span>
      <span style={{ opacity: 0.5 }}>|</span>
      <span>Safe</span>
      <span style={{ opacity: 0.5 }}>|</span>
      <span>Trusted</span>
    </div>
  </div>
</Link>
          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-[16px] font-semibold transition-colors ${
                  location.pathname === link.href
                    ? 'text-[#D4AF37]'
                    : 'text-white hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px]"
                    style={{ background: '#D4AF37' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* RIGHT BUTTONS */}
          <div className="hidden lg:flex items-center gap-5">
            {user ? (
              <Link to={user.role === 'admin' ? '/admin' : '/dashboard'}>
                <Button
                  className="rounded-full px-7 py-2.5 font-semibold"
                  style={{ background: '#D4AF37', color: '#1A2540' }}
                >
                  Dashboard
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-white hover:text-[#D4AF37]">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    className="rounded-full px-7 py-2.5 font-semibold"
                    style={{ background: '#D4AF37', color: '#1A2540' }}
                  >
                    Get Started
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#2B3C5E] border-t border-[#445678]"
          >
            <div className="px-6 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 font-semibold ${
                    location.pathname === link.href ? 'text-[#D4AF37]' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#445678] space-y-3">
                {user ? (
                  <Link to="/dashboard">
                    <Button className="w-full" style={{ background: '#D4AF37', color: '#1A2540' }}>
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="outline" className="w-full text-white border-white">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button className="w-full" style={{ background: '#D4AF37', color: '#1A2540' }}>
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};