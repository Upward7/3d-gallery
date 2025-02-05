import Core from "../core/core";
import Joystick from "nipplejs";
import { ON_KEY_DOWN, ON_KEY_UP } from "../Constants";

export default class controlManager
{
    keyStatus = {
        "KeyW": false,
		"KeyS": false,
		"KeyA": false,
		"KeyD": false,
		"Space": false
    }

    keySets = ["KeyW", "KeyS", "KeyA", "KeyD", "Space"];

    mode = "pc";

    joystickElement = document.getElementById("joystick")

    constructor() {
        this.core = new Core();
        this._bindEvent();
    }

    _bindEvent() {
        if ("ontouchstart" in window) { // 绑定移动端摇杆事件
            this.mode = "mobile"

            this._createJoystick();

            window.addEventListener("dblclick", () => {
                document.documentElement.requestFullscreen();
            })

            this.joystickManager?.on("move", (event, nipple) => {
                this.moveDegree = nipple.angle.degree;
            })

            this.joystickManager?.on("end", () => {
                this.moveDegree = undefined;
            })
        } else {

            document.addEventListener("keydown", this._onKeyDown.bind(this));
            document.addEventListener("keyup", this._onKeyUp.bind(this));
        }
    }

    _createJoystick()
    {
        this.joystickElement.style.display = "block";

        this.joystickManager = Joystick.create({
            zone: this.joystickElement,
            color: "black", 
            mode: "static", // 静态模式，摇杆固定在屏幕上
            position: {left: "50%", top: "50%"} // 摇杆的初始位置
        })
    }

    _onKeyDown(event) {
        if(this.keySets.includes(event.code))
        {
            this.keyStatus[event.code] = true;
            this.core.$emit(ON_KEY_DOWN, event.code);
        }
    }

    _onKeyUp(event) {
        if (this.keySets.includes(event.code))
            this.keyStatus[event.code] = false;
            this.core.$emit(ON_KEY_UP, event.code);
    }

}