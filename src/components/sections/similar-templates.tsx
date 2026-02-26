import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const similarTemplates = [
  {
    name: 'Lumyn',
    price: '$79 USD',
    author: 'PixyBits',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/images/68a42c90830f0844f530276f_1755589747413_570225623_F-3.webp',
    icon: (
      <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center overflow-hidden">
        <span className="text-white text-[10px] font-bold">L</span>
      </div>
    ),
  },
  {
    name: 'Saval',
    price: '$79 USD',
    author: 'Wroney',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/images/68258bfeff63b9b453c25c8f_519558b3-6.webp',
    icon: (
      <div className="w-6 h-6 rounded-full bg-[#8E54E9] flex items-center justify-center overflow-hidden">
         <span className="text-white text-[10px] font-bold">S</span>
      </div>
    ),
  },
  {
    name: 'Intellichat',
    price: '$79 USD',
    author: 'InfiniFlow',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/images/6995d7b4151edb1c5f55f64d_2d37fd06-3682-49a5-8922-b-7.webp',
    icon: (
      <div className="w-6 h-6 rounded-full bg-[#146EF5] flex items-center justify-center overflow-hidden">
         <span className="text-white text-[10px] font-bold">I</span>
      </div>
    ),
  },
  {
    name: 'Repairly',
    price: '$59 USD',
    author: 'Ui Mile',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/images/698366fd9235fe58c6da9473_1770219178576_593944918_L-4.webp',
    icon: (
      <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
         <span className="text-white text-[10px] font-bold">R</span>
      </div>
    ),
  },
];

export default function SimilarTemplates() {
  return (
    <section className="py-[80px] bg-white border-t border-[#e6e6e6]">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[24px] font-semibold tracking-[-0.02em] text-[#000000]">
            Similar templates
          </h2>
          <a
            href="#"
            className="flex items-center gap-1.5 text-[14px] font-semibold text-[#000000] hover:opacity-70 transition-opacity"
          >
            Browse all
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarTemplates.map((template, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[12px] overflow-hidden mb-4 shadow-[0px_4px_12px_rgba(0,0,0,0.05)] bg-[#f5f5f7]">
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {template.icon}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#000000] leading-tight mb-1">
                      {template.name}
                    </h3>
                    <p className="text-[12px] font-medium text-[#666666]">
                      {template.author}
                    </p>
                  </div>
                </div>
                <div className="text-[13px] font-medium text-[#666666]">
                  {template.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}