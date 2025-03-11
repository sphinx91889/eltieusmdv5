import React, { useEffect } from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-700 mb-4">CONTACT US</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          We would love to hear from you! Send us your message using the form below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-map-marker-alt text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Address</h3>
            <p className="text-gray-600">1611 S. Catalina Ave Suite L75</p>
            <p className="text-gray-600">Redondo Beach, CA 90277</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-phone text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Phone</h3>
            <p className="text-gray-600">(877) 811-4331</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-envelope text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Email</h3>
            <p className="text-gray-600">info@eliteusmd.com</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
