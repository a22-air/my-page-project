import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="relative flex items-center justify-center text-white overflow-hidden py-[200px]">
      <div>
        <h1 className="text-center text-4xl font-bold text-white mb-4">沢田 愛利 iOS & Web Developer</h1>
      </div>
      <Image 
        src="/kobe.jpg" 
        alt="" 
        width={4000} 
        height={1200} 
        className="absolute top-0 right-0 w-full h-[600px] object-cover object-right flex items-center justify-center -z-10"
      />
    </section>
    <section className="flex items-center bg-white p-16 grow">
      <p className="text-lg text-gray-700">
        プログラマー歴2年。Swiftを中心に、iOSアプリ開発やWeb技術を学びながら、より使いやすいアプリケーションの開発を目指しています。<br></br>現在は ドライブレコーダーアプリの保守・試験・調査 に携わり、コードの品質向上や新しい技術の習得に取り組んでいます。iOS開発だけでなく、JavaScriptやReact、Next.jsなどのフロントエンド技術にも対応可能です。これまでの経験を活かしながら、より幅広い技術スタックを身につけ、ユーザーにとって価値のあるプロダクトを作ることを目標にしています。
      </p>
    </section>
    </>
  )}

  
    {/* <div className="font-kaisei-decol min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/kobe.jpg)' }}>
    </div> */}
    {/* <div className="relative">
      <Image 
        src="/kobe.jpg" 
        alt="" 
        width={4000} 
        height={1200} 
        className="absolute top-0 left-0 w-full h-auto z-[-1]"
      />
    </div> */}
    {/* <Image src="/kobe.jpg" alt="" width={ 4000 } height={ 1200 } className="mt-[-50px]"/> */}
    {/* <div className="font-kaisei-decol bg-gray-100 flex items-center justify-center">
      <div className="p-20 bg-white rounded-lg">
        <h1 className="text-center text-4xl font-bold text-blue-600 mb-4">沢田 愛利 iOS & Web Developer</h1>
        <p className="text-lg text-gray-700">プログラマー歴2年。Swiftを中心に、iOSアプリ開発やWeb技術を学びながら、より使いやすいアプリケーションの開発を目指しています。<br></br>現在は ドライブレコーダーアプリの保守・試験・調査 に携わり、コードの品質向上や新しい技術の習得に取り組んでいます。iOS開発だけでなく、JavaScriptやReact、Next.jsなどのフロントエンド技術にも対応可能です。これまでの経験を活かしながら、より幅広い技術スタックを身につけ、ユーザーにとって価値のあるプロダクトを作ることを目標にしています。</p>
      </div>
    </div> */}
//   );
// }
