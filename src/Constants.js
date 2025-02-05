/*
* Model Resources
* */
export const COLLISION_SCENE_URL = new URL("./assets/models/modify/test.glb", import.meta.url).href;

/*
* Texture Resources
* */
export const BOARD_TEXTURES = [
	new URL("./assets/boards/modify/1.png", import.meta.url).href,
	new URL("./assets/boards/modify/2.jpg", import.meta.url).href,
	new URL("./assets/boards/modify/3.jpeg", import.meta.url).href,
	new URL("./assets/boards/modify/4.jpg", import.meta.url).href,
	new URL("./assets/boards/modify/5.jpeg", import.meta.url).href,
	new URL("./assets/boards/modify/6.jpeg", import.meta.url).href,
	new URL("./assets/boards/modify/7.jpeg", import.meta.url).href,
	new URL("./assets/boards/modify/8.jpg", import.meta.url).href,
	new URL("./assets/boards/modify/9.jpg", import.meta.url).href,
	new URL("./assets/boards/modify/10.jpg", import.meta.url).href,
	new URL("./assets/boards/modify/11.jpeg", import.meta.url).href,
	new URL("./assets/boards/modify/12.jpg", import.meta.url).href,
];
export const SCENE_TEXTURES = new URL("./assets/models/modify/test.jpg", import.meta.url).href;

/* 
Events
*/
export const ON_LOAD_PROGRESS = "on-load-progress";
export const ON_LOAD_MODEL_FINISH = "on-load-model-finish";
export const ON_KEY_DOWN = "on-key-down";
export const ON_KEY_UP = "on-key-up";
export const ON_CLICK_RAY_CAST = "on-click-ray-cast";
export const ON_SHOW_TOOLTIP = "on-show-tooltip";
export const ON_HIDE_TOOLTIP = "on-hide-tooltip";


export const BOARDS_INFO = {
	1: {
		title: "三小只叠叠乐"
	},
	2: {
		title: "三小只花丛"
	},
	3: {
		title: "小八埃及"
	},
	4: {
		title: "小八薯片"
	},
	5: {
		title: "乌萨奇蜷手"
	},
	6: {
		title: "小八跳舞"
	},
	7: {
		title: "吉伊吃糖"
	},
	8: {
		title: "寿喜烧"
	},
	9: {
		title: "养乐多"
	},
	10: {
		title: "小八游泳"
	},
	11: {
		title: "小八上网"
	},
	12: {
		title: "小八被料理"
	},
};