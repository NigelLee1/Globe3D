import { SpriteMaterial, Sprite } from 'three'
import { getTexture } from './texture';

export function createScenicSpot (spot: any) {
  let spriteMaterial = new SpriteMaterial({
    map: getTexture(spot.imageName),
    color: 0xffffff,
    fog: true
  });
  let sprite = new Sprite(spriteMaterial);
  sprite.position.set(spot.dotPosition[0], spot.dotPosition[1], spot.dotPosition[2]);
  sprite.scale.set(1.4, 1.4, 1.4);
  return sprite;
}
