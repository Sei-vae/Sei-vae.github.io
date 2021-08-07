import './style.css'
import * as THREE from 'https://threejs.org/build/three.module.js';
import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 500
})


// Create Scene

const scene = new THREE.Scene();

// Create Camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);

// Create Renderer

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);


// Lights

const ambientLight = new THREE.AmbientLight(0xffffff)
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)

scene.add(pointLight, ambientLight)


// Helpers

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200,50)


// scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableZoom = false;


// Geometry

const geometry2 = new THREE.SphereGeometry( 100, 100, 100 );

const wireframe = new THREE.WireframeGeometry( geometry2 );

const line = new THREE.LineSegments( wireframe );
line.material.depthTest = false;
line.material.opacity = 0.25;
line.material.transparent = true;

scene.add( line );

const geometry = new THREE.TorusGeometry(10,1,16,100)
const material = new THREE.MeshStandardMaterial({color:0xFFD700, wireframe: true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)


// Funktion+Loop

function animate(){

    requestAnimationFrame(animate);
  
    torus.rotation.x += 0.0;
    torus.rotation.y += 0.025;
    torus.rotation.z += 0.0;
  
    scene.rotation.z += 0.0;
    scene.rotation.x += 0.0;
    scene.rotation.y += 0.0;
  
    renderer.render(scene, camera);
  }


camera.position.z = 20;
camera.position.x = 0;
camera.position.y = 0;

animate()


