import { Scene } from "../Scene";
import { HomeScene } from "./HomeScene";
import { GameScene } from "./GameScene";
import { ScoresScene } from "./ScoresScene";

/**
 * Clase MainScene - Controla la escena principal de la aplicación
 */
export class MainScene {
  /**
   * Escena de la escena Home
   * @type {HomeScene}
   * @public
   */
  homeScene: HomeScene;

  /**
   * Escena de la escena Game
   * @type {GameScene}
   * @public
   */
  gameScene: GameScene;

  /**
   * Escena de la escena Scores
   * @type {ScoresScene}
   * @public
   */
  scoresScene: ScoresScene;

  /**
   * Constructor de la clase
   * @constructor
   */
  constructor() {
    // Inicializamos las escenas
    this.homeScene = new HomeScene();
    this.gameScene = new GameScene();
    this.scoresScene = new ScoresScene();

    // Inicializamos la escena Home por defecto
    this.homeScene.init();
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
    this.gameScene.init();
    this.gameScene.bindEvents();
  }

  /**
   * Evento que se ejecuta cuando se hace click en el botón de Inicio
   * @returns {void}
   * @private
   */
  private onHomeClick(): void {
    this.homeScene.init();
    this.homeScene.bindEvents();
  }

  /**
   * Evento que se ejecuta cuando se hace click en el botón de Puntuaciones
   * @returns {void}
   * @private
   */
  private onHomeScores(): void {
    this.scoresScene.init();
    this.scoresScene.bindEvents();
  }
}
