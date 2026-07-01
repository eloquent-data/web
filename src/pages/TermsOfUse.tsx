import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import TitleHeader from '@/components/TitleHeader';
import Footer from '@/components/Footer';

const description =
  'By accessing this Website, accessible from https://eloquentdata.com, you are agreeing to be bound by these Website Terms and Conditions of Use.';

export default function TermsOfUse() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar title="Terms of Use" description={description} />
      <TitleHeader title="Terms of Service" />

      <div className="container my-7">
        <h1>Website Terms and Conditions of Use</h1>
        <ol>
          <li className="paragraph-big">
            <h2 className="paragraph-big">Terms</h2>
            <p className="paragraph-small">
              By accessing this Website, accessible from https://eloquentdata.com, you are agreeing
              to be bound by these Website Terms and Conditions of Use and agree that you are
              responsible for the agreement with any applicable local laws. If you disagree with any
              of these terms, you are prohibited from accessing this site. The materials contained in
              this Website are protected by copyright and trade mark law.
            </p>
          </li>
          <li className="paragraph-big">
            <h2 className="paragraph-big">Use License</h2>
            <p className="paragraph-small">
              Permission is granted to temporarily download one copy of the materials on Eloquent
              Data's Website for personal, non-commercial transitory viewing only. This is the grant
              of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="paragraph-small">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on Eloquent Data's Website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>
                transferring the materials to another person or "mirror" the materials on any other
                server.
              </li>
            </ul>
            <p className="paragraph-small mt-3">
              This will let Eloquent Data to terminate upon violations of any of these restrictions.
              Upon termination, your viewing right will also be terminated and you should destroy any
              downloaded materials in your possession whether it is printed or electronic format.
            </p>
          </li>
          <li className="paragraph-big">
            <h2 className="paragraph-big">Disclaimer</h2>
            <p className="paragraph-small">
              All the materials on Eloquent Data's Website are provided "as is". Eloquent Data makes
              no warranties, may it be expressed or implied, therefore negates all other warranties.
              Furthermore, Eloquent Data does not make any representations concerning the accuracy or
              reliability of the use of the materials on its Website or otherwise relating to such
              materials or any sites linked to this Website.
            </p>
          </li>
          <li className="paragraph-big">
            <h2 className="paragraph-big">Limitations</h2>
            <p className="paragraph-small">
              Eloquent Data or its suppliers will not be hold accountable for any damages that will
              arise with the use or inability to use the materials on Eloquent Data's Website, even
              if Eloquent Data or an authorize representative of this Website has been notified,
              orally or written, of the possibility of such damage.
            </p>
          </li>
          <li className="paragraph-big">
            <h2 className="paragraph-big">Revisions and Errata</h2>
            <p className="paragraph-small">
              The materials appearing on Eloquent Data's Website may include technical,
              typographical, or photographic errors. Eloquent Data will not promise that any of the
              materials in this Website are accurate, complete, or current.
            </p>
          </li>
          <li className="paragraph-big">
            <h2 className="paragraph-big">Links</h2>
            <p className="paragraph-small">
              Eloquent Data has not reviewed all of the sites linked to its Website and is not
              responsible for the contents of any such linked site. The presence of any link does not
              imply endorsement by Eloquent Data of the site.
            </p>
          </li>
          <li className="paragraph-big">
            <h2 className="paragraph-big">Site Terms of Use Modifications</h2>
            <p className="paragraph-small">
              Eloquent Data may revise these Terms of Use for its Website at any time without prior
              notice. By using this Website, you are agreeing to be bound by the current version of
              these Terms and Conditions of Use.
            </p>
          </li>
          <li className="paragraph-big">
            <h2 className="paragraph-big">Your Privacy</h2>
            <p className="paragraph-small">
              Please read our <Link to="/privacy">Privacy Policy</Link>
            </p>
          </li>
          <li className="paragraph-big">
            <h2 className="paragraph-big">Governing Law</h2>
            <p className="paragraph-small">
              Any claim related to Eloquent Data's Website shall be governed by the laws of ng
              without regards to its conflict of law provisions.
            </p>
          </li>
        </ol>
      </div>

      <Footer />
    </>
  );
}
