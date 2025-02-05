import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Loader from "../loader/loader";
import Emitter from "../utils/Emitter";
import World from "../world/world";
import controlManager from "../controlManager/controlManager";

let instance = null;

export default class Core extends Emitter {

    constructor(canvas) {

        super();

        // Singleton
        if (instance)
        {
            return instance;
        }
        instance = this;

        this.canvas = canvas;

        this._initScene();
        this._initCamera();
        this._initControls();
        this._initRenderer();
        this._initResponsiveResize();
        this.clock = new THREE.Clock();

        this.loader = new Loader();
        this.world = new World();
        this.controlManager = new controlManager(); // 键盘管理
    }

    render() {
        this.renderer.setAnimationLoop(() => {
            const delta_time = this.clock.getDelta();
            this.world.update(delta_time);
            this.renderer.render(this.scene, this.camera);
            this.controls.update();
        })
    }

    _initScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);
    }

    _initCamera() {
        this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 3);
    }

    _initControls()
    {
        this.controls = new OrbitControls(this.camera, this.canvas);
        this.controls.enableDamping = true;
    }

    _initRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.shadowMap.enabled = true;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    _initResponsiveResize() {
        window.addEventListener("resize", () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        })
    }
}