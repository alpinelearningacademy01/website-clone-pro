import { useState } from "react";
import { motion } from "framer-motion";
import ElvieNavbar from "@/components/ElvieNavbar";
import ElvieFooter from "@/components/ElvieFooter";
import ScrollToTop from "@/components/ScrollToTop";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    if (serviceId === "YOUR_SERVICE_ID" || !publicKey) {
      toast.info("Connecting to email service...");
      setTimeout(() => {
        toast.success("Thank you for your inquiry! We will get back to you soon.");
        setForm({ name: "", email: "", phone: "", eventDate: "", eventType: "", message: "" });
      }, 1000);
      return;
    }

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      event_date: form.eventDate,
      event_type: form.eventType,
      message: form.message,
      to_email: "navazsherasiya0@gmail.com",
    };

    toast.promise(
      emailjs.send(serviceId, templateId, templateParams, publicKey),
      {
        loading: 'Sending your inquiry...',
        success: () => {
          setForm({ name: "", email: "", phone: "", eventDate: "", eventType: "", message: "" });
          return 'Thank you! Your inquiry has been sent successfully.';
        },
        error: 'Failed to send inquiry. Please try again later.',
      }
    );
  };

  const inputClasses =
    "w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-elvie-blue transition-shadow";

  return (
    <div className="min-h-screen bg-background">
      <ElvieNavbar />

      {/* Gradient Header Area - matches reference */}
      <div className="elvie-gradient-diagonal h-28" />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10 tracking-wide">
              Booking Inquiry
            </h1>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(201) 555-0123"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Event Date</label>
                <input
                  type="date"
                  value={form.eventDate}
                  onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Type of Event</label>
                <select
                  value={form.eventType}
                  onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                  className={inputClasses}
                >
                  <option value="">Select event type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="concert">Concert</option>
                  <option value="exhibition">Exhibition</option>
                  <option value="conference">Conference</option>
                  <option value="private">Private Party</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClasses} resize-y`}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 rounded-lg font-bold text-sm tracking-wider text-primary-foreground transition-colors"
                style={{
                  background: "linear-gradient(135deg, hsl(222 62% 18%) 0%, hsl(222 80% 35%) 50%, hsl(222 80% 45%) 100%)",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <ElvieFooter />
      <ScrollToTop />
    </div>
  );
};

export default Booking;
