
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PulseLoader } from "react-spinners";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import page from "@/app/blogs/page";

interface BlogType {
  title: string;
  content: string;
  author: string;
  image : StaticImageData;
}

const BlogPostPage = () => {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : params.slug?.[0];

  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/getblogs/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Error loading blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {

    return <div className="ml-[46.7%] mt-[10%] w-fit">
                <PulseLoader size={10} color="#FFFFFF"/> 
           </div>
  }


  if (!blog) {
    return <p className="p-4 text-red-600">Blog not found.</p>;
  }


  return (
<>
    
    <div className="backbtn w-fit ml-[10px] mt-[10px] md:mb-[40px] sm:mb-[45px] lg:mb-[25px] xl:mb-[]" style={{border:"0px solid white"}}> 

          <Link href={"/blogs"}> 
                <h1 className="font-semibold hover:underline hover:underline-offset-[3px]"> <b> &#x27F8; </b>  Back </h1>
          </Link>
    </div>

    <div className="select-none mb-[10%]" style={{border:"0px solid white"}}>

      <div className="flex items-center justify-center">
        <h1 className="mt-[8%] sm:text-[15px] md:text-[18px] font-semibold">{blog.title}</h1>
      </div>

      <hr className="w-full mt-[1%] bg-white" />

      <div className="blogimage w-fit mx-auto mt-[4%] mb-[2%] " style={{border:"1px solid white"}}>
            <Image src={blog.image} width={300} height={300} className="object-cover" alt="Image"/> 
      </div>


      {/* wrap each paragraph in it's own <> tag */}
      <div className="blog-content w-[96%] py-4 ml-[2%]">  

          {blog.content.split('\n\n').map((para,i)=> (
            <p key={i} className="mb-4 sm:text-[9px] md:text-[12px] font-sans whitespace-pre-line"> {para} </p>
          ))}
      </div>
      

      <div className="author sm:ml-[60%] md:ml-[68%] font-sem">
        <p className="font-bold font-mono sm:text-[10px] md:text-[13px] md:ml-[-18%] lg:ml-[-1%] xl:ml-[17%]">{blog.author}</p>
      </div>

    </div>

    </>
  );
};

export default BlogPostPage;


















// SERVER COMPONENT : 

// ALL PROCESS IS DONE WITHIN THIS SERVSER COMPONENT :  


// import { notFound } from "next/navigation";
// import React from "react";

// interface Blog {
//   title : string;
//   content : string;
//   author : string;
// }

// interface PageParams {
//     params : {
//       slug : string;
//     }
// }



// const getBlogData = async (slug: string) : Promise<Blog | null> => {
//   const res = await fetch(`http://localhost:3000/api/getblogs/${slug}`, { cache: "no-store" }); 
//   if (!res.ok) throw new Error("Failed to fetch blog");
//   return res.json();
// };

// const Page = async ({ params }: PageParams) => {
//   const blog = await getBlogData(params.slug);

//   if(!blog) return notFound();

//   return (
//     <div className="select-none"> 
//       <div className="flex items-center justify-center"> 
//         <h1 className="text-3xl mt-[5%] font-semibold">{blog.title}</h1>
//       </div>

//       <hr className="w-full mt-[1%] bg-white"/>

//       <div className="blog-content w-[96%] py-4 ml-[2%]"> 
//         <p className="text-[17px] font-sans">{blog.content}</p>   
//       </div>

//       <div className="author ml-[80%] font-sem">
//         <p className="font-bold font-mono">{blog.author}</p>
//       </div>
//     </div>
//   );
// };

// export default Page;
















// import Blogpost from "./Blogpost";

// const Page = ({ params }: { params: { slug: string } }) => {
//   return <Blogpost slug={params.slug} />;
// };

// export default Page;

// app/blogpost/[slug]/page.tsx