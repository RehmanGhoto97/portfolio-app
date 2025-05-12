import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head"; // Import Head from Next.js

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdul Rehman | Frontend Developer Portfolio",
  description:
    "Explore Abdul Rehman's portfolio — a frontend web developer specializing in React, Tailwind CSS, and modern UI design. Discover projects, skills, and contact details.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Tailwind CSS",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "Abdul Rehman",
    "Next.js Developer",
    "UI Developer",
  ],
  authors: [{ name: "Abdul Rehman", url: "https://portfolio-ar97.netlify.app" }],
  creator: "Abdul Rehman",
  openGraph: {
    title: "Abdul Rehman | Frontend Developer",
    description:
      "Portfolio of Abdul Rehman – showcasing React projects, UI/UX implementations, and frontend development skills.",
    url: "https://portfolio-ar97.netlify.app",
    siteName: "Abdul Rehman Portfolio",
    images: [
      {
        url: "/preview.jpg", // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Abdul Rehman Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman | Frontend Developer",
    description:
      "Check out the personal portfolio of Abdul Rehman, a passionate frontend developer focused on modern React apps.",
    creator: "@yourTwitterHandle", // Replace or remove if not applicable
    images: ["/preview.jpg"], // Same image as Open Graph
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Head>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords.join(", ")} />
          <meta name="author" content={metadata.authors[0].name} />
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:image" content={metadata.openGraph.images[0].url} />
          <meta name="twitter:card" content={metadata.twitter.card} />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          <meta name="twitter:image" content={metadata.twitter.images[0]} />
        </Head>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
