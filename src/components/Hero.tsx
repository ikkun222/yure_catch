"use client";
import React from 'react';

const Hero = () => {
  return (
    <section className="flex-grow container mx-auto px-6 py-24 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
        その揺れ、瞬時にキャッチ。
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
        ゆれキャッチは、最新の地震情報をリアルタイムでお届けし、あなたとあなたの大切な人の安全を守るためのパートナーです。
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          App Storeで入手
        </a>
        <a href="https://github.com/ikkun222/yure_catch/releases/download/%CE%B21.0.0/beta1.0.0.apk" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
          Android版をダウンロード (APK)
        </a>
      </div>
    </section>
  );
};

export default Hero;