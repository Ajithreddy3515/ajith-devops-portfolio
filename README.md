# Ajithreddy Avula — DevOps Engineer Portfolio

A modern, responsive DevOps portfolio built with React + TypeScript + Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production files will be generated in `dist/`.

## Deploy with Nginx

After building, copy the `dist/` contents to your website root, then configure Nginx to serve the static files.

Example:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/ajith-portfolio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Personal details

Update links/content in `src/App.tsx` if your contact details or projects change.

The profile image is `public/ajith.jpg`.
