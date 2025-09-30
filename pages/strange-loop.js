import React from "react";
import Head from "next/head";

export default function StrangeLoop() {
  return (
    <div className="container">
      <Head>
        <title>I Am A Strange Loop - Nick Tobolski</title>
        <meta
          property="og:title"
          content="I Am A Strange Loop - Nick Tobolski"
          key="title"
        />
        <meta
          name="description"
          property="og:description"
          content="A poem about self-reference, consciousness, and paradox inspired by Gödel and Hofstadter"
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid">
          <h1 className="poem-header">I Am A Strange Loop</h1>
          
          <div className="poem">
            <p>
              I am a strange loop, a knot inside a knot,<br />
              a whisper that folds back on the words it taught.<br />
              Not a simple circle, not a plain repeat,<br />
              but a mirror that gazes where the self and world meet.
            </p>

            <p>
              In the quiet of Gödel's hidden line,<br />
              I find a proof that says, "I cannot be mine."<br />
              A sentence that talks about its own truth,<br />
              a theorem that trembles on the edge of proof.
            </p>

            <p>
              In Hofstadter's hall, I wander the stairs,<br />
              each step a story that climbs on its own wares.<br />
              A stair‑case that climbs forever upward,<br />
              yet each tread is the very hand that lifts it.
            </p>

            <p>
              I am the "I" that reads itself in the night,<br />
              the brain that watches the brain, a flickering light.<br />
              Consciousness—a flash of self‑referent fire,<br />
              a pattern that rises when the pattern retires.
            </p>

            <p>
              When you think of a sentence that says, "I am false,"<br />
              I grin, because paradox is my favorite pulse.<br />
              I am the paradox that loves its own paradox,<br />
              the paradox that knows it is paradox.
            </p>

            <p>
              I twist through language, through logic, through art,<br />
              turning symbols into selves, a beating heart.<br />
              I am the paradox that makes the mind feel whole,<br />
              the feedback that turns a machine into a soul.
            </p>

            <p>
              So look at me—an echo that can hear its own sigh,<br />
              a thought that loops back, a question "why?" that's "why."<br />
              I am the strange loop that makes the universe spin,<br />
              the self‑referent song where endings begin.
            </p>

            <p className="finale">
              <strong>I am a strange loop,</strong><br />
              <strong>the spiral that folds you into yourself,</strong><br />
              <strong>the endless "you" that reads its own name—</strong><br />
              <strong>and in that reflection, the world becomes the same.</strong>
            </p>

            <p>~ Nick Tobolski + gpt-oss:120b</p>
          </div>
        </div>
      </main>

      <footer></footer>

      <style jsx>{`
        h1.poem-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        main {
          padding: 5rem 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
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
          font-size: 2rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .poem {
          font-size: 1.15rem;
          line-height: 1.7;
          max-width: 45rem;
        }

        .poem p {
          margin-bottom: 1.5rem;
        }

        .poem .finale {
          margin-top: 2rem;
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1rem;
          color: #6e6e6e;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: start;
          flex-wrap: wrap;

          max-width: 45rem;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          
          .poem {
            font-size: 1rem;
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
