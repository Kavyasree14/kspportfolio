import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,

} from 'react-icons/ri';

import DevImg from './DevImg';
import Socials from './Socials';


const Hero = () => { 
    return (
    <section className='py-10 xl:py-20 h-[84vh] xl:pt-15 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
        <div className='container mx-auto'>
            <div className='flex justify-between gap-x-8'>
                {/*text*/}
                <div className='flex max-w-[600] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                <div className='text-2xl uppercase font-bold mb-4 text-primary tracking-[3px]'>Software Engineer</div>
                <h1 className='h1 mb-4'>Hello, I am Kavya Sree Polavarapu</h1>
                <p className='subtitle max-w-[490px] mx-auto xl:mx-0'> a Software Engineer specializing in Machine Learning and Full Stack Development. I am passionately committed to advancing my skills in these areas and continuously seeking new challenges and opportunities to innovate.</p>
                 {/*buttons*/}
                <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-7'>
                    <Link href='/contact'>
                        <Button className = 'gap-x-2'
                        >Contact me <Send size={18} />
                        </Button>
                    </Link>
                    <a href='/hero/Kavya_Sree_Polavarapu_Resume.pdf' download='Kavya_Sree_Polavarapu_Resume.pdf'>
                                <Button variant='secondary' className='gap-x-2'>
                                    Download Resume <Download size={18} />
                                </Button>
                            </a>
                </div>
                {/*socials*/}
               <Socials 
               containerStyles='flex pt-[-40px] gap-x-6 mx-auto xl:mx-0'
               iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
                </div>
                {/*image*/}
                <div className='hidden xl:flex relative'>
                    <div className='bg-hero_shape2_light dark:bg-gero_shae2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
                    </div>
                    <DevImg constainerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/developer.png'/>
                </div>
            </div>
                {/*icon*/}
                <div className='hidden md:flex absolute left-2/4 bottom-40 xl:bottom-10 animate-bounce'>
                    <RiArrowDownSLine className='text-xl text-primary' />
                </div>
        </div>
    </section>
    );
 };

export default Hero;