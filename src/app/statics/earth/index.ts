import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import * as Halo from './halo'
import { createAmbientLight, createDirectionalLight } from './lights'
import { SPOT_INFORMATION, PAGE_SIZE } from '../constants'
import { createGlobe } from './globe';
import { createCloud } from './cloud';
import { createScenicSpot } from './spots';

export default class Earth {
  private _camera!: THREE.Camera;
  private _container!: any
  private _width: number = PAGE_SIZE.WIDTH * 2;
  private _height: number = PAGE_SIZE.HEIGHT * 2;
  private _controller: any;
  private _scene!: THREE.Scene;
  private _renderer!: THREE.WebGLRenderer;
  private _earthGroup!: THREE.Group;
  private _locationGroup!: THREE.Group;
  private _cloud!: THREE.Mesh;
  private _autoRotate: boolean = true;
  private _rotationSpeed: number = 0.001
  private _cloudSpeed: number = 0.0003;
  private _sceneComposer: any;

  constructor(el: any) {
    this._container = typeof el === 'string' ? document.getElementById(el) : el;
    this._init();
  }

  _init() {
    this._buildRenderer();
    this._buildScene();
    this._buildCamera();
    this._buildLight();
    this._buildEarth();
    this._buildCloud();
    this._buildSpots();
    this._buildAtmosphere();
    this._buildRenderComposer();
    this._createController();

    this._loop();
  }

  _buildRenderer() {
    let renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true, // take away the jaggedness, ensure a smooth effect
      preserveDrawingBuffer: true
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio); // give us the most high-res 3D rendering
    renderer.setSize(this._width, this._height);
    renderer.domElement.style.position = 'relative';
    renderer.domElement.style.width = this._width / 2 + 'px';
    renderer.domElement.style.height = this._height / 2 + 'px';
    this._container.appendChild(renderer.domElement);
    this._renderer = renderer;
  }

  _buildScene() {
    this._scene = new THREE.Scene();
    this._earthGroup = new THREE.Group();
    this._locationGroup = new THREE.Group();
    this._scene.add(this._earthGroup);
    this._earthGroup.add(this._locationGroup);
    this._earthGroup.layers.set(1);
  }

  _buildCamera() {
    let camera = new THREE.PerspectiveCamera(40, this._width / this._height, 0.1, 1000);
    // camera.position.set(0, 0, -28)；
    camera.position.set(3.55, 0, -328);
    if (this._scene) {
      this._scene.add(camera);
      this._camera = camera;
    }
  }

  _buildLight() {
    this._scene.add(createAmbientLight());
    const cameraLight = createDirectionalLight();
    // const cameraLight = createSpotLight();
    this._camera.add(cameraLight);  // camera amd light at the same position
    cameraLight.target = this._camera;
  }

  _buildEarth() {
    const earth = createGlobe();
    earth.layers.set(0);
    this._earthGroup.add(earth);
  }

  _buildCloud() {
    this._cloud = createCloud();
    this._earthGroup.add(this._cloud);
  }

  _buildSpots() {
    SPOT_INFORMATION.forEach(spot => {
      let scenicSpot = createScenicSpot(spot);
      this._locationGroup.add(scenicSpot);
    })
  }

  _buildAtmosphere() {
    const glow = Halo.createHalo();
    this._earthGroup.add(glow);
  }

  _buildRenderComposer() {
    let blurRenderTarget = new THREE.WebGLRenderTarget(this._width, this._height, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      stencilBuffer: true
    });

    let sceneRenderPass = new RenderPass(this._scene, this._camera);
    this._sceneComposer = new EffectComposer(this._renderer, blurRenderTarget);
    this._sceneComposer.addPass(sceneRenderPass);
     let effectBlend = new ShaderPass(Halo.AdditiveBlendShader, 'tSampler1');
    effectBlend.renderToScreen = true;
    this._sceneComposer.addPass(effectBlend);
  }

  _createController() {
    let controller = new OrbitControls(this._camera, this._renderer.domElement);
    controller.enableZoom = false;
    controller.enablePan = true;
    controller.enabled = true;
    controller.enableDamping = false;
    controller.target.set(0, 0, 0);
    this._controller = controller;
    controller.update();
  }

  _loop() {
    this._animate();
    this._render();
    requestAnimationFrame(this._loop.bind(this));
  }

  _animate() {
    let rotationSpeed = this._rotationSpeed;
    let cloudSpeed = this._cloudSpeed;

    if (this._autoRotate) {
      this._camera.position.x = this._camera.position.x * Math.cos(rotationSpeed) - this._camera.position.z * Math.sin(rotationSpeed);
      this._camera.position.z = this._camera.position.z * Math.cos(rotationSpeed) + this._camera.position.x * Math.sin(rotationSpeed);
    }

    this._cloud.rotation.y -= cloudSpeed;
    this._controller.update();
  }

  _render() {
    this._sceneComposer.render(this._scene, this._camera);
    // this._renderer.render(this._scene, this._camera);
  }

  setCameraPosition() {
    if (arguments.length === 3) {
      this._camera.position.set(arguments[0], arguments[1], arguments[2]);
    } else {
      this._camera.position.set(arguments[0].x, arguments[0].y, arguments[0].z);
    }
  }

  getCameraPosition() {
    return {
      x: this._camera!.position.x,
      y: this._camera!.position.y,
      z: this._camera.position.z
    };
  }

  rotateGlobe(angle: number) {
    // in radians
    this._earthGroup.rotation.y = angle;
  }
}
