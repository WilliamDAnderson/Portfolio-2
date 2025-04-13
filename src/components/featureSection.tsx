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
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.1 }}
      className={`flex flex-col md:flex-row gap-4 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="w-full md:w-1/3 flex flex-col justify-center text-center px-4 py-2">
        <h3 className="text-lg font-semibold">{feature.title}</h3>
        <p className="text-md">{feature.description}</p>
      </div>
      <div className="w-full md:w-2/3 shadow-2xl rounded-xl overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          width={720}
          height={480}
          className="rounded w-full h-auto object-cover"
        />
      </div>
    </motion.div>
  );
}