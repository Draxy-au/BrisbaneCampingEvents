import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";
import { formatDateForDisplay } from "@/utils/formatDate";
import { useAuth } from "@/hooks/useAuth";

export default function EventItem({ evt }) {
  const { user } = useAuth();
  const formattedDate = formatDateForDisplay(evt.date);
  const today = new Date().toISOString();
  let old;
  if (evt.date > today) {
    old = false;
  } else {
    old = true;
  }

  return (
    <div className={old?styles.event_old:styles.event}>
      <div className={styles.img}>
        <Image
          src={
            evt.image
              ? evt.image.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={170}
          height={100}
          alt="Event"
        />
      </div>
      <div className={styles.info}>
        <span>
          {formattedDate} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <div className={styles.link}>
        { user &&
          <Link href={`/events/${evt.slug}`}>
            <a className="btn">Details</a>
          </Link>
        }
        { !user &&
          <Link href={`/account/login`}>
            <a className="btn">Details</a>
          </Link>
        }
      </div>
    </div>
  );
}
