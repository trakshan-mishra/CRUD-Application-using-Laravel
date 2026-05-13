#!/bin/bash
echo "🔥 NEXUS Portfolio Shop - Caveman Setup Script 🔥"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "✅ .env created"
else
    echo "✅ .env already exists"
fi

# Generate app key
echo "🔑 Generating app key..."
php artisan key:generate
echo "✅ App key generated"

# Install Node dependencies
echo "📦 Installing Node dependencies (this takes time)..."
npm install --legacy-peer-deps
echo "✅ Dependencies installed"

# Build assets
echo "🏗️ Building assets..."
npm run build
echo "✅ Assets built"

# Clear caches
echo "🧹 Clearing caches..."
php artisan config:clear
php artisan cache:clear
php artisan view:clear
echo "✅ Caches cleared"

echo ""
echo "=========================================="
echo "✅ SETUP COMPLETE!"
echo "=========================================="
echo ""
echo "📌 NEXT STEPS:"
echo "1. Edit .env and add your Gemini API key:"
echo "   VITE_GEMINI_API_KEY=your_actual_key_here"
echo ""
echo "2. Start the server:"
echo "   php artisan serve"
echo ""
echo "3. Open browser:"
echo "   http://localhost:8000"
echo ""
echo "🚀 Ready to sell to Adobe, caveman style!"
echo "=========================================="
