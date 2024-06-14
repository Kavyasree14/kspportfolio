'use client'
import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';


const projectData = [

  {
  
  image: '/work/1.png',
  
  category: 'Machine Learning',
  
  name: 'Predicting ASD Website',
  
  description: 'Developed an ASD prediction model.',
  link: '/',
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
      
      name: ' License plate recognition system',
      
      description: 'Live captures the Licenece plates',
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
      
      description: 'streamlining patient interactions with features',
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
          
          category: 'Javascrpit, MYSQL',
          
          name: 'Payroll Management System',
          
          description: 'Robust employee data managemen',
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


const uniqueCategories = [

  'all projects',
  
  ...new Set(projectData.map((item) => item.category)),
  
];


const Projects = () => {
      const [categories, setCategories] = useState(uniqueCategories);
      const [category,setCategory] = useState('all projects');
      const filteredProjects = projectData.filter((project) =>{
        return category === 'all projects'
        ? project
        : project.category === category;
      });

      return (
        <section className='min-h-screen pt-12' >
          <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
            My Projects
            </h2>
            {/*tabs*/}
            <Tabs defaultValue={category} className='mb-12 xl:mb-12'>
              <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                {categories.map((category, index) => {
                  return(
                  <TabsTrigger
                  onClick={()=> setCategory(category)}
                  value={category} 
                  key={index} 
                  className='capitalize w-[162px] md:w-auto'
                  >
                    {category}
                    </TabsTrigger>
                 );
                })}
              </TabsList>
              {/* content */}
              <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                  {filteredProjects.map((project, index) => {

                  return (

                      <TabsContent value={category} key={index} >

                      <ProjectCard project={project} />

                      </TabsContent>

                  );

                  })}
              </div>
            </Tabs>
          </div>
        </section>
      );
};

export default Projects;