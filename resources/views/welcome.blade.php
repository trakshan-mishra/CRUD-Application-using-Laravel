<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NEXUS | Ultra Fashion Store</title>
    @vite(['resources/css/app.css', 'resources/js/main.js'])
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Three.js Background -->
    <div id="canvas-container"></div>

    <!-- Navigation -->
    <nav style="position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; backdrop-filter: blur(20px); background: rgba(10, 10, 15, 0.8);">
        <div style="font-size: 24px; font-weight: 900; letter-spacing: -1px;">
            <span class="gradient-text">NEXUS</span>
        </div>
        
        <div style="display: flex; gap: 32px;">
            <span class="nav-link" style="color: #fff;">Shop</span>
            <span class="nav-link" style="color: #fff;">Brands</span>
            <span class="nav-link" style="color: #fff;">Collections</span>
            <span class="nav-link" style="color: #fff;">About</span>
        </div>
        
        <div style="display: flex; gap: 20px; align-items: center;">
            <button class="cart-badge" style="background: none; border: none; cursor: pointer; position: relative;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <span id="cart-count" class="cart-count">0</span>
            </button>
            <button style="background: none; border: none; cursor: pointer;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
        <div>
            <p style="text-align: center; color: var(--neon-green); text-transform: uppercase; letter-spacing: 4px; font-size: 14px; margin-bottom: 20px;">The Future of Fashion</p>
            <h1 class="hero-title gradient-text">CURATED<br/>STYLE FOR<br/>THE MODERN<br/>ERA</h1>
            <div style="display: flex; gap: 16px; justify-content: center; margin-top: 40px;">
                <button style="padding: 16px 40px; background: var(--neon-green); color: var(--dark-bg); border: none; border-radius: 30px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; transition: all 0.3s ease;">
                    Shop Now
                </button>
                <button style="padding: 16px 40px; background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); border-radius: 30px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; transition: all 0.3s ease;">
                    Explore Collections
                </button>
            </div>
        </div>
    </section>

    <!-- Filters -->
    <section style="padding: 60px 40px 20px;">
        <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">
            <span class="filter-tag active" data-filter="all">All</span>
            <span class="filter-tag" data-filter="streetwear">Streetwear</span>
            <span class="filter-tag" data-filter="casual">Casual</span>
            <span class="filter-tag" data-filter="formal">Formal</span>
            <span class="filter-tag" data-filter="luxury">Luxury</span>
            <span class="filter-tag" data-filter="sportswear">Sportswear</span>
            <span class="filter-tag" data-filter="vintage">Vintage</span>
        </div>
    </section>

    <!-- Products Grid -->
    <section style="padding: 40px; max-width: 1600px; margin: 0 auto;">
        <div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 40px;">
            <div>
                <h2 style="font-size: 36px; font-weight: 900; margin-bottom: 8px;">Featured Drops</h2>
                <p style="color: #888;">Handpicked pieces from top brands</p>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
                <span style="color: #888; font-size: 14px;">Sort by:</span>
                <select style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white; padding: 8px 16px; border-radius: 8px; outline: none; cursor: pointer;">
                    <option>Latest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Selling</option>
                </select>
            </div>
        </div>
        
        <div id="products-grid" class="products-grid"></div>
        
        <div style="text-align: center; margin-top: 60px;">
            <button style="padding: 16px 48px; background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); border-radius: 30px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; transition: all 0.3s ease;">
                Load More
            </button>
        </div>
    </section>

    <!-- Brands Section -->
    <section style="padding: 100px 40px; background: rgba(255,255,255,0.02);">
        <h2 style="font-size: 36px; font-weight: 900; text-align: center; margin-bottom: 60px;">Featured Brands</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto; opacity: 0.6;">
            <div style="text-align: center; font-size: 24px; font-weight: 900; color: #666;">NIKE</div>
            <div style="text-align: center; font-size: 24px; font-weight: 900; color: #666;">ADIDAS</div>
            <div style="text-align: center; font-size: 24px; font-weight: 900; color: #666;">GUCCI</div>
            <div style="text-align: center; font-size: 24px; font-weight: 900; color: #666;">SUPREME</div>
            <div style="text-align: center; font-size: 24px; font-weight: 900; color: #666;">ZARA</div>
            <div style="text-align: center; font-size: 24px; font-weight: 900; color: #666;">ARMANI</div>
        </div>
    </section>

    <!-- Footer -->
    <footer style="padding: 80px 40px 40px; border-top: 1px solid rgba(255,255,255,0.1);">
        <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 60px;">
            <div>
                <div style="font-size: 24px; font-weight: 900; margin-bottom: 20px;"><span class="gradient-text">NEXUS</span></div>
                <p style="color: #888; line-height: 1.8;">The future of fashion retail. Curated styles for the modern era.</p>
            </div>
            <div>
                <h4 style="font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">Shop</h4>
                <ul style="list-style: none; color: #888; line-height: 2;">
                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                    <li>Sale</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <div>
                <h4 style="font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">Help</h4>
                <ul style="list-style: none; color: #888; line-height: 2;">
                    <li>Shipping</li>
                    <li>Returns</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h4 style="font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">Newsletter</h4>
                <p style="color: #888; margin-bottom: 16px;">Get 10% off your first order</p>
                <div style="display: flex; gap: 8px;">
                    <input type="email" placeholder="Enter email" style="flex: 1; padding: 12px 16px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; outline: none;">
                    <button style="padding: 12px 20px; background: var(--neon-green); color: var(--dark-bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer;">→</button>
                </div>
            </div>
        </div>
        <div style="text-align: center; padding-top: 60px; margin-top: 60px; border-top: 1px solid rgba(255,255,255,0.05); color: #666; font-size: 14px;">
            © 2025 NEXUS. All rights reserved. Made with 🦍 energy.
        </div>
    </footer>

    <!-- AI Assistant Toggle -->
    <div id="ai-toggle" class="ai-toggle">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--dark-bg)" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
    </div>

    <!-- AI Assistant Panel -->
    <div id="ai-panel" class="ai-panel">
        <div style="padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h3 style="font-size: 18px; font-weight: 700;">Style Assistant</h3>
                <p style="color: #888; font-size: 13px;">Powered by Gemini AI</p>
            </div>
            <button id="ai-close" style="background: none; border: none; cursor: pointer; color: #888;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </div>
        
        <div id="chat-messages" class="chat-messages">
            <div class="chat-message ai">
                Hey! I'm your personal style assistant. Ask me about outfit recommendations, style tips, or what matches well together! 👗✨
            </div>
        </div>
        
        <div style="padding: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
            <div style="display: flex; gap: 12px;">
                <input type="text" id="ai-input" class="ai-input" placeholder="Ask about style, outfits, or brands...">
                <button id="ai-send" style="padding: 16px 24px; background: var(--neon-green); color: var(--dark-bg); border: none; border-radius: 12px; font-weight: 700; cursor: pointer; transition: all 0.3s ease;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <script>
        window.scrollToProduct = function(id) {
            const card = document.querySelector(`[data-product="${id}"]`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                if (window.gsap) {
                    gsap.to(card, { scale: 1.05, duration: 0.3, yoyo: true, repeat: 1 });
                }
            }
        };
    </script>
</body>
</html>
