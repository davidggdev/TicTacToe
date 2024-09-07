import { ModelScene } from "../../scenes/ModelScene";

describe("ModelScene", () => {
  it("should create a new instance of ModelScene", () => {
    const modelScene = new ModelScene();
    expect(modelScene).toBeInstanceOf(ModelScene);
  });

  it("should have a scene property", () => {
    const modelScene = new ModelScene();
    expect(modelScene.scene).toBeDefined();
  });

  it("should call the init method", () => {
    const modelScene = new ModelScene();
    const spy = jest.spyOn(modelScene, "init");
    modelScene.init();
    expect(spy).toHaveBeenCalled();
  });

  it("should call the bindEvents method", () => {
    const modelScene = new ModelScene();
    const spy = jest.spyOn(modelScene, "bindEvents");
    modelScene.bindEvents();
    expect(spy).toHaveBeenCalled();
  });
});
