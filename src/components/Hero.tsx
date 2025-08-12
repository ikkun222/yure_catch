"use client";
import React from 'react';
import Image from 'next/image'; // Using Image for potential future icons
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // アニメーションは一度だけ実行
    threshold: 0.1, // 要素の10%が見えたらトリガー
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <section className="flex-grow container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          その揺れ、瞬時にキャッチ。
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
          ゆれキャッチは、最新の地震情報をリアルタイムでお届けし、あなたとあなたの大切な人の安全を守るためのパートナーです。
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            {/* Placeholder for App Store icon */}
            App Storeで入手
          </a>
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
            {/* Placeholder for Google Play icon */}
            Google Playで入手
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;