# MongoDB Setup Guide

This guide will help you set up MongoDB for the 70th Birthday Celebration website.

## Option 1: MongoDB Atlas (Cloud - Recommended)

MongoDB Atlas is a free cloud database service that's perfect for this project.

### Steps:

1. **Create an Account**
   - Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Click "Try Free" and create an account

2. **Create a Cluster**
   - Choose the FREE tier (M0)
   - Select a cloud provider (AWS, Google Cloud, or Azure)
   - Choose a region close to your location
   - Click "Create Cluster" (takes 3-5 minutes)

3. **Create a Database User**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create a username and strong password
   - Set privileges to "Read and write to any database"
   - Click "Add User"

4. **Configure Network Access**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Get Your Connection String**
   - Go to "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

6. **Update Your .env File**
   - Replace `<password>` with your database user password
   - Add the database name: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/birthday-celebration?retryWrites=true&w=majority`
   - Save to your `.env` file as:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/birthday-celebration?retryWrites=true&w=majority
   ```

## Option 2: Local MongoDB

If you prefer to run MongoDB locally:

### Steps:

1. **Install MongoDB**
   - Download from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
   - Follow installation instructions for your operating system

2. **Start MongoDB**
   - On Mac/Linux: `mongod`
   - On Windows: Start the MongoDB service from Services

3. **Update Your .env File**
   ```
   MONGODB_URI=mongodb://localhost:27017/birthday-celebration
   ```

## Testing Your Connection

After setting up MongoDB:

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000)

3. Try submitting a birthday wish through the form

4. The wish should appear in the "Recent Wishes" section

5. Check MongoDB Atlas (or local MongoDB) to see the data stored

## Troubleshooting

### Connection Issues

**Error: "MongooseServerSelectionError"**
- Check your internet connection
- Verify the connection string is correct
- Ensure IP address is whitelisted in MongoDB Atlas
- Check if MongoDB service is running (for local setup)

**Error: "Authentication failed"**
- Double-check your username and password
- Make sure you're using the database user (not your Atlas login)
- Ensure special characters in password are URL-encoded

### Data Not Appearing

**Wishes not showing up:**
- Check browser console for errors
- Verify the API routes are working: Visit `/api/wishes`
- Check MongoDB Atlas "Collections" tab to see if data is being stored

## Production Deployment

When deploying to Vercel or another platform:

1. Add `MONGODB_URI` as an environment variable in your deployment platform
2. Use the same connection string from MongoDB Atlas
3. MongoDB Atlas is production-ready and scales automatically

## Data Management

### Viewing Your Data

**MongoDB Atlas:**
- Go to "Database" → "Browse Collections"
- Select "birthday-celebration" database
- View the "birthdaywishes" collection

**Local MongoDB:**
- Use MongoDB Compass (GUI tool)
- Or use MongoDB shell: `mongosh`

### Backup Your Data

**MongoDB Atlas:**
- Automatic backups on paid tiers
- Export data: Collections → Export Collection

**Local MongoDB:**
- Use `mongodump` command
- Example: `mongodump --db=birthday-celebration --out=/backup/path`

## Security Best Practices

1. **Never commit your .env file** - It's already in .gitignore
2. **Use strong passwords** for database users
3. **Restrict IP access** in production (remove "allow from anywhere")
4. **Rotate passwords** regularly
5. **Use environment variables** for all sensitive data

## Need Help?

- MongoDB Atlas Documentation: [https://docs.atlas.mongodb.com/](https://docs.atlas.mongodb.com/)
- MongoDB Community Forums: [https://www.mongodb.com/community/forums/](https://www.mongodb.com/community/forums/)
- Mongoose Documentation: [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/)
