\# Anish Patil — Portfolio


## Live on https://anish-patil.netlify.app/

Personal portfolio website for Anish Patil, AI Engineer. Built with React and Framer Motion in a lavender and black theme.



\## Features



\- Animated hero with a typing role line and profile photo

\- Tabbed sections: About, Experience, Projects, Skills

\- Resume download (`ANISH\_PATIL.pdf`) in the top bar

\- GitHub and LinkedIn links

\- Floating chat assistant with fixed questions and static answers (no text input)

\- Responsive layout and reduced-motion support



\## Tech Stack



\- \[React 18](https://react.dev/)

\- \[Vite](https://vitejs.dev/)

\- \[Framer Motion](https://www.framer.com/motion/)

\- Plain CSS



\## Getting Started



Requires Node.js 18 or newer.



```bash

npm install

npm run dev

```



The dev server runs at http://localhost:5173.



\## Scripts



| Command           | Description                        |

| ----------------- | ---------------------------------- |

| `npm run dev`     | Start the dev server               |

| `npm run build`   | Create a production build in `dist/` |

| `npm run preview` | Preview the production build       |



\## Project Structure



```

├── public/                  # Static assets (profile photo, resume PDF)

├── src/

│   ├── components/

│   │   ├── Navbar.jsx       # Top bar: logo, GitHub, LinkedIn, resume

│   │   ├── Hero.jsx         # Intro section with typing effect

│   │   ├── Tabs.jsx         # About / Experience / Projects / Skills

│   │   ├── ChatBox.jsx      # Floating chat assistant

│   │   └── Icons.jsx        # SVG icons

│   ├── data.js              # All site content

│   ├── App.jsx

│   ├── main.jsx

│   └── styles.css

├── netlify.toml             # Netlify build config

└── vite.config.js

```



\## Editing Content



All text lives in `src/data.js`: profile details, skills, experience, projects, education and the chat questions and answers. Edit that file to update the site.



To replace the resume or photo, overwrite `public/Anish\_Patil\_Resume.pdf` or `public/profile-pic.jpeg`.



\## Deployment



The project is set up for Netlify through `netlify.toml`:



\- Build command: `npm run build`

\- Publish directory: `dist`



Connect the GitHub repo in Netlify and it will build and deploy on each push.

