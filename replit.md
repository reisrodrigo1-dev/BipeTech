# BIPETech Platform

## Overview

BIPETech is a modern technology holding company website built with React, TypeScript, and Express.js. The platform showcases the company's portfolio of technology ventures and AI innovations through a professional corporate website. The application is designed as a full-stack solution with a React frontend and Express backend, utilizing modern development practices and a comprehensive UI component library.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the stack
- **Build System**: ESBuild for server-side bundling and tsx for development
- **API Structure**: RESTful API design with `/api` prefix routing
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Database & ORM
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon Database serverless hosting
- **Migrations**: Drizzle Kit for schema management and migrations
- **Schema**: Shared TypeScript schema definitions between frontend and backend

### Development & Build System
- **Monorepo Structure**: Organized with `client/`, `server/`, and `shared/` directories
- **TypeScript Configuration**: Unified tsconfig with path aliases for clean imports
- **Hot Reload**: Vite HMR for frontend and tsx for backend development
- **Production Build**: Optimized builds with static asset serving

### Authentication & Session Management
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple
- **Session Security**: Cookie-based sessions with proper security configurations
- **User Management**: Basic user schema with username/password authentication

### UI/UX Design System
- **Design Tokens**: CSS custom properties for theming and consistency
- **Component Library**: Complete set of accessible components (buttons, forms, modals, etc.)
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: ARIA-compliant components with keyboard navigation support
- **Dark Mode**: Built-in dark mode support through CSS custom properties

## External Dependencies

### Core Technologies
- **React 18**: Frontend framework with hooks and modern patterns
- **Express.js**: Backend web application framework
- **TypeScript**: Type safety across the entire stack
- **Node.js**: Runtime environment for server execution

### Database & Storage
- **PostgreSQL**: Primary database through DATABASE_URL environment variable
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database operations and schema management

### UI Component Libraries
- **Radix UI**: Comprehensive set of accessible component primitives
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework for styling

### Development Tools
- **Vite**: Build tool and development server for frontend
- **ESBuild**: Fast JavaScript bundler for server builds
- **tsx**: TypeScript execution for development workflow
- **PostCSS**: CSS processing with Autoprefixer for vendor prefixes

### Form & Validation
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Utilities & Enhancement
- **TanStack Query**: Server state management and caching
- **date-fns**: Date manipulation and formatting utilities
- **clsx & class-variance-authority**: Conditional className utilities
- **cmdk**: Command palette component for enhanced UX