'use client';

import Image from 'next/image';

export default function Tentang() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-56 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Tentang Fortus Media</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Membantu UMKM mengoptimalkan potensi pemasaran digital dengan strategi efektif dan terjangkau
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-top-left"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/img/logofortus.png" // Replace with your team/image
              alt="Tim Fortus Media"
              width={600}
              height={200}
              className=""
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Siapa Kami</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Fortus Media adalah agency digital marketing yang berdiri pada 4 November 2024, dengan misi membantu Usaha Mikro, Kecil, dan Menengah (UMKM) mengoptimalkan potensi pemasaran digital.
              </p>
              <p>
                Kami percaya bahwa setiap bisnis memiliki cerita dan peluang untuk berkembang. Dengan strategi yang efektif, relevan, dan terjangkau, Fortus Media hadir sebagai mitra strategis untuk memperluas jangkauan pasar.
              </p>
              <p>
                Berbasis di Bandung, kami berfokus pada solusi yang mudah diterapkan, desain yang menarik, serta layanan yang mengutamakan kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-24 bg-white rounded-xl shadow-lg p-8 md:p-12 border-t-4 border-orange-500">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Misi Kami</h2>
          <div className="max-w-4xl mx-auto text-center text-gray-700 text-lg">
            <p className="mb-6">
              &quot;Membantu UMKM Indonesia tumbuh di era digital melalui strategi pemasaran yang inovatif, kreativitas tanpa batas, dan eksekusi yang tepat sasaran.&quot;
            </p>
            <p>
              Bersama Fortus Media, mari wujudkan pertumbuhan bisnis yang berkelanjutan dan berdaya saing tinggi.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nilai Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Inovasi",
                description: "Terus mengembangkan solusi kreatif yang relevan dengan kebutuhan pasar",
                icon: "💡"
              },
              {
                title: "Integritas",
                description: "Bekerja dengan jujur dan transparan untuk membangun kepercayaan",
                icon: "🤝"
              },
              {
                title: "Dampak",
                description: "Fokus pada hasil yang memberikan nilai nyata bagi klien",
                icon: "🚀"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}