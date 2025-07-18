# Deployment Guide for Cityscape Real Estate

## Vercel Deployment

This project is now configured for seamless deployment on Vercel. The following files have been added/updated to resolve Node.js module installation errors:

### Configuration Files Added:

1. **vercel.json** - Vercel deployment configuration
2. **.nvmrc** - Node.js version specification (v18)
3. **Updated package.json** - Added engines field for Node.js version requirements
4. **Updated vite.config.js** - Optimized build configuration

### Deployment Steps:

1. **Push to Git Repository:**
   ```bash
   git add .
   git commit -m "Add Vercel deployment configuration"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel will automatically detect the configuration
   - Click "Deploy"

### Build Commands:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js Version:** 18.x

### Environment Variables (if needed):
If your project uses environment variables, add them in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add your variables (e.g., API keys, database URLs)

### Troubleshooting:

1. **Node.js Version Issues:**
   - The `.nvmrc` file specifies Node.js 18
   - The `package.json` engines field enforces minimum versions

2. **Build Failures:**
   - Check Vercel build logs for specific errors
   - Ensure all dependencies are properly listed in package.json

3. **Routing Issues:**
   - The vercel.json includes SPA routing configuration
   - All routes redirect to index.html for client-side routing

### Performance Optimizations:
- Code splitting configured in vite.config.js
- Vendor chunks separated for better caching
- Source maps disabled for production builds

### Local Development:
```bash
npm install
npm run dev
```

The development server will start on http://localhost:3000

---

**Note:** Make sure to test the build locally before deploying:
```bash
npm run build
npm run preview
```