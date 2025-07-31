import { Suspense } from "react";
import "./globals.css";
import News from "./news/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gray-50 dark:bg-gray-900">
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
            </div>
          }
        >
          <News></News>
        </Suspense>
      </body>
    </html>
  );
}
