import { bis_img1, bis_img2, bis_img3, bis_img4 } from "@/utils/ImgUtils";
import BisProducts from "./BisProducts";

const BISRegistration = () => {
  return (
    <article className="my-10 serviceArticle text-justify">
      <div className="container mx-auto md:p-6 md:pt-10 ">
        {/* ------ Main Hading-------- */}

        <h1 className=" text-3xl font-extrabold  lg:text-center mb-5 lg:mb-20">
          <span className="text-red-400">BIS</span> Registration for -
          Electronic & IT Products
        </h1>

        {/* ------ Section 1 -------- */}
        <section className="mb-6 ">
          <h2 className=" my-4 font-extrabold">Introduction</h2>
          <p>
            BIS Registration is the process of obtaining a license from the
            Bureau of Indian Standards (BIS) for products that comply with
            applicable Indian Standards. BIS, the National Standards Body of
            India, was established under the Bureau of Indian Standards Act,
            2016, and operates under the Ministry of Consumer Affairs, Food &
            Public Distribution, Government of India.
          </p>
          <p>
            BIS is responsible for various activities, including standards
            formulation, product certification, testing, training, hallmarking,
            laboratory services, and calibration schemes. BIS registration
            serves as third-party assurance of a product’s quality, safety, and
            reliability.
          </p>
          <img src={bis_img1} alt="bis"  className="py-5"/>
          <p>
            The Bureau grants licenses to manufacturers whose products fall
            under mandatory or voluntary certification schemes. Once certified,
            manufacturers can display the BIS Standard Mark on their products.
            While BIS certification is generally voluntary, the Indian
            government mandates it for specific products to safeguard public
            health, the environment, national security, and the welfare of
            people, animals, and plants. Additionally, it aims to prevent unfair
            trade practices.
          </p>
          <h3 className=" font-extrabold mt-4 mb-2">
            BIS Registration for Electronics & IT Products
          </h3>
          <p>
            BIS Registration is particularly crucial for electronic and IT
            products, as compliance with quality control standards is mandatory.
            This page provides a comprehensive guide to BIS Registration under
            the Compulsory Registration Scheme (CRS). To fully grasp the
            necessity of BIS certification, we will explore its nature,
            structure, and history. Let's delve into the BIS Registration
            process for Electronics and IT Products.
          </p>
        </section>

        {/* ------ Section 2 -------- */}
        <section className="mb-6">
          <h3 className="font-extrabold mt-4 mb-2">
            Compulsory Registration Scheme (CRS)
          </h3>
          <p>
            To protect consumers from counterfeit and substandard electronic
            products, the Department of Electronics and Information Technology
            (DeitY) and the Bureau of Indian Standards (BIS) introduced the
            Compulsory Registration Scheme (CRS) in 2012. This scheme mandates
            that electronic and IT products must obtain BIS certification before
            being launched in the market. The Ministry has also issued
            Compulsory Registration Orders, stating that no one shall
            manufacture, store, sell, import, or distribute products that do not
            meet Indian standards or lack the Standard Mark with a unique
            registration number. Under the CRS, BIS grants a registration
            certificate to manufacturers, allowing them to display the Standard
            Mark on their electronic and IT products. This certification is
            based on a self-declaration of conformity with Indian Standards. A
            BIS license assures consumers that the product meets quality and
            safety standards as required by law. The licensing process follows
            the conformity assessment scheme under Scheme II of Schedule II of
            the BIS (Conformity Assessment) Regulations, 2018.
          </p>
        </section>
        {/* ------ Section 3 -------- */}

        <section className="mb-6">
          <h2 className="font-extrabold my-4 ">
            Products Covered Under the Compulsory Registration Scheme (CRS)
          </h2>
          <p>
            The Compulsory Registration Scheme (CRS) applies to a wide range of
            electronic and IT products that must comply with Indian Standards
            before being sold in the market. The Bureau of Indian Standards
            (BIS) has made certification mandatory for these products to ensure
            quality, safety, and reliability.
          </p>
          <h2 className="font-black text-400 my-4 ">
            Categories of Products Under CRS
          </h2>
          <p>Here are some key product categories covered under the CRS:</p>
          {/* <img src={bis_img2} alt="bis" className="my-10" /> */}

          <section >
            <BisProducts />
          </section>
          
          <p>
            The list of products under CRS is continuously updated by BIS to
            include new and emerging technologies. Any manufacturer, importer,
            or seller dealing with these products must obtain BIS certification
            before selling in India.
          </p>
        </section>

        {/* ------- Section 4 ------- */}

        <section className="mb-6">
          <h2 className="font-extrabold mb-4 ">
            BIS Registration Process Under the Compulsory Registration Scheme
            (CRS)
          </h2>
          <p>
            The Bureau of Indian Standards (BIS) has established a Compulsory
            Registration Scheme (CRS) to ensure that electronic and IT products
            meet Indian safety and quality standards. Any manufacturer, whether
            domestic or foreign, must obtain BIS certification before selling
            their products in the Indian market.
          </p>
          <img src={bis_img3} alt="bis" className="my-10" />

          <h3 className="font-bold mt-4 mb-2">
            Step 1: Determine Product Eligibility
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Check if the product falls under the CRS mandatory list on the BIS
              website.
            </li>
            <li>
              Ensure the product complies with the relevant Indian Standard (IS
              number) specified by BIS.
            </li>
          </ul>
          <h3 className="font-bold mt-4 mb-2">
            Step 2: Select a BIS-Recognized Testing Laboratory
          </h3>
          <ul className="list-disc pl-6">
            <li>Choose a BIS-approved laboratory for product testing.</li>
            <li>
              Submit product samples for testing as per the applicable Indian
              Standard.
            </li>
          </ul>
          <h3 className="font-bold mt-4 mb-2">Step 3: Obtain a Test Report</h3>
          <ul className="list-disc pl-6">
            <li>
              The BIS-recognized lab will conduct safety and quality tests on
              the product.
            </li>
            <li>
              If the product meets the required standards, the lab issues a test
              report.
            </li>
          </ul>
          <h3 className="font-bold mt-4 mb-2">
            Step 5: Review and Grant of Registration
          </h3>
          <ul className="list-disc pl-6">
            <li>BIS officials will verify the application and documents.</li>
            <li>
              If all requirements are met, BIS grants a registration certificate
              with a unique BIS registration number.
            </li>
            <li>
              The manufacturer can now use the Standard Mark on their product.
            </li>
          </ul>
          <h3 className="font-bold mt-4 mb-2">
            Step 6: Compliance and Renewal
          </h3>
          <ul className="list-disc pl-6">
            <li>
              The registration is valid for two years and must be renewed before
              expiry.
            </li>
            <li>
              Periodic audits and testing may be conducted to ensure continued
              compliance.
            </li>
          </ul>
          <h3 className="font-bold mt-4 mb-2">Timeline & Cost</h3>
          <ul className="list-disc pl-6">
            <li>
              The entire process takes 4 to 6 weeks, depending on the testing
              and BIS approval.
            </li>
            <li>
              The cost varies based on the product type, lab testing fees, and
              BIS application fees.
            </li>
          </ul>
        </section>
        {/* ------- Section 5 ------- */}
        <section className="mb-6">
          <h2 className="font-extrabold mb-4 ">
            BIS Registration Requirements – Get Certified with Expert
            Assistance!
          </h2>
          <p>
            Are you looking to register your product under BIS but feeling
            overwhelmed by the process? Don't worry—we’ve got you covered! As a
            trusted BIS registration consultant, we simplify the entire process,
            ensuring a hassle-free certification experience.
          </p>
          <img src={bis_img4} alt="bis" className="mt-10" />
          <h2 className="font-extrabold mt-4 mb-2 text-red-400">
            Why Choose Us?
          </h2>

          <div>
            <p>
              <span className="font-bold">✔ End-to-End Assistance –</span> From
              documentation to final certification
            </p>
            <p>
              <span className="font-bold">✔ Faster Approvals –</span> Avoid
              delays with our expert guidance
            </p>
            <p>
              <span className="font-bold">
                ✔ BIS-Approved Lab Coordination –
              </span>{" "}
              Get accurate testing done effortlessly
            </p>
            <p>
              <span className="font-bold">
                ✔ Affordable & Transparent Pricing –
              </span>{" "}
              No hidden charges!
            </p>
          </div>
        </section>
        {/* ------- Section 6 ------- */}
        <section className="mb-6">
          <h2 className="font-extrabold mb-4 ">
            Why Struggle When We Can Handle It for You?
          </h2>
          <div>
            <p>
              💡 Skip the complications—our experts manage everything from
              testing to certification.
            </p>
            <p>
              🚀 Faster approvals—we know the process inside out, ensuring quick
              compliance.
            </p>
            <p>
              🔒 100% Compliance Guarantee—stay worry-free with our BIS
              specialists.
            </p>
          </div>
          <h2 className="font-extrabold my-6">
            Let’s Get Your Product BIS Certified!
          </h2>
          <p>
            📞 Contact us today for a free consultation and start your
            registration process hassle-free! 🚀
          </p>
          <div className="flex gap-2 font-bold text-red-400 mt-4">
            <a href="tel:+917065995901">
              <button
                aria-label="Call Now"
                className=" flex items-center font-bold "
              >
                +91-7065995901
              </button>
            </a>
            <a href="tel:+917011310361">
              <button
                aria-label="Call Now"
                className=" flex items-center font-bold "
              >
                +91-7011310361
              </button>
            </a>
          </div>
        </section>
      </div>
    </article>
  );
};

export default BISRegistration;
