import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Briefcase, Calendar, GraduationCap, HomeIcon, MailIcon, User2 } from "lucide-react";
import { get } from "react-hook-form";

const infoData =[
    {
        icon: <User2 size={20} />,
        text: 'Kavya Sree Polavarapu',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'kpolavar@usc.edu',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Masters of Science in Computer Science',
    },
    {
        icon: <HomeIcon size={20} />,
        text: '1421 W Adams Blvd Los Angeles, California, 90007',
    },
];



const qualificationData =[
    {
        title:'education',
        data:[
            {
                university:'University of Southern California',
                qualification: 'Masters of Science in Computer Science',
                years: '2023-2024',
            },
            {
                university:'GITAM University',
                qualification: 'Bachelors of Technology in Computer Science and Engineering',
                years: '2018-2022',
            },
        ],
    },
    {
        title:'experience',
        data:[
            {
                company:'Beige Corporation',
                role: 'Software Engineer Intern',
                years: ' Jun 2024 - Aug 2024',
            },
            {
                company:'GITAM University',
                role: 'Research Intern',
                years: ' March 2022 - Apr 2023',
            },
            {
                company:'coMakeIT Software Pvt. Ltd',
                role: 'Machine Learning Intern',
                years: ' Jun 2021 - Nov 2021',
            },
            {
                company:'Gas Authority of India Limited (GAIL)',
                role: 'Software Developer Intern',
                years: 'Oct 2020 - Nov 2020',
            },
        ],
    },
];


const skillData =[
    {
        title: 'skills',
        data:[
            {
                name: 'HTML,CSS',
            },

            {
                name: 'frontend',
            },
            {
                name: 'backend',
            },
            {
                name: 'ml ',
            },
            {
                name: 'AI',
            },
            
        ],
    },
    {
        title: 'tools',
        data:[
            {
                imgPath: '/about/java.svg',
            },
            {
                imgPath: '/about/python.png',
            },
            {
                imgPath: '/about/react.png',
            },
            {
                imgPath: '/about/mongodb.png',
            },
            {
                imgPath: '/about/nodejs.png',
            },
            {
                imgPath: '/about/angular.png',
            },
            {
                imgPath: '/about/tensorflow.png',
            },
        ],
    },
];


const About= () => {
    const getData = (arr, title) =>{
        return arr.find((item) => item.title === title);
    };
    return (
   <section className="xl:h-[860px] pb-12 xl:py-24 ">
    <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            About me
        </h2>
        <div className="flex flex-col xl:flex-row">
            {/*image*/}
            <div className="hidden xl:flex flex-1 relative">
                <DevImg constainerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[500px] h-[500px] bg-no-repeat relative' imgSrc='/about/developer.png'/>
            </div>
            <div className="flex-1">
                <Tabs defaultValue="personal">
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                        <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                        <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                        <TabsTrigger className='w-[162px] xl:w-auto' value='skills'> Skills</TabsTrigger>
                    </TabsList>
                    <div className="text-lg mt-12 xl:mt-8">
                        <TabsContent value='personal'>
                            <div>
                                <h3 className=" font-bold mb-3">
                                
                                    Unleashing Creativity in Tech as a USC Grad Student
                                </h3>
                                <p className="subtitle max-w-xl max-auto xl:mx-0 text-sm">
                                    With a sparkle of curiosity, I navigate through the realms of Full Stack Development, Data Analysis, and Machine Learning. Each project is a journey of discovery, lighting up the path of my tech adventure.
                                </p>
                                <div>
                                    {infoData.map((item,index)=>{
                                        return (
                                            <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                        <div className="text-primary">{item.icon}</div>        
                                        <div>{item.text}</div>     
                                        </div>   
                                        )
                                    })}
                                </div>
                            <div className="flex flex-col gap-y-2">
                                <div className="text-primary pt-4">
                                    Languages Known:
                                </div>
                                <div  className="border-b border-border"></div>
                                <div>English, Telugu, Hindi</div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value='qualifications'>
                            <div>
                                <h3 className=" mb-8 text-center text-2xl font-bold xl:text-left">
                                Career Expedition
                                </h3>
                                <div className="grid md:grid-cols-2 gap-y-5">
                                    {/*experience*/}
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <Briefcase />
                                            <h4 className="capitalize font-medium">
                                                {getData(qualificationData, 'experience').title}
                                            </h4>
                                        </div>
                                        <div className="flex flex-col gap-y-8">
                                            {getData(qualificationData, 'experience').data.map((item, index)=>{
                                                const {company, role, years} = item;
                                                return(
                                                    <div className='flex gap-x-8 group'key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">
                                                                </div>

                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                            <div className="text-base font-medium">{years}</div>
                                                        </div>
                                                    </div>    
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {/*education*/}
                                    <div>
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <GraduationCap />
                                            <h4 className="capitalize font-medium">
                                                {getData(qualificationData, 'education').title}
                                            </h4>
                                        </div>
                                        <div className="flex flex-col gap-y-8">
                                            {getData(qualificationData, 'education').data.map((item, index)=>{
                                                const {university, qualification, years} = item;
                                                return(
                                                    <div className='flex gap-x-8 group'key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">
                                                                </div>

                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                            <div className="text-base font-medium">{years}</div>
                                                        </div>
                                                    </div>    
                                                );
                                            })}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value='skills'>
                            <div className="text-center xl:text-left">
                                <h3 className="h3 mb-8">
                                    Tools I am familiar with:
                                </h3>
                                <div className="mb-16">
                                    <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                    <div className="border-b border-border mb-4"></div>
                                    <div>
                                        <div>
                                            {getData(skillData, 'skills').data.map((item, index)=>{
                                                const{name} =item;
                                                return(
                                                    <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                        <div className="font-medium">{name}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                    <div className="border-b border-border mb-4"></div>
                                    <div className="flex gap-x-8 justify-center xl:justify-start">
                                        {getData(skillData, 'tools').data.map((item, index)=>{
                                            const{imgPath} =item;
                                            return(
                                            <div key={index}>
                                                <Image src={imgPath} width={48} height={48} alt=" " priority />
                                            </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </div>
    </div>
   </section>
    );
};
export default About;

