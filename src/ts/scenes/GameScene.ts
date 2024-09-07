import { Scene } from "../Scene";
import { ModelScene } from "./ModelScene";

/**
 * Clase GameScene
 */
export class GameScene extends ModelScene {
  /**
   * Inicializa la escena Home
   * @returns {void}
   * @public
   */
  public init(): void {
    this.scene = new Scene("game");
  }

  /**
   * Enlaza los eventos de la escena Home
   * Sobreescribimos el método de la clase padre para añadir eventos
   * @returns {void}
   * @public
   * @override ModelScene.bindEvents
   */
  public bindEvents(): void {
    console.log("GameScene bindEvents");
  }
}
