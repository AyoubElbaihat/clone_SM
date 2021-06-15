// 0x0700D3A8 - 0x0700D498

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles, gsSP1Triangle,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_IA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATEIA,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { pss_seg7_texture_07000800 } from "../../../texture.inc"

const pss_seg7_vertex_0700D3A8 = [
    [[ -6864,  -3726,   2608], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -4340,   1994], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -3726,   1994], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -5850,  -3593,    587], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -5850,  -4207,   1202], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5850,  -3593,   1202], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -5850,  -4207,    587], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -3593,   1202], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -4207,    587], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -3593,    587], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -4207,   1202], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5850,  -3726,   1994], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -5850,  -4340,   1994], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5850,  -4340,   2608], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5850,  -3726,   2608], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
];

// 0x0700D498 - 0x0700D588
const pss_seg7_vertex_0700D498 = [
    [[ -4584,  -3581,  -3258], 0, [   480,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -4891,  -3581,  -3258], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -4891,  -3057,  -3258], 0, [   990,    118], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -3726,   2608], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -4340,   2608], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -4340,   1994], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5850,  -3858,   3394], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -5850,  -4473,   4009], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5850,  -3858,   4009], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -5850,  -4473,   3394], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -3858,   4009], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -4473,   3394], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -3858,   3394], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6864,  -4473,   4009], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -4584,  -3057,  -3258], 0, [   478,    118], [0xff, 0x55, 0x00, 0xff]],
];

// 0x0700D588 - 0x0700D688
const pss_seg7_vertex_0700D588 = [
    [[ -5091,   3236,   2431], 0, [   480,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5355,   3850,   2273], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -5091,   3850,   2431], 0, [   478,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -4431,  -3057,  -2992], 0, [     0,    118], [0xff, 0x55, 0x00, 0xff]],
    [[ -4584,  -3581,  -3258], 0, [   480,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -4584,  -3057,  -3258], 0, [   478,    118], [0xff, 0x55, 0x00, 0xff]],
    [[ -4431,  -3581,  -2992], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[   531,  -2174,  -5293], 0, [   480,    990], [0xff, 0x55, 0x00, 0xff]],
    [[   224,  -2174,  -5293], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[   224,  -1559,  -5293], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[   531,  -1559,  -5293], 0, [   478,      0], [0xff, 0x55, 0x00, 0xff]],
    [[   684,  -1559,  -5026], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[   684,  -2174,  -5026], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -6651,   4280,    307], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6651,   3666,    307], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -6703,   3666,      5], 0, [   480,    990], [0xff, 0x55, 0x00, 0xff]],
];

// 0x0700D688 - 0x0700D768
const pss_seg7_vertex_0700D688 = [
    [[ -5091,   3236,   2431], 0, [   480,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5355,   3236,   2273], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5355,   3850,   2273], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -4793,   3850,   2506], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -4793,   3236,   2506], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5091,   3850,   2431], 0, [   478,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6703,   3666,      5], 0, [   480,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -6700,   4280,   -302], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6703,   4280,      5], 0, [   478,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6700,   3666,   -302], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -6651,   4280,    307], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -5951,   5059,  -5249], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -5749,   4444,  -5481], 0, [   480,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5749,   5059,  -5481], 0, [   478,      0], [0xff, 0x55, 0x00, 0xff]],
];

// 0x0700D768 - 0x0700D858
const pss_seg7_vertex_0700D768 = [
    [[ -6703,   4076,  -3107], 0, [   480,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -6679,   4076,  -3413], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -6679,   4690,  -3413], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6703,   4690,  -3107], 0, [   478,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6650,   4690,  -2804], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -6650,   4076,  -2804], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5749,   4444,  -5481], 0, [   480,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5483,   5059,  -5635], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -5749,   5059,  -5481], 0, [   478,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -5483,   4444,  -5635], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[  3229,   6770,  -5124], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[  3229,   6155,  -5124], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[  2615,   6155,  -5124], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -5951,   5059,  -5249], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -5951,   4444,  -5249], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
];

// 0x0700D858 - 0x0700D928
const pss_seg7_vertex_0700D858 = [
    [[ -3603,   4659,  -6137], 0, [   480,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -3296,   5274,  -6137], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -3603,   5274,  -6137], 0, [   478,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -3296,   4659,  -6137], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[ -3909,   5274,  -6110], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[ -3909,   4659,  -6110], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
    [[  3229,   6770,  -5124], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[  2615,   6155,  -5124], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[  2615,   6770,  -5124], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[  2615,   6770,  -6138], 0, [     0,      0], [0xff, 0x55, 0x00, 0xff]],
    [[  3229,   6155,  -6138], 0, [   990,    990], [0xff, 0x55, 0x00, 0xff]],
    [[  3229,   6770,  -6138], 0, [   990,      0], [0xff, 0x55, 0x00, 0xff]],
    [[  2615,   6155,  -6138], 0, [     0,    990], [0xff, 0x55, 0x00, 0xff]],
];

// 0x0700D928 - 0x0700DAD8
const pss_seg7_dl_0700D928 = [
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_16b, 1, pss_seg7_texture_07000800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(pss_seg7_vertex_0700D3A8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 13, 14, 0x0),
    gsSPVertex(pss_seg7_vertex_0700D498, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
    gsSP1Triangle( 0,  2, 14, 0x0),
    gsSPVertex(pss_seg7_vertex_0700D588, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11,  7, 10, 0x0),
    gsSP2Triangles(11, 12,  7, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(pss_seg7_vertex_0700D688, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  0, 0x0),
    gsSP2Triangles( 3,  0,  5, 0x0,  6,  7,  8, 0x0),
    gsSP2Triangles( 6,  9,  7, 0x0, 10,  6,  8, 0x0),
    gsSP1Triangle(11, 12, 13, 0x0),
    gsSPVertex(pss_seg7_vertex_0700D768, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  0,  3, 0x0,  4,  5,  0, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 13, 14,  6, 0x0),
    gsSPVertex(pss_seg7_vertex_0700D858, 13, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  0, 0x0,  4,  0,  2, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
    gsSP1Triangle( 9, 12, 10, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700DAD8 - 0x0700DB48
export const pss_seg7_dl_0700DAD8 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATEIA, G_CC_MODULATEIA),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(pss_seg7_dl_0700D928),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-06-03 16:44:44 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)
