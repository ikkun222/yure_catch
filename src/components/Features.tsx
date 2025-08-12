"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
    {children}
  </div>
);

const Feature = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <div className="flex flex-col items-center p-4 text-center md:items-start md:text-left">
    <FeatureIcon>{icon}</FeatureIcon>
    <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-base text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Features = () => {
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
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              ゆれキャッチを選ぶ理由
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              あなたの安全確保を第一に考えた機能が満載です。
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Feature 
              title="迅速なリアルタイム情報"
              description="気象庁の発表と同時に、どこよりも早く正確な地震情報をあなたのもとへお届けします。"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              }
            />
            <Feature 
              title="直感的なインターフェース"
              description="複雑な設定は一切不要。アプリを開けば、誰でもすぐに必要な情報を得られます。"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              }
            />
            <Feature 
              title="家族の安否確認機能"
              description="登録した家族や大切な人の位置情報と安否状況をマップで共有し、いざという時に備えます。"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              }
            />
            <Feature 
              title="オフラインでも安心"
              description="事前に受信したデータや避難所情報は、電波が届かない状況でも確認可能です。"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;