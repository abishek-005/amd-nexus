'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sparkles, Float, ContactShadows } from '@react-three/drei';
import ProcessorModel from './ProcessorModel';

export default function HeroScene() {
  return (
    <div className="hero-canvas-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}>
      {/* Fallback dark background before Canvas loads */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'radial-gradient(circle at center, #1a0505 0%, #0a0a0a 100%)', zIndex: -1 }}></div>
      
      <Canvas camera={{ position: [0, 4, 10], fov: 45 }}>
        <color attach="background" args={['#0A0A0A']} />
        
        {/* Cinematic Ambient Red Lighting */}
        <ambientLight intensity={0.2} color="#ffffff" />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#C0C0C0" />
        <pointLight position={[0, -2, 0]} intensity={20} color="#ED1C24" distance={10} />
        <spotLight position={[-5, 5, 0]} intensity={2} color="#FF5555" penumbra={1} angle={0.5} />

        {/* The Float component makes the model hover slowly up/down and rotate slightly */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <ProcessorModel isHovering={false} rotationSpeed={0.002} />
        </Float>

        {/* Red Energy Particles */}
        <Sparkles 
          count={100} 
          scale={12} 
          size={5} 
          speed={0.4} 
          color="#ED1C24" 
          opacity={0.8}
        />

        {/* Contact Shadow for grounded realism */}
        <ContactShadows position={[0, -3, 0]} opacity={0.5} scale={10} blur={2.5} far={4} color="#ED1C24" />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 3}
        />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
