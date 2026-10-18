# Sanskar's Python Backend Developer Portfolio

A responsive, single-page portfolio for showcasing Python backend work, skills, services, projects, experience, and contact links. It uses plain HTML, CSS, and vanilla JavaScript. There is no build step, package manager, or backend server required for deployment.

## Features

- Responsive layout with a mobile navigation menu.
- About, skills, services, projects, experience, and contact sections.
- Horizontal project carousel with category filters and arrow controls.
- Project detail modal with a scrollable panel, technology tags, and project-specific details.
- Static contact links for email, LinkedIn, and GitHub. The email action opens the visitor's email application; the site does not store or submit messages.
- Resume download button linked to `assets/Sanskar_Resume.pdf`.

## Project structure

```text
.
├── index.html                  # Page structure, section navigation, and project modal
├── css/
│   └── style.css               # Theme, layout, responsive rules, carousel, and modal styles
├── js/
│   ├── data.js                 # Portfolio content and project information
│   └── main.js                 # Renders content and handles navigation, filters, and modal
├── assets/
│   └── Sanskar_Resume.pdf      # Downloadable resume
└── images/
    └── profile_pic.png         # Profile photo used in the hero and About section
```

## Run locally

You can open `index.html` directly in a browser. To serve it locally with Python, run this command from the project directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Update portfolio content

Most portfolio content is in `js/data.js`:

- `name`, `role`, `tagline`, and `about` control the profile text.
- `email` and `socials` control the mail link and LinkedIn/GitHub links.
- `skills`, `experience`, and `education` populate their respective sections.
- `projects` controls the carousel cards and modal details.
- `resume` is the path used by the Download Resume button.

### Add or edit a project

Each project can include:

```js
{
  title: "Project title",
  tags: ["Category", "Technology"],
  version: "Project type or release",
  text: "Short summary shown on the project card.",
  overview: "Longer overview shown in the project details modal.",
  features: ["Feature one", "Feature two"],
  stack: ["Python", "PostgreSQL"],
  link: "#",
  image: ""
}
```

Use `contributions` for a contribution list, or `implementation` for grouped technical areas. Projects without `overview`, `features`, `contributions`, or `implementation` show only the information supplied. Project categories are generated from each project's `tags`.

To add a project image, place it in `images/` and set the relative path in the project's `image` value, for example `"images/project-image.png"`.

## Update the resume

Replace `assets/Sanskar_Resume.pdf` with the new PDF while keeping the same filename, or update the `resume` value in `js/data.js` to match the new filename. The resume button uses the HTML `download` attribute.

## Customize the theme

Edit `css/style.css`. The main background, text, accent, panel, and border colors are defined in the `:root` variables at the top of the file. The stylesheet also contains responsive breakpoints and styles for the project carousel and modal.

## Deploy

This is a static site. Publish the project directory using a static hosting provider such as GitHub Pages, Netlify, or Cloudflare Pages. Ensure the deployed site includes `index.html`, `css/`, `js/`, `assets/`, and the profile image directory so relative paths continue to work.
