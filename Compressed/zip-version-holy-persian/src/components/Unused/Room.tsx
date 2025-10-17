// PresentationRoom.tsx
import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture, Html } from "@react-three/drei";
import * as THREE from "three";

/* ----------------------------------------------------------
   1.  Landscape gate
---------------------------------------------------------- */
const LandscapeGate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const onResize = () => setOk(window.innerWidth > window.innerHeight);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return ok ? (
    <>{children}</>
  ) : (
    <Html center>
      <p className="text-white">rotate to landscape</p>
    </Html>
  );
};

/* ----------------------------------------------------------
   2.  Animated presenter
---------------------------------------------------------- */
function Presenter() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (ref.current)
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.15;
  });
  return (
    <group ref={ref} position={[-2.6, 0, 0]}>
      {/* body */}
      <mesh castShadow>
        <capsuleGeometry args={[0.25, 1.6]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      {/* head */}
      <mesh castShadow position={[0, 1.1, 0]}>
        <sphereGeometry args={[0.25]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>
      {/* glasses */}
      <mesh position={[0, 1.15, 0.2]}>
        <torusGeometry args={[0.1, 0.02, 8, 32]} />
        <meshStandardMaterial color="#222" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

/* ----------------------------------------------------------
   3.  Papers on the desk
---------------------------------------------------------- */
function Paper({
  img,
  onSelect,
}: {
  img: string;
  onSelect: (tex: THREE.Texture) => void;
}) {
  const [hover, set] = useState(false);
  const texture = useTexture(img);
  return (
    <mesh
      position={[Math.random() * 1.2 - 0.6, 0.51, Math.random() * 0.8 - 1]}
      rotation={[-Math.PI / 2, 0, Math.random() * 0.3]}
      onClick={() => onSelect(texture)}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
    >
      <planeGeometry args={[0.8, 0.5]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={hover ? 1 : 0.8}
      />
    </mesh>
  );
}

/* ----------------------------------------------------------
   4.  Board that displays selected texture
---------------------------------------------------------- */
function Board({ texture }: { texture?: THREE.Texture }) {
  return (
    <mesh position={[0, 1.5, -2.5]} receiveShadow>
      <planeGeometry args={[3.2, 1.8]} />
      <meshStandardMaterial
        map={texture}
        color={texture ? undefined : "#0d0d0d"}
      />
    </mesh>
  );
}

/* ----------------------------------------------------------
   5.  Scene wrapper
---------------------------------------------------------- */
function Scene() {
  const [selected, setSelected] = useState<THREE.Texture | undefined>();
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 10, 5]}
        castShadow
        intensity={1}
        shadow-mapSize={[2048, 2048]}
      />
      {/* board */}
      <Board texture={selected} />
      {/* desk */}
      <mesh position={[0, 0.25, -0.7]} receiveShadow>
        <boxGeometry args={[2.5, 0.5, 1]} />
        <meshStandardMaterial color="#4a2f1f" />
      </mesh>
      {/* presenter */}
      <Presenter />
      {/* papers */}
      <Suspense fallback={null}>
        {["/paper1.jpg", "/paper2.jpg", "/paper3.jpg"].map((src, i) => (
          <Paper
            key={i}
            img={`https://picsum.photos/id/${100 + i}/800/500`}
            onSelect={setSelected}
          />
        ))}
      </Suspense>

      {/* camera */}
      <CameraRig />
    </>
  );
}

/* ----------------------------------------------------------
   6.  Camera locked in first-person
---------------------------------------------------------- */
function CameraRig() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 1.6, 1.8); // human eye height
    camera.lookAt(0, 1.5, -2.5);
  }, [camera]);
  return <OrbitControls enabled={false} />; // no interaction
}

/* ----------------------------------------------------------
   7.  Root component
---------------------------------------------------------- */
export default function PresentationRoom() {
  return (
    <LandscapeGate>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 60 }}>
        <Scene />
      </Canvas>
    </LandscapeGate>
  );
}
