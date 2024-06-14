'use client'
// Import necessary hooks and components from React and your UI library
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, MessageSquare } from 'lucide-react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Simple validation check to ensure all fields are filled correctly
    const isValidForm = () => name && email.includes('@') && message;

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!isValidForm()) {
            setError('Please fill all fields correctly.');
            return;
        }

        setIsLoading(true); // Set loading state
        setError(''); // Clear previous errors

        const formData = { name, email, message };
        // console.log(formData);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.headers.get("content-type")?.includes("application/json")) {
                const data = await response.json();
                if (response.ok) {
                    alert('Email sent successfully!');
                    setName('');
                    setEmail('');
                    setMessage('');
                } else {
                    throw new Error(data.status || 'Failed to send email');
                }
            } else {
                throw new Error('Received non-JSON response from the server.');
            }
        } catch (error) {
            console.error('Failed to send email:', error);
            setError(error.message || 'Failed to process request.');
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}
            <div className='relative flex items-center'>
                <Input
                    type='text'
                    id='name'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <User className='absolute right-6' size={20} />
            </div>
            <div className='relative flex items-center'>
                <Input
                    type='email'
                    id='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <MailIcon className='absolute right-6' size={20} />
            </div>
            <div className='relative flex items-center'>
                <Textarea
                    placeholder='Type Your Message Here'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <MessageSquare className='absolute top-4 right-6' size={20} />
            </div>
            <Button type='submit' className='flex items-center max-w-[166px]' disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send'}
            </Button>
        </form>
    );
};

export default Form;
