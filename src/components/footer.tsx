'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-[#004CA2] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Service */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2 inline-block">Service</h3>
          <ul className="space-y-3 mt-6">
            <li><Link href="#" className="hover:text-orange-400 transition">Branding & Creative Design</Link></li>
            <li><Link href="#" className="hover:text-orange-400 transition">Social Media Management</Link></li>
            <li><Link href="#" className="hover:text-orange-400 transition">Photography & Videography</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2 inline-block">Contact Us</h3>
          <div className="mt-6 space-y-4">
            <p className="text-lg">+62 851-4740-7704</p>
            <div>
              <p className="mb-2">Masukkan email Anda</p>
              <input
                type="email"
                placeholder="Email Anda di sini"
                className="px-4 py-2 rounded-md text-black w-full mb-2 bg-white"
              />
              <button className="bg-[#11456E] hover:bg-[#11456E] text-white px-4 py-2 rounded-full w-full transition font-semibold">
                Kirim permintaan Anda
              </button>
            </div>
          </div>
        </div>

        {/* Social */}
    <div>
      <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2 inline-block">Social</h3>
      <div className="flex space-x-6 mt-6">
        {/* Opsi 1: Menggunakan class Tailwind (rekomendasi) */}
        <a href="https://www.instagram.com/fortusmedia?utm_source=ig_web_button_share_sheet&igsh=MWw3d3MyYXprd2hlbA==" aria-label="Instagram" className="hover:text-orange-400 transition">
          <FontAwesomeIcon icon={faInstagram}  size="2x" /> {/* Ukuran 4rem (64px) */}
        </a>
        
        {/* Opsi 2: Menggunakan properti size */}
        <a href="#" aria-label="TikTok" className="hover:text-orange-400 transition">
          <FontAwesomeIcon icon={faTiktok} size="2x" /> {/* Ukuran 6x (96px) */}
        </a>

      </div>
    </div>

        {/* Address */}
        <div>
          <img src="/img/logofortus.png" alt="Fortus Media Logo" className="h-20 w-auto mb-6" />
          <address className="not-italic mt-6 leading-relaxed">
            Perumahan GBA 3, Ciganitri,<br />
            Kec. Bojongsoang, Kab.<br />
            Bandung, Jawa Barat 40287
          </address>
          <p className="mt-8 text-sm">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}