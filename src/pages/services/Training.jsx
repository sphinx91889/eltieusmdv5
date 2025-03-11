import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import CTASection from '../../components/CTASection'

export default function Training() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "What types of training do you offer?",
      answer: "We offer comprehensive training in advanced aesthetic procedures, injection techniques, laser treatments, and other medical spa services."
    },
    {
      question: "How long does the training process take?",
      answer: "Training duration varies based on the procedures and techniques being taught, typically ranging from one day to several weeks."
    },
    {
      question: "Is the training hands-on?",
      answer: "Yes, our training programs include both theoretical knowledge and practical hands-on experience under expert supervision."
    },
    {
      question: "Do you provide certification after training?",
      answer: "Yes, participants receive certificates of completion for their specific training programs."
    }
  ];

  return (
    <div className="pt-20">
      <PageHero 
        title="Additional Procedure & Technique Training" 
        backgroundImage="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d0ad38cbf30b1c91b4644f.jpeg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Specialized training programs for advanced procedures and techniques to enhance your practice capabilities.
            </p>
          </div>
        </div>
      </div>
      <WhyChooseUsSection />
      <HiringProcessSection />
      <FAQSection title="Training Program FAQs" faqs={faqItems} />
      <FeaturedClinicSection />
      <CTASection 
        title="Enhance Your Practice" 
        description="Take your medical spa services to the next level with our advanced training programs."
      />
      <CTASection 
        title="Let's Chat" 
        description="Ready to expand your practice capabilities? Contact us to discuss our training programs."
        isContact={true}
      />
    </div>
  )
}
