# Sundrift

A cross-platform React Native demo application with web support and a built-in iPhone device frame preview for web browsers.

## Project Overview

Sundrift is a travel/hotel booking demo app built with React Native that runs on **iOS**, **Android**, and **Web**. The web version features a unique iPhone 17 Pro device frame wrapper, making it ideal for demos, presentations, and visual design tools like Builder.io.

This project demonstrates how to:
- Build a single codebase that runs on mobile and web
- Create a realistic device frame preview for web browsers
- Configure React Native Web with webpack

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native 0.83** | Core mobile framework |
| **React 19** | UI library |
| **React Native Web** | Web platform support |
| **TypeScript** | Type safety |
| **Webpack 5** | Web bundling |
| **CocoaPods** | iOS dependency management |
| **Gradle** | Android build system |

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 20** or higher
- **npm** (comes with Node.js)
- **Xcode** (for iOS development, macOS only)
- **Android Studio** (for Android development)
- **CocoaPods** (for iOS dependencies)
  ```bash
  sudo gem install cocoapods
  ```

### Platform-Specific Requirements

**For iOS:**
- macOS with Xcode installed
- iOS Simulator (download via Xcode > Settings > Platforms)

**For Android:**
- Android Studio with an AVD (Android Virtual Device) configured
- `ANDROID_HOME` environment variable set

**For Web:**
- Any modern web browser

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/tbricca/react-native-builder-sundrift.git
cd react-native-builder-sundrift
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

> **Note:** The `--legacy-peer-deps` flag is required due to peer dependency conflicts between React 19 and some packages.

### 3. Install iOS Dependencies (macOS only)

```bash
cd ios
pod install
cd ..
```

## Running the App

### Web (with iPhone Frame Preview)

```bash
npm run web
```

Opens at **http://localhost:3000** - displays the app inside an iPhone 17 Pro frame.

### iOS Simulator

Start Metro bundler in one terminal:
```bash
npm start
```

In another terminal, build and launch:
```bash
npm run ios
```

### Android Emulator

Start Metro bundler in one terminal:
```bash
npm start
```

In another terminal, build and launch:
```bash
npm run android
```

### Quick Reference

| Platform | Command | URL/Output |
|----------|---------|------------|
| Web | `npm run web` | http://localhost:3000 |
| iOS | `npm run ios` | iOS Simulator |
| Android | `npm run android` | Android Emulator |
| Metro | `npm start` | http://localhost:8081 |

## Device Frame Preview (Web)

The web version wraps the React Native app inside a realistic iPhone 17 Pro frame. This is implemented using a custom `PhoneFrame` component with pure CSS styling.

### How It Works

```
┌─────────────────────────────────────┐
│         Dark Background             │
│                                     │
│    ┌─────────────────────────┐      │
│    │    ┌───────────┐        │      │
│    │    │  Dynamic  │        │ ← iPhone Frame (CSS)
│    │    │  Island   │        │
│    │    └───────────┘        │
│    │                         │
│    │   ┌─────────────────┐   │
│    │   │                 │   │
│    │   │  React Native   │   │ ← App Content
│    │   │      App        │   │
│    │   │                 │   │
│    │   └─────────────────┘   │
│    │                         │
│    │      ───────────        │ ← Home Indicator
│    └─────────────────────────┘
│                                     │
└─────────────────────────────────────┘
```

### Key Files

- **`src/PhoneFrame.tsx`** - The iPhone frame wrapper component
  - Renders a 393×852 pixel screen (iPhone 17 Pro dimensions)
  - Includes Dynamic Island notch
  - Home indicator bar
  - Titanium-colored bezels with rounded corners
  - Drop shadow for depth

- **`index.web.js`** - Web entry point that renders `PhoneFrame` instead of `App` directly

- **`public/index.html`** - Dark gradient background with centered layout

### Customization

To modify the device frame appearance, edit `src/PhoneFrame.tsx`:

```typescript
// Change frame dimensions
width: 393,    // Screen width
height: 852,   // Screen height

// Change bezel color
borderColor: '#2a2a2a',  // Titanium gray

// Change border radius
borderRadius: 55,  // Corner roundness
```

## Available NPM Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `start` | `npm start` | Start Metro bundler for native development |
| `ios` | `npm run ios` | Build and run on iOS Simulator |
| `android` | `npm run android` | Build and run on Android Emulator |
| `web` | `npm run web` | Start webpack dev server for web |
| `build:web` | `npm run build:web` | Build production web bundle |
| `lint` | `npm run lint` | Run ESLint |
| `test` | `npm run test` | Run Jest tests |

## Project Structure

```
Sundrift/
├── android/                 # Android native code
├── ios/                     # iOS native code
│   ├── Podfile             # CocoaPods dependencies
│   └── Sundrift/           # Xcode project files
├── src/
│   └── PhoneFrame.tsx      # iPhone frame wrapper component
├── public/
│   └── index.html          # Web HTML template
├── App.tsx                  # Main application component
├── index.js                 # Native entry point
├── index.web.js            # Web entry point
├── webpack.config.js       # Webpack configuration
├── metro.config.js         # Metro bundler configuration
├── babel.config.js         # Babel configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Key Features

### Cross-Platform Support
- **Single codebase** runs on iOS, Android, and Web
- Uses React Native Web for browser compatibility
- Shared components and styles across all platforms

### Web Device Frame Preview
- Realistic iPhone 17 Pro frame rendered in CSS
- Perfect for demos and presentations
- Works seamlessly with visual design tools
- No external images required

### Modern Stack
- React Native 0.83 with New Architecture
- React 19 with latest features
- TypeScript for type safety
- Webpack 5 for optimized web builds

## Troubleshooting

### Port 3000 Already in Use

If you see `EADDRINUSE: address already in use :::3000`:

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Then restart
npm run web
```

### Port 8081 Already in Use (Metro)

```bash
# Kill Metro bundler
lsof -ti:8081 | xargs kill -9

# Restart Metro
npm start
```

### Cannot Connect to Metro

If you see "Cannot connect to Metro" in the simulator:

1. Ensure Metro is running: `npm start`
2. In the simulator, press `Cmd + R` to reload
3. Or shake device / press `Cmd + D` and tap "Reload"

### iOS Simulator Not Found

1. Open Xcode > Settings > Platforms
2. Download an iOS Simulator runtime
3. Retry `npm run ios`

### CocoaPods Issues

```bash
cd ios
pod deintegrate
pod install
cd ..
```

### Build Errors After Package Updates

```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# For iOS
cd ios
pod deintegrate
pod install
cd ..
```

### Web Build Issues with ajv

If you see `Cannot find module 'ajv/dist/compile/codegen'`:

```bash
npm install "ajv@^8.0.0" --legacy-peer-deps
```

## Implementing in Your Own Project

To add the iPhone frame preview to your existing React Native Web project:

1. **Copy the PhoneFrame component:**
   ```bash
   cp src/PhoneFrame.tsx your-project/src/
   ```

2. **Update your web entry point:**
   ```javascript
   // index.web.js
   import PhoneFrame from './src/PhoneFrame';
   AppRegistry.registerComponent(appName, () => PhoneFrame);
   ```

3. **Update your HTML template** with a dark background and centered layout

4. **Adjust the PhoneFrame import** to point to your App component

## License

MIT

## Links

- [React Native](https://reactnative.dev/)
- [React Native Web](https://necolas.github.io/react-native-web/)
- [Builder.io](https://builder.io/)
