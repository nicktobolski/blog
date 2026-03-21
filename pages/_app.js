import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ThemeContext } from "../components/ThemeContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = (dark) => {
      const next = dark ? "dark" : "light";
      setTheme(next);
      document.documentElement.setAttribute("data-theme", next);
    };

    apply(mq.matches);

    const handleChange = (e) => apply(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="container">
        {!isHome && (
          <nav className="back-nav">
            <Link href="/">&larr; Home</Link>
          </nav>
        )}
        <Component {...pageProps} />
      </div>

      <style jsx global>{`
        :root,
        [data-theme="light"] {
          --bg: #ffffff;
          --text: #111;
          --accent: #0070f3;
          --border: #eaeaea;
          --code-bg: #fafafa;
          --secondary: #6e6e6e;
          --blockquote-text: #2e2e2e;
          --blockquote-border: #ddd;
          --disabled: #ccc;
        }
        [data-theme="dark"] {
          --bg: #111;
          --text: #e0e0e0;
          --accent: #3b9bff;
          --border: #333;
          --code-bg: #1a1a1a;
          --secondary: #999;
          --blockquote-text: #ccc;
          --blockquote-border: #444;
          --disabled: #555;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: var(--bg);
          color: var(--text);
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        .back-nav {
          padding: 1.5rem;
          width: 100%;
        }
        .back-nav a {
          color: var(--accent);
          text-decoration: none;
          font-size: 0.95rem;
        }
        .back-nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </ThemeContext.Provider>
  );
}

export default MyApp;
