import { Mesh, Group, SphereGeometry, MeshBasicMaterial, ShaderMaterial, BackSide, IUniform, AdditiveBlending } from 'three'

const vertexShader = ['varying vec3 vNormal;', 'void main() {', 'vNormal = normalize( normalMatrix * normal );', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n')
const fragmentShader = ['uniform float c;', 'uniform float p;', 'varying vec3 vNormal;', 'void main() {', 'float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p );', 'gl_FragColor = vec4( 0.2, 0.58, 0.9, 0.3 ) * intensity;', '}'].join('\n')

export const AdditiveBlendShader = {
  uniforms: {
    'tSampler1': { type: 't', value: null },
    'tSampler2': { type: 't', value: null }
  },
  vertexShader: ['varying vec2 vUv;', 'void main() {', 'vUv = uv;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n'),
  fragmentShader: ['uniform sampler2D tSampler1;', 'uniform sampler2D tSampler2;', 'varying vec2 vUv;', 'void main() {', 'vec4 texture1 = texture2D( tSampler1, vUv );', 'vec4 texture2 = texture2D( tSampler2, vUv );', 'gl_FragColor = texture1 + texture2;', '}'].join('\n')
}

export function createHalo(): Group {
  let glowGroup = new Group();
  glowGroup.add(createOuterHalo());
  glowGroup.add(createInnerHalo());
  return glowGroup;
}

function createInnerHalo () {
  let sphere = new SphereGeometry(5, 40, 40);
  let blackMaterial = new MeshBasicMaterial({ color: 0x000000 });
  let blackSphere = new Mesh(sphere, blackMaterial);
  blackSphere.material.transparent = false;
  blackSphere.scale.set(0.99,0.99,0.99);
  return blackSphere;
}

function createOuterHalo () {
  let sphere = new SphereGeometry(5, 40, 40);
  let material = createHaloMaterial();
  let glowSphere = new Mesh(sphere, material);
  glowSphere.material.transparent = false;
  // glowSphere.scale.x = glowSphere.scale.y = glowSphere.scale.z = 1.3;
  glowSphere.scale.set(1.5,1.5,1.5);
  return glowSphere;
}

export function createHaloMaterial () {
  // https://stackoverflow.com/questions/61698807/interesting-behaviour-object-literal-may-only-specify-known-properties
  const ufs = {
    'c': { type: 'f', value: 0.34 },
    'p': { type: 'f', value: 9 }
  };
  let material = new ShaderMaterial({
    uniforms: ufs,
    vertexShader,
    fragmentShader,
    blending: AdditiveBlending,
    side: BackSide
  });
  return material;
}
