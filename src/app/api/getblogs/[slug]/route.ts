
// ============== for fetching endpoints from the blogdata dierectory : =================

import { promises as fs } from "fs";
import { NextRequest } from "next/server";
import path from "path";


export async function GET(request : NextRequest) {


try{


    const slug = request.nextUrl.pathname.split("/").pop();
    const filepath = path.join(process.cwd(), "blogdata", `${slug}.json`);
    // console.log(filepath);

    const data = await fs.readFile(filepath, "utf-8");

    // const data = await fs.readdir("blogdata");
    // console.log(data);

    // return Response.json(JSON.parse(data));

    return new Response(data, {
      headers : {"Content-type" : "application/json"},
    });

}
  catch (error) {
    return new Response(JSON.stringify({error : "failed to read the file"}), {
      status : 500,
      headers : {"Content-type" : "application/json"},
    });
  }
}














// ===============  for fetching the json file via dynamic routes ([slug]) =========== : 

// import { promises as fs } from "fs";
// import path from "path";

// export async function GET(_: Request, {params} : {params : {slug : string}}) {


//   try {
//     const filepath = path.join(process.cwd(), "blogdata", `${params.slug}.json`);
//     console.log(filepath);
//     const data = await fs.readFile(filepath, "utf-8");

//     return Response.json(JSON.parse(data));

//   } 
//   catch (error) {
//     return Response.json({ error: "Failed to read file" }, { status: 500 });
//   }
// }










// "use client";
// import React from 'react';
// import { useEffect } from 'react';

// const route = () => {

//     useEffect(() => {
//         fetch("C:/HuntingCoder/huntingcoder/src/app/api/getblogs/roadmap-2025")
//           .then((res) => res.json())
//           .then((data) => console.log(data));
//       }, []);
      

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default route;