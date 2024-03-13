import { Mesh, SphereGeometry, MeshPhongMaterial, Color, AdditiveBlending, NormalBlending } from 'three'
import { getTexture } from './texture'

export function createGlobe() {
  return new Mesh(
    new SphereGeometry(5, 32, 32),
    new MeshPhongMaterial({
      map: getTexture('earthTextureImage'),
      bumpMap: getTexture('earthBumpImage'),
      bumpScale: 0.15,
      specularMap: getTexture('earthSpecImage'),
      specular: new Color('#909090'),
      shininess: 5,
      transparent: true,
      // blending: NormalBlending
    })
  )
}
