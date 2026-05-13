#!/bin/bash
echo "🦍 CAVEMAN SETUP START..."

# Install all dependencies
npm install --legacy-peer-deps
npm install three gsap @studio-freight/lenis @google/generative-ai framer-motion lucide-react clsx tailwind-merge

# Create .env if not exists
if [ ! -f .env ]; then
  cat > .env << 'ENVEOF'
APP_NAME=NEXUS
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000
VITE_GEMINI_API_KEY=your_gemini_api_key_here
ENVEOF
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🦍 NEXT STEPS:"
echo "1. Edit .env and add your Gemini API key:"
echo "   VITE_GEMINI_API_KEY=your_actual_key"
echo ""
echo "2. Run dev server:"
echo "   npm run dev"
echo ""
echo "3. Open http://localhost:5173"
echo ""
echo "🦍 NEXUS ready to sell!"
