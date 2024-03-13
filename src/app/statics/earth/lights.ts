import { AmbientLight, SpotLight, DirectionalLight, HemisphereLight } from 'three'

export function createAmbientLight () {
  // return new AmbientLight(0x393939, 0.5);
  return new AmbientLight(0x404040, 0.2);
}

export function createSpotLight(): SpotLight {
  let spotLight = new SpotLight(0xffffff, 1);
  spotLight.position.set(-26, 11, -11);
  spotLight.angle = 0.2;
  spotLight.castShadow = false;
  spotLight.penumbra = 0.4;
  spotLight.distance = 124;
  spotLight.decay = 1;
  spotLight.visible = true;
  spotLight.shadow.camera.near = 50;
  spotLight.shadow.camera.far = 200;
  spotLight.shadow.camera.fov = 35;
  spotLight.shadow.mapSize.height = 1024;
  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.bias = -0.0001;
  return spotLight;
}

export function createDirectionalLight() {
  let light = new DirectionalLight(0xffffff, 3);
  light.position.set(5, 3, 5);
  return light;
}

export function createHemisphereLight() {
  const hemiLight = new HemisphereLight(0xffffff, 0x111111, 0.3);
  hemiLight.position.set(0, 100, 0);
  hemiLight.matrixAutoUpdate = false;
  hemiLight.updateMatrix();
}
