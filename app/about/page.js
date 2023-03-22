import Head from 'next/head';
const About = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className='flex flex-col items-center px-4 text-xl'>
                <h1 className='text-2xl pb-4'>About</h1>
                <p>Next.js is a popular React-based framework used for building web applications, and it has undergone several updates and changes since its inception. In this blog, we will explore the history of Next.js and its evolution over time.</p>

                <p>Next.js was first introduced in 2016 by Zeit, a company that specializes in cloud computing and open-source software. At the time, it was designed to simplify server-rendered React applications and provide an easy-to-use framework for developers. With its unique approach to server rendering and simplified configuration, Next.js quickly gained popularity among developers.</p>

                <p>In 2017, Next.js was released as an open-source project under the MIT license, and the development community started to grow. With its server-rendered approach, Next.js enabled developers to create highly performant web applications that could be easily optimized for search engines and social media sharing.</p>

                <p>Over the next few years, Next.js continued to evolve and add new features. In 2018, Next.js 7 was released, introducing dynamic imports and serverless deployment. This made it easier to build and deploy applications with Next.js, while also improving performance.</p>

                <p>In 2019, Next.js 8 was released, which included static site generation and improved dynamic imports. Static site generation enabled developers to create highly optimized web pages that could be pre-rendered and cached, resulting in faster load times and better performance.</p>

                <p>In 2020, Next.js 9 was released, which added support for API routes and improved performance. API routes made it easy to create RESTful APIs and serverless functions within a Next.js application, further simplifying the development process.</p>

                <p>In 2021, Next.js 10 was released, which introduced several new features, including automatic image optimization, internationalized routing, and improved support for serverless functions. Automatic image optimization allowed images to be optimized on the fly, resulting in faster load times and better performance. Internationalized routing made</p>
            </div>
        </>);
}

export default About;