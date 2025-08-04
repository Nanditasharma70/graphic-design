import Header from '@/components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import FormWithOTP from '../components/FormWithOTP';
import UpcomingBatches from '../components/UpcomingBatches';
import CompanyLogos from '../components/CompanyLogos';
import Footer from '@/components/Footer';
import CourseSlider from '../components/CourseList';
import AboutHighlights from '@/components/AboutHighlights';
import PlacedStudents from '@/components/PlacedStudent';
import WorkPortfolio from '@/components/WorkPortfolio';
import StudentPortfolio from '@/components/StudentPortfolio';
import Testimonial from '@/components/Testimonial';
import CallNow from '@/components/CallNow';
import EnrollSection from '@/components/EnrollSection';
import StudentReviews from '@/components/StudentReview';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <FormWithOTP />
      <Header />
      <section className="mt-4 ">
        <Hero />
        <CourseSlider />
        <EnrollSection />
        <StudentPortfolio />
        <CompanyLogos />
        <WorkPortfolio />
        <PlacedStudents />
        <UpcomingBatches />
        <Testimonial />
        <StudentReviews />
        <About />
        <AboutHighlights />
        <CallNow />
        <Footer />
      </section>
    </div>
  );
}
