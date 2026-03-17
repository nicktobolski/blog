import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div className="container">
      {!isHome && (
        <nav className="back-nav">
          <Link href="/">&larr; Home</Link>
          <style jsx global>{`
            .back-nav {
              padding: 1.5rem;
              width: 100%;
            }
            .back-nav a {
              color: #0070f3;
              text-decoration: none;
              font-size: 0.95rem;
            }
            .back-nav a:hover {
              text-decoration: underline;
            }
          `}</style>
        </nav>
      )}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
