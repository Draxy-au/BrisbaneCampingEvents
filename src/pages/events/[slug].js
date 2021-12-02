import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
import { formatDateForDisplay } from "@/utils/formatDate";
import ReactMarkdown from "react-markdown";
import EventMap from "@/components/EventMap";

export default function EventPage({ evt }) {
  const formattedDate = formatDateForDisplay(evt.date);


  return (
    <Layout>
      <div className={styles.event}>
        <span>
          {formattedDate} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        <ToastContainer />
        {evt.image && (
          <div className={styles.image}>
            <Image
              src={evt.image.formats.medium.url}
              width={960}
              height={600}
              alt={evt.name}
            />
          </div>
        )}

        <h3>Organisers:</h3>
        <p>{evt.organisers}</p>

        <h3>Description:</h3>
        <ReactMarkdown>{evt.description}</ReactMarkdown>

        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <EventMap evt={evt} />

        <h3>Facebook Event Link: </h3>
        <p><a href={evt.facebook} target="_blank" rel="noreferrer">{evt.facebook}</a></p>

        <Link href="/events">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}
