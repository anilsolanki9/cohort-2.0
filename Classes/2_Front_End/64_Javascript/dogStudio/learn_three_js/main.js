import * as THREE from "three";

const scene = new THREE.Scene(); // created a new scene

/**
 * @params FOV, Aspect Ratio, Near, Far
 * Near, Far ki koi units nahi h, Three js just work on numbers
 */

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
scene.add(camera);

camera.position.z = 5;

console.log(camera.position);

/** MESH => Shape and Material. For Cube => Shape => Cube.
 * Cube takes 3 dimentions -> Height, Width, Depth
 * @params width, height, depth
 */

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
});

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

console.log(cube.position);

const light = new THREE.DirectionalLight(0xffffff, 1);
scene.add(light);

light.position.y = 4;
light.position.z = 4;

console.log(light.position);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);

// domElement is the final image element created by renderer
document.body.appendChild(renderer.domElement);

// Renderer ko bar bar calculations krti rhni pdti hai. Continuous change hota rhega. Renderer almost 1s me 16 bar calculations krta h. And Hme use show krana pdta h.

function animate() {
  cube.rotation.y += 0.05;
  cube.rotation.z += 0.05;
  cube.rotation.x += 0.05;

  renderer.render(scene, camera);
}

// Now animate function bar bar run hota rhega.
renderer.setAnimationLoop(animate);
