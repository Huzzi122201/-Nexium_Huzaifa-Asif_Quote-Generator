# Quote Generator Web App

A modern, responsive quote generator built with Next.js, TypeScript, and ShadCN UI. Users can search for quotes by topic or get random inspirational quotes.

## Features

- 🎯 **Topic-based Search**: Find quotes by entering topics like "motivation", "success", "wisdom", etc.
- 🎲 **Random Quotes**: Get 3 random quotes with a single click
- 🎨 **Beautiful UI**: Modern design using ShadCN UI components
- 📱 **Responsive**: Works perfectly on desktop and mobile devices
- ⚡ **Fast**: Built with Next.js for optimal performance
- 🎪 **Interactive**: Clickable topic tags for easy navigation

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **ShadCN UI** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Local JSON Data** - 25 inspirational quotes across 5 topics

## Available Quote Topics

- Motivation
- Success
- Wisdom
- Life
- Technology

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd quote-generator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Method 2: GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will automatically detect it's a Next.js project and deploy it

### Method 3: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop your project folder
3. Vercel will build and deploy automatically

## Project Structure

```
quote-generator/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── label.tsx
│   │   └── QuoteGenerator.tsx
│   ├── data/
│   │   └── quotes.ts
│   └── lib/
│       └── utils.ts
├── components.json
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## How It Works

1. **Quote Data**: All quotes are stored in `src/data/quotes.ts` as a typed array
2. **Search Logic**: The app filters quotes based on the entered topic
3. **Random Selection**: If no topic is entered or no matches found, it shows 3 random quotes
4. **UI Components**: Uses ShadCN UI for consistent, accessible design
5. **Responsive Design**: Tailwind CSS ensures the app works on all screen sizes

## Customization

### Adding More Quotes

Edit `src/data/quotes.ts` and add new quote objects to the array:

```typescript
{
  id: 26,
  text: "Your new quote here",
  author: "Author Name",
  topic: "your-topic"
}
```

### Adding New Topics

Simply add quotes with new topic values - the app automatically detects available topics.

### Styling

Modify the Tailwind classes in `src/components/QuoteGenerator.tsx` to change the appearance.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
