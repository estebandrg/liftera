# 🚀 Next.js + Expo + Gluestack UI Monorepo

A modern full-stack monorepo template that enables code sharing between web (Next.js) and mobile (Expo/React Native) applications using Gluestack UI as a universal design system.

## ✨ Features

- 📱 **Universal**: Shared code between web and mobile
- 🎨 **Gluestack UI**: Consistent component system for both platforms
- ⚡ **Turborepo**: Optimized build system with intelligent caching
- 🎯 **TypeScript**: Complete type-safety across the monorepo
- 💅 **TailwindCSS + NativeWind**: Unified styling with utility-first CSS
- 🔥 **Hot Reload**: Fast development on both platforms
- 📦 **PNPM Workspaces**: Efficient dependency management

## 🏗️ Monorepo Architecture

```
monorepo-next-expo-gluestack/
├── apps/
│   ├── web/                 # Next.js 15 Application
│   │   ├── app/            # Next.js App Router
│   │   └── package.json
│   └── mobile/             # Expo Application
│       ├── app/            # Expo Router
│       └── package.json
├── packages/
│   └── ui/                 # Shared Component Library
│       ├── src/
│       │   ├── gluestack/  # Gluestack UI Components
│       │   └── components/ # Custom Components
│       └── package.json
├── turbo.json              # Turborepo Configuration
├── pnpm-workspace.yaml     # Workspaces Configuration
└── package.json
```

## 🛠️ Tech Stack

### Core
- **Node.js**: ≥18.0.0
- **Package Manager**: PNPM 9.0.0
- **Monorepo Tool**: Turborepo 2.7.2
- **TypeScript**: 5.9.2

### Web (Next.js)
- **Framework**: Next.js 15.3.6
- **React**: 19.2.1
- **React DOM**: 19.2.1
- **React Native Web**: 0.20.0

### Mobile (Expo)
- **Framework**: Expo 54.0.7
- **React**: 19.1.0
- **React Native**: 0.81.5
- **Expo Router**: 6.0.4

### UI & Styling
- **Design System**: Gluestack UI 3.0.12
- **Styling**: TailwindCSS 3.4.17
- **Cross-Platform Styles**: NativeWind 4.x
- **Variants**: Tailwind Variants 0.1.20
- **Icons**: Lucide React Native 0.510.0

### Animations & Interactions
- **Animations**: React Native Reanimated 4.1.0
- **Motion**: Legend App Motion 2.4.0
- **Gestures**: Gorhom Bottom Sheet 5.0.0-alpha.11

### Development Tools
- **Linting**: ESLint 9.x
- **Formatting**: Prettier 3.7.4
- **Type Checking**: TypeScript strict mode

## 🚀 Quick Start

### Prerequisites

```bash
node >= 18.0.0
pnpm >= 9.0.0
```

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd monorepo-next-expo-gluestack

# Install dependencies
pnpm install
```

### Development

```bash
# Run all applications in development mode
pnpm dev

# Run only the web application
pnpm dev --filter=web

# Run only the mobile application
pnpm dev --filter=mobile
```

### Specific Commands

#### Web (Next.js)
```bash
cd apps/web
pnpm dev          # Development server (http://localhost:3000)
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # Linting
```

#### Mobile (Expo)
```bash
cd apps/mobile
pnpm dev          # Start Expo
pnpm ios          # Run on iOS
pnpm android      # Run on Android
pnpm web          # Run on web
```

## 📦 Package Structure

### `@acme/ui`

Shared component library that exports:

- **Gluestack Components**: Base components from the design system
- **Custom Components**: Custom components built on top of Gluestack

#### Usage

```typescript
// Import Gluestack components
import { Button, ButtonText } from '@acme/ui/gluestack/button';
import { VStack } from '@acme/ui/gluestack/vstack';

// Import custom components
import { DemoShowcase } from '@acme/ui/components/demo-showcase';
```

## 🔧 Configuration

### TypeScript

The monorepo uses shared TypeScript configurations with strict mode enabled to ensure complete type-safety.

### TailwindCSS

Both applications share the same Tailwind configuration, enabling consistent styling:

```tsx
// Works on both web and mobile
<View className="p-4 bg-blue-500 rounded-lg">
  <Text className="text-white font-bold">Universal Styles</Text>
</View>
```

### Turborepo

Configured for:
- ✅ Intelligent build caching
- ✅ Parallel task execution
- ✅ Package dependencies
- ✅ Optimized hot reload

## 📱 Available Components

The `@acme/ui` package includes Gluestack UI components:

- **Layout**: Box, VStack, HStack, Center, Divider
- **Typography**: Heading, Text
- **Forms**: Input, Checkbox, Switch
- **Feedback**: Alert, Badge
- **Media**: Avatar, Image
- **Navigation**: Button, Link
- **Data Display**: Card

## 🎨 Design System

The template uses Gluestack UI which provides:

- 🎯 **Universal components** that work on both web and mobile
- 🎨 **Consistent theming** with dark mode support
- ♿ **Built-in accessibility** (ARIA, screen readers)
- 📐 **Responsive design** with shared breakpoints
- 🔧 **Highly customizable** with Tailwind Variants

## 🚢 Deployment

### Web (Next.js)

```bash
# Production build
pnpm build --filter=web

# Deploy to Vercel (recommended)
vercel deploy
```

### Mobile (Expo)

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

## 📚 Available Scripts

```bash
pnpm dev           # Development for all apps
pnpm build         # Build all apps
pnpm lint          # Lint the entire monorepo
pnpm check-types   # Type checking
pnpm format        # Format code with Prettier
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

## ⚠️ Project Status

**Important Note**: This repository is currently awaiting Gluestack UI to add full support for Next.js 16. Once available, we will migrate to Turbopack and adapt the project to the latest features and performance improvements of Next.js 16, including the new compiler and bundler optimizations.
