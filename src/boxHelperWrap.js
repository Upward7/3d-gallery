import * as THREE from "three"

export default class BoxHelperWrap {
    
    constructor(viewer, color) {
        this.viewer = viewer;
        const boxColor = color == undefined ? 0x00ffff : color;
        this.boxHelper = new THREE.BoxHelper(new THREE.Object3D(), new THREE.Color(boxColor));

        this.viewer.scene.add(this.boxHelper);
    }

    setVisible(visible) {
        this.boxHelper.visible = visible;
    }

    attach(obj) {
        this.boxHelper.setFromObject(obj);
        this.setVisible(true);
    }
}