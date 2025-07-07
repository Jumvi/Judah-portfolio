# GitHub Actions Setup

This project includes several GitHub Actions workflows for continuous integration and deployment.

## Workflows

### 1. `deploy.yml` - Deployment to GitHub Pages
- **Triggers**: Push to `main` branch, Pull requests to `main`
- **Features**:
  - Runs tests and linting before deployment
  - Only deploys on successful push to main branch
  - Uses pnpm for package management
  - Deploys built files from `dist/` directory
  - Uses GitHub Pages deployment action

### 2. `ci.yml` - Continuous Integration
- **Triggers**: Push to `main`/`develop`, Pull requests
- **Features**:
  - Tests on Node.js versions 18 and 20
  - Runs linting and type checking
  - Builds the project
  - Optional test execution
  - Reports build size

### 3. `dependency-check.yml` - Dependency Monitoring
- **Triggers**: Weekly schedule (Mondays 9 AM UTC), Manual dispatch
- **Features**:
  - Checks for outdated dependencies
  - Runs security audit
  - Analyzes bundle size

## Setup Requirements

### GitHub Pages Setup
1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The deploy workflow will automatically handle deployments

### Required Permissions
The deploy workflow uses the following permissions:
- `contents: read` - to checkout code
- `pages: write` - to deploy to GitHub Pages
- `id-token: write` - for authentication

## Local Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Run linting
pnpm run lint

# Fix linting issues
pnpm run lint:fix

# Type checking
pnpm run type-check

# Format code (requires prettier)
pnpm run format

# Check formatting
pnpm run format:check
```

## Troubleshooting

### Common Issues

1. **Build fails due to type errors**
   - Run `pnpm run type-check` locally to catch TypeScript errors
   - Fix any type issues before pushing

2. **Linting errors**
   - Run `pnpm run lint:fix` to automatically fix some issues
   - Manual fixes may be required for some linting rules

3. **Deployment fails**
   - Check that GitHub Pages is enabled in repository settings
   - Ensure the main branch is protected if using branch protection rules
   - Verify that Actions have the necessary permissions

4. **pnpm cache issues**
   - The workflow uses `--frozen-lockfile` to ensure consistent installations
   - Update `pnpm-lock.yaml` if you add/update dependencies

### Manual Workflow Triggers

You can manually trigger the dependency check workflow:
1. Go to Actions tab in your repository
2. Select "Dependency Check" workflow
3. Click "Run workflow"

## Workflow Customization

### Adding Tests
If you add a test script to `package.json`, the CI workflow will automatically run it:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

### Environment Variables
Add environment variables in GitHub repository settings under Secrets and Variables → Actions.

### Branch Protection
Consider setting up branch protection rules for the `main` branch:
- Require status checks to pass before merging
- Require up-to-date branches before merging
- Include administrators in restrictions
