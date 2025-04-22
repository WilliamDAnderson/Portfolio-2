/*
    Name:           William Anderson
    Date:           April 10, 2025
    Description:    Projects
*/

export type Feature = {
    title: string;
    description: string;
    image: string[];
  };
  
export type Project = {
    title: string;
    priority: number;
    year: number;
    description: string;
    programmers: string[];
    features: Feature[];
  };