/*
    Name:           William Anderson
    Date:           April 10, 2025
    Description:    Used to fetch project json data.
*/

import fs from 'fs';
import path from 'path';
import { Project } from '../types/project';

//  Function:     getProjects()
//  Description:  Gets project data from /src/data/projects.json and returns it as an array of 
//                Project.
export const getProjects = (): Project[] => {
  //  Get project data from json file
  const filePath = path.join(process.cwd(), 'src', 'data', 'projects.json'); 
  const jsonData = fs.readFileSync(filePath, 'utf-8'); 
  //  Return an array of Project
  const projects: Project[] = JSON.parse(jsonData); 
  return projects;
};