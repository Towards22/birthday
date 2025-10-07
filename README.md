# 70th Birthday Celebration Landing Page

A stunning, interactive, and emotionally captivating birthday landing page celebrating a 70th birthday milestone. Built with modern web technologies for a beautiful, responsive experience.

## Features

- **Hero Section**: Elegant landing with animated particles, background music controls, and celebrant's tribute
- **About Section**: Beautiful life story presentation with achievement highlights
- **Photo Gallery**: Interactive image gallery with lightbox modal and smooth transitions
- **Video Tribute**: Dedicated section for video presentation
- **Guest Wishes**: Real-time message board where guests can submit birthday wishes
- **Special Effects**: Confetti animations, floating particles, and smooth scroll animations
- **Social Sharing**: Share celebration on WhatsApp, Facebook, and Twitter
- **Fully Responsive**: Beautiful experience on all devices

## Tech Stack

- **Frontend**: Next.js 13, TypeScript, Tailwind CSS
- **Database**: MongoDB with Mongoose
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Fonts**: Playfair Display (serif), Inter (sans-serif)

## Getting Started

### Prerequisites

- Node.js 16+ installed
- MongoDB database (MongoDB Atlas or local instance)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
   - `MONGODB_URI` - Your MongoDB connection string

   Example:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/birthday-celebration?retryWrites=true&w=majority
   ```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## Customization

### Update Celebrant Information

Edit `/app/page.tsx`:

```typescript
const celebrantName = 'Your Celebrant Name';
const aboutDescription = 'Your custom description...';
```

### Update Gallery Images

Edit `/components/sections/GallerySection.tsx` and replace the `galleryImages` array with your own image URLs.

### Add Background Music

Place your birthday song MP3 file in the `/public` folder as `birthday-song.mp3`.

### Update Video

Edit `/components/sections/VideoSection.tsx` to embed your video (YouTube, Vimeo, or direct upload).

## Database Schema

The application uses MongoDB with a `BirthdayWish` collection:

### Fields

- `_id` (ObjectId): Unique identifier
- `name` (String, required): Guest's name
- `email` (String, optional): Guest's email
- `message` (String, required): Birthday wish message
- `isApproved` (Boolean, default: true): Moderation flag
- `createdAt` (Date): Submission timestamp
- `updatedAt` (Date): Last update timestamp

### API Routes

- `GET /api/wishes` - Fetches all approved wishes
- `POST /api/wishes` - Submits a new birthday wish

### Security

- Wishes are auto-approved by default
- Only approved wishes are displayed publicly
- Input validation on both client and server side

## Color Scheme

- **Primary**: Gold (#FFD700)
- **Secondary**: Royal Blue (#1E3A8A)
- **Accents**: Soft Pink (#FFC0CB), Cream (#FFF8E7)
- **Text**: Gray scale with proper contrast

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and fonts
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── VideoSection.tsx
│   │   ├── WishesSection.tsx
│   │   └── FooterSection.tsx
│   ├── ui/                  # Reusable UI components
│   ├── AnimatedBackground.tsx
│   ├── Confetti.tsx
│   ├── GalleryModal.tsx
│   └── WishCard.tsx
├── app/
│   └── api/
│       └── wishes/
│           └── route.ts     # API routes for wishes
├── lib/
│   ├── mongodb.ts           # MongoDB connection
│   ├── models/
│   │   └── BirthdayWish.ts  # Mongoose schema
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
    └── birthday-song.mp3    # Background music
```

## Performance Optimizations

- Static page generation for fast loading
- Optimized images with proper compression
- Lazy loading for gallery images
- Minimal JavaScript bundle size
- Efficient database queries with indexing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

The application is ready for deployment on Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Environment variables are automatically detected
4. Deploy!

## MongoDB Setup

### Using MongoDB Atlas (Recommended)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user with read/write permissions
4. Get your connection string from the "Connect" button
5. Replace `<password>` with your database user password
6. Add the connection string to your `.env` file

### Using Local MongoDB

1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/birthday-celebration`

## Support

For customization help or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is created for personal use. Customize as needed for your celebration!

---

**Made with love for a special 70th birthday celebration**
