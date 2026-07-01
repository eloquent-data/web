import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import TitleHeader from '@/components/TitleHeader';
import Footer from '@/components/Footer';
import { events } from '@/data/home';
import './Events.scss';

export default function Events() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar title="Events" description="Upcoming events from Eloquent Data" />
      <TitleHeader title="Events" />

      <div className="events-list container mt-8 mb-10">
        <div className="row">
          {events.map((event) => (
            <div key={event.id} className="col-md-4 col-sm-12 mb-5">
              <Link to={`/events/${event.slug}`} className="event-card d-block">
                <img src={event.img} alt={event.title} className="img-fluid mb-3" />
                <h3 className="sub-title">{event.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
