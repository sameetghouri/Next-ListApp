"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const notFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);
    return ( <div className="h-screen w-full flex flex-col items-center justify-center">
      
    </div> );
}
 
export default notFound;