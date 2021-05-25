import './style.css'

import * as THREE from 'three';
import * as THREE from 'fileUrl';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);


// Geometry

const geometry = new THREE.TorusGeometry(10,1,16,100)
const material = new THREE.MeshStandardMaterial({color:0xFF6347});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)


// Lights

const ambientLight = new THREE.AmbientLight(0xffffff)
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)

scene.add(pointLight, ambientLight)


// Helpers

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200,50)

//scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);


// add Random Stuff

function addStar(){
  const geometry = new THREE.SphereGeometry(0.25, 24,24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff})

  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100) );

  star.position.set(x,y,z);
  scene.add(star)
}

Array(300).fill().forEach(addStar)




// Load 3DModel

const loader = new GLTFLoader();

loader.load( 'Model/scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );
  scene.position.set(0.5,.0,-4);

}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.z =  0.002;
camera.position.x =  0.0002;
camera.position.y =  -0.0002;


// Funktion+Loop

function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.005;
  torus.rotation.y += 0.0005;
  torus.rotation.z += 0.005;

  scene.rotation.z += 0.0;
  scene.rotation.x += 0.0;
  scene.rotation.y += 0.005;


  controls.update();

  renderer.render(scene, camera)
}




// Funktion Move Camera

function moveCamera(){

  const t = document.body.getBoundingClientRect().top;
  //const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.002;
  camera.position.x = t * -0.0002;
  //camera.position.y = t * -0.002;

 
  
}

document.body.onscroll = moveCamera


animate()







///////////////////////
// function addStar(){

// const x = 0, y = 0;

// const heartShape = new THREE.Shape();

// heartShape.moveTo( x + 5, y + 5 );
// heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
// heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
// heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
// heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
// heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
// heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

// const geometry = new THREE.ShapeGeometry( heartShape );
// const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );

// const mesh = new THREE.Mesh( geometry, material ) ;



// const [x2,y2,z2] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100) );
// mesh.position.set(x2,y2,z2);

// scene.add( mesh );
// }

// Array(100).fill().forEach(addStar)


//const spaceTexture = new THREE.TextureLoader().load('space.png')
//scene.background = spaceTexture;