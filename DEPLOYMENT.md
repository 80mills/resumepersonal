# Deploying to AWS Amplify

This guide will help you deploy your Astro resume website to AWS Amplify.

## Prerequisites

1. An AWS account
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Amplify Console (Recommended)

1. **Sign in to AWS Amplify Console**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Sign in with your AWS account

2. **Connect your repository**
   - Click "New app" → "Host web app"
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Amplify to access your repositories
   - Select your repository and branch (usually `main` or `master`)

3. **Configure build settings**
   - Amplify will automatically detect the `amplify.yml` file
   - Review the build settings and click "Save and deploy"

4. **Wait for deployment**
   - Amplify will build and deploy your site
   - You'll get a URL like `https://main.xxxxxxxxx.amplifyapp.com`

### Option 2: Deploy via AWS CLI

1. **Install AWS CLI and Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify in your project**
   ```bash
   amplify init
   ```

3. **Add hosting**
   ```bash
   amplify add hosting
   ```

4. **Deploy**
   ```bash
   amplify publish
   ```

## Custom Domain (Optional)

1. In the Amplify Console, go to your app
2. Click "Domain management"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables

If you need to set environment variables:
1. Go to your app in Amplify Console
2. Navigate to "Environment variables"
3. Add any required variables

## Troubleshooting

- **Build fails**: Check the build logs in Amplify Console
- **404 errors**: Ensure your Astro config has the correct `site` URL
- **Styling issues**: Make sure Tailwind CSS is building correctly

## Local Development

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run preview # Preview production build
``` 