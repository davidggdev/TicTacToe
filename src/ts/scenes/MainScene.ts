import { Scene } from "../Scene";

/**
 * Clase MainScene - Controla la escena principal de la aplicación
 */
export class MainScene {
  /**
   * Escena de la aplicación
   * @type {Scene} scene - Escena de la aplicación
   * @public
   */
  scene: Scene;

  /**
   * Constructor de la clase
   * @constructor
   */
  constructor() {
    this.scene = new Scene();
  }

  /**
   * Enlaza los eventos de la escena principal
   * @returns {void}
   * @public
   */
  public bindEvents(): void {
    this.onMenuItemClick();
  }

  /**
   * Detecta el click en los elementos del menú
   * @returns {void}
   * @private
   */
  private onMenuItemClick(): void {
    document.body.addEventListener("click", (event) => {
      try {
        const target = event.target as HTMLElement;
        const targetId = target && target.id;

        if (!targetId) {
          throw new Error("No se ha encontrado el id del elemento");
        }

        switch (targetId) {
          case "#game":
            this.onGameClick();
            break;
          case "#home":
            this.onHomeClick();
            break;
          case "#scores":
            this.onHomeScores();
            break;
          default:
            break;
        }
      } catch (e) {
        throw new Error("Error en la función bindEvents");
      }
    });
  }

  /**
   * Evento que se ejecuta cuando se hace click en el botón de Jugar
   * @returns {void}
   * @private
   */
  private onGameClick(): void {
    this.scene.setSceneContainer("game");
  }

  /**
   * Evento que se ejecuta cuando se hace click en el botón de Inicio
   * @returns {void}
   * @private
   */
  private onHomeClick(): void {
    this.scene.setSceneContainer("home");
  }

  /**
   * Evento que se ejecuta cuando se hace click en el botón de Puntuaciones
   * @returns {void}
   * @private
   */
  private onHomeScores(): void {
    this.scene.setSceneContainer("scores");
  }
}
