import Image from "next/image";
import { IoMdFlower } from "react-icons/io";
import { PiFlowerTulip } from "react-icons/pi";

export default function Home() {
  return (
    <>
    <section className="relative flex text-white pt-[100px] h-screen">
      <div className="relative px-10 w-full h-full">
        <div className="flex">
          <IoMdFlower className="text-[150px] flex-1 my-20 slow-spin"/>
          <Image
            src="/me.png"
            alt=""
            width={500}
            height={500}
            className="object-cover ml-auto mt-6 mx-auto flex-[2]"
            priority
            />
            <IoMdFlower className="text-[100px] flex-1 slow-spin"/>
          </div>
          <div className="flex absolute bottom-0 w-full justify-between pr-10">
            <div>
                <h1 className="text-6xl font-bold text-white mb-4">SAWADA AIRI</h1>
                <h1 className="px-10 text-6xl font-bold text-white ml-auto">iOS & Web Developer</h1>
            </div>
            <div>
              <IoMdFlower className="text-[200px] slow-spin"/>
            </div>
          </div>
      </div>
    </section>

    <section className="p-16 grow">
      <div className="flex items-center">
        <h1 className="text-2xl">沢田 愛利 </h1>
        <p className="pl-2">- Swada Airi -</p>
      </div>
      <br />
      <p className="text-lg">
        プログラマー歴2年。Swiftを中心に、iOSアプリ開発やWeb技術を学びながら、より使いやすいアプリケーションの開発を目指しています。<br />
        現在は iOSのドライブレコーダーアプリの保守・試験・調査 に携わり、コードの品質向上や新しい技術の習得に取り組んでいます。これまでの経験を活かしながら、より幅広い技術スタックを身につけ、ユーザーにとって価値のあるプロダクトを作ることを目標にしています。
      </p>
    </section>

    <section className="px-16 pb-16">
    <h2 className="text-3xl py-10 border-y text-center">Strengths</h2>
      <ul className="space-y-4 mt-10">
        <li>
          <div className="mb-10">
            <div className="flex gap-4 mb-4 font-bold">
              <div>01</div>
              <div className="">継続力</div>
            </div>
            <div>基本情報技術者試験の勉強をきっかけに、朝の学習習慣を1年半以上継続しています。資格取得後も、その時間を自己研鑽にあてて日々スキルアップに取り組んでいます。</div>
          </div>
        </li>
        <li>
          <div className="mb-10">
            <div className="flex gap-4 mb-4 font-bold">
              <div>02</div>
              <div>コミュニケーション能力</div>
            </div>
            <div>接客業や営業経験を通じて、相手の困りごとや要望を的確に汲み取る力を培ってきました。相手に寄り添いながら、問題解決に努めることを大切にしています。</div>
          </div>
        </li>
        <li>
          <div className="mb-10">
            <div className="flex gap-4 mb-4 font-bold">
              <div>03</div>
              <div className="">素直さ</div>
            </div>
            <div>指摘やアドバイスに対してはまず受け止める姿勢を心がけています。自分の考えに固執せず、柔軟に対応することで、より良い方向に成長できるよう意識しています。</div>
          </div>
        </li>
      </ul>
    </section>

    <section className="px-16 pb-16">
      <h2 className="text-3xl py-10 border-y text-center">Biography</h2>
      <ul className="space-y-4 mt-10">
        <li className="flex items-start gap-4">
          <PiFlowerTulip className="mt-1 shrink-0" />
          <div className="flex gap-4">
            <div className="whitespace-nowrap  w-32">2017.3</div>
            <div>大学卒業後、フィットネスインストラクターとして就職。</div>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <PiFlowerTulip className="mt-1 shrink-0" />
          <div className="flex gap-4">
            <div className="whitespace-nowrap w-32">2021.6</div>
            <div>フィットネスインストラクターを退職後、営業スキルを身につけるため、小顔矯正サロンでエステティシャンとして勤務。</div>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <PiFlowerTulip className="mt-1 shrink-0" />
          <div className="flex gap-4">
            <div className="whitespace-nowrap w-32">2022.8</div>
            <div>会社都合で退職後、かねてより興味のあったプログラマーを目指し、4ヶ月間のプログラミングスクールに通う。Javaを中心に学習。</div>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <PiFlowerTulip className="mt-1 shrink-0" />
          <div className="flex gap-4">
            <div className="whitespace-nowrap w-32">2023.5 〜</div>
            <div>プログラマーとして、iOS向けドライブレコーダーアプリの保守・試験・調査業務に携わり、実務を通して技術習得に励んでいる。</div>
          </div>
        </li>
      </ul>
    </section>
    
    </>
  )}