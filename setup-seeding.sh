#!/bin/bash

# Quick Sanity Seeding Setup Script
# Run with: chmod +x setup-seeding.sh && ./setup-seeding.sh

echo "🌱 Setting up Sanity data seeding..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local template..."
    cat > .env.local << EOF
NEXT_PUBLIC_SANITY_PROJECT_ID=kdmsve3e
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here_replace_me
EOF
    echo "⚠️  Please add your SANITY_API_TOKEN to .env.local"
    echo "   Get it from: https://sanity.io/manage"
    exit 1
fi

# Check if dependencies are installed
if ! npm list @sanity/client dotenv >/dev/null 2>&1; then
    echo "📦 Installing dependencies..."
    npm install @sanity/client dotenv
fi

# Make seed script executable
chmod +x scripts/seed-data.js

echo "✅ Setup complete! Now you can run:"
echo ""
echo "   npm run seed              # Run the full seed script"
echo "   npm run seed:categories   # Import categories via CLI"
echo "   npm run seed:posts        # Import posts via CLI"
echo ""
echo "📖 See SEEDING.md for detailed instructions"