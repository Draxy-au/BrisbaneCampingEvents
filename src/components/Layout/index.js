import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import styles from '@/styles/Layout.module.css';
import Footer from '@/components/Footer';
import Showcase from '@/components/Showcase';

export default function Layout({title, keywords, description, children}) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>     
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

      { router.pathname === '/' &&   
        <Showcase />
      }

      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Brisbane Camping Events',
  description: 'Find the latest event information for the Brisbane Camping Group!',
  keywords: 'brisbane, camping, events, group'
}
