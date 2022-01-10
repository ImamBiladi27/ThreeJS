//console.log(gsap);
const scene = new THREE.Scene();
const canvas = document.querySelector(".result");


//material
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:"#FFA500"});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const sizes = {
    width : 1920,
    height : 1080,
};

//camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer= new THREE.WebGLRenderer({
    canvas : canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const clock = new THREE.Clock();

gsap.to(cube.position, {duration: 2, y:2});

const loop = () => {
    //console.log("loop");
    const elappsedTime = clock.getElapsedTime();
    //console.log(elappsedTime);

    renderer.render(scene, camera);

    //cube.rotation.x += 0.01;
    //cube.position.y = elappsedTime ;
    //cube.position.x=Math.cos(elappsedTime);
    //cube.position.y=Math.sin(elappsedTime);
    window.requestAnimationFrame(loop);
    
};

loop();