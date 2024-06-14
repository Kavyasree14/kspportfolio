
'use client'
import Link from 'next/link';
 import {
    RiFacebookFill, 
    RiGithubFill,
    RiInstagramFill, 
    RiLinkedinFill,
    RiYoutubeFill,} from 'react-icons/ri';


const icons =[
    {
        path:'/',
        name:<RiYoutubeFill/>,
    },
    {
        path:'/',
        name:<RiFacebookFill/>,
    },
    {
        path:'https://github.com/Kavyasree14',
        name:<RiGithubFill/>,
    },
    {
        path:'/',
        name:<RiInstagramFill/>,
    },
    {
        path:'https://www.linkedin.com/in/kavyasree14/',
        name:<RiLinkedinFill/>,
    },
];

const Socials = ({containerStyles, iconsStyles}) => { 
    return <div className={`${containerStyles}`}>
        {icons.map((icons, index) =>{
            return(
                <Link href={icons.path} key={index}>
                    <div className={`${iconsStyles}`}>{icons.name}</div>
                </Link>
            );
        })}
        </div>
    };

export default Socials;
