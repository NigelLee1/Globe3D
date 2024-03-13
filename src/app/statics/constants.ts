const earthTextureImage = 'assets/images/earth_texture.jpg'
const earthBumpImage = 'assets/images/earth_bump.jpg'
const earthSpecImage = 'assets/images/earth_spec.jpg'
const earthCloudImage = 'assets/images/earth_cloud.png'
const signNamibiaImage = 'assets/images/sign_namibia.png'
const signMarianaImage = 'assets/images/sign_mariana.png'
const signGreenlandImage = 'assets/images/sign_greenland.png'
const signGalapagosImage = 'assets/images/sign_galapagos.png'
const signAntarcicaImage = 'assets/images/sign_antarctica.png'
const skyCloud0 = 'assets/images/sky_cloud_0.jpg'
const skyCloud1 = 'assets/images/sky_cloud_1.jpg'
const skyCloud2 = 'assets/images/sky_cloud_2.jpg'
const skyCloud3 = 'assets/images/sky_cloud_3.jpg'
const skyCloud4 = 'assets/images/sky_cloud_4.jpg'
const skyCloud5 = 'assets/images/sky_cloud_5.jpg'
const skyCloud6 = 'assets/images/sky_cloud_6.jpg'
const skyCloud7 = 'assets/images/sky_cloud_7.jpg'
const skyCloud8 = 'assets/images/sky_cloud_8.jpg'
const skyCloud9 = 'assets/images/sky_cloud_9.jpg'
const skyCloud10 = 'assets/images/sky_cloud_10.jpg'
const skyCloud11 = 'assets/images/sky_cloud_11.jpg'
const skyCloud12 = 'assets/images/sky_cloud_12.jpg'
const bgMeteor = 'assets/images/bg_meteor.png'
const spotsVideo = 'assets/video/video.mp4'
const spotsAudio = 'assets/audio/music_spots.mp3'
const backgroundAudio = 'assets/audio/music_bg.mp3'
const captionNamibia = 'assets/images/cpt_namibia.png'
const captionAntarctic = 'assets/images/cpt_antarctic.png'
const captionGreenland = 'assets/images/cpt_greenland.png'
const captionMariana = 'assets/images/cpt_mariana.png'
const captionGalapagos = 'assets/images/cpt_galapagos.png'

export const PAGE_SIZE = {
  WIDTH: 375,
  HEIGHT: 600
};

export const ORBIT_PARAMETERS = [
  {
    radiusX: 150,
    radiusY: 45,
    revise: 0,
    speed: 0.01
  },
  {
    radiusX: 100,
    radiusY: 35,
    revise: 10,
    speed: 0.02
  }
];

export const MEDIA_RES = {
  spotsVideo,
  spotsAudio,
  backgroundAudio
};

//Partial<Record<string, Resource>>' is not assignable to type 'null'
export const LOADER: {RES: any} = {
  RES: null
};

export const IMAGE_RES = {
  earthTextureImage,
  earthBumpImage,
  earthSpecImage,
  earthCloudImage,
  signNamibiaImage,
  signMarianaImage,
  signGreenlandImage,
  signGalapagosImage,
  signAntarcicaImage,
  skyCloud0,
  skyCloud1,
  skyCloud2,
  skyCloud3,
  skyCloud4,
  skyCloud5,
  skyCloud6,
  skyCloud7,
  skyCloud8,
  skyCloud9,
  skyCloud10,
  skyCloud11,
  skyCloud12,
  bgMeteor,
  captionNamibia,
  captionAntarctic,
  captionGreenland,
  captionGalapagos,
  captionMariana
};

export const SPOT_INFORMATION = [{
  name: 'namibia',
  coord: [-19.2, 14.11666667], // 19° 12' S, 13° 67' E
  dotPosition: [4.6, -1.29, -2.42],
  cameraFar: [26.46, -6.94, -9.96],
  cameraNear: [4.52, -1.30, -1.63],
  imageName: 'signNamibiaImage',
  coordSpriteIndex: 4,
  videoTimeline: [2.80, 8.40],
  audioTimeline: [0, 10.057142857142857],
  captionImgName: 'captionNamibia'
}, {
  name: 'mariana',
  coord: [18.25, 142.81666667], // 17° 75' N, 142° 49' E
  dotPosition: [-4.390, 2.660, -2.410],
  cameraFar: [-20.03, 13.47, -14.61],
  cameraNear: [-3.54, 2.38, -2.58],
  imageName: 'signMarianaImage',
  coordSpriteIndex: 3,
  videoTimeline: [10.80, 19.10],
  audioTimeline: [24, 34.10938775510204],
  captionImgName: 'captionMariana'
}, {
  name: 'greenland',
  coord: [72.16666667, -43], // 71° 70' N, 42° 60' W
  dotPosition: [1.880, 5.09, 0.89],
  cameraFar: [7.24, 26.52, 7.06],
  cameraNear: [1.30, 4.66, 1.24],
  imageName: 'signGreenlandImage',
  coordSpriteIndex: 2,
  videoTimeline: [40.20, 47.80],
  audioTimeline: [48, 58.10938775510204],
  captionImgName: 'captionGreenland'
}, {
  name: 'galapagos',
  coord: [1.33333333, -91.15], // 01° 20' N, 90° 69' W
  dotPosition: [0.550, 0.024, 5.39],
  cameraFar: [-0.60, 0.14, 28.21],
  cameraNear: [-0.10, 0.024, 4.99],
  imageName: 'signGalapagosImage',
  coordSpriteIndex: 1,
  videoTimeline: [22.00, 37.43],
  audioTimeline: [12, 22.057142857142857],
  captionImgName: 'captionGalapagos'
}, {
  name: 'antarctica',
  coord: [-77.96666667, -155.63333333], // 77° 58' S, 155° 38' W
  dotPosition: [-1.32, -5.05, 0.98],
  cameraFar: [-7.88, -27.00, 1.87],
  cameraNear: [-1.39, -4.75, 0.33],
  imageName: 'signAntarcicaImage',
  coordSpriteIndex: 0,
  videoTimeline: [50.90, 69.00],
  audioTimeline: [36, 46.05714285714286],
  captionImgName: 'captionAntarctic'
}];
