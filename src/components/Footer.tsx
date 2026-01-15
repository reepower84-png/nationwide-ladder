import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <Image
                src="/ChatGPT_Image_2026년_1월_15일_오후_11_20_26_2-removebg-preview.png"
                alt="전국사다리원"
                width={180}
                height={72}
                className="h-16 md:h-18 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              전국 어디든, 올려야 할 순간엔 전국사다리원.<br />
              사다리차, 스카이차, 카고크레인 배차 전문 서비스
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-right">
            <h4 className="font-semibold mb-4">빠른 링크</h4>
            <nav className="flex flex-col md:items-end gap-2 text-sm text-gray-400">
              <a href="#home" className="hover:text-orange-400 transition-colors">홈</a>
              <a href="#services" className="hover:text-orange-400 transition-colors">서비스</a>
              <a href="#features" className="hover:text-orange-400 transition-colors">특장점</a>
              <a href="#contact" className="hover:text-orange-400 transition-colors">문의하기</a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Company Info */}
          <div className="text-sm text-gray-400 space-y-1 mb-4">
            <p><span className="text-gray-500">상호:</span> 제이코리아</p>
            <p><span className="text-gray-500">대표:</span> 이주영</p>
            <p><span className="text-gray-500">사업자등록번호:</span> 278-30-01540</p>
            <p><span className="text-gray-500">주소:</span> 인천광역시 계양구 오조산로57번길 15, 7층 7106호</p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-800">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} 전국사다리원. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Powered by 전국사다리원
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
