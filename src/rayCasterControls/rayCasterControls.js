import { Raycaster, Vector2 } from "three";
import Core from "../core/core";
import { ON_CLICK_RAY_CAST, ON_HIDE_TOOLTIP, ON_SHOW_TOOLTIP } from "../Constants";

export default class rayCasterControls
{
    constructor()
    {
        this.core = new Core();

        this.clickRaycaster = new Raycaster();
        this.clickRaycaster.far = 18; // 点击检测距离

        this.tooltipRaycaster = new Raycaster();
        this.tooltipRaycaster.far = 15;

        this.hoverPoint = new Vector2(0, 0);
        this.mousePoint = new Vector2()
    }

    updateTooltipRayCast(raycastObjects) {
        if (raycastObjects.length) {
            this.tooltipRaycaster.setFromCamera(this.hoverPoint, this.core.camera);
            const intersects = this.tooltipRaycaster.intersectObjects(raycastObjects);
            if (intersects.length) // && intersects[0].object.userData.title
            {
                this.core.$emit(ON_SHOW_TOOLTIP, {msg: intersects[0].object.userData.title})
            }
            else
            {
                this.core.$emit(ON_HIDE_TOOLTIP);
            }
        }
    }

    bindClickRayCastObj(raycastObjects) {
        let downX = 0;
        let downY = 0;

        document.body.addEventListener("pointerdown", (event) => {
            downX = event.screenX;
            downY = event.screenY;
        });

        document.body.addEventListener("pointerup", (event) => {
            const offsetX = Math.abs(event.screenX - downX)
            const offsetY = Math.abs(event.screenY - downY)

            // 点击偏移量限制
            if (offsetX <= 1 && offsetY <= 1 && event.target instanceof HTMLCanvasElement)
            {
                this.mousePoint.x = (event.clientX / window.innerWidth) * 2 - 1;
                this.mousePoint.y = - (event.clientY / window.innerHeight) * 2 + 1;

                this.clickRaycaster.setFromCamera(this.mousePoint, this.core.camera);
                const intersects = this.clickRaycaster.intersectObjects(raycastObjects);
                if (intersects.length)
                {
                    this.core.$emit(ON_CLICK_RAY_CAST, intersects[0].object);
                }
            }
        })
    }
}