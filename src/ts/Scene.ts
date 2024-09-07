import axios from "axios";

/**
 * Clase Scene - Controla las escenas de la aplicación
 */
export class Scene {
  /**
   * Contenedor de la escena principal
   * @type {HTMLElement | null}
   */
  sceneContainer?: HTMLElement | null;

  /**
   * Constructor de la clase
   * @param {string} defaultScene
   * @constructor
   */
  constructor(defaultScene?: string) {
    try {
      const sceneContainer = document.getElementById("scene-container");
      if (!sceneContainer) {
        throw new Error("Scene container not found");
      }
      this.sceneContainer = sceneContainer;
      if (defaultScene) {
        this.resetScene();
        this.getSceneView(defaultScene);
      }
    } catch (e) {
      console.error("Error: ", e);
    }
  }

  /**
   * Resetea la escena
   * @returns {void}
   * @private
   */
  public resetScene(): void {
    if (this.sceneContainer) {
      this.sceneContainer.innerHTML = "";
    }
  }

  /**
   * Obtiene la vista de la escena
   * @param {string} sceneView
   * @returns {Promise<void>}
   * @private
   */
  public async getSceneView(sceneView: string): Promise<void> {
    try {
      // Reset scene
      this.resetScene();

      // Add main scene
      const responseMainScene = await axios.get(`./scenes/main.html`);
      if (this.sceneContainer) {
        this.sceneContainer.innerHTML = responseMainScene.data;
      }

      // Add scene view
      const responseScene = await axios.get(`./scenes/${sceneView}.html`);
      if (this.sceneContainer) {
        this.sceneContainer.innerHTML += responseScene.data;
      }
    } catch (e) {
      console.error("Error: ", e);
    }
  }
}
