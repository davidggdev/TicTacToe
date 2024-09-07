import { Scene } from "../Scene";

/**
 * Clase GameScene
 */
export class GameScene {
  /**
   *  Escena de la aplicación
   */
  scene: Scene | null;

  /**
   * Constructor de la clase
   */
  constructor() {
    // Inicializamos la escena Home por defecto
    this.scene = null;
  }

  public init() {
    this.scene = new Scene("game");
  }

  /**
   * Enlaza los eventos de la escena Home
   */
  public bindEvents(): void {
    console.log("GameScene bindEvents");
  }

  public unbildEvents(): void {
    console.log("GameScene unbindEvents");
  }
}
