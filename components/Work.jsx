'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import ProjectCard from '@/components/ProjectCard';

const projectData = [

    {
    
        image: '/work/3.png',
        
        category: 'MEAN Stack',
        
        name: 'Stock Search Web Application',
        
        description: 'Dynamically retrieve and display stock data.',
        link: '/',
        github:'/',
        },

    {
    
        image: '/work/1.png',
        
        category: 'Machine Learning',
        
        name: 'Predicting ASD Website',
        
        description: 'Developed an ASD prediction model.',
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
    
        image: '/work/7.png',
        
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
  


const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className='container mx-auto'>
                <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className='section-title mb-4'>Latest Projects</h2>
                    <p className="subtitle mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href='/projects'>
                        <Button>All projects</Button>
                    </Link>
                </div>
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper
                        className="h-[480px]"
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {projectData.slice(0, 4).map((project, index) => {
                            return(
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;