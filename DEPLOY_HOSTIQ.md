# Deploy on Hostiq for `miagency.com.ua`

This project is a static Vite build. Upload the contents of `dist/` to the document root of the `miagency.com.ua` domain on Hostiq.

## What is already prepared

- Production build output is generated in `dist/`
- SPA routing rewrite is included in `dist/.htaccess`
- `robots.txt` and `sitemap.xml` are included for `https://miagency.com.ua`
- Default SEO meta now points to `https://miagency.com.ua`

## Hostiq steps

1. Open the Hostiq client panel and locate the hosting account for `miagency.com.ua`.
2. Make a backup of the current site files before replacing anything.
3. Open the domain document root.
   Usually this is `public_html/` or a domain-specific subfolder in the hosting panel.
4. Delete the old site files from that document root after the backup is saved.
5. Upload the contents of `dist/` into the document root.
   Upload the files inside `dist/`, not the `dist` folder itself.
6. Make sure `.htaccess` is present after upload.
   It is required so deep links like `/ua/services/for-clients` do not return `404`.
7. Confirm SSL is enabled for `miagency.com.ua` in Hostiq.
8. Clear any hosting or CDN cache if it is enabled.

## What to verify after upload

- `https://miagency.com.ua/ua`
- `https://miagency.com.ua/en`
- A deep route like `https://miagency.com.ua/ua/services/for-clients`
- Contact form submission

## Contact form backend

The frontend sends the form to:

`https://api.miagency.com.ua/api/contact`

If the form does not work after deployment, the backend likely needs a CORS check for `https://miagency.com.ua`.
