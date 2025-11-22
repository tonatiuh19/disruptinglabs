# Disrupting Labs - Static Website

A modern React SPA (Single Page Application) built with Vite, ready for deployment on HostGator or any static web hosting service.

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
```

## 📦 Deployment to HostGator

### Step 1: Build the Project

```bash
npm install
npm run build
```

### Step 2: Upload Files

1. The build creates a `dist` folder with all static files
2. Upload **all contents** of the `dist` folder to your HostGator's `public_html` directory
3. Make sure the `.htaccess` file is included (it handles React Router routing)

### Step 3: File Structure on Server

Your HostGator `public_html` should contain:

```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── [other built files]
```

### Important Notes for HostGator:

- ✅ **Include .htaccess**: This file is crucial for React Router to work properly
- ✅ **Upload all files**: Don't forget hidden files like `.htaccess`
- ✅ **Check file permissions**: Ensure `.htaccess` has proper permissions (644)
- ✅ **Clear cache**: Clear any caching if updates don't appear

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Routing**: React Router 6 (SPA mode)
- **Styling**: TailwindCSS 3 + Radix UI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Static files (works on any web host)

## 📁 Project Structure

```
├── client/                 # React source code
│   ├── pages/             # Route components
│   ├── components/        # Reusable components
│   ├── components/ui/     # UI component library
│   └── lib/               # Utilities
├── public/                # Static assets
├── dist/                  # Build output (upload this to HostGator)
└── package.json
```

## 🎨 Features

- ✅ Fully responsive design
- ✅ Modern UI with TailwindCSS
- ✅ TypeScript for type safety
- ✅ Fast development with Vite
- ✅ Optimized production builds
- ✅ SEO-friendly routing
- ✅ Brand carousel component
- ✅ Contact forms (client-side)
- ✅ Professional business website layout

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run typecheck` - Run TypeScript checks
- `npm test` - Run tests
- `npm run format.fix` - Format code with Prettier

## 📝 Deployment Checklist for HostGator

- [ ] Run `npm run build`
- [ ] Upload all `dist/` contents to `public_html/`
- [ ] Verify `.htaccess` is uploaded and has correct permissions
- [ ] Test all routes work (refresh page on any route)
- [ ] Check responsive design on mobile
- [ ] Verify contact forms work
- [ ] Test brand carousel functionality
- [ ] Clear browser cache if needed

## 🆘 Troubleshooting

**Routes not working (404 errors)**:

- Ensure `.htaccess` file is uploaded and has correct permissions
- Contact HostGator support if mod_rewrite is not enabled

**Styles not loading**:

- Check that all files in `assets/` folder are uploaded
- Verify file permissions are correct (644 for files, 755 for directories)

**Changes not appearing**:

- Clear browser cache
- Check HostGator's caching settings
- Ensure you uploaded the latest build files

## 📞 Support

For HostGator-specific issues, contact their support team. For code-related issues, check the development logs when running `npm run dev`.
