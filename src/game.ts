import { GameScene } from "./gameScene";
import * as Phaser from "phaser";

export class Game extends Phaser.Game {
    constructor() {
        super({
            width: 800,
            height: 600,
            backgroundColor: "#0fffff",
            // scene: new GameScene()
        })
    }
}