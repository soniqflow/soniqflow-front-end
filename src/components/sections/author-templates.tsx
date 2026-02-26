import React from 'react';
import Image from 'next/image';

interface TemplateCardProps {
  image: string;
  name: string;
  price: string;
  author: string;
  authorIcon: string;
}

const TemplateCard = ({ image, name, price, author, authorIcon }: TemplateCardProps) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-[#f5f5f7] mb-4">
      <Image
        src={image}
        alt={`${name} template preview`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
    </div>
    <div className="flex items-center justify-between px-1">
      <div className="flex items-center gap-3">
        <div className="relative w-6 h-6 rounded-full overflow-hidden bg-black flex items-center justify-center">
            {/* Using a placeholder for the author icon if specific one isn't clearly identified as separate asset, 
                but mapping to the author icon style in the screenshot */}
            <div className="text-white text-[10px] font-bold">S</div>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-[#000000] leading-tight">{name}</span>
          <span className="text-[12px] text-[#666666] leading-tight">{author}</span>
        </div>
      </div>
      <div className="text-[14px] font-semibold text-[#000000]">
        {price}
      </div>
    </div>
  </div>
);

const AuthorTemplates = () => {
  const templates = [
    {
      name: 'Mildest',
      price: '$99 USD',
      author: 'SaaS Serif',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/images/6995d2ebc0784160eff2d32e_81990063-02c1-468e-8a35-a-10.webp',
      authorIcon: ''
    },
    {
      name: 'Custly',
      price: '$99 USD',
      author: 'SaaS Serif',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/images/699518b3096780090a1609c6_a59931d9-6830-4a70-8857-6-13.webp',
      authorIcon: ''
    },
    {
      name: 'Seric',
      price: '$79 USD',
      author: 'SaaS Serif',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/images/6995182fdac997fe9b958e2a_1771325157204_303319812_d-15.webp',
      authorIcon: ''
    },
    {
      name: 'Lymk',
      price: '$99 USD',
      author: 'SaaS Serif',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43f56989-d959-4e7e-82f0-1bd2d59cdbc6-webflow-com/assets/images/697e636e65192a774d00b7b9_2ed359fd-7445-4b69-abec-5-17.webp',
      authorIcon: ''
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-[1248px]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[24px] font-semibold text-[#000000] tracking-tight">
            More by SaaS Serif
          </h2>
          <a 
            href="#" 
            className="flex items-center gap-2 text-[14px] font-semibold text-[#000000] transition-opacity hover:opacity-70"
          >
            All templates by SaaS Serif
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 14 14" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="mt-0.5"
            >
              <path 
                d="M3.5 10.5L10.5 3.5M10.5 3.5H3.5M10.5 3.5V10.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {templates.map((template, index) => (
            <TemplateCard
              key={index}
              image={template.image}
              name={template.name}
              price={template.price}
              author={template.author}
              authorIcon={template.authorIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorTemplates;