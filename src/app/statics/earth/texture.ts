import { Texture, TextureLoader } from 'three'
import { LOADER } from '../constants';

export function getTexture (imageName: string) {
  let image = (LOADER.RES&& LOADER.RES[imageName])
    ? (LOADER.RES[imageName] as any).data
    : null;
  if(image) {
    let texture = new Texture(image);
    texture.needsUpdate = true;
    return texture;
  } else {
    return null;
  }
}
