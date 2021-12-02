import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; QLD Camping Bears 2021</p>
      <p>
        <Link href='/about'>
          {router.pathname === "/about" ? "" : <a>About This Project</a>}
        </Link>
      </p>
    </footer>
  )
}
