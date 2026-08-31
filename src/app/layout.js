import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Yogant Patil | Aspiring Data Scientist | Machine Learning Engineer | Data Analyst",
  description:
    "Portfolio of Yogant Patil — Recent M.Tech graduate and Aspiring Data Scientist, Machine Learning Engineer, and Data Analyst with hands-on project and research experience in ML, AI, and data analytics. Actively seeking entry-level opportunities.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "Data Analyst",
    "Machine Learning Engineer",
    "Applied Machine Learning",
    "AI",
    "Python",
    "Deep Learning",
    "Drug-Drug Interaction",
    "Portfolio",
    "Yogant Patil",
  ],
  authors: [{ name: "Yogant Patil" }],
  openGraph: {
    title: "Yogant Patil | Aspiring Data Scientist | ML Engineer | Data Analyst",
    description:
      "Recent M.Tech graduate and Aspiring Data Scientist, Machine Learning Engineer, and Data Analyst with project and research experience. Actively seeking opportunities.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
