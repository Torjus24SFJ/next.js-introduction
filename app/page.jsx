import Image from "next/image";

export default function Home() {
  return (
   <section>
    <h1>This is homepage</h1>
    <div>
    <figure>
      <Image width={300} height={300} className="" src="/heisendrated.png" alt="" />
    </figure>
    <figure>
      <Image width={300} height={300} className="" src="/heisendrated.png" alt="" />
    </figure>
    </div>
   </section>
  );
}
