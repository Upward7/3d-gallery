import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Core from "../core/core";
import * as THREE from "three"
import {ON_LOAD_PROGRESS} from "../Constants"

export default class Loader
{
    constructor()
    {
        this.core = new Core();
        this.gltfLoader = new GLTFLoader();
        this.textureLoader = new THREE.TextureLoader();
        this.audioLoader = new THREE.AudioLoader();

        THREE.DefaultLoadingManager.onProgress = (url, loaded, total) => {
            this.core.$emit(ON_LOAD_PROGRESS, {url, loaded, total})
        }
    }
}