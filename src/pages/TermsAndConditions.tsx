import ElvieNavbar from "@/components/ElvieNavbar";
import PageHeader from "@/components/PageHeader";
import ElvieFooter from "@/components/ElvieFooter";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import headerBg from "@/assets/service-production.jpg";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <ElvieNavbar />
      <PageHeader title="Terms & Conditions" backgroundImage={headerBg} />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl text-foreground">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using this website, you agree to be bound by the then-current version of these Terms & Conditions and all applicable laws and regulations.
            </p>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-primary mb-4">Event Production Services</h2>
             <p className="text-muted-foreground leading-relaxed">
                Elvie Events provides holistic event management, technical production, and branded corporate gifting services. Our quotes are subject to site-specific availability and may change until final confirmation and project payment have been received.
             </p>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
             <p className="text-muted-foreground leading-relaxed">
                The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the site are protected by applicable copyrights, trademarks and other proprietary rights.
             </p>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
             <p className="text-muted-foreground leading-relaxed">
                Elvie Events shall not be held liable for any damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if Elvie Events has been advised of the possibility of such damages.
             </p>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-primary mb-4">Amendments</h2>
             <p className="text-muted-foreground leading-relaxed">
                Elvie Events may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
             </p>
          </div>

           <div>
             <h2 className="text-2xl font-bold text-primary mb-4">Governing Law</h2>
             <p className="text-muted-foreground leading-relaxed">
                Any claim relating to Elvie Events' website or services shall be governed by the laws of the United Arab Emirates without regard to its conflict of law provisions.
             </p>
          </div>
        </motion.div>
      </main>

      <ElvieFooter />
      <ScrollToTop />
    </div>
  );
};

export default TermsAndConditions;
