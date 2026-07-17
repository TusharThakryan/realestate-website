# Whitecollar Realty — Next.js + Tailwind

## Run it locally

1. Open this folder in VS Code.
2. Open a terminal (`` Ctrl+` `` or `` Cmd+` ``) and run:

```bash
npm install
npm run dev
```

3. Open http://localhost:3000 in your browser.

## Structure

- `app/page.js` — the home page, assembles all sections
- `app/layout.js` — root layout + global styles
- `components/` — Navbar, Hero, FeaturedListings, WhyChooseUs, Agents, Testimonials, ContactCTA, Footer
- `tailwind.config.js` — custom navy/gold color theme

## Notes

- Listing and agent photos are placeholder stock images from Unsplash — swap the `image` URLs in
  `components/FeaturedListings.js` and `components/Agents.js` with your client's real photos.
- Update the phone number, email, and address in `components/Navbar.js` and `components/Footer.js`.
- Colors live in `tailwind.config.js` under `theme.extend.colors` (`navy` and `gold`) if you want to
  adjust the palette further.
