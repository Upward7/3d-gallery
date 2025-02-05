import BoxHelperWrap from "../boxHelperWrap";
import character from "../character/character";
import { ON_CLICK_RAY_CAST, ON_HIDE_TOOLTIP, ON_LOAD_MODEL_FINISH, ON_LOAD_PROGRESS, ON_SHOW_TOOLTIP } from "../Constants";
import Core from "../core/core";
import Environment from "../environment/environment";
import rayCasterControls from "../rayCasterControls/rayCasterControls";

export default class World
{
    constructor()
    {
        this.core = new Core();

        // this.core.$on(ON_CLICK_RAY_CAST, this._onClickRayCast.bind(this));
        // this.core.$on(ON_LOAD_PROGRESS, this._onLoadProgress.bind(this));
        this.core.$on(ON_LOAD_MODEL_FINISH, this._onLoadModelFinish.bind(this));
        this.core.$on(ON_SHOW_TOOLTIP, this._onShowTooltip.bind(this));
        this.core.$on(ON_HIDE_TOOLTIP, this._onHideTooltip.bind(this));

        this.environment = new Environment();
        this.rayCasterControls = new rayCasterControls();
        this.character = new character();

        this.boxHelperWrap = new BoxHelperWrap(this.core);
    }

    update(delta_time)
    {
        if (this.environment.collider && this.environment.isLoadFinished)
        {
            this.character.update(delta_time, this.environment.collider);
            this.rayCasterControls.updateTooltipRayCast(this.environment.raycastObjects)
        }
    }

    _onClickRayCast(object)
    {
        console.log(object); 
        // 点击画框查看具体信息
        
    }

    _onShowTooltip([{msg}]) {
        document.querySelector(".preview-tooltip").classList.remove("hide");
        document.querySelector(".preview-tooltip").innerText = msg;
    }

    _onHideTooltip() {
        document.querySelector(".preview-tooltip").classList.add("hide");
    }

    async _onLoadModelFinish()
    {
        document.querySelector(".loading").remove();

        // this.rayCasterControls.bindClickRayCastObj(this.environment.raycastObjects);
    }

    _onLoadProgress([{url, loaded, total}])
    {
        const percentage = ((loaded / total) * 100).toFixed(2);
        let loadingText;
        if (/.*\.(blob|glb)$/i.test(url)) {
			loadingText = `"加载场景模型"：${percentage}%`;
		}
		if (/.*\.(jpg|png|jpeg)$/i.test(url)) {
			loadingText = "加载图片素材中...";
		}
        document.querySelector(".loading").querySelector(".progress").textContent = loadingText;
    }
}