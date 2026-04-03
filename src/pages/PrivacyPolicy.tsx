import ElvieNavbar from "@/components/ElvieNavbar";
import PageHeader from "@/components/PageHeader";
import ElvieFooter from "@/components/ElvieFooter";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import headerBg from "@/assets/service-permit.jpg";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <ElvieNavbar />
      <PageHeader title="Privacy Policy" backgroundImage={headerBg} />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl text-foreground">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Elvie Events, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Information Collection</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect information that you personally provide, such as your name, email address, phone number, and company details when you contact us or request a quote.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>To provide, operate, and maintain our services</li>
              <li>To improve, personalize, and expand our services</li>
              <li>To communicate with you, either directly or through one of our partners</li>
              <li>To process your transactions and manage your orders</li>
              <li>To send you emails including newsletters and event updates</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to provide our services and as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
            </p>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
             <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at elvieevents@gmail.com.
             </p>
          </div>
        </motion.div>
      </main>

      <ElvieFooter />
      <ScrollToTop />
    </div>
  );
};

export default PrivacyPolicy;
