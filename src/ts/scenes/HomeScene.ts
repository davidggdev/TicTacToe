import { Scene } from "../Scene";

/**
 * Clase HomeScene
 */
export class HomeScene {
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
    this.scene = new Scene("home");
  }
  
  /**
   * Enlaza los eventos de la escena Home
   */
  public bindEvents(): void {
    console.log("HomeScene bindEvents");
  }

  public unbildEvents(): void {
    console.log("GameScene unbindEvents");
  }
}
