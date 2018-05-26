//Setting up the sene
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xbad4ff);
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, .01, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//light

var light = new THREE.PointLight(0xffffff, 1)
light.position.set(1, 1, 5);


var ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(light);
scene.add(ambientLight);






// var ballGeometry = new THREE.IcosahedronGeometry(1, 0);
// var ballMaterial = new THREE.MeshPhongMaterial({color: 0x7c0707});
// var ball = new THREE.Mesh(ballGeometry, ballMaterial);
// scene.add(ball);
//camera positioning
 camera.position.z = 9;

//animation

function animate() {
	requestAnimationFrame( animate );
 

	renderer.render( scene, camera );
}
animate();