import Image from "next/image";

type Props = {
  title: string;
};

export default function Hero({ title }: Props) {
  return (
    <section className="relative flex items-center justify-center text-white overflow-hidden py-[200px]">
      <div>
        <h1 className="text-center text-4xl font-bold text-white mb-4">{title}</h1>
      </div>
      <Image 
        src="/kobe.jpg" 
        alt="" 
        width={4000} 
        height={1200} 
        className="absolute top-0 right-0 w-full h-[600px] object-cover object-right flex items-center justify-center -z-10"
      />
    </section>
  )}
