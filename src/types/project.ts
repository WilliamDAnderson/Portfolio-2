/*
    Name:           William Anderson
    Date:           April 10, 2025
    Description:    Projects
*/

export type StoryPoint = {
    title: string;
    text: string;
    image: string;
  };
  
export type Project = {
    title: string;
    year: number;
    programmers: string[];
    features: StoryPoint[];
  };