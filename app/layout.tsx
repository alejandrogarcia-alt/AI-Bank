import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Multiplica Bank - Banca Digital Inteligente",
  description: "Tu banco inteligente con asistente virtual. Realiza operaciones, solicita créditos y encuentra productos financieros con IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="antialiased h-full m-0 p-0">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
