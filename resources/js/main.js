import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { GoogleGenerativeAI } from '@google/generative-ai';

gsap.registerPlugin(ScrollTrigger);

// Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Three.js Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const container = document.getElementById('canvas-container');
if (container) {
  container.appendChild(renderer.domElement);
}

// Floating particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 2000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 15;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.02,
  color: 0x00ff88,
  transparent: true,
  opacity: 0.8
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Floating geometric shapes
const shapes = [];
const geometries = [
  new THREE.IcosahedronGeometry(0.5, 0),
  new THREE.OctahedronGeometry(0.4, 0),
  new THREE.TetrahedronGeometry(0.3, 0)
];

for (let i = 0; i < 15; i++) {
  const geometry = geometries[Math.floor(Math.random() * geometries.length)];
  const material = new THREE.MeshBasicMaterial({
    color: Math.random() > 0.5 ? 0x00ffff : 0xff00ff,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = (Math.random() - 0.5) * 10;
  mesh.position.y = (Math.random() - 0.5) * 10;
  mesh.position.z = (Math.random() - 0.5) * 5 - 2;
  mesh.rotation.x = Math.random() * Math.PI;
  mesh.rotation.y = Math.random() * Math.PI;
  shapes.push(mesh);
  scene.add(mesh);
}

camera.position.z = 3;

// Mouse interaction
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  particlesMesh.rotation.y += 0.001;
  particlesMesh.rotation.x += 0.0005;
  
  shapes.forEach((shape, i) => {
    shape.rotation.x += 0.002 + i * 0.0005;
    shape.rotation.y += 0.003 + i * 0.0003;
    shape.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
  });
  
  camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
  camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
  camera.lookAt(scene.position);
  
  renderer.render(scene, camera);
}
animate();

// Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// GSAP Animations
gsap.utils.toArray('.hero-title').forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
  });
});

gsap.utils.toArray('.product-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.05,
    ease: 'power3.out'
  });
});

// Sample Product Data
const products = [
  { id: 1, name: 'Oversized Hoodie', brand: 'Nike', price: 129, category: 'streetwear', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=750&fit=crop' },
  { id: 2, name: 'Tech Cargo Pants', brand: 'Adidas', price: 89, category: 'streetwear', image: 'https://images.unsplash.com/photo-1552160753-117159d21e00?w=500&h=750&fit=crop' },
  { id: 3, name: 'Leather Bomber', brand: 'Zara', price: 199, category: 'casual', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=750&fit=crop' },
  { id: 4, name: 'Minimal Tee', brand: 'Uniqlo', price: 29, category: 'casual', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=750&fit=crop' },
  { id: 5, name: 'Denim Jacket', brand: 'Levis', price: 149, category: 'vintage', image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&h=750&fit=crop' },
  { id: 6, name: 'Silk Shirt', brand: 'Gucci', price: 890, category: 'luxury', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&h=750&fit=crop' },
  { id: 7, name: 'Track Suit', brand: 'Puma', price: 159, category: 'sportswear', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=750&fit=crop' },
  { id: 8, name: 'Wool Coat', brand: 'Hugo Boss', price: 599, category: 'formal', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=750&fit=crop' },
  { id: 9, name: 'Graphic Tee', brand: 'Supreme', price: 79, category: 'streetwear', image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&h=750&fit=crop' },
  { id: 10, name: 'Chino Shorts', brand: 'Gap', price: 49, category: 'casual', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=750&fit=crop' },
  { id: 11, name: 'Blazer', brand: 'Armani', price: 799, category: 'formal', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=750&fit=crop' },
  { id: 12, name: 'Sweatpants', brand: 'Fear of God', price: 195, category: 'streetwear', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=750&fit=crop' }
];

// Render Products
const productsGrid = document.getElementById('products-grid');
if (productsGrid) {
  productsGrid.innerHTML = products.map(product => `
    <div class="glass-card product-card" data-product="${product.id}">
      <span class="brand-badge">${product.brand}</span>
      <button class="wishlist-btn">♡</button>
      <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
      </div>
      <button class="quick-add-btn">Add to Cart</button>
      <div style="padding: 20px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">${product.name}</h3>
        <p style="color: #888; font-size: 13px; text-transform: uppercase; margin-bottom: 12px;">${product.category}</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 18px; font-weight: 700; color: var(--neon-green);">$${product.price}</span>
          <div style="display: flex; gap: 4px;">
            ${[1,2,3,4,5].map(s => `<span style="color: #ffd700;">★</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Cart functionality
let cartCount = 0;
const cartCountEl = document.getElementById('cart-count');

document.querySelectorAll('.quick-add-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    cartCount++;
    if (cartCountEl) cartCountEl.textContent = cartCount;
    
    // Animation
    gsap.from(cartCountEl, { scale: 2, duration: 0.3 });
    
    // Button feedback
    const originalText = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.background = 'var(--neon-blue)';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = 'var(--neon-green)';
    }, 1000);
  });
});

// Filter functionality
const filterTags = document.querySelectorAll('.filter-tag');
filterTags.forEach(tag => {
  tag.addEventListener('click', () => {
    filterTags.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    
    const category = tag.dataset.filter;
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
      const productCategory = card.querySelector('p').textContent.toLowerCase();
      if (category === 'all' || productCategory.includes(category)) {
        gsap.to(card, { display: 'block', opacity: 1, scale: 1, duration: 0.4 });
      } else {
        gsap.to(card, { opacity: 0, scale: 0.8, duration: 0.4, onComplete: () => {
          card.style.display = 'none';
        }});
      }
    });
  });
});

// AI Assistant with Gemini
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
let genAI = null;
let model = null;

if (apiKey) {
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({ model: "gemini-pro" });
}

const aiToggle = document.getElementById('ai-toggle');
const aiPanel = document.getElementById('ai-panel');
const aiClose = document.getElementById('ai-close');
const aiInput = document.getElementById('ai-input');
const aiSend = document.getElementById('ai-send');
const chatMessages = document.getElementById('chat-messages');

let isOpen = false;

if (aiToggle) {
  aiToggle.addEventListener('click', () => {
    isOpen = !isOpen;
    aiPanel?.classList.toggle('open');
    if (isOpen && aiInput) aiInput.focus();
  });
}

if (aiClose) {
  aiClose.addEventListener('click', () => {
    isOpen = false;
    aiPanel?.classList.remove('open');
  });
}

async function sendMessage() {
  const message = aiInput?.value.trim();
  if (!message) return;
  
  // Add user message
  if (chatMessages) {
    chatMessages.innerHTML += `
      <div class="chat-message user">${escapeHtml(message)}</div>
    `;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  if (aiInput) aiInput.value = '';
  
  // Show loading
  if (chatMessages) {
    chatMessages.innerHTML += `
      <div class="chat-message ai" id="loading-msg">
        <div class="loading-skeleton" style="height: 20px; width: 80%;"></div>
      </div>
    `;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  if (!model) {
    setTimeout(() => {
      const loadingMsg = document.getElementById('loading-msg');
      if (loadingMsg) {
        loadingMsg.innerHTML = '⚠️ Please add your Gemini API key to .env file';
      }
    }, 500);
    return;
  }
  
  try {
    const context = `You are a fashion stylist AI assistant for an online clothing store. 
    Current products available: ${products.map(p => `${p.name} (${p.brand}, ${p.category}, $${p.price})`).join(', ')}.
    User asked: "${message}". 
    Provide personalized style recommendations, outfit matching suggestions, or fashion advice.
    Keep response concise (max 150 words). Be trendy and helpful.`;
    
    const result = await model.generateContent(context);
    const response = await result.response;
    const text = response.text();
    
    const loadingMsg = document.getElementById('loading-msg');
    if (loadingMsg && chatMessages) {
      loadingMsg.innerHTML = escapeHtml(text);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      // Extract product recommendations
      products.forEach(product => {
        if (text.toLowerCase().includes(product.name.toLowerCase()) || 
            text.toLowerCase().includes(product.brand.toLowerCase())) {
          loadingMsg.innerHTML += `
            <div class="style-rec-card" onclick="scrollToProduct(${product.id})">
              <img src="${product.image}" class="style-rec-img" alt="${product.name}">
              <div>
                <div style="font-weight: 600; font-size: 13px;">${product.name}</div>
                <div style="color: var(--neon-green); font-size: 12px;">$${product.price}</div>
              </div>
            </div>
          `;
        }
      });
    }
  } catch (error) {
    const loadingMsg = document.getElementById('loading-msg');
    if (loadingMsg) {
      loadingMsg.innerHTML = '❌ Error: ' + error.message;
    }
  }
}

if (aiSend) {
  aiSend.addEventListener('click', sendMessage);
}

if (aiInput) {
  aiInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function scrollToProduct(id) {
  const card = document.querySelector(`[data-product="${id}"]`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    gsap.to(card, { scale: 1.05, duration: 0.3, yoyo: true, repeat: 1 });
  }
}

// Wishlist toggle
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('wishlist-btn')) {
    e.stopPropagation();
    e.target.textContent = e.target.textContent === '♡' ? '♥' : '♡';
    e.target.style.background = e.target.textContent === '♥' ? 'var(--neon-pink)' : '';
  }
});

console.log('🦍 NEXUS loaded. Ready to sell.');
