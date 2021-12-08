var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 
  75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
var renderer = new THREE.WebGLRenderer( {
  canvas:document.getElementById("mycanva"),
  alpha:true,
  antialias:true
}); 

renderer.setSize( window.innerWidth, window.innerHeight ); 

document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1); 
var material = new THREE.MeshLambertMaterial( { color: 0x009050, wireframe: false } ); 
var cube = new THREE.Mesh( geometry, material ); 

var light =  new THREE.DirectionalLight( 0xffffff, 1.0 );
light.position={ x: 3, y:2, z: 1};

scene.add( cube ); 
scene.add(light)
camera.position.z = 3;

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.008;
  cube.rotation.y += 0.008;
  renderer.render(scene, camera);
}

animate();