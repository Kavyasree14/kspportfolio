import { Button } from './ui/button';

import Link from 'next/link';

const Cta = ()=>{

return (
    <section>

<div className='container mx-auto'>

<div className='flex flex-col items-center'>

<h2 className='h2 max-w-xl text-center mb-8'>

If you find my work interesting and would like to explore potential collaboration, I would be happy to connect and discuss further.

</h2>

<Link href='/contact'>

<Button className='mb-4'>Contact me</Button>

</Link>

</div>

</div>

</section>
);
 };

export default Cta;