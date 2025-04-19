# Custom PC Builder Website

A modern Next.js website for a custom PC building company, featuring a responsive design and Supabase integration.

## Features

- Responsive navigation with mobile menu
- Full-screen hero video section
- Supabase integration for backend functionality
- Modern UI with Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your Supabase project:
   - Create a new project at [Supabase](https://supabase.com)
   - Copy your project URL and anon key
   - Update the `.env.local` file with your credentials

4. Add your hero video:
   - Place your video file in the `public` folder as `hero-video.mp4`

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file with the following variables:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and configurations
- `/public` - Static assets 