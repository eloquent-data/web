import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { events } from '@/data/home';
import { registerOffer } from '@/services/firebase';
import type { Event } from '@/data/types';
import './Offers.scss';

interface OfferFormData {
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  degree: string;
  occupation: string;
  country: string;
}

export default function Offers() {
  const { slug } = useParams<{ slug: string }>();
  const [offerEvent, setOfferEvent] = useState<Event | undefined>();
  const [subMessage, setSubMessage] = useState('');

  const { register, handleSubmit, reset, setValue, formState: { isValid } } =
    useForm<OfferFormData>({ mode: 'onChange' });

  useEffect(() => {
    window.scrollTo(0, 0);
    setOfferEvent(events.find((e) => e.slug === slug));
  }, [slug]);

  const onSubmit = async (data: OfferFormData) => {
    await registerOffer({ ...data, date: Date.now() });
    reset();
    setSubMessage('Your Spot has been Reserved');
  };

  return (
    <>
      <Navbar title="Events" />

      <div className="event">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 row justify-content-end">
            <div className="col-lg-9 col-md-11 col-12">
              <div className="event-logo-date">
                <p className="mb-0 mt-5">Cohort starting in May, 2023</p>
              </div>
              <h1 className="main-title mt-0">Become a Data Analyst</h1>
              <div className="paragraph-small">Training | Mentorship | Internship</div>

              <div className="sub-title mt-5">
                Prepare yourself for a future career in Data. Register your interest today and{' '}
                <span style={{ color: 'red', fontWeight: 600 }}>get 20% OFF</span>
                <br />
                Pay <s>$150</s> $120 when joining our next cohort.
              </div>
              <p className="bold-title mt-4">Offer end 25th March 2023</p>

              <div className="partner-logo mt-5">
                <p>In partnership with</p>
                <img src="assets/img/zindi.png" alt="Zindi" />
                {offerEvent && <img src={offerEvent.img} alt={offerEvent.title} />}
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12 d-block">
            <div className="event-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  placeholder="Email*"
                  {...register('email', { required: true })}
                />
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
                <select
                  onChange={(e) => setValue('gender', e.target.value, { shouldValidate: true })}
                  defaultValue=""
                  {...register('gender', { required: true })}
                >
                  <option value="" disabled>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
                <select
                  onChange={(e) => setValue('degree', e.target.value, { shouldValidate: true })}
                  defaultValue=""
                  {...register('degree', { required: true })}
                >
                  <option value="" disabled>Degree</option>
                  <option value="high_school">High School</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="master">Master</option>
                  <option value="phd">PhD</option>
                  <option value="others">Others</option>
                </select>
                <input
                  type="text"
                  placeholder="Occupation*"
                  {...register('occupation', { required: true })}
                />
                <input
                  type="text"
                  placeholder="Country*"
                  {...register('country', { required: true })}
                />
                <button
                  type="submit"
                  className="btn btn-lg btn-block mt-5 py-2"
                  disabled={!isValid}
                >
                  Save My Spot
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
