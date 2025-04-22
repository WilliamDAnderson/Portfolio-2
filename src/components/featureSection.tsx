/*
    Name:           William Anderson
    Date:           April 10, 2025
    Description:    Feature Section. Run on the front end for animation.
*/

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Feature } from '@/types/project';

interface FeatureSectionProps {
  feature: Feature;
  index: number;
}

export default function FeatureSection({ feature, index }: FeatureSectionProps) {
  const isOneImage = feature.image.length === 1;

  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.1 }}
      className={`flex flex-col md:flex-row gap-8 items-center justify-center mx-auto 
        ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
        max-w-[90vw]`}
    >
      {/* TEXT SECTION */}
      <div className="w-full md:w-1/3 max-w-[66vw] text-center px-4">
        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
        <p className="text-md">{feature.description}</p>
      </div>

      {/* IMAGE SECTION */}
      <div className="flex justify-center items-center w-full md:w-2/3 px-4">
        <div
          className={`flex ${isOneImage ? 'justify-center' : 'flex-wrap justify-center gap-4'}`}
        >
          {feature.image.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-xl
                ${isOneImage 
                  ? 'w-full max-w-[66vw] max-h-[66vh]' // For single image (small and large)
                  : 'w-[45%] max-h-[66vh]' // Default max-height for two images side by side
                }
                md:max-h-[66vh] xl:max-h-[75vh] // max-height for large and extra large screens
              `}
            >
              <Image
                src={img}
                alt={`${feature.title} image ${idx + 1}`}
                width={0}
                height={0}
                sizes="(max-width: 768px) 80vw, 66vw" // Adjust width for different breakpoints
                className={`object-cover w-full h-full`} // Ensure image fills container
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}





