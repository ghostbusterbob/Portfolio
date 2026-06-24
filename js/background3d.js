import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.168.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/loaders/GLTFLoader.js';

const canvas = document.getElementById("bg3d");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// UPDATED CAMERA POSITION
camera.position.set(-0.120018, -14.5686, 3.61475);

// UPDATED CAMERA ROTATION (80 degrees → radians)
camera.rotation.x = THREE.MathUtils.degToRad(80);

const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

scene.add(new THREE.AmbientLight(0xffffff, 2));

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(3, 5, 5);
scene.add(light);

const loader = new GLTFLoader();

let model;

loader.load(
    "3dmodels/Hallway.glb",
    (gltf) => {
        model = gltf.scene;

        model.scale.set(2, 2, 2);
        model.position.set(0, -1, 0);

        scene.add(model);

        // render ONCE after model loads
        renderer.render(scene, camera);
    }
);

// NO ANIMATION LOOP

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    // re-render on resize
    renderer.render(scene, camera);
});

console.log(canvas);