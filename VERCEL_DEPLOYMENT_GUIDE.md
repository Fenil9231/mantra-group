# Vercel Deployment Guide for Mantra Group

## Prerequisites

- A GitHub, GitLab, or Bitbucket account with your project repository
- A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)
- SMTP credentials for email functionality

## Step 1: Prepare Your Repository

Ensure your repository includes all the necessary configuration files:

- `vercel.json` - Vercel deployment configuration
- `.nvmrc` - Node.js version specification
- `package.json` with updated dependencies
- `vite.config.js` with production optimizations
- `.env.production` with production environment variables

## Step 2: Push to Git Repository

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 3: Import Project in Vercel

1. Log in to your Vercel account
2. Click "Add New" → "Project"
3. Import your Git repository
4. Vercel will automatically detect the project as a Vite/React application

## Step 4: Configure Environment Variables

Add the following environment variables in the Vercel dashboard:

| Variable | Value | Description |
|----------|-------|-------------|
| `SMTP_HOST` | `your-smtp-host` | SMTP server host |
| `SMTP_PORT` | `587` | SMTP server port |
| `SMTP_USER` | `your-email@example.com` | SMTP username/email |
| `SMTP_PASS` | `your-password` | SMTP password |
| `ADMIN_EMAIL` | `admin@mantragroup.ca` | Admin email address |
| `COMPANY_NAME` | `Mantra Group` | Company name |
| `FROM_NAME` | `Mantra Group` | Email sender name |
| `EMAIL_TEST_MODE` | `false` | Disable test mode in production |
| `SITE_URL` | `https://mantragroup.ca` | Production site URL |
| `VITE_EMAIL_API_ENDPOINT` | `/api/send-email` | API endpoint for email |
| `VITE_ADMIN_EMAIL` | `admin@mantragroup.ca` | Admin email for frontend |
| `VITE_COMPANY_NAME` | `Mantra Group` | Company name for frontend |
| `VITE_SITE_URL` | `https://mantragroup.ca` | Site URL for frontend |

## Step 5: Deploy

1. Click "Deploy"
2. Vercel will build and deploy your application
3. Once deployment is complete, Vercel will provide a URL to access your site

## Step 6: Configure Custom Domain (Optional)

1. In the Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `mantragroup.ca`)
4. Follow Vercel's instructions to configure DNS settings

## Step 7: Verify Deployment

After deployment, verify the following:

1. All pages load correctly
2. Contact form submission works
3. Email functionality works
4. Responsive design works on mobile devices
5. SEO meta tags are present
6. Sitemap.xml is accessible
7. Robots.txt is accessible

## Troubleshooting

### Build Failures

- Check Vercel build logs for specific errors
- Ensure all dependencies are properly listed in package.json
- Verify Node.js version compatibility

### Email Functionality Issues

- Verify SMTP credentials are correct
- Check if your SMTP provider requires additional security settings
- Consider using EmailJS as an alternative (see `SERVERLESS_EMAIL_SETUP.md`)

### Routing Issues

- Verify `vercel.json` includes proper SPA routing configuration
- Check `_redirects` file for correct routing rules

## Maintenance

### Updating Your Deployment

To update your deployment, simply push changes to your Git repository. Vercel will automatically rebuild and redeploy your application.

```bash
git add .
git commit -m "Update application"
git push origin main
```

### Monitoring

Use Vercel's built-in analytics and monitoring tools to track your application's performance and usage.