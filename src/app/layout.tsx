import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import React from "react";
import QueryProvider from "@/provider/query-provider";
import HostWrapper from "@/components/host-filter/HostWrapper";

// const font = Inter({ subsets: ["latin"] });
const font = Merriweather({
  weight: ["400", "300", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qviple",
  description: "Qviple",
};

// export async function generateMetadata() {
//   const id = "6660214803ff919dc4b26877";
//   try {
//     const res = await fetch(
//       `https://api.qviple.com/api/v1/landing/${id}/one/web/profile`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         next: { revalidate: 120 },
//       }
//     );

//     if (!res.ok) {
//       throw new Error(
//         `Failed to fetch metadata: ${res.status} ${res.statusText}`
//       );
//     }

//     let data = await res.json();
//     data = data?.one_ins;
//     const imageUrl = `https://d3dqpu54js2vfl.cloudfront.net/${data?.insProfilePhoto}`;

//     return {
//       title: data?.insName || "",
//       description: data?.insName || "",
//       openGraph: {
//         title: data?.insName || "",
//         description: data?.insName || "",
//         images: [
//           {
//             url: imageUrl,
//             width: 1200,
//             height: 630,
//             alt: data?.name,
//           },
//         ],
//       },
//       twitter: {
//         card: data?.insName || "",
//         title: data?.insName || "",
//         description: data?.insName || "",
//         images: [imageUrl],
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching metadata:", error);
//     return {
//       title: "Qviple",
//       description: "Qviple",
//     };
//   }
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <QueryProvider>
          <HostWrapper>{children}</HostWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
