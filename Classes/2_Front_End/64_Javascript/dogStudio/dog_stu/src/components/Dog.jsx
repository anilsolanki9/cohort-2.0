import React, { useEffect } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture, useAnimations } from "@react-three/drei";
import { normalMap, texture } from "three/tsl";

const Dog = () => {
  const model = useGLTF("/models/dog.drc.glb");

  useThree(({ camera, scene, gl }) => {
    // console.log(camera.position);
    camera.position.z = 0.55;
    gl.toneMapping = THREE.ReinhardToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  });

  const { actions } = useAnimations(model.animations, model.scene);
  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  const [normalMap, sampleMatCap, branchMap, branchNormalMap] = useTexture(["/dog_normals.jpg", "/matcap/mat-2.png", "/branches_diffuse.jpg", "/branches_normals.jpg"]).map((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });

  const dogMaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    // color: 0xff0000,
    matcap: sampleMatCap,
  });

  const branchMaterial = new THREE.MeshMatcapMaterial({
    normalMap: branchNormalMap,
    map: branchMap,
  });


  // Canvas ke hr ek element ke liye ek ek bar chalega
  model.scene.traverse((child) => {
    // console.log(child.name)
    if (child.name.includes("DOG")) {
      // console.log(child.name);
      child.material = dogMaterial;
    } else {
      child.material = branchMaterial;
    }
  });

  // primitive me rotation radian me hota hai, Math.PI => 180deg

  return (
    <>
      <primitive object={model.scene} position={[0.25, -0.55, 0]} rotation={[0, (Math.PI / 180) * 35, 0]} />
      <directionalLight position={[0, 5, 5]} intensity={10} color={0xffffff} />
    </>
  );
};

export default Dog;
