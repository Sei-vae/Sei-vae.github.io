
// Geometry

// const geometry = new THREE.PlaneGeometry( 100, 100 );
// const material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
// const plane = new THREE.Mesh( geometry, material );
// scene.add( plane );

// plane.rotation.x = Math.PI / 2;


// add Random Stuff

// function addStar(){
//   const geometry = new THREE.SphereGeometry(0.25, 24,24);
//   const material = new THREE.MeshStandardMaterial({color: 0xffffff})

//   const star = new THREE.Mesh(geometry,material);

//   const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100) );

//   star.position.set(x,y,z);
//   scene.add(star)
// }


// Array(300).fill().forEach(addStar);


// function addSphere(){
//     const geometry = new THREE.SphereGeometry( 2.5, 32, 16 );
//     const material = new THREE.MeshBasicMaterial( { color: 0xffffff} );
//     const sphere = new THREE.Mesh( geometry, material );
   
//     const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100) );

//     sphere.position.set(x,y,z);
//     scene.add(sphere)

// }
// Array(300).fill().forEach(addSphere);


// window.addEventListener("wheel", function(e) {
//     camera.position.y += 100;
//   }, true);


// Funktion Move Camera

// function moveCamera(){

//   const t = document.body.getBoundingClientRect().top;
//   camera.position.z = t * -0.002;
//   camera.position.x = t * -0.0002;
// }


// window.addEventListener("scroll", function(){
//     var st = window.pageYOffset || document.documentElement.scrollTop; 
//     if (st > lastScrollTop){
//         camera.position.y -= 1;
//         // lastScrollTop -= 1000;
//         console.log("scroll top "+ lastScrollTop);
//     } else {
//         camera.position.y += 1;
//         // lastScrollTop += 1000;
//         console.log("scroll down "+ lastScrollTop);

//     }
//     // lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//  }, true);



// var lastScrollTop = document.documentElement.scrollTop;

// window.addEventListener("scroll", function(){
//     var st = document.documentElement.scrollTop; 
//     if (st < lastScrollTop){
//         camera.position.y -= 1;
//         lastScrollTop -= 1;
//         console.log("scroll top "+ lastScrollTop);
//     } else {
//         camera.position.y += 1;
//         lastScrollTop += 1;
//         console.log("scroll down "+ lastScrollTop);

//     }
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//  }, true);
