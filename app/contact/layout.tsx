import Hero from "@/app/_components/Hero";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
    <Hero title="Contact" />
    {children}
    </>
  )
}