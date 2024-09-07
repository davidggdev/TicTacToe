import axios from "axios";
import { Scene } from "../Scene";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Scene", () => {
  it("shold exist element with id scene-container", () => {
    document.body.innerHTML = "<div id='scene-container'></div>";
    const scene = new Scene();
    expect(scene.sceneContainer).not.toBeNull();
  });

  it("should reset scene", () => {
    document.body.innerHTML = "<div id='scene-container'><p>Test</p></div>";
    const scene = new Scene();
    scene.resetScene();
    expect(scene.sceneContainer?.innerHTML).toBe("");
  });

  it("should get scene view", async () => {
    document.body.innerHTML = "<div id='scene-container'></div>";
    mockedAxios.get.mockResolvedValueOnce({ data: "<div>home</div>" }); // Simular la respuesta para 'main.html'
    const scene = new Scene();
    await scene.getSceneView("main");

    expect(scene.sceneContainer?.innerHTML).toContain("home");
  });
});
