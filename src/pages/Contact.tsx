import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import TitleHeader from '@/components/TitleHeader';
import Footer from '@/components/Footer';
import { contact } from '@/data/contact';
import { saveContact } from '@/services/firebase';
import './Contact.scss';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [subMessage, setSubMessage] = useState('');
  const { register, handleSubmit, reset, formState: { isValid } } = useForm<ContactFormData>({
    mode: 'onChange',
  });

  const onSubmit = async (data: ContactFormData) => {
    await saveContact({ ...data, date: Date.now() });
    reset();
    setSubMessage('Message sent successfully<br>We will get in touch soon');
  };

  const mailto = `mailto:${contact.email}`;
  const telTag = `tel:${contact.phone}`;

  return (
    <>
      <Navbar title="Contact" description={`Contact us on ${contact.email}`} />
      <TitleHeader title="Contact" />

      <div className="row contact-container mx-auto my-8">
        <div className="col-md-6 col-sm-12">
          <div className="map">
            <img src="assets/img/africa.svg" alt="Africa map" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <div className="contact-form">
            {subMessage && (
              <div
                className="status sub-title mb-2 text-center"
                dangerouslySetInnerHTML={{ __html: subMessage }}
              />
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Name"
                {...register('name', { required: true })}
              />
              <input
                type="email"
                placeholder="Email"
                {...register('email', { required: true })}
              />
              <textarea
                rows={10}
                placeholder="Message"
                {...register('message', { required: true })}
              />
              <button
                type="submit"
                className="btn btn-lg btn-block mt-5 px-7 py-2"
                disabled={!isValid}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-details py-8">
        <div className="row container mx-auto">
          <div className="col-md-4 col-sm-12">
            <div className="text-center">
              <i className="fa fa-map-marked-alt" />
              <h4 className="sub-title">Address</h4>
              <h5 className="paragraph-small">{contact.address}</h5>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="text-center">
              <i className="fa fa-envelope-open-text" />
              <h4 className="sub-title">Email</h4>
              <a href={mailto} target="_blank" rel="noopener noreferrer">
                <h5 className="paragraph-small">{contact.email}</h5>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="text-center">
              <i className="fa fa-phone-alt" />
              <h4 className="sub-title">Phone</h4>
              <a href={telTag}>
                <h5 className="paragraph-small">{contact.phone}</h5>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
