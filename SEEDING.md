# Sanity Data Seeding Guide

This guide explains how to seed your Sanity project with initial content for testing and development.

## Setup

1. **Install dependencies** (if not already done):
   ```bash
   npm install dotenv @sanity/client
   ```

2. **Create a Sanity API token**:
   - Go to https://sanity.io/manage
   - Select your project: NartaQ
   - Go to Settings → API → Tokens
   - Create a new token with "Editor" permissions
   - Copy the token

3. **Add environment variables**:
   Create a `.env.local` file in your project root:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=kdmsve3e
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_token_here
   ```

## Running the Seed Script

### Method 1: Using the Node.js Script (Recommended)

```bash
# Make the script executable
chmod +x scripts/seed-data.js

# Run the seeding script
node scripts/seed-data.js
```

### Method 2: Using Sanity CLI Import

If you prefer using the Sanity CLI to import the JSON files:

```bash
# Import categories first (since posts reference them)
npx sanity documents create seed-data/categories.json

# Import posts
npx sanity documents create seed-data/posts.json
```

### Method 3: Manual Import via Studio

You can also copy the JSON content and paste it directly in the Sanity Studio Vision tool:
1. Go to http://localhost:3000/studio
2. Click on "Vision" in the bottom left
3. Paste the JSON content from the seed-data files
4. Use `*[_type == "category"]` to verify categories were created

## What Gets Created

The seed script will create:

### Categories (4 items)
- **Artificial Intelligence** - AI advancements and applications
- **Automation** - Business process automation and optimization  
- **System Integration** - Connecting systems and platforms effectively
- **Data Analytics** - Data-driven insights and business intelligence

### Blog Posts (5 items)
1. **The Future of AI-Driven Business Operations** (Featured)
   - Categories: AI, Automation
   - Read time: 8 minutes

2. **Overcoming System Integration Challenges in Modern Enterprises**
   - Categories: Integration, Automation
   - Read time: 12 minutes

3. **Measuring ROI from Data Analytics Initiatives**
   - Categories: Analytics
   - Read time: 10 minutes

4. **Building Scalable Automation Strategies for Growing Teams** (Featured)
   - Categories: Automation, Integration
   - Read time: 15 minutes

5. **AI Tools Comparison: Finding the Right Solution for Your Business**
   - Categories: AI, Analytics
   - Read time: 18 minutes

## Manual Content Creation

You can also create content manually through the Sanity Studio:

1. Start your dev server: `npm run dev`
2. Visit: http://localhost:3000/studio
3. Create new documents using the UI

## Exporting Existing Content

If you want to create seed data from existing content:

```bash
# Export all posts
npx sanity documents query "*[_type == 'post']" > exported-posts.json

# Export all categories  
npx sanity documents query "*[_type == 'category']" > exported-categories.json

# Export a specific document
npx sanity documents query "*[_type == 'post' && slug.current == 'your-slug'][0]" > single-post.json
```

## Using Sample Data for Testing

The seed script creates realistic sample content that you can use to:
- Test your insights page layout
- Verify category filtering works
- Test search functionality  
- Demo the site to stakeholders
- Develop new features with realistic data

## Customizing the Seed Data

Edit `scripts/seed-data.js` to:
- Add more categories or posts
- Change the content structure
- Adjust publication dates
- Modify SEO fields
- Update author information

## Troubleshooting

**Permission Errors**: Make sure your SANITY_API_TOKEN has "Editor" permissions.

**Schema Errors**: Ensure your schema includes all fields used in the seed data.

**Network Errors**: Check your project ID and dataset name are correct.

**Duplicate Content**: The script uses `createOrReplace()` so it's safe to run multiple times.