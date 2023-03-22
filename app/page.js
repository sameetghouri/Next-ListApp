import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Forks Listing | Home</title>
      </Head>
      <div className='flex flex-col items-center px-4 text-xl gap-2'>

        <h1 className='text-2xl  pb-4' >Home</h1>
        <p>Next.js is a popular open-source JavaScript framework that has gained a lot of popularity among web developers in recent years. It is built on top of the React library and provides a robust set of features for building scalable and performant web applications. In this blog post, we'll take a closer look at what Next.js is and why you should consider using it for your next project.</p>

        <h2>What is Next.js?</h2>

        <p>Next.js is a React-based framework that allows you to build server-rendered applications with ease. It provides a set of tools and features that help you to build complex applications quickly and easily. One of the key benefits of using Next.js is that it offers an out-of-the-box solution for server-side rendering (SSR) and static site generation (SSG), which makes it an ideal choice for building fast, performant websites.</p>

        <h2>Why use Next.js?</h2>

        <p>There are several reasons why you might want to consider using Next.js for your next project. Here are some of the key benefits:</p>

        <h3>1: Fast performance: Next.js provides built-in optimization features that make your applications load quickly and perform well. It also supports lazy loading, code splitting, and caching, which helps to reduce page load times and improve the user experience.</h3>

        <h3>2: SEO-friendly: With Next.js, you can build SEO-friendly applications that rank well in search engine results pages (SERPs). This is because Next.js supports server-side rendering, which means that search engines can crawl and index your pages more easily.</h3>

        <h3>3: Easy to use: Next.js provides a simple and intuitive API that makes it easy to build complex applications. It also offers a range of plugins and extensions that can help you to add additional functionality to your applications without having to write additional code.</h3>

        <h3>4: Scalable: Next.js is highly scalable and can be used to build applications of any size. It also supports automatic code splitting, which helps to ensure that your application remains fast and responsive even as it grows in size.</h3>

      <Link href='/forks' className='block mt-5 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded'>See Forks Listing</Link>

    </div>
    </>
  )
}
