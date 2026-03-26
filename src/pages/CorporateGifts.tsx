import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Gift, Package, Award, Briefcase, Leaf, Truck,
  Star, Users, CheckCircle, ChevronDown, ChevronUp,
  GemIcon, Laptop, Coffee, Flower2, PenTool, Smartphone,
  TreePine, ShoppingBag, Crown, Heart, Sparkles, Send,
} from "lucide-react";
import ElvieNavbar from "@/components/ElvieNavbar";
import ElvieFooter from "@/components/ElvieFooter";
import ScrollToTop from "@/components/ScrollToTop";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

import heroImg from "@/assets/corporate-gifts-hero.jpg";
import brandedImg from "@/assets/corporate-branded-packaging.jpg";
import customImg from "@/assets/corporate-custom-gifts.jpg";

/* ─── Gift Categories ─── */
const giftCategories = [
  { icon: Gift, label: "Premium Hampers", color: "from-amber-500 to-orange-600" },
  { icon: Briefcase, label: "Onboarding Gifts", color: "from-blue-500 to-indigo-600" },
  { icon: Leaf, label: "Sustainable Gifts", color: "from-emerald-500 to-green-600" },
  { icon: Coffee, label: "Drinkware", color: "from-amber-600 to-yellow-700" },
  { icon: PenTool, label: "Office & Writing", color: "from-slate-500 to-gray-700" },
  { icon: Smartphone, label: "Gadgets & Tech", color: "from-cyan-500 to-blue-600" },
  { icon: Heart, label: "Employee Gifts", color: "from-rose-500 to-pink-600" },
  { icon: Laptop, label: "Laptop Bags", color: "from-indigo-500 to-purple-600" },
  { icon: GemIcon, label: "Technology Gifts", color: "from-violet-500 to-purple-700" },
  { icon: Crown, label: "VIP & Executive", color: "from-yellow-500 to-amber-600" },
  { icon: TreePine, label: "Corporate Plants", color: "from-green-500 to-emerald-700" },
  { icon: ShoppingBag, label: "Corporate Bags", color: "from-teal-500 to-cyan-700" },
];

/* ─── Why Choose Us ─── */
const whyChoose = [
  { icon: Award, title: "10+ Years Experience", desc: "A decade of expertise in premium corporate gifting across the UAE and Middle East." },
  { icon: Sparkles, title: "100% Customisation", desc: "Every gift is tailored to your brand identity — logos, colors, messaging, and packaging." },
  { icon: Truck, title: "UAE-Wide Delivery", desc: "Timely and reliable delivery across all Emirates with seamless logistics." },
  { icon: Users, title: "Trusted by Top Brands", desc: "Serving leading corporations with high-quality gifts that align with brand values." },
];

/* ─── Gift Types ─── */
const giftTypes = [
  { icon: Package, title: "Premium Gift Hampers", desc: "Curated festive delights, wellness baskets, and gourmet chocolate assortments that reflect sophistication." },
  { icon: Flower2, title: "Flower Arrangements", desc: "Elegant floral designs for milestones, appreciation, or brightening office spaces with lasting impressions." },
  { icon: Star, title: "Personalised Gifts", desc: "Engraved pens, logo-branded accessories, and custom keepsakes that serve as lasting brand reminders." },
  { icon: Leaf, title: "Sustainable Options", desc: "Eco-friendly alternatives including recycled products that align your brand with mindful practices." },
  { icon: Gift, title: "Bulk Gifting Packages", desc: "Consistent, cost-effective solutions with custom branding for large-scale corporate events." },
];

/* ─── FAQs ─── */
const faqs = [
  { q: "Do you offer same-day delivery for corporate orders?", a: "Yes, same-day delivery may be possible depending on order details. Contact our team for feasibility confirmation based on your specific requirements." },
  { q: "What types of corporate gifts do you offer?", a: "We offer premium hampers, floral arrangements, gourmet baskets, branded merchandise, wellness kits, desk accessories, tech gadgets, and fully customised gift solutions." },
  { q: "Can I add my company branding to gifts?", a: "Absolutely! All gifts can be customised with your company logo, brand colors, personalised cards, and custom packaging to strengthen your brand presence." },
  { q: "Do you deliver across all Emirates?", a: "Yes, we deliver to all Emirates including Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain." },
  { q: "What is the minimum order quantity?", a: "We accommodate both small and large orders. Contact our team to discuss your specific needs and we'll create the perfect solution for any quantity." },
  { q: "How far in advance should I place my order?", a: "We recommend placing orders at least 5-7 business days in advance for customised gifts. Standard gifts can often be arranged with shorter lead times." },
];

/* ─── Animated Section Wrapper ─── */
const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── FAQ Item ─── */
const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <AnimatedSection delay={index * 0.08}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 group"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-semibold text-foreground group-hover:text-accent transition-colors">{q}</span>
          {open ? <ChevronUp className="w-5 h-5 text-accent shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />}
        </div>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{a}</p>
        </motion.div>
      </button>
    </AnimatedSection>
  );
};

/* ─── Main Page ─── */
const CorporateGifts = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", giftType: "", quantity: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    if (serviceId === "YOUR_SERVICE_ID" || !publicKey) {
      toast.info("Connecting to email service...");
      setTimeout(() => {
        toast.success("Thank you! We'll get back to you with a custom quote shortly.");
        setForm({ name: "", email: "", phone: "", company: "", giftType: "", quantity: "", message: "" });
      }, 1000);
      return;
    }

    toast.promise(
      emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        company: form.company,
        gift_type: form.giftType,
        quantity: form.quantity,
        message: form.message,
        to_email: "navazsherasiya0@gmail.com",
      }, publicKey),
      {
        loading: "Sending your inquiry...",
        success: () => {
          setForm({ name: "", email: "", phone: "", company: "", giftType: "", quantity: "", message: "" });
          return "Your inquiry has been sent successfully!";
        },
        error: "Failed to send. Please try again later.",
      }
    );
  };

  const inputClasses = "w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow";

  return (
    <div className="min-h-screen bg-background">
      <ElvieNavbar />

      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <img src={heroImg} alt="Corporate Gifts" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,72%,8%,0.9)] via-[hsl(222,62%,18%,0.75)] to-transparent" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-elvie-gold border border-[hsl(var(--elvie-gold)/0.4)] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              CORPORATE GIFTING SOLUTIONS
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Premium Rewards for{" "}
              <span className="text-elvie-gold">Exceptional</span> Performers
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Motivate. Appreciate. Celebrate. Elevate your corporate gifting with bespoke solutions crafted to leave lasting impressions.
            </p>
            <motion.a
              href="#inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm tracking-wider text-primary-foreground transition-all"
              style={{ background: "linear-gradient(135deg, hsl(40 80% 55%) 0%, hsl(35 90% 45%) 100%)" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(200,150,50,0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Gift className="w-5 h-5" /> Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ─── GIFT CATEGORIES ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Exclusive Corporate Gifts</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse range of premium gifts designed to make every gesture count. From personalized hampers to tech gadgets, we have the perfect gift for every occasion.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {giftCategories.map((cat, i) => (
              <AnimatedSection key={cat.label} delay={i * 0.05}>
                <motion.div
                  className="flex flex-col items-center p-5 rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <cat.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold text-foreground text-center leading-tight">{cat.label}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRANDED PACKAGING ─── */}
      <section className="py-20 elvie-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <motion.div className="rounded-2xl overflow-hidden shadow-2xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                <img src={brandedImg} alt="Corporate Branded Packaging" className="w-full h-auto object-cover" loading="lazy" width={800} height={600} />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-elvie-gold border border-[hsl(var(--elvie-gold)/0.3)] mb-4">
                BRANDING
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Corporate Branded Packaging</h2>
              <p className="text-primary-foreground/75 leading-relaxed mb-6">
                First impressions matter. We transform corporate gifting into a brand experience with custom-branded packaging that puts your identity at the forefront. From customised logos to tailored designs, every detail reflects your brand with style and professionalism.
              </p>
              <ul className="space-y-3 mb-8">
                {["Custom logo placement", "Tailored color schemes", "Premium finishing touches", "Personalized message cards"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-elvie-gold shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border border-[hsl(var(--elvie-gold))] text-elvie-gold hover:bg-[hsl(var(--elvie-gold)/0.1)] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Talk to Expert <Send className="w-4 h-4" />
              </motion.a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── CUSTOM GIFT SOLUTIONS ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-accent border border-accent/30 mb-4">
                TAILORED SOLUTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Customer-Tailored Gift Solutions</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our experts collaborate with you to understand your goals and curate gifts that align with your brand ethos. From bespoke gift boxes and elegant packaging to personalised touches, every detail is crafted to make your gesture meaningful.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Bespoke Gift Boxes", "Brand Color Matching", "Custom Messaging", "Luxury Finishing"].map((item, i) => (
                  <motion.div
                    key={item}
                    className="p-4 rounded-lg border border-border bg-secondary/50 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-sm font-semibold text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <motion.div className="rounded-2xl overflow-hidden shadow-2xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                <img src={customImg} alt="Custom Gift Solutions" className="w-full h-auto object-cover" loading="lazy" width={800} height={600} />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 elvie-gradient-diagonal">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Why Choose Elvie Events?</h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                The right corporate gifting partner strengthens relationships and enhances your brand image.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  className="p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 text-center hover:bg-primary-foreground/15 transition-colors"
                  whileHover={{ y: -6 }}
                >
                  <div className="w-14 h-14 rounded-full bg-[hsl(var(--elvie-gold)/0.2)] flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-elvie-gold" />
                  </div>
                  <h3 className="font-bold text-primary-foreground mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/65 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GIFT TYPES ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Types of Corporate Gifts We Offer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Thoughtfully chosen gifts strengthen partnerships, celebrate milestones, and reflect professionalism.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {giftTypes.map((gt, i) => (
              <AnimatedSection key={gt.title} delay={i * 0.08}>
                <motion.div
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-xl transition-all group"
                  whileHover={{ y: -6 }}
                >
                  <div className="w-12 h-12 rounded-lg elvie-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <gt.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{gt.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{gt.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INQUIRY FORM ─── */}
      <section id="inquiry" className="py-20 elvie-gradient-dark">
        <div className="container mx-auto px-4 max-w-2xl">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Get a Custom Quote</h2>
              <p className="text-primary-foreground/70">Tell us about your gifting needs and we'll create the perfect solution.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <motion.form onSubmit={handleSubmit} className="space-y-5 bg-card/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/10">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-primary-foreground mb-2">Name <span className="text-destructive">*</span></label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-foreground mb-2">Email <span className="text-destructive">*</span></label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClasses} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-primary-foreground mb-2">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+971 50 XXX XXXX" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-foreground mb-2">Company</label>
                  <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClasses} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-primary-foreground mb-2">Gift Type</label>
                  <select value={form.giftType} onChange={(e) => setForm({ ...form, giftType: e.target.value })} className={inputClasses}>
                    <option value="">Select gift type</option>
                    <option value="hampers">Premium Hampers</option>
                    <option value="onboarding">Onboarding Gifts</option>
                    <option value="sustainable">Sustainable Gifts</option>
                    <option value="tech">Gadgets & Tech</option>
                    <option value="branded">Branded Merchandise</option>
                    <option value="flowers">Flower Arrangements</option>
                    <option value="vip">VIP & Executive</option>
                    <option value="custom">Custom / Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-foreground mb-2">Quantity</label>
                  <select value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} className={inputClasses}>
                    <option value="">Select quantity</option>
                    <option value="1-25">1 – 25</option>
                    <option value="26-50">26 – 50</option>
                    <option value="51-100">51 – 100</option>
                    <option value="101-500">101 – 500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-foreground mb-2">Message</label>
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClasses} resize-y`} placeholder="Tell us about your requirements..." />
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 rounded-lg font-bold text-sm tracking-wider text-primary-foreground transition-colors"
                style={{ background: "linear-gradient(135deg, hsl(40 80% 55%) 0%, hsl(35 90% 45%) 100%)" }}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(200,150,50,0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Inquiry
              </motion.button>
            </motion.form>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about our corporate gifting services.</p>
            </div>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 elvie-gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Elevate Your Corporate Gifting?</h2>
            <p className="text-primary-foreground/75 mb-8 max-w-xl mx-auto">
              Let us help you create unforgettable corporate gifts that strengthen relationships and enhance your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm tracking-wider transition-all"
                style={{ background: "linear-gradient(135deg, hsl(40 80% 55%), hsl(35 90% 45%))" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Gift className="w-5 h-5" /> Get Custom Quote
              </motion.a>
              <motion.a
                href="tel:+9715029137212"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm tracking-wider border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Call Us Now
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ElvieFooter />
      <ScrollToTop />
    </div>
  );
};

export default CorporateGifts;
