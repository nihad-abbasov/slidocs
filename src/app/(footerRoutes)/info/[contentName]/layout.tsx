import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slidocs | Best Slides",
  description: "Get Your slides from us!",
  icons: {
    icon: "./favicon.png",
  },
};

export default function ContenRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
