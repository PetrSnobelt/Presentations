import Head from "next/head"
import fetch from "isomorphic-unfetch"
import TimeAgo from "react-timeago"
const NextPresentation = ({ stars, release }) => (
  <>
    <Head>
      <meta charSet="utf-8" />

      <title>Next.JS</title>

      <meta name="author" content="Petr Šnobelt" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/css/reveal.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/css/theme/white.css"
        id="theme"
      />
      <link
        rel="shortcut icon"
        href="https://nextjs.org/static/favicon/favicon.ico"
      />
    </Head>

    <div className="reveal">
      <div className="slides">
        <section data-background-color="white">
          <header alt="Next.JS">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="410"
              height="250"
              viewBox="0 0 82 50"
            >
              <path d="M19.44 13.053h15.475v1.232H20.86v9.278h13.218v1.232H20.859v10.186h14.217v1.233H19.44V13.053zm16.861 0h1.645l7.286 10.185 7.447-10.185L62.809.115 46.166 24.309l8.575 11.905h-1.708l-7.802-10.835-7.834 10.835H35.72l8.64-11.905-8.06-11.256zm19.054 1.232v-1.232H72.99v1.232h-8.125v21.929h-1.418V14.285h-8.092zM.08 13.053h1.773l24.45 36.668L16.2 36.214 1.564 14.804l-.065 21.41H.081V13.053zm72.766 21.556a.502.502 0 0 1-.507-.516c0-.29.217-.516.507-.516a.5.5 0 0 1 .507.516.5.5 0 0 1-.507.516zm1.394-1.357H75c.01.412.31.689.752.689.493 0 .773-.298.773-.855v-3.532h.772v3.535c0 1.004-.58 1.582-1.538 1.582-.9 0-1.518-.56-1.518-1.42zm4.067-.045h.766c.066.474.528.775 1.194.775.621 0 1.077-.322 1.077-.765 0-.38-.29-.61-.95-.765l-.641-.156c-.9-.21-1.311-.647-1.311-1.381 0-.89.724-1.482 1.811-1.482 1.011 0 1.75.592 1.794 1.433h-.752c-.072-.46-.472-.747-1.052-.747-.61 0-1.018.294-1.018.744 0 .357.262.56.911.713l.549.135c1.02.24 1.442.655 1.442 1.406 0 .955-.739 1.554-1.919 1.554-1.104 0-1.845-.57-1.9-1.464z"></path>
            </svg>
          </header>
          <h3 className="fragment">
            is a lightweight framework for static and server-rendered
            applications.
          </h3>
          <p>
            <small>
              <a href="mailto:petr.snobelt@kiwi.com">Petr Šnobelt</a> |
              <a href="http://twitter.com/petrsnobelt">@petrsnobelt</a>
            </small>
          </p>
        </section>

        <section hidden>
          <h2>Agenda</h2>
          <ul>
            <li>NextJS introduction</li>
            <li>Why next</li>
            <li>Selected examples</li>
            <li>Little Live Coding</li>
          </ul>
        </section>

        <section>
          <h2>Next.js facts</h2>
          <ul>
            <li>
              Developed by <a href="https://zeit.co/">Zeit</a> (now, socket.io)
            </li>
            <li>
              <a href="https://github.com/zeit/next.js/releases/tag/1.0.0">
                Initial public release in 25 Oct 2016
              </a>
              {` `}(<TimeAgo date="Oct 25, 2016" />)
            </li>
            <li>opensource</li>
            <li>
              current stable release{` `}
              <a href={release.url}>{release.name}</a>
              <br />
              {release.published_at.substr(0, 10)} (
              <TimeAgo date={release.published_at} />)
              <ul>
                <li>
                  <a href="https://github.com/zeit/next.js">
                    https://github.com/zeit/next.js
                  </a>
                </li>
                <li>
                  <a href="https://nextjs.org">https://nextjs.org</a>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <section>
            <h1>Reasons to choose next.js</h1>
          </section>
          <section>
            <h3>Great company “zeit" behind it</h3>
            <ul>
              <li>founder “Guillermo Rauch” (socket.io)</li>
              <li>
                They have business model around it:
                <br />
                <a href="https://zeit.co/now">
                  Now — Global Serverless Deployments
                </a>
              </li>
              <li>
                <a href="https://zeit.co/about">https://zeit.co/about</a>
              </li>
            </ul>
          </section>
          <section>
            <h3>Well maintained project</h3>
            <ul>
              <li>9 major versions so far</li>
              <li>
                <strong>minimal api changes</strong>
              </li>
              <li>{stars} GitHub 🌟 stars</li>
              <li>Continuous development</li>
              <li>
                Lot of{` `}
                <a href="https://github.com/zeit/next.js/tree/canary/examples">
                  examples
                </a>
              </li>
              <li>
                <a href="http://learnnextjs.com/">LearnNextJs.com</a> for
                beginners
              </li>
              <li>
                Active community (GitHub/
                <a href="https://spectrum.chat/next-js">spectrum.chat</a>)
              </li>
            </ul>
          </section>
          <section>
            <h3>My 3 favorite features</h3>
            <ul>
              <li>Every page is “Webpack endpoint”</li>
              <li>Can be used with your favorite server</li>
              <ul>
                <li>Koa, Hapi, Fastify, Express…</li>
              </ul>
              <li>For start you can export to static file and host anywhere</li>
              <ul>
                <li className="fragment">for example on Github pages</li>
                <li className="fragment">
                  or <a href="https://zeit.co/now">now</a>,
                  <a href="https://surge.sh/">surge</a>,
                  <a href="https://www.netlify.com">netlify</a> ...
                </li>
              </ul>
              <li className="fragment">
                <em>but there are many more ...</em>
              </li>
            </ul>
          </section>
          <section>
            <h3>Do not reinvent the wheel 🙏</h3>
            <ul>
              <li>
                <a href="https://hackernoon.com/next-js-razzle-cra-why-you-should-use-them-for-a-next-project-a78d320de97f">
                  Please do not write another react boilerplate
                </a>
              </li>
              <li>Join community and help improve Next.js</li>
            </ul>
          </section>
          <section>
            <h3>
              <a href="https://spectrum.chat/thread/e425a8b6-c9cb-4cd1-90bb-740fb3bd7541">
                Notable companies or <br /> pages using Next.js
              </a>
            </h3>
            <ul>
              <li>Netflix</li>
              <li>GitHub</li>
              <li>Nike</li>
              <li>Twitch</li>
              <li>Nike</li>
              <li>Kiwi.com</li>
              <li>material-ui.com</li>
              <li>expo.io</li>
              <li>
                <a href="https://nextjs.org/showcase">Showcase</a>
              </li>
            </ul>
          </section>
        </section>

        <section>
          <h3>Next's features</h3>
          <ul>
            <li className="fragment">
              <abbr title="Server Side Rendering">SSR</abbr> out of the box with
              {` `}
              <a href="https://github.com/zeit/next.js#fetching-data-and-component-lifecycle">
                getInitialProps
              </a>
            </li>
            <li className="fragment">
              Router <span className="fragment">with prefetching</span>
            </li>
            <li className="fragment">
              _document, _app (_app introduced in v6)
            </li>
            <li className="fragment">Dynamic routes (added in v9)</li>
            <li className="fragment">Dynamic import</li>
            <li className="fragment">
              You can extend build in webpack configuration
            </li>
            <li className="fragment">
              CDN deployment ready (Continuous delivery)
            </li>
            <li className="fragment">AMP support</li>
            <li className="fragment">
              <a href="https://twitter.com/zeithq/status/1050685825367896064">
                Pass security audit
              </a>
            </li>
          </ul>
        </section>
        <section
          data-background-image="https://pbs.twimg.com/media/EJHTbNKVAAAoD4H.jpg"
          data-background-size="60%"
          data-background-color="#333"
        >
          <br />
        </section>
        <section>
          <section>
            <h3>
              <a href="https://github.com/zeit/next.js/tree/master/examples">
                Examples
              </a>
              {` `}I/II.
            </h3>
            <ol>
              <li className="fragment">fetch github stars</li>
              <li className="fragment">custom server</li>
              <li className="fragment">static export</li>
              <li className="fragment">
                <abbr title="GitHub">gh</abbr> pages
              </li>
              <li className="fragment">
                with inferno (preact) instead of react
              </li>
              <li className="fragment">
                ant design, aphrodite, fela, glamorous
                <br />
                material-ui, styled-components, style-jsx
              </li>
            </ol>
          </section>
          <section>
            <h3>
              <a href="https://github.com/zeit/next.js/tree/master/examples">
                Examples
              </a>
              {` `}II/II
            </h3>
            <ol start="7">
              <li className="fragment">redux, mobx, mobx-state-tree</li>
              <li className="fragment">apollo, firebase</li>
              <li className="fragment">electron, pkg</li>
              <li className="fragment">flow, typescript</li>
              <li className="fragment">jest (storybook)</li>
              <li className="fragment">ReasonML</li>
            </ol>
          </section>
        </section>

        <section>
          <h2>Demo time</h2>
          <ul>
            <li>This presentation (getInitialProps, _document)</li>
            <li>Export to GitHub Pages using Action</li>
            <li>Create Next App (with orbit components) </li>
            <li className="fragment">
              <code>
                create-next-app next-export-using-gh-action --example
                with-orbit-components
              </code>
            </li>
          </ul>
        </section>

        <section>
          <section>
            <h3>Our setup</h3>
            <ul className="task-list" dir="auto">
              <li className="task-list-item">
                <a
                  href="https://github.com/zeit/next.js/tree/canary/examples/with-styled-components"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  Styled-components
                </a>
              </li>
              <li className="task-list-item">
                <a
                  href="https://github.com/zeit/next.js/tree/canary/examples/with-static-export"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  Static Export
                </a>
              </li>
              <li className="task-list-item">
                <del>
                  <a
                    href="https://github.com/zeit/next.js/tree/canary/examples/with-apollo"
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                  >
                    Apollo Client
                  </a>
                </del>
                <a href="https://github.com/zeit/next.js/tree/canary/examples/with-react-relay-network-modern">
                  Relay
                </a>
              </li>
              <li
                className="task-list-item"
                title="(included in later versions automatically)"
              >
                <a
                  href="https://github.com/zeit/next.js/tree/canary/examples/gh-pages"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  GitHub pages
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h3>Nice to have</h3>
            <ul className="task-list" dir="auto">
              <li className="task-list-item">
                <a
                  href="https://github.com/zeit/next.js/tree/canary/examples/with-absolute-imports"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  absolute imports
                </a>
              </li>
              <li className="task-list-item">
                <a
                  href="https://github.com/zeit/next.js/tree/canary/examples/with-flow"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  flow
                </a>
              </li>

              <li className="task-list-item">
                <a
                  href="https://github.com/zeit/next.js/tree/canary/examples/with-jest"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  jest
                </a>
              </li>
              <li className="task-list-item">
                <a
                  href="https://github.com/zeit/next.js/tree/canary/examples/with-dotenv"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  dotenv
                </a>
              </li>
              <li className="task-list-item">
                <a
                  href="https://github.com/zeit/next.js/tree/canary/examples/with-sentry"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  sentry
                </a>
              </li>
              <li
                className="task-list-item"
                title="(included in later versions automatically)"
              >
                <a
                  href="https://github.com/zeit/next.js/tree/canary/examples/with-webpack-bundle-analyzer"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  webpack-bundle-analyzer
                </a>
              </li>
            </ul>
          </section>
        </section>

        <section>
          <h2>Future</h2>
          <ul>
            <li><a href="https://github.com/zeit/next.js/issues/9133">NextJs plugin proposal</a></li>
            <li><a href="https://github.com/zeit/next.js/issues?q=label%3ARFC+">RFC</a></li>
          </ul>
        </section>

        <section>
          <h2>Questions</h2>
          <br />
          <h4>
            Petr Šnobelt <br />
            petr.snobelt@kiwi.com <br />
            @petrsnobelt
          </h4>
        </section>
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/js/reveal.min.js"></script>

    <script
      dangerouslySetInnerHTML={{
        __html: `

      // Full list of configuration options available here:
      // https://github.com/hakimel/reveal.js#configuration
      Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,

        theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
        transition: Reveal.getQueryHash().transition || "concave", // default/cube/page/concave/zoom/linear/fade/none

        // Optional libraries used to extend on reveal.js
        dependencies: [
          {
            src:
              "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/lib/js/classList.js",
            condition: function() {
              return !document.body.classList;
            }
          },
          {
            src:
              "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/plugin/markdown/marked.js",
            condition: function() {
              return !!document.querySelector("[data-markdown]");
            }
          },
          {
            src:
              "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/plugin/markdown/markdown.js",
            condition: function() {
              return !!document.querySelector("[data-markdown]");
            }
          },
          {
            src:
              "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/plugin/highlight/highlight.js",
            async: true,
            callback: function() {
              hljs.initHighlightingOnLoad();
            }
          },
          {
            src:
              "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/plugin/zoom-js/zoom.js",
            async: true,
            condition: function() {
              return !!document.body.classList;
            }
          },
          {
            src:
              "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/notes/notes.js",
            async: true,
            condition: function() {
              return !!document.body.classList;
            }
          }
        ]
      });
      `
      }}
    />
  </>
)

NextPresentation.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js")
  const starsJson = await res.json() // better use it inside try .. catch

  const release = await fetch(
    "https://api.github.com/repos/zeit/next.js/releases/latest"
  )
  const relJson = await release.json()
  return {
    stars: starsJson.stargazers_count,
    release: {
      name: relJson.name,
      published_at: relJson.published_at,
      url: relJson.html_url
    }
  }
}

export default NextPresentation
