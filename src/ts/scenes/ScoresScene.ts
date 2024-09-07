import { Scene } from "../Scene";

/**
 * Clase ScoresScene
 */
export class ScoresScene {
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
    this.scene = new Scene("scores");
  }

  /**
   * Enlaza los eventos de la escena Home
   */
  public bindEvents(): void {
    console.log("ScoresScene bindEvents");
  }
  
}
