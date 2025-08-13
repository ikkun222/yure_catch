"use client";
import React from 'react';

const ShakeFeature = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          揺らして体験、リアルな震度
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          「この揺れは震度いくつ？」そんな疑問に答えます。ゆれキャッチ独自の機能で、あなたのスマートフォンを揺らすだけで、その揺れがどのくらいの震度に相当するのかをリアルタイムでシミュレーション。防災意識を高める新しい体験を提供します。
        </p>
      </div>
    </section>
  );
};

export default ShakeFeature;