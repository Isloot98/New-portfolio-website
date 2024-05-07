"use client ";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useTexture } from "@react-three/drei";

const Controller = () => {
  const group = useLoader(OBJLoader, "/uploads_files_2940281_dual+sense.obj");
  const [rotation, setRotation] = useState([0, 0, 0]);
  const texture = useTexture("/Plastic015B.png");

  const applyTextureToMeshes = (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: texture,
        });
      }
    });
  };

  useEffect(() => {
    applyTextureToMeshes(group);
  }, [group, texture]);

  const handleClick = () => {
    gsap.to(group.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });
  };

  return (
    <group onClick={handleClick}>
      <primitive object={group} scale={2} rotation={rotation} />
    </group>
  );
};

const Bastion = () => {
  const group = useLoader(OBJLoader, "/Bastion_Final.obj");
  const metalTexture = useTexture("/Bastion.jpg");
  const plasticTexture = useTexture("/internal_ground_ao_texture.jpeg");

  const handleClick = () => {
    gsap.to(group.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });
  };

  const applyTextureToMeshes = (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: metalTexture,
        });
      }
    });
  };
  useEffect(() => {
    applyTextureToMeshes(group);
  }, [group, plasticTexture, metalTexture]);

  useEffect(() => {
    group.rotation.y = Math.PI;
  }, [group]);

  return (
    <group onClick={handleClick}>
      <primitive object={group} castShadow={true} scale={0.5} />
    </group>
  );
};

const Earth = () => {
  const group = useLoader(OBJLoader, "/EarthLowPoly.obj");
  const metalTexture = useTexture("/earth_vegetation_index.png");
  const plasticTexture = useTexture("/internal_ground_ao_texture.jpeg");

  const handleClick = () => {
    gsap.to(group.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });
  };

  const applyTextureToMeshes = (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: metalTexture,
        });
      }
    });
  };
  useEffect(() => {
    applyTextureToMeshes(group);
  }, [group, plasticTexture, metalTexture]);

  return (
    <group onClick={handleClick}>
      <primitive object={group} castShadow={true} scale={2} />
    </group>
  );
};

const Dumbell = () => {
  const group = useLoader(OBJLoader, "/uploads_files_4469660_Dumbbell02.obj");
  const texture = useTexture("/Metal029.png");
  const handleClick = () => {
    gsap.to(group.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });
  };

  const applyTextureToMeshes = (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: texture,
        });
      }
    });
  };

  useEffect(() => {
    applyTextureToMeshes(group);
  }, [group, texture]);

  return (
    <group onClick={handleClick}>
      <primitive object={group} scale={1.25} />{" "}
    </group>
  );
};

export default function Shapes() {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function createRugbyBallGeometry(texture) {
  const segments = 32;
  const phiStart = 0;
  const phiLength = Math.PI * 2;
  const thetaStart = 0;
  const thetaLength = Math.PI;

  const geometry = new THREE.SphereGeometry(
    3,
    segments,
    segments,
    phiStart,
    phiLength,
    thetaStart,
    thetaLength
  );

  const positions = geometry.attributes.position;
  for (let i = 0; i < positions.count; i++) {
    const vertex = new THREE.Vector3();
    vertex.fromBufferAttribute(positions, i);
    vertex.x *= 1.1;
    vertex.y *= 0.74;
    vertex.z *= 0.74;
    positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }

  geometry.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.5,
    metalness: 0.1,
  });

  return { geometry, material };
}

function Geometries() {
  const rugbyBallTexture = useTexture("/Plastic004.png");

  const geometries = [
    {
      position: [0, 0, 0],
      r: 0.3,
      geometry: createRugbyBallGeometry(rugbyBallTexture).geometry,
      material: createRugbyBallGeometry(rugbyBallTexture).material,
    },
    {
      position: [1, -0.75, 4],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(2),
    },
    {
      position: [-1.4, 2, -4],
      r: 0.4,
      object: <Earth />,
    },
    {
      position: [-0.8, -0.75, 5],
      r: 0.3,
      object: <Dumbell />,
    },
    {
      position: [1.6, 1.6, -4],
      r: 0.5,
      object: <Controller />,
    },
    {
      position: [4, 1.5, -6],
      r: 0.4,
      object: <Bastion />,
    },
  ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    new THREE.MeshStandardMaterial({
      color: 0x8b4513,
      roughness: 0.5,
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x007bff, // Blue plastic
      roughness: 0.4,
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xffc107, // Gold metal
      roughness: 0.2,
      metalness: 0.8,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x808080, // Gray plastic
      roughness: 0.6,
      metalness: 0,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xffffff, // White plastic
      roughness: 0.4,
      metalness: 0,
    }),
  ];

  return geometries.map(({ position, r, geometry, material, object }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2)}
      geometry={geometry}
      materials={materials}
      r={r}
      material={material}
      object={object}
    />
  ));
}

function Geometry({ r, position, geometry, material, object, materials }) {
  const groupRef = useRef();
  const [visible, setVisible] = useState(true);

  const startingMaterial = material ? material : getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    const mesh = e.object;

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });

    if (mesh.parent && mesh.parent.type === "Group") {
      const children = mesh.parent.children;
      children.forEach((child) => {
        if (child.type === "Mesh") {
          child.material = getRandomMaterial();
        }
      });
    } else {
      mesh.material = getRandomMaterial();
    }
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(groupRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "elastic.out(1,0.3)",
        delay: gsap.utils.random(0, 0.5),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={groupRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        {object ? (
          object
        ) : (
          <mesh
            geometry={geometry}
            material={startingMaterial}
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            visible={visible}
          />
        )}
      </Float>
    </group>
  );
}
