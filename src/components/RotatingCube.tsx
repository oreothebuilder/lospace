
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface RotatingCubeProps {
  size?: number;
  className?: string;
}

const RotatingCube = ({ size = 300, className = '' }: RotatingCubeProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Initialize renderer with transparent background
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    if (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create cube geometry with a slightly gradient material
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    
    // Create gradient materials
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x1a41db, transparent: true, opacity: 0.7 }), // Right
      new THREE.MeshBasicMaterial({ color: 0x0f2bac, transparent: true, opacity: 0.7 }), // Left
      new THREE.MeshBasicMaterial({ color: 0x3461ff, transparent: true, opacity: 0.7 }), // Top
      new THREE.MeshBasicMaterial({ color: 0x0f2bac, transparent: true, opacity: 0.7 }), // Bottom
      new THREE.MeshBasicMaterial({ color: 0x1a41db, transparent: true, opacity: 0.7 }), // Front
      new THREE.MeshBasicMaterial({ color: 0x0f2bac, transparent: true, opacity: 0.7 }), // Back
    ];
    
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    cubeRef.current = cube;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Animation loop
    let frameId: number;
    
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (rendererRef.current) {
        rendererRef.current.setSize(size, size);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      if (cubeRef.current) {
        cubeRef.current.geometry.dispose();
        
        if (Array.isArray(cubeRef.current.material)) {
          cubeRef.current.material.forEach(material => material.dispose());
        } else {
          cubeRef.current.material.dispose();
        }
      }
      
      if (mountRef.current && mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
    };
  }, [size]);

  return (
    <div 
      ref={mountRef} 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default RotatingCube;
