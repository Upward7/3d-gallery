import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import Core from "../core/core";
import { Mesh, MeshBasicMaterial, Vector3, Line3, Box3, Matrix4 } from "three";
import { ON_KEY_DOWN } from "../Constants";

export default class character
{
    playerIsOnGround = false; // 是否在地面

    velocity = new Vector3();

    gravity = -50; // 重力速度

    tempVector = new Vector3();
    tempVector2 = new Vector3()

    speed = 12;

    resetPosition = new Vector3(0, 6, 0); // 重生点

    // 胶囊几何体
    capsuleInfo = {
        radius: 1, // 胶囊半径
        segment: new Line3(new Vector3(0, 0, 0), new Vector3(0, -5, 0.0)) // 顶底部半球球心坐标
    }

    tempBox = new Box3();
	tempMat = new Matrix4();
	tempSegment = new Line3();

    resetY = -25; // 掉落高度

    jumpHeight = 20; // 跳跃高度

    constructor()
    {
        this.core = new Core();
        this._createCharacter();

        this.core.$on(ON_KEY_DOWN, this._onKeyDown.bind(this));
    }

    _createCharacter()
    {
        this.character = new Mesh(
			new RoundedBoxGeometry(0.5, 2.5, 0.5, 10, 1),
			new MeshBasicMaterial({color: 0x0000ff})
		);
		this.character.geometry.translate(0, -0.25, 0); // 将胶囊下半球位于平面y以下
        
        this.character.position.copy(this.resetPosition);
        this.character.visible = false;
        this.core.scene.add(this.character);
    }

    update(delta_time, collider) {
        this._updateOrbitControls();
        this._updateCharacter(delta_time);
        this._checkCollision(delta_time, collider);
        this._updateCamera(); 
        this._checkReset();       
    }

    _updateOrbitControls() {
		this.core.controls.maxPolarAngle = Math.PI;
		this.core.controls.minDistance = 1e-4;
		this.core.controls.maxDistance = 1e-4;
	}

    // 调整玩家位置
    _updateCharacter(delta_time){
        this.velocity.y += this.playerIsOnGround ? 0 : delta_time * this.gravity;
        // 相邻时间t内的位移差s=gt^2
        this.character.position.addScaledVector(this.velocity, delta_time); // 将所传入的v与s相乘所得的乘积和这个向量相加

        // 获得当前的水平旋转，单位为弧度
        const angle = this.core.controls.getAzimuthalAngle();
        if (this.core.controlManager.mode == "pc") {
            // three.js采用的是右手坐标系
            if (this.core.controlManager.keyStatus["KeyW"]) {
                // 将轴和角度所指定的旋转应用到该向量上
                this.tempVector.set(0, 0, -1).applyAxisAngle(new Vector3(0, 1, 0), angle); 
                this.character.position.addScaledVector(this.tempVector, this.speed * delta_time);                
            }
            if (this.core.controlManager.keyStatus["KeyS"]) {
                this.tempVector.set(0, 0, 1).applyAxisAngle(new Vector3(0, 1, 0), angle);
                this.character.position.addScaledVector(this.tempVector, this.speed * delta_time);
            }
            if (this.core.controlManager.keyStatus["KeyA"]) {
                this.tempVector.set(-1, 0, 0).applyAxisAngle(new Vector3(0, 1, 0), angle);
                this.character.position.addScaledVector(this.tempVector, this.speed * delta_time);
            }
            if (this.core.controlManager.keyStatus["KeyD"]) {
                this.tempVector.set(1, 0, 0).applyAxisAngle(new Vector3(0, 1, 0), angle);
                this.character.position.addScaledVector(this.tempVector, this.speed * delta_time);
            }
        }
        else
        {
            // 根据移动端操作移动角色方位
            const degree = this.core.controlManager.moveDegree;
            if (degree) {
                // 移动端摇杆向前是90度，向左是180，向后是270
                const angle = (degree - 90) * (Math.PI / 180);
                // applyAxisAngle正值是逆时针旋转
                this.tempVector.set(0, 0, -1).applyAxisAngle(new Vector3(0, 1, 0), angle)
                this.tempVector.applyQuaternion(this.core.camera.quaternion);
                this.character.position.addScaledVector(this.tempVector, this.speed * delta_time)
            }
        }
        this.character.updateMatrixWorld();
    }

    // 调整相机视角
    _updateCamera()
    {
        this.core.camera.position.sub(this.core.controls.target);
        // OrbitControls的target属性表示相机的目标点
        this.core.controls.target.copy(this.character.position);
        this.core.camera.position.add(this.character.position);
    }

    _checkCollision(delta_time, collider) {
        const capsuleInfo = this.capsuleInfo;
        // 轴对齐的包围盒
        this.tempBox.makeEmpty();
        this.tempMat.copy(collider.matrixWorld).invert();
        this.tempSegment.copy(capsuleInfo.segment);

        // 获取胶囊体在碰撞体局部空间中的位置
        this.tempSegment.start.applyMatrix4(this.character.matrixWorld).applyMatrix4(this.tempMat);
        this.tempSegment.end.applyMatrix4(this.character.matrixWorld).applyMatrix4(this.tempMat);

        // 获取胶囊体的轴对齐边界框
		this.tempBox.expandByPoint(this.tempSegment.start);
		this.tempBox.expandByPoint(this.tempSegment.end);

		this.tempBox.min.addScalar(-capsuleInfo.radius);
		this.tempBox.max.addScalar(capsuleInfo.radius);

        // 使用碰撞体的边界树进行碰撞检测
        // shapecast()函数用于在边界树中进行形状投射碰撞检测，返回所有与指定形状相交的物体
        collider.geometry?.boundsTree?.shapecast({
            // 判断碰撞体的边界盒是否与指定的边界盒相交
            intersectsBounds: box => box.intersectsBox(this.tempBox),
            // 在与碰撞体边界盒相交的情况下，进一步检测碰撞体是否与三角形相交
            // 如果相交，将会执行一些操作，用于调整胶囊碰撞体的位置以避免穿透
            intersectsTriangle: tri => {
                const triPoint = this.tempVector;
                const capsulePoint = this.tempVector2;

                // 计算三角形与胶囊碰撞体之间的最近点距离
                // 计算出来以后，相应赋值，triPoint是对应三角形上的点，capsulePoint是对应胶囊碰撞体的点
                const distance = tri.closestPointToSegment(this.tempSegment, triPoint, capsulePoint);
                // 如果距离小于半径，表示碰撞发生
                if (distance < capsuleInfo.radius)
                {
                    const depth = capsuleInfo.radius - distance; // 碰撞的深度
                    const direction = capsulePoint.sub(triPoint).normalize(); // 碰撞的法线向量

                    this.tempSegment.start.addScaledVector(direction, depth);
                    this.tempSegment.end.addScaledVector(direction, depth);
                }
            }
        })

        // 检查后得到胶囊体在世界空间中的调整位置
		// capsule_info.segment.start被假定为玩家模型的原点。
        const newPosition = this.tempVector;
        newPosition.copy(this.tempSegment.start).applyMatrix4(collider.matrixWorld);

        // 检查移动了多少
        const deltaVector = this.tempVector2;
        deltaVector.subVectors(newPosition, this.character.position);        

        this.playerIsOnGround = deltaVector.y > Math.abs(delta_time * this.velocity.y * 0.25);

        const offset = Math.max(0.0, deltaVector.length() - 1e-5);
		deltaVector.normalize().multiplyScalar(offset);

        // 调整player模型位置
        this.character.position.add(deltaVector);

        if (!this.playerIsOnGround) {
            deltaVector.normalize();
            this.velocity.addScaledVector(deltaVector, - deltaVector.dot(this.velocity))
        }
        else
        {
            this.velocity.set(0, 0, 0);
        }

    }

    /*
	* 掉落地图检测
	* */
	_checkReset() {
	if (this.character.position.y < this.resetY) {
		this._reset();
	}
	}

    _reset() {
		this.velocity.set(0, 0, 0);
		this.character.position.copy(this.resetPosition);
		this.core.camera.position.sub(this.core.controls.target);
		this.core.controls.target.copy(this.character.position);
		this.core.camera.position.add(this.character.position);
		this.core.controls.update();
	}

    // 跳跃事件
    _onKeyDown(keyCode)
    {
        if (keyCode == "Space" && this.playerIsOnGround)
        {
            this.velocity.y = this.jumpHeight;
        }
    }
}