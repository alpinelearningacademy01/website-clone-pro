import ElvieNavbar from "@/components/ElvieNavbar";
import PageHeader from "@/components/PageHeader";
import ElvieFooter from "@/components/ElvieFooter";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import headerBg from "@/assets/service-event-mgmt.jpg";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer full-scale event production, including corporate events, exhibitions, concerts, weddings, AV/LED solutions, lighting, sound, and corporate gifting."
  },
  {
    question: "Do you handle event permits?",
    answer: "Yes, we handle all necessary event permits and government approvals across the UAE to ensure a seamless planning process."
  },
  {
    question: "Can you provide custom gift solutions?",
    answer: "Absolutely! We specialize in premium, branded corporate gifts, ranging from tech gadgets and sustainable products to VIP hampers and onboarding kits."
  },
  {
    question: "Where are you located?",
    answer: "Our main office is located at Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE."
  },
  {
    question: "Do you provide on-site technical support?",
    answer: "Yes, our team of expert technicians is available on-site throughout your event to manage all AV, lighting, and sound requirements."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <ElvieNavbar />
      <PageHeader title="Frequently Asked Questions" backgroundImage={headerBg} />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      <ElvieFooter />
      <ScrollToTop />
    </div>
  );
};

export default FAQ;
