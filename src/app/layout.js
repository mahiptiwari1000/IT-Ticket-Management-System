import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from './context/AuthContext';
import awsconfig from '../aws-exports'; // Adjust the path if necessary
import { Amplify, Auth } from 'aws-amplify';

Amplify.configure(awsconfig);

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "TTMS - Trouble Ticket Management System",
  description: "An IT Helpdesk application for managing trouble tickets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
