'use client';

import { useEffect } from 'react';
import Socials from './Socials';

const Footer = () => {
  useEffect(() => {
    // Set up the chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: '6PH_jMVszpScMPmH0cXu9',
      domain: 'www.chatbase.co',
    };

    // Create the script element for the chatbot
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute('chatbotId', '6PH_jMVszpScMPmH0cXu9');
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);

    // Add or remove dark mode styling to chatbot container
    const chatbotContainer = document.querySelector('.chatbot-container');
    
    const handleThemeChange = () => {
      if (document.documentElement.classList.contains('dark')) {
        chatbotContainer.classList.add('dark');
      } else {
        chatbotContainer.classList.remove('dark');
      }
    };

    // Run on initial load
    handleThemeChange();

    // Watch for theme changes using MutationObserver
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Clean up the observer and script
    return () => {
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Chatbot container */}
      <div className='chatbot-container'>
        {/* The chatbot script will be injected here */}
      </div>

      <footer className='bg-secondary py-12'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center justify-between'>
            {/* socials */}
            <Socials 
              containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
              iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-black/50 dark:hover:text-primary transition-all'
            />

            {/* copyright */}
            <div className='text-muted-foreground'>
              Copyright &copy; Kavya Sree Polavarapu. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
