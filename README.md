# My Fun Next.js App

Welcome to My Fun Next.js App! This application demonstrates how to implement a theme toggle (light/dark mode) using React's Context API and Tailwind CSS for styling.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Theme Context Implementation](#theme-context-implementation)
- [Hero Section](#hero-section)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Light and dark theme toggle.
- Responsive design with Tailwind CSS.
- Simple and engaging hero section.
- Easy to understand code structure.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/fantastizeey1/day13.git
   cd my-fun-next-app
   ```

2. Install dependencies:

```bash
npm install
```

3.Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to <http://localhost:3000> to see the app in action!

### Project Structure

```text
my-fun-next-app/
├── app/
│   ├── page.tsx               # Main application page with hero section
│   └── ThemeContext.tsx       # Context API implementation for theme management
├── components/
│   └── ThemeToggleButton.tsx  # Button component for toggling themes
|   └── Header.tsx             # Header Component
├── public/
│   ├── next.svg               # Next.js logo image
│   ├── vercel.svg             # Vercel logo image
│   ├── day.png                # Day theme icon (optional)
│   └── night.png              # Night theme icon (optional)
├── styles/
│   └── globals.css            # Global styles (if any)
├── package.json                # Project dependencies and scripts
└── README.md                  # This README file
```

## Theme Context Implementation

The theme context is implemented in ThemeContext.tsx. It provides a way to manage the current theme (light or dark) across the entire application using React's Context API.

## Key Components

- ThemeProvider: Wraps the application and provides the current theme and a function to toggle it.

- useTheme Hook: A custom hook that allows components to access the theme context easily.

## Example Code

```typescript
// ThemeContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children?: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
```

## Usage

- Clone the repository.
- Install dependencies using npm install.
- Run the application with npm run dev.
- Open your browser at <http://localhost:3000> to view the app.
- Use the toggle button to switch between light and dark themes.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
