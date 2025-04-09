"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const page = () => {

  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    
      const fetchBlog = async() => {

          try{
                const res = await fetch(`/api/blogs`);
                const data = await res.json();
                setBlogs(data.allblogs || []);
             }
             catch(error){
              console.error("failed to load blogs", error);
             }
        };

          fetchBlog();

  }, []);
  


  return (

<>
     <div className='w-[34%] ml-[33.5%] mt-[10%] mb-[20%]' style={{border:"0px solid white"}}>

         <div className='md:w-[100%] text-center sm:mt-[50%] sm:mb-[30%] md:mt-[40%] md:mb-[20%] 2xl:mb-[10%]' style={{border:"0px solid white"}}>

                   <h1 className='font-bold md:text-[18px] xl:text-[22px]'> Popular Blogs </h1>

         </div>

       {blogs.length > 0 ? (

          blogs.map((blogitem : any)=>(

              <div key={blogitem.slug} className='flex flex-col items-center justify-center sm:w-[250%] sm:ml-[-70%] sm:mt-[10%] md:mt-[10%] md:ml-[-72%] md:w-[240%] lg:w-[180%] lg:ml-[-32%] xl:w-[160%] xl:ml-[-28%] 2xl:w-[125%] 2xl:ml-[-12%] 2xl:mb-[-2%]' style={{border:"0px solid white"}}>

                <Link href={`/blogpost/${blogitem.slug}`}>
                <h2 className='sm:text-[10px] sm:hover:text-[11px] md:text-[13px] md:hover:text-[14px] lg:text-[11px] hover:lg:text-[12px] xl:text-[13px] hover:xl:text-[14px] font-semibold hover:underline hover:underline-offset-[5px] cursor-pointer select-none'> {blogitem.title} </h2> </Link>

                <p className='select-none text-[10px]'> {(blogitem.content).substring(0,60)}... </p>

              </div>

          ))

      ) : (

          <p className='ml-[31%] text-lg'> Loading data... </p>

      )}
      
    </div>
</>

  )
}

export default page;


















// "user client";
// import Link from 'next/link';
// import React from 'react';

// const page = async () => {

//       let data : any = [];

//       try{
//             const response = await fetch(`/api/blogs`);
//               const parseddata = await response.json(); 
//               // console.log(data);

//               data = parseddata.allblogs || [];  //If allblogs exists, data = parsedData.allblogs. else data = [].

//       }catch(error){
//         console.error("error fetching data", error);
//       }

    
  



//   return (

// <>
//     <div className='w-[34%] ml-[33.5%] mt-[10%] mb-[20%]' style={{border:"0px solid white"}}>

//         <div>

//                   <h1 className='font-bold text-[25px] mt-[-8%] ml-[23%] mb-[15%]'> Popular Blogs </h1>

//         </div>

//       {data.length > 0 ? (

//           data.map((blogitem : any)=>(

//               <div key={blogitem.slug} className='mt-[6%]' style={{border:""}}>
//                 <Link href={`/blogpost/${blogitem.slug}`}>
//                 <h2 className='text-[17.5px] hover:text-[18px] font-semibold hover:underline hover:underline-offset-[5px] cursor-pointer select-none'> {blogitem.title} </h2> </Link>
//                 <p className='select-none text-[14px]'> {(blogitem.content).substring(0,60)}... </p>

//               </div>

//           ))

//       ) : (

//           <p> no Blogs available. </p>

//       )}
      
//     </div>
// </>
//   )
// }

// export default page;

// export const metadata = {
//   title: "Hunting Coder - Blogs",
//   description: "Feel free to contact us.",
// };



































// interface Blog {
//   slug: string;
//   title: string;
//   content: string;
// }


// //fetch blog data at build time (SSG) : 
// const getBlogData = async (slug : string) => {
//   const data = await fetch(`http://localhost:3000/api/blogs`, {next: { revalidate : 3600 }});
//   if(!data.ok) throw new Error("failed to fetch blogs..");
//   console.log(data);
//   return data.json();
// }


// async function generateStaticParams() {

//     //fetch all blog slugs at build time : 
//     const res = await fetch("http://localhost:3000/api/blogs");
//     const blogs = await res.json();

//     // blogs.forEach((blog : Blog)=> console.log(blog.slug));

//     return blogs.map((blog: {slug : string})=> ({
//       slug : blog.slug,         // generate a static page for each slug
//     }));
// }



// const page = async ({ params } : {params : {slug : string}}) => {

//         const blog = await getBlogData(params.slug)


//         return (
//           <div className="select-none"> 
//             <div className="flex items-center justify-center"> 
//               <h1 className="text-2xl mt-[5%] font-semibold">{blog.title}</h1>
//             </div>
      
//             <hr className="w-full mt-[1%] bg-white"/>
      
//             <div className="blog-content w-[96%] py-4 ml-[2%]"> 
//               <p>{blog.content}</p>   
//             </div>
      
//             <div className="author ml-[80%] font-sem">
//               <p>{blog.author}</p>
//             </div>
//           </div>
//         );
// };

// export default page;