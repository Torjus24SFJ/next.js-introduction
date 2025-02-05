import Image from "next/image";
import { Button } from "./components/Button";

export default function Home() {
  return (
   <section>
    <h1 className="text-2xl font-bold text-center m-6">Home</h1>
    <div className="flex flex-row gap-6 place-content-center m-6">
    <figure>
      <Image width={300} height={300} src="/heisendrated.png" alt="" />
    </figure>
    <figure>
      <Image width={300} height={300}  src="/heisendrated.png" alt="" />
    </figure>
    <Button />
    </div>
   </section>
  );
}
