import { Mesh, SphereGeometry, MeshPhongMaterial, AdditiveBlending } from 'three'
import { getTexture } from './texture';

export function createCloud(): Mesh {
  return new Mesh(
    new SphereGeometry(5.2, 40, 40),
    new MeshPhongMaterial({
      map: getTexture('earthCloudImage'),
      transparent: true,
      opacity: 1,
      blending: AdditiveBlending
    })
  );
}
