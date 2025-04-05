# Senior Design Engineer Exam Project

## Application Description
This is a React-based web application built with TypeScript and TailwindCSS. The project demonstrates modern front-end development practices and showcases various UI components and features.

### Features
- Modern React application with TypeScript support
- Responsive design using TailwindCSS
- Component-based architecture
- Type-safe development environment
- Optimized build process

## Prerequisites
- Node.js version 18.0.0 or higher
- npm (Node Package Manager) version 8.0.0 or higher

## Dependencies

### Core Dependencies
- `react`: ^19.0.0 - JavaScript library for building user interfaces
- `react-dom`: ^19.0.0 - React package for working with the DOM
- `react-scripts`: 5.0.1 - Scripts and configuration used by Create React App
- `web-vitals`: ^4.2.4 - Library for measuring web performance metrics

### Development Dependencies
- `typescript`: ^4.9.5 - TypeScript support for the project
- `tailwindcss`: ^3.4.17 - Utility-first CSS framework
- `cra-template-typescript`: 1.2.0 - TypeScript template for Create React App

## Getting Started

### Installation
1. Clone the repository:
```bash
git clone [repository-url]
cd senior-design-engineer-exam
```

2. Install dependencies:
```bash
npm install
```

### Running the Project
1. Start the development server:
```bash
npm start
```
This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

2. Build the project for production:
```bash
npm run build
```
This creates an optimized production build in the `build` folder.

3. Run tests:
```bash
npm test
```

## Deployment

### Building for Production
1. Create a production build:
```bash
npm run build
```

2. The build files will be created in the `build` directory.

### Deployment Options
1. **Static Hosting**
   - The build files can be deployed to any static hosting service like:
     - Vercel
     - Netlify
     - GitHub Pages
     - AWS S3 + CloudFront

2. **Deployment Steps**
   - Upload the contents of the `build` directory to your hosting provider
   - Configure the hosting service to serve the `index.html` file for all routes
   - Set up environment variables if needed
   - Configure custom domain if required

### Environment Variables
If your application requires environment variables:
1. Create a `.env` file in the root directory
2. Add your environment variables following the pattern:
```
REACT_APP_VARIABLE_NAME=value
```

## Support
For any issues or questions, please refer to the project documentation or create an issue in the repository.
