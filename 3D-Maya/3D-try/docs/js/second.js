"use strict";
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';

/* import {
    GLTFLoader
} from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";

 */

let model;



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;


const loader = new GLTFLoader();
loader.load('./wizard3D.glb', (gltf) => {
    model = gltf.scene;
    scene.add(model);
    model.scale.set(0.1, 0.1, 0.1);

});

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();



/*  //camera
const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;



//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//light
const light = new THREE.PointLight('lightblue', 1);
light.position.set(3, 4, 5);
const lightHolder = new THREE.Group();
lightHolder.add(light);
scene.add(lightHolder);

//mesh


//add to scene
scene.add(light);


*/