import './globals.css';

export const metadata = {
  title: 'Eagle Mountain - Heavy Equipment & Industrial Solutions',
  description: 'Reliable equipment and professional service for construction and industrial projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Add suppressHydrationWarning here
    <html lang="en" suppressHydrationWarning>
      {/* And add it here */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}