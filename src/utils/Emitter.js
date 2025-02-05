import mitt from "mitt"

export default class Emitter {
    constructor() {
        this.emitterInstance = mitt();
    }

    $on(name, handler) {
        this.emitterInstance.on(name, handler)
    }

    $emit(name, ...args) {
        this.emitterInstance.emit(name, args);
    }

    $off(name, handler) {
        this.emitterInstance.off(name, handler);
    }
}