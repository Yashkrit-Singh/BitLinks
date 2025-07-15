import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className="text-2xl font-bold">
            The best URL shortner in the market
          </p>
          <p className="px-20 text-center">
            We are the most straightforward URL shortner in the world. Most of the URL shortner with track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortner.
          </p>
          <li className='flex gap-3 justify-start'>
              <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
              <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Github</button></Link>
          </li>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}


