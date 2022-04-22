import { AcGameObject } from '/static/js/ac_game_object/base.js';

export class Player extends AcGameObject {
    constructor(root, info) {
        super();

        this.root = root;
        this.id = info.id;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width;
        this.height = info.height;
        this.color = info.color;
        this.direction = 1;

        this.vx = 0;
        this.vy = 0;

        this.speedx = 400; //水平速度
        this.speedy = 1000;//跳起初始速度
        this.gravity = 50;//垂直加速度
        this.status = 3; //0:idle, 1: forward, 2: backward, 3: jump, 4: hit, 5: hited, 6: dead

        this.ctx = this.root.game_map.ctx;
    }

    start() {

    }

    move() {
        this.vy += this.gravity;

        this.x += this.vx * this.timedelta / 1000;
        this.y += this.vy * this.timedelta / 1000;
        if (this.y > 450) {
            this.y = 450;
            this.vy = 0;
        }
    }

    update() {
        this.move();
        this.render();

    }

    render() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}