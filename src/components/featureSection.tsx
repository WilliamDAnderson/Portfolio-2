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
      <div className="flex justify-center items-center">
        <div className="w-full h-auto overflow-hidden rounded-xl">
          <Image
            src={feature.image}
            alt={feature.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto max-h-[66vh] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}