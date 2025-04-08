import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(request : NextRequest) {

  try {
    
    const data = await fs.readdir(path.join(process.cwd(), "blogdata"));
    let allblogs : any[] = [];             // array which contain all the blogs

    for (const item of data) {            // loop to fetch each json(item) from data(blogdata directory)

      // console.log("the item is : ", item);
      const filepath = path.join(process.cwd(), "blogdata", "/" + item)
      const content = await fs.readFile(filepath, "utf-8");

      allblogs.push(JSON.parse(content));
      
    };

    return NextResponse.json({allblogs});

  } 
  catch (error) {
        return NextResponse.json(
          {error : "failed to read file"},
          {status : 500}
        );
  }
}