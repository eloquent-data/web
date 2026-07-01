import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Academy from '@/pages/Academy'
import Projects from '@/pages/Projects'
import ProjectDetail from '@/pages/ProjectDetail'
import Insights from '@/pages/Insights'
import Contact from '@/pages/Contact'
import Events from '@/pages/Events'
import EventDetail from '@/pages/EventDetail'
import Offers from '@/pages/Offers'
import EmailVerified from '@/pages/EmailVerified'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsOfUse from '@/pages/TermsOfUse'
import NotFound from '@/pages/NotFound'

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/academy" element={<Academy />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:slug" element={<ProjectDetail />} />
    <Route path="/insights" element={<Insights />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/events" element={<Events />} />
    <Route path="/events/:slug" element={<EventDetail />} />
    <Route path="/offers/:slug" element={<Offers />} />
    <Route path="/verified" element={<EmailVerified />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
    <Route path="/terms" element={<TermsOfUse />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRouter