import Image from "next/image";
import { IoMdFlower } from "react-icons/io";

type Props = {
  title: string;
};

export default function Hero({ title }: Props) {
  return (
    <section className="relative flex text-white pt-[100px] h-screen">
          <div className="relative px-10 w-full h-full">
            <div className="flex">
              <IoMdFlower className="text-[150px] flex-1 my-20"/>
              <Image
                src="/kobe.png"
                alt=""
                width={500}
                height={500}
                className="object-cover ml-auto mt-6 mx-auto flex-[2]"
                />
                <IoMdFlower className="text-[100px] flex-1"/>
              </div>
              <div className="flex absolute bottom-0 w-full justify-between pr-10">
                <div className="flex-1">
                    <h1 className="text-6xl font-bold">{title}</h1>
                </div>
                <div className="flex-1 flex justify-end">
                  <IoMdFlower className="text-[200px]"/>
                </div>
              </div>
          </div>
        </section>
  )}
