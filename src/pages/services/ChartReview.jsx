import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import CTASection from '../../components/CTASection'

export default function ChartReview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "How often should chart reviews be conducted?",
      answer: "Chart reviews should be conducted regularly, typically monthly, to ensure compliance and maintain high standards of patient care documentation."
    },
    {
      question: "What does a chart review include?",
      answer: "Our chart reviews include examination of patient history, treatment plans, procedure documentation, consent forms, and follow-up care notes."
    },
    {
      question: "How do chart reviews improve patient care?",
      answer: "Chart reviews help identify documentation gaps, ensure treatment consistency, and maintain compliance with medical standards and regulations."
    },
    {
      question: "Who performs the chart reviews?",
      answer: "Our experienced medical directors conduct thorough chart reviews, bringing their expertise in medical documentation and compliance."
    }
  ];

  return (
    <div className="pt-20">
      <PageHero 
        title="Chart Review And Patient Assessment" 
        backgroundImage="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d0afedcbf30b8201b466fd.jpeg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Thorough review of patient charts and comprehensive assessments to ensure proper documentation and care standards.
            </p>
          </div>
        </div>
      </div>
      <WhyChooseUsSection />
      <HiringProcessSection />
      <FAQSection title="Chart Review FAQs" faqs={faqItems} />
      <FeaturedClinicSection />
      <CTASection 
        title="Enhance Your Practice" 
        description="Ensure your patient documentation meets the highest standards with our professional chart review services."
      />
      <CTASection 
        title="Let's Chat" 
        description="Ready to improve your chart review process? Contact us today to get started."
        isContact={true}
      />
    </div>
  )
}
