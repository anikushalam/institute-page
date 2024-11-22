import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { imageShowUrl } from "@/lib/BaseUrl";
import Link from "next/link";

const CollegeHeader = ({
  logo,
  name,
  address,
  affiliated,
  phone,
  email,
  accreditations,
  bgTheme,
}: {
  logo: string;
  name: string;
  address: string;
  affiliated: string;
  phone: string | number;
  email: string;
  accreditations: string;
  bgTheme: string;
}) => {
  return (
    <div className="bg-white shadow-md border-b-2 border-primary">
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src={`${imageShowUrl}/${logo}`} // Replace with actual logo path
            alt="College Logo"
            width={75}
            height={75}
            className="mr-4"
          />
          <div>
            <h1 className="text-xs font-normal">{affiliated}</h1>
            <h2 className="text-xl font-bold" style={{ color: bgTheme }}>
              {name}
            </h2>
            <p className="text-sm">{accreditations ?? ""}</p>
            <p className="text-sm">{address}</p>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-2 md:space-y-0 md:space-x-4">
          <Link href="https://qvipleweb.web.app/#/log-in">
            <h2
              className="text-md font-normal cursor-pointer hover:underline"
              style={{ color: bgTheme }}
            >
              ERP Login
              {/* Institute Login */}
            </h2>
          </Link>
          {/* <Link href="https://qvipleweb.web.app/#/log-in">
            <h2
              className="text-md font-normal cursor-pointer hover:underline"
              style={{ color: bgTheme }}
            >
              Faculty Login
            </h2>
          </Link>

          <Link href="https://qvipleweb.web.app/#/log-in">
            <h2
              className="text-md font-normal cursor-pointer hover:underline"
              style={{ color: bgTheme }}
            >
              Student Login
            </h2>
          </Link> */}

          {/* <div className="flex items-center">
            <span className="bg-blue-500 text-white p-2 rounded-full mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold">Institute Code</p>
              <p className="text-lg font-bold">6275</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="bg-blue-500 text-white p-2 rounded-full mr-2">
              <Phone size={24} />
            </span>
            <div>
              <p className="text-sm font-semibold">Call Us</p>
              <p className="text-lg font-bold">{phone}</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="bg-blue-500 text-white p-2 rounded-full mr-2">
              <Mail size={24} />
            </span>
            <div>
              <p className="text-sm font-semibold">Mail Us</p>
              <p className="text-lg font-bold">{email}</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CollegeHeader;
