// PresentationRoom.tsx – polished human figure (taller, black suit, short hair, sunglasses)
import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

/* ---------- LANDSCAPE GATE ---------- */
function LandscapeGate({ children }: { children: React.ReactNode }) {
  const [ok, setOk] = useState(true);
  useEffect(() => {
    const check = () => setOk(window.innerWidth > window.innerHeight);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return ok ? (
    <>{children}</>
  ) : (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      rotate to landscape
    </div>
  );
}

/* ---------- POLISHED HUMAN ---------- */
function Presenter() {
  const ref = useRef<THREE.Group>(null!);
  useFrame(() => {
    if (ref.current)
      ref.current.rotation.y = Math.sin(Date.now() * 0.0006) * 0.15; // subtle idle sway
  });

  const suitColor = "#0a0a0a"; // deep black
  const skinColor = "#d3a081"; // warm skin
  const glassColor = "#000000"; // dark sunglasses

  return (
    <group ref={ref} position={[-2.7, 0, 0]}>
      {/* body (taller) */}
      <mesh castShadow>
        <capsuleGeometry args={[0.28, 1.8]} />
        <meshStandardMaterial
          color={suitColor}
          roughness={0.2}
          metalness={0.05}
        />
      </mesh>

      {/* head */}
      <mesh castShadow position={[0, 1.95, 0]}>
        <sphereGeometry args={[0.28]} />
        <meshStandardMaterial color={skinColor} />
      </mesh>

      {/* short hair (crew cut) */}
      <mesh castShadow position={[0, 2.05, 0]}>
        <sphereGeometry args={[0.29, 16, 12]} />
        <meshStandardMaterial color={suitColor} roughness={0.3} />
      </mesh>

      {/* sunglasses */}
      <mesh position={[0, 1.98, 0.22]}>
        <boxGeometry args={[0.45, 0.12, 0.05]} />
        <meshStandardMaterial color={glassColor} transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

/* ---------- DESK PAPERS (text triggers) ---------- */
const papers = [
  { title: "Scale Blueprint", text: "30-day roadmap to 2× revenue" },
  { title: "Data Pipeline", text: "Real-time KPI dashboard" },
  { title: "Ops Sprint", text: "Reduce meetings by 50 %" },
];

function Paper({
  data,
  onSelect,
  position,
}: {
  data: { title: string; text: string };
  onSelect: (text: string) => void;
  position: [number, number, number];
}) {
  return (
    <mesh
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={() => onSelect(data.text)}
    >
      <planeGeometry args={[0.8, 0.5]} />
      <meshStandardMaterial color="#ffffff" />
      <Text
        position={[0, 0, 0.01]}
        fontSize={0.1}
        color="#000"
        anchorX="center"
        anchorY="middle"
      >
        {data.title}
      </Text>
    </mesh>
  );
}

/* ---------- 3-D SCENE ---------- */
function Scene3D() {
  const [boardText, setBoardText] = useState("Select a paper…");

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} castShadow intensity={1} />

      {/* blackboard */}
      <mesh position={[0, 2.2, -3]} receiveShadow>
        <planeGeometry args={[4, 2.2]} />
        <meshStandardMaterial color="#0a0a0a" />
        <Text
          position={[0, 0, 0.01]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={3.5}
        >
          {boardText}
        </Text>
      </mesh>

      {/* presenter */}
      <Presenter />

      {/* dark-brown desk */}
      <mesh receiveShadow position={[0, 0.25, 1]} scale={[3, 0.5, 1.5]}>
        <boxGeometry />
        <meshStandardMaterial
          color="#3a2418"
          roughness={0.25}
          metalness={0.1}
        />
      </mesh>

      {/* papers */}
      <Suspense fallback={null}>
        {papers.map((p, i) => (
          <Paper
            key={i}
            data={p}
            onSelect={setBoardText}
            position={[(i - 1) * 0.9, 0.51, 1]}
          />
        ))}
      </Suspense>

      {/* camera */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.5}
        target={[0, 1.5, 0]}
      />
    </>
  );
}

/* ---------- ROOT ---------- */
export default function PresentationRoom() {
  return (
    <LandscapeGate>
      <div className="w-full h-screen">
        <Canvas shadows camera={{ position: [0, 1.8, 4], fov: 60 }}>
          <Scene3D />
        </Canvas>
      </div>
    </LandscapeGate>
  );
}
