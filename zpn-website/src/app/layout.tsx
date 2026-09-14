import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zero Point Network – ভাটারার সেরা ইন্টারনেট সেবা",
  description:
    "Zero Point Network – ভাটারা, ঢাকার BTRC অনুমোদিত ইন্টারনেট সেবা প্রদানকারী। দ্রুত ফাইবার সংযোগ, সাশ্রয়ী প্যাকেজ ও ২৪/৭ সাপোর্ট।",
  keywords: ["internet", "ISP", "Vatara", "Dhaka", "fiber", "broadband", "Zero Point Network"],
  openGraph: {
    title: "Zero Point Network",
    description: "ভাটারার সেরা ফাইবার ইন্টারনেট সেবা",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;500;600;700;800&family=Hind+Siliguri:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700;800;900&family=Noto+Serif+Bengali:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
