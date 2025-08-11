'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Kontak() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hubungi Kami</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Kami siap membantu Anda mengembangkan bisnis di era digital
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-top-left"></div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Cards */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Telepon</h3>
                <a 
                  href="tel:+6285147407704" 
                  className="text-2xl font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  +62 851‑4740‑7704
                </a>
                <p className="text-gray-500 mt-2">Senin - Jumat, 09:00 - 17:00 WIB</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="flex items-start gap-6">
              <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Email</h3>
                <a 
                  href="mailto:info@fortusmedia.com" 
                  className="text-xl font-medium text-gray-700 hover:text-orange-600 transition"
                >
                  info@fortusmedia.com
                </a>
                <p className="text-gray-500 mt-2">Respon dalam 1-2 jam kerja</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="flex items-start gap-6">
              <div className="bg-green-100 p-4 rounded-full text-green-600">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Lokasi</h3>
                <p className="text-xl font-medium text-gray-700">
                  Perumahan GBA 3, Ciganitri, Bandung
                </p>
                <p className="text-gray-500 mt-2">Jawa Barat, Indonesia 40287</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="email@contoh.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">Nomor Telepon</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="+62 812-3456-7890"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Pesan</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tulis pesan Anda..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lokasi Kami</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.80071488115!2d107.6370713!3d-6.9175803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e87f3a5b6b5b%3A0x1e3a5b6b5b6b5b6b!2sPerumahan%20GBA%203!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
              width="100%"
              height="450"
              title="Lokasi Perumahan GBA 3 di Google Maps"
              allowFullScreen
              className="rounded-lg border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}