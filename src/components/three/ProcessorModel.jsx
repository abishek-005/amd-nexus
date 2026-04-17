'use client';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges, Text, Html } from '@react-three/drei';

export default function ProcessorModel({ rotationSpeed = 0.005, isHovering = false, position = [0, 0, 0] }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
      if (isHovering) {
        // slight tilt when hovered
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.05;
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Base Substrate (Dark Chrome/Black) */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[4, 0.2, 4]} />
        <meshStandardMaterial 
          color="#111111" 
          roughness={0.8}
          metalness={0.2}
        />
        <Edges scale={1} threshold={15} color="#ED1C24" />
      </mesh>

      {/* Main Integrated Heat Spreader (IHS) (Chrome Metallic) */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[3.2, 0.4, 3.2]} />
        <meshStandardMaterial 
          color="#C0C0C0" 
          roughness={0.2}
          metalness={0.8}
          envMapIntensity={2}
        />
        <Edges scale={1.01} color={isHovering ? '#ED1C24' : '#6B6B6B'} />
      </mesh>

      {/* RYZEN Logo Text Placeholder */}
      <Text
        position={[0, 0.41, 0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.6}
        color="#222222"
        font="https://fonts.gstatic.com/s/rajdhani/v15/LDIxapCSOBg7S-QT7pb0ENyG.woff"
        anchorX="center"
        anchorY="middle"
      >
        AMD RYZEN
      </Text>
      
      {/* Series Number Text */}
      <Text
        position={[0, 0.41, -0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.4}
        color="#ED1C24"
        font="https://fonts.gstatic.com/s/rajdhani/v15/LDIxapCSOBg7S-QT7pb0ENyG.woff"
        anchorX="center"
        anchorY="middle"
      >
        9 7950X
      </Text>

      {/* Hover Hotspot (Optional HTML Overlay) */}
      {isHovering && (
        <Html position={[2, 1, 0]} center>
          <div style={{
            background: 'rgba(10, 10, 10, 0.8)',
            border: '1px solid #ED1C24',
            padding: '8px 12px',
            borderRadius: '4px',
            color: 'white',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '12px',
            backdropFilter: 'blur(10px)',
            pointerEvents: 'none',
            whiteSpace: 'nowrap'
          }}>
            16 Cores • 5.7GHz
          </div>
        </Html>
      )}
    </group>
  );
}
