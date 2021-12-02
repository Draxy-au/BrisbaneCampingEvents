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
        <meta property="og:title" content="QLD Camping Bears" />
        <meta property="og:description"
          content="We are a community social group for LGBTIQA+ individuals who identify as part of the Bear Community in South East QLD, who like to participate in Camping and Outdoor activities." />
        <meta property="og:image" content="https://qldcampingbears.vercel.app/og.png" />
        <meta property="og:image:alt" content="QLD Camping Bears" />
        <meta property="og:type" content="URL" />
        <meta property="og:url" content="https://qldcampingbears.vercel.app/" />
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
