import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[var(--bgcolor1)] py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Address Column */}
            <div>
              <h2 className="text-xl font-bold mb-2">Address</h2>
              <p>123 Main Street</p>
              <p>City, State, ZIP</p>
              <p>Country</p>
            </div>

            {/* Our Services Links Column */}
            <div>
              <h2 className="text-xl font-bold mb-2">Our Services</h2>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Service 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Service 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Service 3
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information Column */}
            <div>
              <h2 className="text-xl font-bold mb-2">Contact Information</h2>
              <p>Email: info@example.com</p>
              <p>Phone: +123-456-7890</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[var(--bgcolor5)] text-[var(--bgcolor)] ">
        <p className="text-[10px] text-center py-2">
          Copyright © 2025 - Mcs Technology. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
