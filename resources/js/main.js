import Lenis from '@studio-freight/lenis';
import * as THREE from 'three';
import gsap from 'gsap';

// Initialize Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
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

const canvasContainer = document.getElementById('canvas-container');
if (canvasContainer) {
    canvasContainer.appendChild(renderer.domElement);
}

// Create floating particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 2000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    color: 0x00ff88,
    transparent: true,
    opacity: 0.8,
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Create geometric shapes
const geometry1 = new THREE.IcosahedronGeometry(1, 0);
const material1 = new THREE.MeshBasicMaterial({ 
    color: 0xff00ff, 
    wireframe: true,
    transparent: true,
    opacity: 0.3
});
const shape1 = new THREE.Mesh(geometry1, material1);
shape1.position.x = 3;
scene.add(shape1);

const geometry2 = new THREE.OctahedronGeometry(0.8, 0);
const material2 = new THREE.MeshBasicMaterial({ 
    color: 0x00ffff, 
    wireframe: true,
    transparent: true,
    opacity: 0.3
});
const shape2 = new THREE.Mesh(geometry2, material2);
shape2.position.x = -3;
scene.add(shape2);

camera.position.z = 5;

// Mouse interaction
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX / window.innerWidth - 0.5;
    mouseY = event.clientY / window.innerHeight - 0.5;
});

// Animation
const clock = new THREE.Clock();

function animate() {
    const elapsedTime = clock.getElapsedTime();

    particlesMesh.rotation.y = elapsedTime * 0.05;
    particlesMesh.rotation.x = mouseY * 0.5;
    particlesMesh.rotation.y += mouseX * 0.5;

    shape1.rotation.x = elapsedTime * 0.2;
    shape1.rotation.y = elapsedTime * 0.3;
    shape1.position.y = Math.sin(elapsedTime * 0.5) * 0.5;

    shape2.rotation.x = elapsedTime * 0.3;
    shape2.rotation.y = elapsedTime * 0.2;
    shape2.position.y = Math.cos(elapsedTime * 0.5) * 0.5;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

// Handle resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// GSAP Animations for scroll
gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.from('.hero-title', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
});

// Product cards stagger
gsap.utils.toArray('.product-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.1,
        ease: 'power3.out'
    });
});

// Cart functionality
let cartCount = 0;
const cartBadge = document.getElementById('cart-count');

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        if (cartBadge) {
            cartBadge.textContent = cartCount;
            gsap.from(cartBadge, { scale: 0, duration: 0.3, ease: 'back.out(1.7)' });
        }
        
        // Button feedback
        gsap.to(btn, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
    });
});

// AI Assistant Integration (Gemini)
async function askAI(question) {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    if (!API_KEY) return;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: question }] }]
            })
        });
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('AI Error:', error);
    }
}

// AI Chat trigger
const aiBtn = document.getElementById('ai-assistant');
if (aiBtn) {
    aiBtn.addEventListener('click', async () => {
        const question = "Recommend a design tool for creating stunning portfolios";
        const answer = await askAI(question);
        alert(answer || "Ask me about design tools!");
    });
}

console.log('🚀 Portfolio loaded. Caveman approve.');
