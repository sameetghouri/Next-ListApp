import Head from 'next/head';
const About = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className='flex flex-col items-center px-4'>
                <h1 className='text-2xl pb-4'>About</h1>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
        </>);
}

export default About;