# Project Overview

This is a modern single-page website for a gaming community called "Azerto Gaming RPG". Originally built with React/TypeScript, it has been converted to pure HTML, CSS, and JavaScript for simplicity and performance. The site features modern gaming aesthetics with animations, responsive design, and interactive elements.

## Recent Changes (January 28, 2025)
- Updated all branding from "Los Santos Gaming" to "Azerto Gaming RPG"
- Added forums link to https://azertogamingrpg.flarum.cloud/
- Updated server IP references to play.azerto.com:7777
- **MAJOR CHANGE**: Converted entire website from React/TypeScript/Node.js to plain HTML/CSS/JavaScript
- Created standalone website files: index.html, styles.css, script.js
- Maintained all modern gaming aesthetics, animations, and functionality
- Added smooth scrolling, copy-to-clipboard, mobile responsiveness, and interactive animations
- Removed "Connect Now" button and added Discord invite link (https://discord.gg/T2DPMaGQnM) to "Join Discord" button

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom gaming theme variables
- **UI Components**: Extensive use of Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation through @hookform/resolvers

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions
- **Development**: tsx for TypeScript execution in development

### Frontend Design System
- **Component Library**: Custom implementation based on shadcn/ui
- **Theme**: Dark gaming theme with custom CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Icons**: Lucide React icons with some react-icons integration
- **Animations**: Framer Motion for smooth animations and transitions

## Key Components

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Automated migrations using drizzle-kit
- **Connection**: Neon Database serverless for cloud PostgreSQL

### Storage Interface
- **Abstract Interface**: IStorage interface for CRUD operations
- **In-Memory Implementation**: MemStorage class for development/testing
- **User Management**: Basic user creation and retrieval methods

### Development Tools
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared code
- **Code Quality**: Consistent import aliases and path resolution

## Data Flow

### Client-Server Communication
- **API Layer**: RESTful endpoints with `/api` prefix
- **Query Management**: TanStack React Query for caching and synchronization
- **Error Handling**: Centralized error handling with custom fetch wrapper
- **Type Safety**: Shared TypeScript types between frontend and backend

### Database Operations
- **Schema-First**: Database schema defined using Drizzle ORM
- **Type Generation**: Automatic TypeScript type generation from schema
- **Validation**: Zod schemas derived from Drizzle schema for runtime validation

## External Dependencies

### Core Runtime
- **Database**: PostgreSQL (configured for Neon Database)
- **Node.js**: ES Modules with modern JavaScript features
- **React**: Latest stable version with concurrent features

### UI and Styling
- **Radix UI**: Comprehensive primitive components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth interactions

### Development Dependencies
- **Vite**: Build tool with React plugin
- **TypeScript**: Type checking and compilation
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Unified Output**: Both frontend and backend assets in single dist directory

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: NODE_ENV=development for development features
- **Production**: NODE_ENV=production for optimized serving

### Replit Integration
- **Development Banner**: Automatic replit development banner injection
- **Hot Reload**: Integrated with Replit's development environment
- **Cartographer**: Replit-specific tooling for enhanced development experience

The application follows a monorepo structure with clear separation between client, server, and shared code, making it easy to maintain and scale while ensuring type safety across the entire stack.