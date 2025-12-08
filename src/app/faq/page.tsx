"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const stripes = [
    { type: 'image', src: "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", height: 'calc(101vh - 64px)' },
    { type: 'color', color: '#c8e6c9', height: 'calc(75vh - 48px)' },
    { type: 'image', src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", height: 'calc(75vh - 48px)' },
    { type: 'color', color: '#5a9ab8', height: 'calc(75vh - 48px)' },
    { type: 'image', src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170", height: 'calc(101vh - 64px)' }
  ];

  const faqs = [
    {
      question: "HOW CAN I CONTACT?",
      answer: "You can reach us through the Contact page on our website or via email. We're here to help!"
    },
    {
      question: "IS THERE AN EMAIL?",
      answer: "Yes! Please visit our Contact page for our email address and other contact information."
    },
    {
      question: "ARE THERE ANY REQUIREMENTS?",
      answer: "Requirements vary depending on how you'd like to engage with us. Please visit our About page or contact us for specific information."
    },
    {
      question: "CAN I JOIN?",
      answer: "We welcome those interested in our mission! Please reach out through our Contact page to learn more about opportunities to get involved."
    },
    {
      question: "DO YOU HAVE SOCIAL MEDIA?",
      answer: "Yes! Follow us on our social media platforms to stay updated with our latest activities and initiatives."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main style={{ padding: 0, paddingTop: '0px' }}>
      {/* Stripes with Title */}
      <div style={{
        display: 'flex',
        gap: '3vw',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box',
        minHeight: 'calc(100vh - 64px)'
      }}>
        {stripes.map((stripe, index) => {
          // Middle stripe (index 2) has the title below it
          if (index === 2) {
            return (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '16vw' }}>
                <div
                  style={{
                    width: '100%',
                    height: stripe.height,
                    ...(stripe.type === 'image'
                      ? {
                        backgroundImage: `url(${stripe.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }
                      : {
                        backgroundColor: stripe.color
                      }
                    )
                  }}
                />

                {/* Title directly below middle stripe */}
                <div style={{
                  textAlign: 'center',
                  marginTop: 'clamp(1rem, 2vw, 2rem)',
                  marginBottom: 'clamp(1rem, 2vw, 2rem)',
                  width: 'clamp(300px, 40vw, 500px)',
                  padding: '0 1rem'
                }}>
                  <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                    margin: 0,
                    color: '#1f2937'
                  }}>
                    FREQUENTLY<br />ASKED QUESTIONS
                  </h2>
                </div>
              </div>
            );
          }

          // All other stripes
          return (
            <div
              key={index}
              style={{
                width: '16vw',
                height: stripe.height,
                flexShrink: 0,
                ...(stripe.type === 'image'
                  ? {
                    backgroundImage: `url(${stripe.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }
                  : {
                    backgroundColor: stripe.color
                  }
                )
              }}
            />
          );
        })}
      </div>

      {/* FAQ Section */}
      <div style={{ maxWidth: '900px', margin: '4rem auto 3rem', padding: '0 clamp(1rem, 3vw, 1.5rem)' }}>

        <div style={{
          border: '4px solid #fb923c',
          overflow: 'hidden'
        }}>
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                style={{
                  width: '100%',
                  padding: 'clamp(0.75rem, 2vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: openIndex === index ? '#ffedd5' : 'white',
                  border: 'none',
                  borderTop: index > 0 ? '4px solid #fb923c' : 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  textAlign: 'left',
                  gap: '1rem'
                }}
                onMouseEnter={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.backgroundColor = '#ffedd5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.backgroundColor = 'white';
                  }
                }}
              >
                <span style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  fontWeight: '600',
                  color: '#1f2937'
                }}>
                  {faq.question}
                </span>
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="#fb923c"
                  style={{
                    transition: 'transform 0.3s',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                    minWidth: '24px',
                    minHeight: '24px'
                  }}
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <div
                style={{
                  maxHeight: openIndex === index ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out'
                }}
              >
                <div style={{
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 2.5vw, 1.5rem)',
                  backgroundColor: '#ffedd5',
                  borderTop: '4px solid #fb923c',
                  color: '#374151'
                }}>
                  <p style={{ margin: 0, fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p style={{ marginTop: "3rem", padding: "0 24px" }}>
        <Link href="/">← Back to home</Link>
      </p>
    </main>
  );
}