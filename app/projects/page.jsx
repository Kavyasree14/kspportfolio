'use client'
import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/1.png',
    category: 'Machine Learning',
    name: 'Predicting ASD Website',
    description: 'Developed an ASD prediction model.',
    link: 'https://wtassignment3-419020.wl.r.appspot.com/search/homes',
    github:'/',
  },
  {
    image: '/work/3.png',
    category: 'MEAN Stack',
    name: 'Stock Search Web Application',
    description: 'Dynamically retrieve and display stock data.',
    link: '/',
    github:'/',
  },
  {
    image: '/work/2.png',
    category: 'Machine Learning',
    name: 'COVID-19 Detection Website',
    description: 'Through uploading X-rays prediction takes place.',
    link: '/',
    github:'/',
  },
  {
    image: '/work/4.png',
    category: 'IOS',
    name: 'IOS Mobile App',
    description: 'Live Stock search with IOS integration',
    link: '/',
    github:'/',
  },
  {
    image: '/work/5.png',
    category: 'Computer Vision',
    name: 'License Plate Recognition System',
    description: 'Live captures the License plates',
    link: '/',
    github:'/',
  },
  {
    image: '/work/6.png',
    category: 'Data Analysis',
    name: 'USC Campus Safety Analysis',
    description: 'Data analytics project using Python and Tableau',
    link: '/',
    github:'/',
  },
  {
    image: '/work/7.png',
    category: 'React',
    name: 'Hospital Management System',
    description: 'Streamlining patient interactions with features',
    link: '/',
    github:'/',
  },
  {
    image: '/work/8.png',
    category: 'React',
    name: 'Online Newspaper Delivery Management System',
    description: 'A modern news app',
    link: '/',
    github:'/',
  },
  {
    image: '/work/9.jpg',
    category: 'Javascript, MYSQL',
    name: 'Payroll Management System',
    description: 'Robust employee data management',
    link: '/',
    github:'/',
  },
  {
    image: '/work/10.png',
    category: 'Java',
    name: 'E-commerce Website',
    description: 'Developed a streamlined e-commerce solution',
    link: '/',
    github:'/',
  },
];

const Projects = () => {
  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16'>
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
