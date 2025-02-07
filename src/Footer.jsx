import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About Us */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              We are a company dedicated to providing the best service to our
              customers. Our mission is to make your life easier with our
              innovative solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-300">
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="text-sm text-gray-300">
              <li className="mb-2">
                <span className="font-semibold">Address:</span> 123 Main St,
                City, Country
              </li>
              <li className="mb-2">
                <span className="font-semibold">Phone:</span> +1 234 567 890
              </li>
              <li className="mb-2">
                <span className="font-semibold">Email:</span> info@example.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
