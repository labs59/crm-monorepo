import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-[#F9F7F6] py-4 px-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        <div>
          <Image
            src="/logo.svg"
            alt="Nx Logo"
            width={99}
            height={24}
            priority
          />
        </div>
        <div>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
