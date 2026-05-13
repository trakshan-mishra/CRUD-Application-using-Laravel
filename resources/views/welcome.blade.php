<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>NEXUS | Ultra Portfolio Shop</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">

        @vite(['resources/css/app.css', 'resources/js/main.js'])
    </head>
    <body>
        <div id="canvas-container"></div>
        <div class="nav-floating glow-text">NEXUS</div>

        <div class="cart-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span id="cart-count" style="position:absolute;top:-5px;right:-5px;background:#00ff88;color:#0a0a0a;border-radius:50%;width:20px;height:20px;font-size:12px;display:flex;align-items:center;justify-content:center;font-weight:bold;">0</span>
        </div>

        <button id="ai-assistant" style="position:fixed;bottom:2rem;right:2rem;z-index:100;background:linear-gradient(135deg,#00ff88,#00ffff);border:none;border-radius:50%;width:70px;height:70px;cursor:pointer;box-shadow:0 10px 40px rgba(0,255,136,0.4);transition:all 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" stroke-width="2">
                <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
                <path d="M12 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"/>
                <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"/>
                <path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/>
                <path d="M2 12h2"/><path d="M20 12h2"/>
                <path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/>
            </svg>
        </button>

        <section class="section">
            <div style="text-align:center;">
                <h1 class="hero-title glow-text">Digital<br/><span style="color:#00ff88;">Artifacts</span></h1>
                <p style="margin-top:2rem;font-size:1.2rem;opacity:0.7;max-width:600px;margin-left:auto;margin-right:auto;">
                    Premium design resources for visionaries. Curated tools, templates, and assets for Adobe-level creators.
                </p>
                <button class="btn-neon" style="margin-top:3rem;">Explore Collection</button>
            </div>
        </section>

        <section class="section" style="flex-direction:column;padding:4rem 2rem;">
            <h2 style="font-size:3rem;font-weight:800;margin-bottom:4rem;text-align:center;">Featured<span style="color:#00ff88;">Drops</span></h2>
            
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:3rem;max-width:1400px;width:100%;">
                <div class="product-card">
                    <div style="height:300px;background:linear-gradient(135deg,rgba(0,255,136,0.1),rgba(0,255,255,0.1));border-radius:16px;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:center;">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#00ff88" stroke-width="1">
                            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
                        </svg>
                    </div>
                    <h3 style="font-size:1.5rem;font-weight:700;margin-bottom:0.5rem;">UI Kit Pro</h3>
                    <p style="opacity:0.6;margin-bottom:1.5rem;">500+ premium components for Figma & Adobe XD</p>
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <span style="font-size:1.5rem;font-weight:800;color:#00ff88;">$49</span>
                        <button class="btn-neon add-to-cart" style="padding:0.75rem 2rem;font-size:0.9rem;">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div style="height:300px;background:linear-gradient(135deg,rgba(255,0,255,0.1),rgba(0,255,136,0.1));border-radius:16px;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:center;">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#ff00ff" stroke-width="1">
                            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                        </svg>
                    </div>
                    <h3 style="font-size:1.5rem;font-weight:700;margin-bottom:0.5rem;">Motion Pack</h3>
                    <p style="opacity:0.6;margin-bottom:1.5rem;">After Effects templates with smooth animations</p>
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <span style="font-size:1.5rem;font-weight:800;color:#00ff88;">$79</span>
                        <button class="btn-neon add-to-cart" style="padding:0.75rem 2rem;font-size:0.9rem;">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div style="height:300px;background:linear-gradient(135deg,rgba(0,255,255,0.1),rgba(255,0,255,0.1));border-radius:16px;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:center;">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#00ffff" stroke-width="1">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <h3 style="font-size:1.5rem;font-weight:700;margin-bottom:0.5rem;">3D Assets</h3>
                    <p style="opacity:0.6;margin-bottom:1.5rem;">Blender & Cinema 4D ready models</p>
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <span style="font-size:1.5rem;font-weight:800;color:#00ff88;">$99</span>
                        <button class="btn-neon add-to-cart" style="padding:0.75rem 2rem;font-size:0.9rem;">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" style="background:linear-gradient(180deg,transparent,rgba(0,255,136,0.05));">
            <div style="max-width:800px;text-align:center;">
                <h2 style="font-size:3rem;font-weight:800;margin-bottom:2rem;">Crafted for<span style="color:#00ffff;">Excellence</span></h2>
                <p style="font-size:1.2rem;opacity:0.8;line-height:1.8;">
                    Every asset is meticulously designed by industry veterans from Adobe, Apple, and Google. 
                    Join thousands of designers who trust NEXUS for their creative workflow.
                </p>
            </div>
        </section>

        <footer style="padding:4rem 2rem;text-align:center;border-top:1px solid rgba(255,255,255,0.1);">
            <p style="opacity:0.5;">© 2024 NEXUS. All rights reserved. Caveman approved.</p>
        </footer>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    </body>
</html>
