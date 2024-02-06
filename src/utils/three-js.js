import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const WINDOW_HEIGHT = 500;
const WINDOW_WIDTH = 400;

const camera = new THREE.PerspectiveCamera(90, WINDOW_WIDTH / WINDOW_HEIGHT, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);

const canvas = document.getElementById("canvas");

if (canvas) {
    canvas.appendChild(renderer.domElement);
}

renderer.setClearColor(0xabcdef, 0);

// Load GLB model
const loader = new GLTFLoader();
loader.load(
    '../static/fr.glb',
    function (gltf) {
        const model = gltf.scene;
        model.scale.set(0.6, 0.6, 0.6);

        // Set model position to the center
        model.position.set(0, -1, 0);

        scene.add(model);

        const box = new THREE.BoxHelper(model, 0xffff00);
        // scene.add(box);
    }
)

camera.position.z = 2.4; 

camera.lookAt(0, 0, 0); 

const light = new THREE.AmbientLight(0x7678ab, 3.6);
scene.add(light);


const controls = new OrbitControls(camera , renderer.domElement )

controls.enableZoom = false;

controls.touches.ONE = THREE.TOUCH.PAN;
controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;

export function animate() {
    requestAnimationFrame(animate);

    if (scene.children.length > 0) {
        if (scene.children[1]) {
            const model = scene.children[1];
            model.rotation.y += 0.01;
        }
    }

    renderer.render(scene, camera);
}
