import ContactForm from "@/app/_components/ContactForm";

export default function Page() {
  return (
  <div className="bg-white pt-16">
    <p className="text-black text-center">
      ご質問、ご相談は下記フォームよりお問い合わせください。
      <br />
      内容確認後、通常３営業日以内にご連絡いたします。
    </p>
    <ContactForm />
  </div>
  )
};