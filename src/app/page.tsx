
import Link from "next/link";




export default async function Home() {
  const url = await fetch('https://jsonplaceholder.typicode.com/albums')
  const res = await url.json();
  console.log('singlepost',res);
  interface Post {
    id :number ;
    title: string;
    body?: string; 
  }
  
  return (
    
    <main>
      <h1 className="text-center text-xl justify-center">Album API</h1>
    <div className="flex grid-col-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-20 flex-wrap p-4 gap-6">
       {res.map((post:Post, index:number) =>(
        <div
        key={index}
        className="bg-gray-500  shadow-lg w-1/6 h-40 text-center justify-items-center p-5 hover:shadow-xl hover:shadow-white duration-300">
          <div className="items-center justify-center h-[190px]">
          <Link href={`${post.id}`}>
          
          <h2 className="text-white text-2xl font-semibold">
           {"Title:"}
          </h2>
          <p>{post.title}</p>
          </Link> 
        </div>
          
        </div>
      ))} 
    </div>
    </main>
  );
}
