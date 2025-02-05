import Core from "../core/core";
import { BOARD_TEXTURES, COLLISION_SCENE_URL, SCENE_TEXTURES, ON_LOAD_MODEL_FINISH, ON_LOAD_PROGRESS, BOARDS_INFO } from "../Constants.js"
import { isMesh } from "../utils/typeAssert.js";
import { SRGBColorSpace, Mesh, MeshBasicMaterial } from "three";
import { MeshBVH, StaticGeometryGenerator } from "three-mesh-bvh";

export default class Environment {
    isLoadFinished = false;
    textureBoards = {};
    textureScene = {};
    galleryBoards = {};
    raycastObjects = [];

    constructor() {
        this.core = new Core();
        this.loader = this.core.loader;
        this._loadScenes();
    }

    async _loadScenes() {
        try {

            await this._loadSceneTexture();
            await this._loadBoardsTexture();
            await this._loadSceneAndCollisionDetection();
            this._configureGallery();
            this.isLoadFinished = true;
            this.core.$emit(ON_LOAD_MODEL_FINISH);

        } catch (error) {
            console.log(e);
        }
    }

    _loadSceneAndCollisionDetection() {
        return new Promise(resolve => {
            this.loader.gltfLoader.load(COLLISION_SCENE_URL, gltf => {
                this.collisionScene = gltf.scene;
                this.collisionScene.updateMatrixWorld(true);

                // 烘焙纹理图
                const bakedMaterial = new MeshBasicMaterial({ map: this.textureScene });

                this.collisionScene.traverse(item => {
                    // 提取相框元素
                    if (/gallery.*_board/.test(item.name) && isMesh(item)) {
                        this.galleryBoards[item.name] = item;
                        this.raycastObjects.push(item);
                    }
                    else {
                        item.material = bakedMaterial;
                    }
                })

                // 生成静态几何体
                const staticGenerator = new StaticGeometryGenerator(this.collisionScene);
                // 指定只考虑几何体的位置属性
                staticGenerator.attributes = ["position"]
                // 生成一个包含所有静态几何体的合并几何体
                const mergedGeometry = staticGenerator.generate();
                // 为合并几何体生成一个边界体积层次结构，选项确保BVH在创建时立即生成，而不是延迟到需要时再生成
                mergedGeometry.boundsTree = new MeshBVH(mergedGeometry, { lazyGeneration: false })
                this.collider = new Mesh(mergedGeometry);

                this.core.scene.add(this.collisionScene);
                resolve();
            }, (event) => {
                // this.core.$emit(ON_LOAD_PROGRESS, {url: COLLISION_SCENE_URL, loaded: event.loaded, total: event.total})
            })
        })
    }

    async _loadBoardsTexture() {
        for (let i = 0; i < BOARD_TEXTURES.length; i++) {
            this.textureBoards[i + 1] = await this.loader.textureLoader.loadAsync(BOARD_TEXTURES[i])
        }
        for (const key in this.textureBoards) {
            const texture = this.textureBoards[key]
            texture.colorSpace = SRGBColorSpace;

            // 根据纹理的宽高比和平面的宽高比，计算需要的缩放比例
            const texture_aspect_ratio = texture.image.width / texture.image.height;
            let scale_x = 1;
            let scale_y = 1;

            if (texture_aspect_ratio > 1) {
                scale_x = 1 / texture_aspect_ratio;
            } else {
                scale_y = texture_aspect_ratio;
            }

            // 设置纹理的偏移和重复以进行居中和适应
            texture.offset.set(0.5 - scale_x / 2, 0.5 - scale_y / 2);
            texture.repeat.set(scale_x, scale_y);
            texture.needsUpdate = true;
        }

        return Promise.resolve();
    }

    // 加载模型场景的纹理图片
    async _loadSceneTexture() {
        this.textureScene = await this.loader.textureLoader.load(SCENE_TEXTURES);
        this.textureScene.flipY = false;
        this.textureScene.colorSpace = SRGBColorSpace;
        return Promise.resolve();
    }

    _configureGallery() {
        for (const key in this.textureBoards) {
            const board = this.galleryBoards[`gallery${key}_board`];
            const boardMaterial = new MeshBasicMaterial({ map: this.textureBoards[key] });
            board.material = boardMaterial;

            board.userData = {
                title: BOARDS_INFO[key].title
            }
        }
    }

}