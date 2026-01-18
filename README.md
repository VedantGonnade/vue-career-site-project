# Vue Career Site Project

A modern job search and career portal built with Vue 3, TypeScript, Vite, and Tailwind CSS. This application provides a complete job listing platform with search, filtering, and detailed job views.

## 🚀 Features

- **Job Search & Filtering**: Search jobs by role and location with advanced filters
- **Filter by Multiple Criteria**: Organizations, job types, degrees, and skills
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive layouts
- **State Management**: Pinia for efficient state management
- **Type Safety**: Full TypeScript support
- **Testing**: Comprehensive unit tests with Vitest and Testing Library
- **Mock Backend**: JSON Server for local development and testing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.x or higher (recommended: v20.x)
- **npm**: v9.x or higher (comes with Node.js)

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Routing**: Vue Router (Hash mode)
- **HTTP Client**: Axios
- **Icons**: Font Awesome
- **Testing**: Vitest, Testing Library
- **Mock API**: JSON Server
- **Deployment**: Netlify-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vue-career-site-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_APP_API_URL=http://localhost:3000
   ```

   For production, update the API URL accordingly.

## 🚀 Running the Application

### Development Mode

You need to run **TWO** terminals simultaneously:

**Terminal 1 - Start the backend API:**
```bash
npm run backend
```
This starts JSON Server on `http://localhost:3000` with the mock database from `db.json`.

**Terminal 2 - Start the development server:**
```bash
npm run dev
```
This starts the Vite development server, typically on `http://localhost:5173`.

Open your browser and navigate to the URL shown in Terminal 2 (usually `http://localhost:5173`).

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist/` directory.

2. **Preview the production build locally**
   ```bash
   npm run preview
   ```

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

Run tests with coverage:
```bash
npm run test -- --coverage
```

Coverage reports are generated in the `coverage/` directory.

## 🎨 Code Quality

**Linting** (ESLint):
```bash
npm run lint
```

**Formatting** (Prettier):
```bash
npm run format
```

## 📁 Project Structure

```
vue-career-site-project/
├── src/
│   ├── api/              # API service layer (axios calls)
│   ├── components/       # Vue components
│   │   ├── jobResults/   # Job listing components
│   │   ├── jobSearch/    # Search and hero components
│   │   ├── navigation/   # Navigation components
│   │   └── shared/       # Reusable shared components
│   ├── composables/      # Vue composables (reusable logic)
│   ├── router/           # Vue Router configuration
│   ├── stores/           # Pinia stores (state management)
│   ├── utils/            # Utility functions
│   ├── views/            # Page-level components
│   ├── App.vue           # Root component
│   ├── main.ts           # Application entry point
│   └── index.css         # Global styles (Tailwind)
├── tests/
│   └── unit/             # Unit tests
├── public/               # Static assets
├── db.json               # Mock database for JSON Server
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── netlify.toml          # Netlify deployment config
└── package.json          # Project dependencies and scripts
```

## 🌐 Deployment

### Netlify Deployment

This project is configured for Netlify deployment with `netlify.toml`.

1. **Connect your repository to Netlify**
2. **Set environment variables** in Netlify dashboard:
   ```
   VITE_APP_API_URL=<your-production-api-url>
   ```
3. **Deploy settings** (auto-configured via netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`

### Other Platforms

For other platforms (Vercel, AWS, etc.):
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18.x or higher
- Set environment variable: `VITE_APP_API_URL`

## 🔧 Configuration

### Environment Variables

- `VITE_APP_API_URL`: Backend API base URL
  - Development: `http://localhost:3000`
  - Production: Your production API URL

### Path Aliases

The project uses `@/` as an alias for the `src/` directory:
```typescript
import Component from '@/components/Component.vue'
```

### Router Mode

The application uses **Hash mode** routing (`createWebHashHistory`) for better compatibility with static hosting platforms.

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run backend` | Start JSON Server (mock API) |
| `npm run test` | Run unit tests |
| `npm run lint` | Lint and fix code |
| `npm run format` | Format code with Prettier |

## 🔍 Key Dependencies

### Runtime Dependencies
- `vue` (^3.4.29) - Progressive JavaScript framework
- `vue-router` (^4.5.0) - Official router
- `pinia` (^2.3.1) - State management
- `axios` (^1.7.9) - HTTP client

### Development Dependencies
- `vite` (^5.3.1) - Next-generation frontend tooling
- `typescript` (^5.8.3) - Type safety
- `tailwindcss` (^3.4.15) - Utility-first CSS
- `vitest` (^2.1.8) - Unit testing framework
- `@testing-library/vue` (^8.1.0) - Testing utilities
- `json-server` (^1.0.0-beta.3) - Mock REST API

## 🐛 Troubleshooting

### Port already in use
If port 3000 or 5173 is already in use:
- JSON Server: Kill the process using port 3000
- Vite: It will automatically suggest an alternative port

### Environment variables not loading
- Ensure `.env` file is in the root directory
- Restart the dev server after changing environment variables
- Environment variables must start with `VITE_` to be exposed to the client

### Build fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Ensure Node.js version is 18.x or higher

## 📄 License

This project is private and not licensed for public use.

## 👥 Contributing

1. Follow the existing code style
2. Write tests for new features
3. Run linting and formatting before committing
4. Ensure all tests pass

## 🙋‍♂️ Support

For questions or issues, please open an issue in the repository.

---

**Note**: Remember to keep your `.env` file secure and never commit it to version control. Add it to `.gitignore`.