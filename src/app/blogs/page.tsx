"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PulseLoader } from 'react-spinners';
import Image from 'next/image';

const page = () => {

  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");     // state for searchbar👍
  const [filteredText, setFilteredText] = useState("");    // to searh after click search button👍


  useEffect(() => {
    document.title = "Hunting Coder - Blogs"
})

useEffect(() => {

    setTimeout(() => {
        setLoading(false);
    }, 1000);


}, [])



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

  },[]);
  

    useEffect(() => {
        
      if(searchText.trim() === ""){
        setFilteredText("");
      }
    
    }, [searchText])


      // FILTERED BLOG LIST : 
    const filteredBlogs = blogs.filter((blogitem)=> 
      blogitem.title.toLowerCase().includes(filteredText.toLocaleLowerCase())
);
    



  return (

<>

  <div className="Searchbar h-[100px] mt-[90px] w-full relative flex items-center justify-center" style={{border:"0px solid white"}}>

        <div className="absolute searchbar ml-[-100px] sm:ml-[-50px] md:ml-[-70px] lg:ml-[-80px] xl:ml-[-90px] sm:w-[220px] md:w-[260px] lg:w-[340px] xl:w-[370px] 2xl:w-[400px]" style={{border:"0px solid yellow"}}>

              <input type="text" id="search" name="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}     //HANDLE SEARCH INPUT CHANGE👍 
                className="w-full sm:h-[15px] md:h-[16px] xl:h-[25px] lg:h-[20px] 2xl:h-[30px] bg-blue-200 text-black sm:text-[7px] md:text-[8px] lg:text-[9.5px] xl:text-[11px] 2xl:text-[13px] hover:rounded-md" 
                placeholder=" Start your hunting.."/>

        </div> 

        <div className='searchButton absolute h-fit sm:ml-[230px] md:ml-[260px] lg:ml-[340px] xl:ml-[380px] 2xl:ml-[420px]' style={{border:"0px solid white"}}>

            <button className='sm:w-[40px] sm:h-[15px] md:w-[50px] md:h-[16.5px] lg:w-[60px] lg:h-[20px] xl:w-[70px] xl:h-[25px] 2xl:w-[80px] 2xl:h-[30px] bg-blue-700 rounded-md text-white sm:text-[6.5px] md:text-[8px] lg:text-[10px] xl:text-[11.5px] 2xl:text-[13px] font-semibold hover:bg-blue-800 transition-all hover:cursor-pointer hover:drop-shadow-[0_0_5px_rgba(59,255,255,1)]'
             style={{border:"1.5px solid white"}} onClick={()=>setFilteredText(searchText)}> Search </button>


        </div>


  </div>


     <div className='master relative flex flex-row items-center justify-center w-full h-[100px] mx-auto mt-[80px] mb-[200px]' style={{border:"0px solid yellow"}}>


         <div className='heading absolute w-fit text-center' style={{border:"0px solid white"}}>

                   <h1 className='font-bold 2xl:text-[35px] md:text-[18px] xl:text-[22px]' style={{border:"0px solid green"}}> Popular Blogs </h1>

         </div>

    </div>


              <div className='container relative mt-[-100px] w-full flex flex-wrap gap-y-5 mx-auto mb-[250px] justify-center items-center' style={{border:"0px solid white"}}>  

              {

                  loading ? (

                    <PulseLoader size={10} color='#FFFFFF'/> 


                  ) : filteredBlogs.length > 0 ? (

                      filteredBlogs.map((blogitem)=> (

                        <div key={blogitem.slug} className='group relative w-[200px] h-[200px] sm:w-[80px] sm:h-[110px] md:w-[100px] md:h-[150px] lg:w-[130px] lg:h-[210px] xl:w-[180px] xl:h-[270px] 2xl:w-[210px] 2xl:h-[320px] sm:mx-2 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2 flex flex-row items-center justify-center hover:scale-[103%] hover:cursor-pointer' 
                          style={{border:"1px solid skyblue"}}> 


                              <div className='absolute blogImg w-full 2xl:h-[175px] xl:h-[160px] lg:h-[118px] md:h-[75px] sm:h-[55px] 2xl:mt-[-142.5px] xl:mt-[-107.5px] lg:mt-[-90px] md:mt-[-72px] sm:mt-[-52px]'
                                style={{borderBottom : "1px solid skyblue"}}>
      
                              <Link href={`/blogpost/${blogitem.slug}`}>
                                      <Image src={blogitem.image} alt='blog' fill={true}/> </Link>
      
                              </div>
  
  
                              <div className='absolute title w-full h-[70px] 2xl:mt-[120px] xl:mt-[130px] lg:mt-[105px] md:mt-[75px] sm:mt-[75px] text-center sm:group-hover:underline-offset-2 md:group-hover:underline-offset-2 lg:group-hover:underline-offset-[3px] xl:group-hover:underline-offset-4 2xl:group-hover:underline-offset-[5px] group-hover:underline' style={{border:"0px solid green"}}> 
      
                              <Link href={`/blogpost/${blogitem.slug}`}>
                                        <h1 className='2xl:text-[16px] xl:text-[12px] lg:text-[10px] md:text-[7px] sm:text-[5px] font-bold 2xl:p-[1px] xl:p-[2px] lg:p-[2px] md:p-[2px] sm:p-[8px]' style={{border:"0px solid white"}}> {blogitem.title} </h1> </Link>
                              </div>
  
  
                              <div className='absolute w-full h-[80px] 2xl:mt-[260px] xl:mt-[235px] lg:mt-[205px] md:mt-[160px] sm:mt-[142px] text-center' style={{border:"0px solid skyblue"}}>
      
                              <Link href={`/blogpost/${blogitem.slug}`}>
                                  <p className='2xl:text-[12.5px] xl:text-[10px] lg:text-[7.5px] md:text-[6px] sm:text-[4px] 2xl:p-[1px] xl:p-[2px] lg:p-[2px] md:p-[2px] sm:p-[2px]'> {(blogitem.content).substring(0,90)}... </p> </Link>
                                      
      
                              </div>
  
                        </div>

                        ))

                  ) : (
                          <div> 

                              <h1> No Blogs found matching your search. </h1>

                          </div>

                  )

              }

            </div>

</>

  )
}

export default page;





// BLOGS DISPLAYED AS LIST : 

// {blogs.length > 0 ? (

//   blogs.map((blogitem : any)=>(

//       <div key={blogitem.slug} className=' flex flex-row items-center justify-center mt-[50px] w-[800px] sm:ml-[-70%] md:ml-[-72%] lg:ml-[-32%] xl:ml-[-28%] 2xl:ml-[-12%]' style={{border:"1px solid white"}}>

//         <Link href={`/blogpost/${blogitem.slug}`}>
//         <h2 className='sm:text-[10px] sm:hover:text-[11px] md:text-[13px] md:hover:text-[14px] lg:text-[11px] hover:lg:text-[12px] xl:text-[13px] hover:xl:text-[14px] font-semibold hover:underline hover:underline-offset-[5px] cursor-pointer select-none'> {blogitem.title} </h2> </Link>

//         <p className='select-none text-[10px]'> {(blogitem.content).substring(0,60)}... </p>

//       </div>

//   ))

// ) : (

// <div className='w-fit ml-[45%]'>
//     <PulseLoader size={10} color='#FFFFFF'/>
// </div>

// )}















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