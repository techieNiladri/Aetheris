# Aetheris — my services website

I’m building this website to introduce the web development services I offer to local businesses and independent teams. I’m adapting an AI Studio concept into a real, first-person services site and replacing fictional claims with my own work and contact details.

## Run locally

1. Install the main site dependencies with `npm ci`.
2. Install the nested demo dependencies with `npm ci --prefix projects/above-the-fold`.
3. Start the development server with `npm run dev`; this builds the nested demo before starting Aetheris.
4. Create a production build with `npm run build`.

This is a static, multi-page frontend. My contact link opens an email addressed to me; the site does not collect or store form submissions. Neither Aetheris nor the nested Above the Fold demo currently requires environment variables or API credentials. I maintain Above the Fold in `projects/above-the-fold` and serve its static demo at `/above-the-fold/index.html`. Navigation uses direct HTML page routes, including on mobile.

## Environment and secrets

I don’t need a `.env` file to build or run these static sites. I keep credentials out of the browser bundle and repository. If I add a server-side integration later, I’ll store its secrets in the hosting provider’s environment settings and document only the required variable names here, never their values.

## What I’m showing

- I publish five pages: Home, Services, Work, About, and Contact.
- I offer focused landing pages, small-business website refreshes, and useful web interfaces.
- I show Neural-Decider and Keeper App alongside my Royal Shef Hotel concept and Above the Fold landing-page experiment. I label the concept projects clearly and describe their current limits.
- You can reach me at `deyniladri937@gmail.com`.
- I link to my professional portfolio: <https://techieniladri.github.io/niladridey_portfolio/>.

I’m based in Kolkata, India. I’m early in my development career, so I describe my work plainly and avoid unsupported performance claims, client testimonials, or awards.

## Publishing

I build and deploy this static site with the GitHub Actions workflow in `.github/workflows/deploy.yml`. In the repository’s **Settings → Pages**, I select **GitHub Actions** as the publishing source. A push to `main` checks both projects, builds the site, audits their dependencies, and deploys the generated `dist` directory.
