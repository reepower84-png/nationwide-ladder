'use client';

const regions = [
  { name: '서울', x: 45, y: 18 },
  { name: '인천', x: 32, y: 22 },
  { name: '경기', x: 50, y: 25 },
  { name: '강원', x: 68, y: 20 },
  { name: '충북', x: 55, y: 35 },
  { name: '충남', x: 32, y: 40 },
  { name: '대전', x: 45, y: 45 },
  { name: '세종', x: 40, y: 40 },
  { name: '전북', x: 35, y: 55 },
  { name: '전남', x: 28, y: 72 },
  { name: '광주', x: 32, y: 65 },
  { name: '경북', x: 65, y: 42 },
  { name: '대구', x: 58, y: 52 },
  { name: '경남', x: 50, y: 68 },
  { name: '울산', x: 70, y: 58 },
  { name: '부산', x: 62, y: 75 },
];

export default function Coverage() {
  return (
    <section className="py-20 md:py-32 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-orange-400 font-semibold mb-4">NATIONWIDE SERVICE</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            전국 어디든<br />
            <span className="text-orange-400">빠른 배차</span>가 가능합니다
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            전국 주요 거점에 파트너 네트워크를 구축하여<br className="hidden sm:block" />
            어디서든 신속한 사다리차 배차 서비스를 제공합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Korea Map */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[2/3]">
              {/* Location Markers */}
              {regions.map((region, index) => (
                <div
                  key={region.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${region.x}%`,
                    top: `${region.y}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 w-4 h-4 bg-orange-500 rounded-full animate-ping opacity-20" />

                  {/* Marker Dot */}
                  <div className="relative w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform">
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white text-gray-900 text-xs font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {region.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">전국 16개 광역시·도</h3>
                  <p className="text-gray-400 text-sm">수도권부터 부산까지 전국 모든 지역에서 사다리차 배차가 가능합니다.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">신속한 배차 시스템</h3>
                  <p className="text-gray-400 text-sm">각 지역 파트너와의 네트워크로 문의 후 빠른 시간 내 배차가 가능합니다.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">검증된 파트너십</h3>
                  <p className="text-gray-400 text-sm">안전 교육을 이수한 전문 기사님들과 함께 안심하고 이용하실 수 있습니다.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400">16</div>
                <div className="text-xs text-gray-400">서비스 지역</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400">100+</div>
                <div className="text-xs text-gray-400">파트너 기사</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400">30분</div>
                <div className="text-xs text-gray-400">평균 배차</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
