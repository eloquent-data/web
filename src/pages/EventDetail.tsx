import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { events } from '@/data/home';
import { registerEvent } from '@/services/firebase';
import type { Event } from '@/data/types';
import './EventDetail.scss';

interface EventFormData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<Event | undefined>();
  const [subMessage, setSubMessage] = useState('');

  const { register, handleSubmit, reset, formState: { isValid } } = useForm<EventFormData>({
    mode: 'onChange',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setEvent(events.find((e) => e.slug === slug));
  }, [slug]);

  const onSubmit = async (data: EventFormData) => {
    await registerEvent({ ...data, date: Date.now() });
    reset();
    setSubMessage('Continue your registration');
    setTimeout(() => {
      window.open('https://invtdu.to/_lde1x', '_blank');
    }, 2000);
  };

  return (
    <>
      <Navbar title="Events" />

      <div className="event">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 row justify-content-end">
            <div className="col-lg-9 col-md-11 col-12">
              <div className="event-logo-date">
                {event && <img src={event.img} alt={event.title} />}
                <p className="sub-title">18-19 MARCH 2023</p>
              </div>
              <h1 className="sub-title mt-5">
                Join the leading hackathon in the African data science space.
              </h1>
              <p className="sub-title">#UHA23 #ZindiHack #EloquentData</p>
              <div className="partner-logo mt-5">
                <img src="assets/img/zindi.png" alt="Zindi" />
                <img src="assets/img/logo.png" alt="Eloquent Data" />
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12 d-block">
            <div className="event-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="First name*"
                  {...register('firstName', { required: true })}
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  {...register('lastName', { required: true })}
                />
                <input
                  type="email"
                  placeholder="Email*"
                  {...register('email', { required: true })}
                />
                <button
                  type="submit"
                  className="btn btn-lg btn-block mt-5 py-2"
                  disabled={!isValid}
                >
                  Register &gt;&gt;
                </button>
                {subMessage && (
                  <div className="status sub-title mb-2 text-center">{subMessage}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
