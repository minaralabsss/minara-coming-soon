# Deployment Guide

Complete guide to deploying Minara Labs to production.

## Recommended: Vercel (Zero-Config Deployment)

Vercel is the official Next.js hosting platform and requires minimal configuration.

### Step 1: Prepare Repository

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Minara Labs website"

# Push to GitHub
git push origin main
```

### Step 2: Deploy to Vercel

#### Option A: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts to complete deployment
```

#### Option B: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up or sign in
3. Click "New Project"
4. Connect GitHub repository
5. Configure project (use defaults)
6. Click "Deploy"

### Step 3: Configure Domain

1. In Vercel dashboard, go to project settings
2. Go to "Domains"
3. Add your domain (minaralabs.shop)
4. Follow DNS configuration steps
5. Wait for DNS propagation (up to 48 hours)

### Step 4: Environment Variables (if needed)

In Vercel dashboard:
1. Go to project settings
2. Click "Environment Variables"
3. Add variables:
   ```
   NEXT_PUBLIC_API_URL=https://api.minaralabs.shop
   ```

### Step 5: Deploy Previews

Vercel automatically creates preview URLs for pull requests.

Configure in `vercel.json`:
```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "devCommand": "next dev"
}
```

## Alternative: Netlify

### Step 1: Connect Repository

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub and select repository

### Step 2: Configure Build

Build settings should auto-detect:
- **Build command**: `npm run build`
- **Publish directory**: `.next`

### Step 3: Deploy

Click "Deploy site"

### Step 4: Custom Domain

1. Go to "Site settings"
2. Click "Domain management"
3. Add custom domain
4. Update DNS settings

## Alternative: AWS Amplify

### Step 1: Install Amplify CLI

```bash
npm install -g @aws-amplify/cli
```

### Step 2: Initialize Amplify

```bash
amplify init
```

### Step 3: Add Hosting

```bash
amplify add hosting
# Select "Hosting with Amplify Console"
```

### Step 4: Deploy

```bash
amplify publish
```

## Alternative: Self-Hosted

### Requirements

- Node.js 18+
- PostgreSQL (optional, if using database)
- Docker (optional)

### Step 1: Build Project

```bash
npm run build
```

### Step 2: Deploy Built Project

```bash
npm install --production
npm start
```

### Step 3: Setup Process Manager

Use PM2 to keep app running:

```bash
npm install -g pm2

pm2 start npm --name "minara" -- start
pm2 save
pm2 startup
```

### Step 4: Setup Reverse Proxy (Nginx)

```nginx
server {
    listen 80;
    server_name minaralabs.shop;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 5: SSL Certificate (Let's Encrypt)

```bash
sudo apt-get install certbot python3-certbot-nginx

sudo certbot --nginx -d minaralabs.shop

sudo systemctl restart nginx
```

## Pre-Deployment Checklist

### Content
- [ ] Update brand name and tagline
- [ ] Review all copy for accuracy
- [ ] Update contact information
- [ ] Update social media links

### Assets
- [ ] Replace favicon.ico
- [ ] Replace apple-touch-icon.png
- [ ] Create og-image.jpg (1200x630px)
- [ ] Add logo if needed

### SEO & Metadata
- [ ] Update title tag
- [ ] Update meta description
- [ ] Update Open Graph tags
- [ ] Update Twitter card
- [ ] Test with Open Graph debugger

### Performance
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test on mobile
- [ ] Test on slow network
- [ ] Verify images are optimized

### Security
- [ ] Review security headers
- [ ] Check for API keys in code
- [ ] Enable HTTPS
- [ ] Setup SSL certificate

### Testing
- [ ] Test form submission
- [ ] Test responsive design
- [ ] Test across browsers
- [ ] Test on different devices
- [ ] Check mobile menu

## Post-Deployment

### Step 1: Verify Deployment

```bash
# Test production URL
# https://minaralabs.shop

# Check:
# - Page loads
# - Form works
# - Mobile responsive
# - No console errors
```

### Step 2: Setup Analytics

Add Google Analytics:

```tsx
// app/layout.tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
></script>
<script>
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</script>
```

### Step 3: Setup Error Tracking

Add Sentry:

```bash
npm install --save @sentry/nextjs
```

### Step 4: Submit to Search Engines

- Google Search Console
- Bing Webmaster Tools
- Yandex Search Console

### Step 5: Monitor Performance

- Google PageSpeed Insights
- Vercel Analytics
- Google Analytics
- Core Web Vitals

## Continuous Deployment

### Enable Auto-Deploy

Vercel automatically deploys when code is pushed to main branch.

Disable for some branches:

```json
{
  "git": {
    "silent": true
  }
}
```

### Preview Deployments

All pull requests automatically get preview URLs.

Preview deployment settings in Vercel dashboard.

## Rollback

If deployment has issues:

### Vercel

1. Go to Deployments
2. Click on previous stable deployment
3. Click "Promote to Production"

### Netlify

1. Go to Deploys
2. Select previous version
3. Click "Publish"

## Updating After Deployment

### Simple Update

1. Edit files locally
2. Commit changes
3. Push to GitHub
4. Automatic deployment occurs

### Environment Variables

In Vercel/Netlify dashboard:
1. Go to Environment Variables
2. Update values
3. Redeploy

### Database Migrations (if applicable)

1. Update database schema
2. Run migrations
3. Deploy new code

## Troubleshooting

### Build Fails

Check build logs in dashboard:
1. Go to Deployments
2. Click failed deployment
3. Check build logs
4. Fix errors locally
5. Push again

### Page Not Loading

1. Check domain DNS settings
2. Clear browser cache
3. Check build status
4. Check error logs

### Form Not Submitting

1. Check console errors
2. Verify API endpoint
3. Check environment variables
4. Test locally first

### Performance Issues

1. Run Lighthouse audit
2. Check bundle size
3. Optimize images
4. Enable caching
5. Check database queries

## Monitoring

### Setup Alerts

Configure in dashboard:
- Build failures
- Performance degradation
- Error rate spikes

### Check Logs

Different platforms provide logs:
- **Vercel**: Deployments > Logs
- **Netlify**: Deploys > Deploy Log
- **AWS**: CloudWatch

## Backup & Recovery

### Database Backups

If using database:
1. Setup automated backups
2. Test restore process
3. Store securely

### Code Repository

Always maintain GitHub repo as backup:
- Push all code
- Tag releases
- Document changes

## Cost Optimization

### Vercel
- Free tier: Generous limits
- Pro: $20/month for advanced features

### Netlify
- Free tier: Good for most projects
- Pro: $45/month

### AWS
- Variable costs based on usage
- Can be expensive if not optimized

### Self-Hosted
- Server costs: $5-50/month
- Manual maintenance required

## Security Best Practices

1. **Keep dependencies updated**
   ```bash
   npm audit
   npm update
   ```

2. **Use environment variables**
   - Never commit secrets
   - Use .env.local

3. **Enable HTTPS**
   - All platforms use HTTPS by default

4. **Setup security headers**
   - Already configured in next.config.ts

5. **Monitor for vulnerabilities**
   - GitHub security alerts
   - npm audit

## Support

### Vercel Support
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

### Netlify Support
- Docs: https://docs.netlify.com
- Support: https://www.netlify.com/support

### Next.js Help
- Docs: https://nextjs.org/docs
- GitHub: https://github.com/vercel/next.js

## Next Steps

1. Deploy project
2. Setup custom domain
3. Add analytics
4. Setup error tracking
5. Create backup procedure
6. Plan monitoring strategy
7. Schedule updates

## Deployment Summary

| Platform | Setup Time | Cost | Best For |
|----------|-----------|------|----------|
| Vercel | 5 min | Free-$20 | Most projects |
| Netlify | 5 min | Free-$45 | Jamstack |
| AWS | 30 min | $-$$ | Enterprise |
| Self-Hosted | 1+ hours | $-$$ | Full control |

**Recommendation**: Start with **Vercel** - optimized for Next.js, simple setup, generous free tier.
