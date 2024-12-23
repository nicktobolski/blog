import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nick Tobolski</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Nick Tobolski ∞ Human, Software Engineer"
          key="title"
        />
        <meta
          name="description"
          property="og:description"
          content="Personal site of Nick Tobolski, Extraodinaire"
          key="desc"
        />
      </Head>

      <main>
        <h1 className="title">Nick Tobolski</h1>

        <p className="description intro">
          A software engineer with a passion for creating intuitive and powerful{" "}
          <a href="/tools">tools</a> that extend{" "}
          <a href="https://www.youtube.com/watch?v=cEfG1PHNB64" target="_blank">
            the reach
          </a>
          {" of "}
          <a href="https://en.wikipedia.org/wiki/Human">humanity</a>.
        </p>

        <div className="grid">
          <a href="/projects" className="card">
            <h2>Projects &rarr;</h2>
            <p>Explorations in code</p>
          </a>
          <a href="/words" className="card">
            <h2>Words &rarr;</h2>
            <p>With an appreciation for brevity</p>
          </a>
          <a
            href="https://github.com/nicktobolski"
            className="card"
            target="_blank"
          >
            <h2>Github &rarr;</h2>
            <p>It's pretty random honestly</p>
          </a>
          <a
            href="https://www.linkedin.com/in/ntobolski/"
            className="card"
            target="_blank"
          >
            <h2>LinkedIn &rarr;</h2>
            <p>Say hello</p>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .intro {
          max-width: 39rem;
        }
        a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a {
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }
        .wip {
          font-weight: bold;
          color: #ccc;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition:
            color 0.15s ease,
            border-color 0.15s ease;
        }

        a.card:hover,
        a.card:focus,
        a.card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
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
      `}</style>
    </div>
  );
}
