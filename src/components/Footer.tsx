
import { Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Copyright Section */}
          <div className="col-span-2">
            <h3 className="font-bold text-xl mb-2">LoSpace</h3>
            <p className="text-sm text-gray-400">© Lospace™ Pvt Ltd</p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="/overview" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="/customers" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Customers
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/jobs" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/faqs" className="text-sm text-gray-400 hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
