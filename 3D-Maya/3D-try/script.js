"use strict";

const THREE = require('three');
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js';

import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js';

let model;
let MODEL_ROTATION = 0.002;
let LINE_COLOR = 0x000000;


const scene = new THREE.Scene();
const color2 = new THREE.Color(0x000000);
scene.background = color2;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.9, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(window.innerWidth / 100, window.innerHeight / 100, 10);
const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
    color: LINE_COLOR,
    linewidth: 0.1
}));

line.translateY(2);
scene.add(line);

camera.position.z = 6;
camera.position.y = 2;

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();
loader.load('../../wizard2.glb', (gltf) => {
    model = gltf.scene;
    scene.add(model);
    model.scale.set(0.09, 0.09, 0.09);

});

//light
const light1 = new THREE.PointLight('lightblue', 2);
light1.position.set(3, 10, 25);
const lightHolder = new THREE.Group();
lightHolder.add(light1);



scene.add(lightHolder);
const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper(light1, sphereSize);
scene.add(pointLightHelper);

function animate() {
    requestAnimationFrame(animate);
    model.rotation.y += MODEL_ROTATION;
    /*     cube.rotation.x += 0.01;
        cube.rotation.y += 0.01; */

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