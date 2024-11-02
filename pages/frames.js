import React from "react";
import Head from "next/head";

export default function Projects() {
  return (
    <div className="container">
      <Head>
        <title>Frames ∞ Nick Tobolski</title>
        <meta
          property="og:title"
          content="Content of Nick Tobolski"
          key="title"
        />
        <meta
          name="description"
          property="og:description"
          content="A selection of carefully curated quotes from thoughtful thinkers"
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Frames</h1>

        <div className="grid">
          <blockquote>
            The first principal is that you must not fool yourself - and you're
            the easiest person to fool.
            <cite>Richard Feynman</cite>
          </blockquote>

          <blockquote>
            Like an explosive awaiting a spark, unimaginably numerous
            environments in the universe are waiting out there, for aeons on
            end, doing nothing at all or blindly generating evidence and storing
            it up or pouring it out into space. Almost any of them would, if the
            right knowledge ever reached it, instantly and irrevocably burst
            into a radically different type of physical activity: intense
            knowledge-creation, displaying all the various kinds of complexity,
            universality and reach that are inherent in the laws of nature, and
            transforming that environment from what is typical today into what
            could become typical in the future. If we want to, we could be that
            spark.
            <cite>
              David Deutsch,The Beginning of Infinity: Explanations That
              Transform the World
            </cite>
          </blockquote>

          <blockquote>
            The real problem of humanity is the following: We have Paleolithic
            emotions, medieval institutions and godlike technology.
            <cite>Edward O. Wilson</cite>
          </blockquote>

          <blockquote>
            Only that day dawns to which we are awake. There is more day to
            dawn. The sun is but a morning star.
            <cite>Henry David Thoreau</cite>
          </blockquote>
          <blockquote>
            Now, while the blood is hot, we must enter with brisk step upon the
            better course.
            <cite>Lucius Annaeus Seneca</cite>
          </blockquote>
          <blockquote>
            The reasonable man adapts himself to the world: the unreasonable one
            persists in trying to adapt the world to himself. Therefore all
            progress depends on the unreasonable man.
            <cite>George Bernard Shaw</cite>
          </blockquote>
          <blockquote>
            Love the earth and sun and the animals, despise riches, give alms to
            every one that asks, stand up for the stupid and crazy, devote your
            income and labor to others, hate tyrants, argue not concerning God,
            have patience and indulgence toward the people, take off your hat to
            nothing known or unknown or to any man or number of men, go freely
            with powerful uneducated persons and with the young and with the
            mothers of families, read these leaves in the open air every season
            of every year of your life, re-examine all you have been told at
            school or church or in any book, dismiss whatever insults your own
            soul, and your very flesh shall be a great poem and have the richest
            fluency not only in its words but in the silent lines of its lips
            and face and between the lashes of your eyes and in every motion and
            joint of your body.
            <cite>Walt Whitman</cite>
          </blockquote>
          <blockquote>
            Trees go wandering forth in all directions with every wind, going
            and coming like ourselves, traveling with us around the sun two
            million miles a day, and through space heaven knows how fast and
            far!
            <cite>John Muir</cite>
          </blockquote>
          <blockquote>
            Live in the sunshine, swim the sea, drink the wild air. Nothing
            great was ever achieved without enthusiasm.
            <cite>Ralph Waldo Emerson</cite>
          </blockquote>
          <blockquote>
            We are made for goodness. We are made for love. We are made for
            friendliness. We are made for togetherness. We are made for all of
            the beautiful things that you and I know. We are made to tell the
            world that there are no outsiders. All are welcome; black, white,
            red, yellow, rich, poor, educated, not educated, male, female, gay,
            straight, all, all, all. We ALL belong to this family, this human
            family[.]
            <cite>Desmond Tutu</cite>
          </blockquote>
          <blockquote>
            Be soft. Do not let the world make you hard. Do not let pain make
            you hate. Do not let the bitterness steal your sweetness.
            <cite>Kurt Vonnegut</cite>
          </blockquote>
        </div>
      </main>

      <footer></footer>

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
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
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

        .card {
          margin: 1rem;
          flex-basis: 100%;
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

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
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
          }
        }
        blockquote {
          font-size: 1.2em;
          text-align: left;
          width: 100%;
          font-weight: 300;
          line-height: 156%;
        }
        cite {
          display: inline-block;
          padding-left: 0.5em;
          opacity: 0.5;
        }
        cite::before {
          content: " — ";
          padding-right: 0.25em;
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
