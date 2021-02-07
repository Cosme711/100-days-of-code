import './style.css'
import * as THREE from 'three'
import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


/**
 * Base
 */

// Canvas 
const canvas = document.querySelector('canvas.webgl')

// Scene 
const scene = new THREE.Scene()

// Debug
// const gui = new dat.GUI()

/**
 * Object
 */

// Group
const group = new THREE.Group()
group.position.z = -4
scene.add(group)

// Donuts
for(let i = 0; i < 100; i++) {
    const geometry = new THREE.TorusGeometry( 0.3, 0.2, 64, 128)
    const material = new THREE.MeshNormalMaterial()
    material.flatShading = true

    const donut = new THREE.Mesh(geometry, material)

    donut.position.x = (Math.random() - 0.5) * 10
    donut.position.y = (Math.random() - 0.5) * 10
    donut.position.z = (Math.random() - 0.5) * 10
    
    donut.rotation.x = Math.random() * Math.PI
    donut.rotation.y = Math.random() * Math.PI
    
    const scale = Math.random()
    donut.scale.set(scale, scale, scale)

    group.add(donut)

}

// Sphere
const material = new THREE.MeshStandardMaterial()
material.metalness = 1
material.roughness = 0
const cubeTextureLoader = new THREE.CubeTextureLoader()
const environmentMapTexture = cubeTextureLoader.load([
    '/textures/environmentMaps/5/px.png',
    '/textures/environmentMaps/5/nx.png',
    '/textures/environmentMaps/5/py.png',
    '/textures/environmentMaps/5/ny.png',
    '/textures/environmentMaps/5/pz.png',
    '/textures/environmentMaps/5/nz.png'
])
material.envMap = environmentMapTexture
const sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(1, 64, 64), material)
sphere.position.z = - 4
scene.add(sphere)

/**
 * Texte object
 */
const fontLoader = new THREE.FontLoader()

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new THREE.TextBufferGeometry(
            '@GressierCosme1',
            {
                font,
                size: 0.5,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 12
            }
        )
        textGeometry.center()
        const textureLoader = new THREE.TextureLoader()
        const matcapTexture = textureLoader.load('/textures/matcaps/10.png')
        const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
        const text = new THREE.Mesh(textGeometry, material)
        scene.add(text)
    }
)



/**
 * Screen sizes
 */

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})



/**
 * Camera
 */

// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 4
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true



/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

}

tick()