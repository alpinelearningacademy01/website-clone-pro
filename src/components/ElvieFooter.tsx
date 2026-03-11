import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const ElvieFooter = () => {
  return (
    <footer className="relative text-white">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(222 72% 10%) 0%, hsl(222 62% 18%) 40%, hsl(240 50% 30%) 70%, hsl(260 50% 35%) 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 mb-14">

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wider">
              EL<span className="text-blue-400">V</span>IE
            </h3>

            <p className="text-sm text-white/70 leading-relaxed">
              Elvie Events L.L.C-FZ
              Meydan Grandstand 6th Floor
              Meydan Road Nad Al Sheba
              Dubai, UAE
            </p>

            <div className="mt-4 text-sm text-white/70">
              <p>Email: elvieevents@gmail.com</p>
              <p>Contact: +971 5029137212</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Sign Up for Offers & News
            </h4>

            <div className="flex items-center bg-white/10 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-3 text-sm outline-none flex-1"
              />
              <button className="bg-blue-500 px-4 py-3 hover:bg-blue-600 transition">
                →
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/share/18DRgYP4em/?mibextid=wwXIfr"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/elvieevents"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://wa.me/9715029137212"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between text-sm text-white/60">
          <p>© 2026 Elvie Events. All Rights Reserved.</p>

          <div className="mt-3 md:mt-0 text-right">
            <p>VAT Registration Number: 100509225700003</p>
            <p>CorporateTax Reg. Number: COR-98456123</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ElvieFooter;