import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import styles from "@/styles/Header.module.css";
import Search from "@/components/Search";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>QLD Camping Bears</a>
        </Link>
      </div>

      <Search />

      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {user && user.role.type === 'admin' && (
            // If logged in
            <>
              <li>
                <Link href="/events/add">
                  <a>Add Event</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          )} 
          {user && user.role.type === 'authenticated' && (
            // If logged in
            <>
              
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          )} 
          
          {!user && (
            // If logged out
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
