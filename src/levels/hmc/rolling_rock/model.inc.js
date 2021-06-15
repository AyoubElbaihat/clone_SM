// 0x07023160 - 0x07023178

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSP1Triangle, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCycleType,
    gsDPSetRenderMode, gsDPSetDepthSource, gsDPSetFogColor, gsSPFogPosition, gsSPSetGeometryMode,
    gsDPSetCombineMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList,
    gsSPClearGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CYC_2CYCLE,
    G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2, G_ZS_PIXEL, G_FOG, G_CC_MODULATERGB, G_CC_PASS2,
    G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CYC_1CYCLE, G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2, G_CC_SHADE
} from "../../../include/gbi"
import { hmc_seg7_texture_07004800 } from "../texture.inc"
const hmc_seg7_lights_07023160 = gdSPDefLights1(
    0x79, 0x79, 0x79,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07023178 - 0x07023278
const hmc_seg7_vertex_07023178 = [
    [[  -204,      0,      0], 0, [  2012,   2012], [0x82, 0x00, 0x00, 0xff]],
    [[  -173,    102,     33], 0, [  2830,   3448], [0x96, 0x41, 0x14, 0xff]],
    [[  -173,     63,    -86], 0, [  3648,   3448], [0x96, 0x28, 0xc9, 0xff]],
    [[  -173,      0,    108], 0, [  2012,   3448], [0x96, 0x00, 0x44, 0xff]],
    [[   -91,    108,    148], 0, [  2420,   4888], [0xc0, 0x40, 0x58, 0xff]],
    [[   -91,      0,    183], 0, [  2012,   4888], [0xc8, 0x00, 0x71, 0xff]],
    [[   -91,    174,     57], 0, [  2830,   4888], [0xc8, 0x6c, 0x23, 0xff]],
    [[     0,    -62,    195], 0, [  1808,   6096], [0x00, 0xd9, 0x78, 0xff]],
    [[     0,     63,    195], 0, [  2216,   6096], [0x00, 0x27, 0x78, 0xff]],
    [[    92,      0,    183], 0, [  2012,   7304], [0x3f, 0x00, 0x6d, 0xff]],
    [[    92,   -107,    148], 0, [  1604,   7304], [0x37, 0xbd, 0x5c, 0xff]],
    [[    92,    108,    148], 0, [  2420,   7304], [0x38, 0x43, 0x5c, 0xff]],
    [[   -91,    174,    -56], 0, [  3238,   4888], [0xc0, 0x68, 0xdf, 0xff]],
    [[   -91,    108,   -147], 0, [  3648,   4888], [0xc8, 0x42, 0xa4, 0xff]],
    [[     0,    166,    120], 0, [  2626,   6096], [0x00, 0x66, 0x4a, 0xff]],
    [[     0,    205,      0], 0, [  3034,   6096], [0x00, 0x7e, 0x00, 0xff]],
];

// 0x07023278 - 0x07023378
const hmc_seg7_vertex_07023278 = [
    [[     0,    166,    120], 0, [  2626,   6096], [0x00, 0x66, 0x4a, 0xff]],
    [[    92,    108,    148], 0, [  2420,   7304], [0x38, 0x43, 0x5c, 0xff]],
    [[    92,    174,     57], 0, [  2830,   7304], [0x40, 0x68, 0x21, 0xff]],
    [[     0,    205,      0], 0, [  3034,   6096], [0x00, 0x7e, 0x00, 0xff]],
    [[    92,    174,    -56], 0, [  3238,   7304], [0x38, 0x6c, 0xdd, 0xff]],
    [[  -204,      0,      0], 0, [     0,   2012], [0x82, 0x00, 0x00, 0xff]],
    [[  -173,     63,    -86], 0, [  -438,   3448], [0x96, 0x28, 0xc9, 0xff]],
    [[  -173,    -62,    -86], 0, [   376,   3448], [0x96, 0xd8, 0xc9, 0xff]],
    [[     0,     63,   -194], 0, [  3852,   6096], [0x00, 0x27, 0x88, 0xff]],
    [[    92,    108,   -147], 0, [  3648,   7304], [0x3f, 0x40, 0xa8, 0xff]],
    [[    92,      0,   -182], 0, [  4056,   7304], [0x37, 0x00, 0x8e, 0xff]],
    [[   -91,      0,   -182], 0, [     0,   4888], [0xc0, 0x00, 0x93, 0xff]],
    [[   -91,   -107,   -147], 0, [   376,   4888], [0xc8, 0xbd, 0xa4, 0xff]],
    [[  -173,     63,    -86], 0, [  3648,   3448], [0x96, 0x28, 0xc9, 0xff]],
    [[   -91,    108,   -147], 0, [  3648,   4888], [0xc8, 0x42, 0xa4, 0xff]],
    [[   -91,      0,   -182], 0, [  4056,   4888], [0xc0, 0x00, 0x93, 0xff]],
];

// 0x07023378 - 0x07023478
const hmc_seg7_vertex_07023378 = [
    [[   -91,    108,   -147], 0, [  3648,   4888], [0xc8, 0x42, 0xa4, 0xff]],
    [[     0,    166,   -119], 0, [  3442,   6096], [0x00, 0x66, 0xb6, 0xff]],
    [[     0,     63,   -194], 0, [  3852,   6096], [0x00, 0x27, 0x88, 0xff]],
    [[    92,    108,   -147], 0, [  3648,   7304], [0x3f, 0x40, 0xa8, 0xff]],
    [[    92,    174,    -56], 0, [  3238,   7304], [0x38, 0x6c, 0xdd, 0xff]],
    [[  -204,      0,      0], 0, [  2012,   2012], [0x82, 0x00, 0x00, 0xff]],
    [[  -173,   -101,     33], 0, [  1194,   3448], [0x96, 0xbf, 0x14, 0xff]],
    [[  -173,      0,    108], 0, [  2012,   3448], [0x96, 0x00, 0x44, 0xff]],
    [[  -204,      0,      0], 0, [     0,   2012], [0x82, 0x00, 0x00, 0xff]],
    [[  -173,    -62,    -86], 0, [   376,   3448], [0x96, 0xd8, 0xc9, 0xff]],
    [[   -91,   -173,    -56], 0, [   786,   4888], [0xc0, 0x98, 0xdf, 0xff]],
    [[   -91,   -107,   -147], 0, [   376,   4888], [0xc8, 0xbd, 0xa4, 0xff]],
    [[   -91,   -173,     57], 0, [  1194,   4888], [0xc8, 0x94, 0x23, 0xff]],
    [[     0,    -62,   -194], 0, [   172,   6096], [0x00, 0xd9, 0x88, 0xff]],
    [[     0,   -165,   -119], 0, [   582,   6096], [0x00, 0x9a, 0xb6, 0xff]],
    [[    92,   -107,   -147], 0, [   376,   7304], [0x3f, 0xc0, 0xa8, 0xff]],
];

// 0x07023478 - 0x07023558
const hmc_seg7_vertex_07023478 = [
    [[     0,    -62,   -194], 0, [   172,   6096], [0x00, 0xd9, 0x88, 0xff]],
    [[    92,      0,   -182], 0, [     0,   7304], [0x37, 0x00, 0x8e, 0xff]],
    [[    92,   -107,   -147], 0, [   376,   7304], [0x3f, 0xc0, 0xa8, 0xff]],
    [[     0,   -165,   -119], 0, [   582,   6096], [0x00, 0x9a, 0xb6, 0xff]],
    [[    92,   -173,    -56], 0, [   786,   7304], [0x38, 0x94, 0xdd, 0xff]],
    [[  -173,   -101,     33], 0, [  1194,   3448], [0x96, 0xbf, 0x14, 0xff]],
    [[   -91,   -107,    148], 0, [  1604,   4888], [0xc1, 0xc0, 0x58, 0xff]],
    [[  -173,      0,    108], 0, [  2012,   3448], [0x96, 0x00, 0x44, 0xff]],
    [[   -91,   -173,     57], 0, [  1194,   4888], [0xc8, 0x94, 0x23, 0xff]],
    [[   -91,      0,    183], 0, [  2012,   4888], [0xc8, 0x00, 0x71, 0xff]],
    [[     0,   -204,      0], 0, [   990,   6096], [0x00, 0x82, 0x00, 0xff]],
    [[     0,   -165,    120], 0, [  1398,   6096], [0x00, 0x9a, 0x4a, 0xff]],
    [[    92,   -173,     57], 0, [  1194,   7304], [0x40, 0x98, 0x21, 0xff]],
    [[    92,   -107,    148], 0, [  1604,   7304], [0x37, 0xbd, 0x5c, 0xff]],
];

// 0x07023558 - 0x07023638
const hmc_seg7_vertex_07023558 = [
    [[   205,      0,      0], 0, [  4056,  10184], [0x7e, 0x00, 0x00, 0xff]],
    [[   174,      0,   -107], 0, [  4056,   8744], [0x6a, 0x00, 0xbc, 0xff]],
    [[   174,    102,    -32], 0, [  3238,   8744], [0x6a, 0x41, 0xeb, 0xff]],
    [[     0,     63,   -194], 0, [  3852,   6096], [0x00, 0x27, 0x88, 0xff]],
    [[   -91,      0,   -182], 0, [  4056,   4888], [0xc0, 0x00, 0x93, 0xff]],
    [[   -91,    108,   -147], 0, [  3648,   4888], [0xc8, 0x42, 0xa4, 0xff]],
    [[    92,    108,   -147], 0, [  3648,   7304], [0x3f, 0x40, 0xa8, 0xff]],
    [[    92,      0,   -182], 0, [  4056,   7304], [0x37, 0x00, 0x8e, 0xff]],
    [[    92,    174,    -56], 0, [  3238,   7304], [0x38, 0x6c, 0xdd, 0xff]],
    [[    92,      0,   -182], 0, [     0,   7304], [0x37, 0x00, 0x8e, 0xff]],
    [[     0,    -62,   -194], 0, [   172,   6096], [0x00, 0xd9, 0x88, 0xff]],
    [[     0,     63,   -194], 0, [  -234,   6096], [0x00, 0x27, 0x88, 0xff]],
    [[   -91,   -107,   -147], 0, [   376,   4888], [0xc8, 0xbd, 0xa4, 0xff]],
    [[   -91,      0,   -182], 0, [     0,   4888], [0xc0, 0x00, 0x93, 0xff]],
];

// 0x07023638 - 0x07023728
const hmc_seg7_vertex_07023638 = [
    [[   205,      0,      0], 0, [  2012,  10184], [0x7e, 0x00, 0x00, 0xff]],
    [[   174,     63,     87], 0, [  2420,   8744], [0x6a, 0x28, 0x37, 0xff]],
    [[   174,    -62,     87], 0, [  1604,   8744], [0x6a, 0xd8, 0x37, 0xff]],
    [[   205,      0,      0], 0, [  4056,  10184], [0x7e, 0x00, 0x00, 0xff]],
    [[   174,    102,    -32], 0, [  3238,   8744], [0x6a, 0x41, 0xeb, 0xff]],
    [[    92,    174,     57], 0, [  2830,   7304], [0x40, 0x68, 0x21, 0xff]],
    [[    92,    174,    -56], 0, [  3238,   7304], [0x38, 0x6c, 0xdd, 0xff]],
    [[    92,    108,    148], 0, [  2420,   7304], [0x38, 0x43, 0x5c, 0xff]],
    [[     0,    166,   -119], 0, [  3442,   6096], [0x00, 0x66, 0xb6, 0xff]],
    [[     0,    205,      0], 0, [  3034,   6096], [0x00, 0x7e, 0x00, 0xff]],
    [[   -91,    174,    -56], 0, [  3238,   4888], [0xc0, 0x68, 0xdf, 0xff]],
    [[   -91,    108,   -147], 0, [  3648,   4888], [0xc8, 0x42, 0xa4, 0xff]],
    [[   -91,    174,     57], 0, [  2830,   4888], [0xc8, 0x6c, 0x23, 0xff]],
    [[    92,      0,    183], 0, [  2012,   7304], [0x3f, 0x00, 0x6d, 0xff]],
    [[    92,   -107,    148], 0, [  1604,   7304], [0x37, 0xbd, 0x5c, 0xff]],
];

// 0x07023728 - 0x07023828
const hmc_seg7_vertex_07023728 = [
    [[    92,    108,    148], 0, [  2420,   7304], [0x38, 0x43, 0x5c, 0xff]],
    [[     0,    166,    120], 0, [  2626,   6096], [0x00, 0x66, 0x4a, 0xff]],
    [[     0,     63,    195], 0, [  2216,   6096], [0x00, 0x27, 0x78, 0xff]],
    [[   -91,    108,    148], 0, [  2420,   4888], [0xc0, 0x40, 0x58, 0xff]],
    [[   -91,    174,     57], 0, [  2830,   4888], [0xc8, 0x6c, 0x23, 0xff]],
    [[   -91,      0,    183], 0, [  2012,   4888], [0xc8, 0x00, 0x71, 0xff]],
    [[   205,      0,      0], 0, [  2012,  10184], [0x7e, 0x00, 0x00, 0xff]],
    [[   174,    -62,     87], 0, [  1604,   8744], [0x6a, 0xd8, 0x37, 0xff]],
    [[   174,   -101,    -32], 0, [   786,   8744], [0x6a, 0xbf, 0xec, 0xff]],
    [[    92,   -107,    148], 0, [  1604,   7304], [0x37, 0xbd, 0x5c, 0xff]],
    [[    92,   -173,     57], 0, [  1194,   7304], [0x40, 0x98, 0x21, 0xff]],
    [[    92,   -173,    -56], 0, [   786,   7304], [0x38, 0x94, 0xdd, 0xff]],
    [[     0,    -62,    195], 0, [  1808,   6096], [0x00, 0xd9, 0x78, 0xff]],
    [[     0,   -165,    120], 0, [  1398,   6096], [0x00, 0x9a, 0x4a, 0xff]],
    [[   -91,   -107,    148], 0, [  1604,   4888], [0xc1, 0xc0, 0x58, 0xff]],
    [[   -91,   -173,     57], 0, [  1194,   4888], [0xc8, 0x94, 0x23, 0xff]],
];

// 0x07023828 - 0x070238D8
const hmc_seg7_vertex_07023828 = [
    [[   205,      0,      0], 0, [     0,  10184], [0x7e, 0x00, 0x00, 0xff]],
    [[   174,   -101,    -32], 0, [   786,   8744], [0x6a, 0xbf, 0xec, 0xff]],
    [[   174,      0,   -107], 0, [     0,   8744], [0x6a, 0x00, 0xbc, 0xff]],
    [[     0,   -165,   -119], 0, [   582,   6096], [0x00, 0x9a, 0xb6, 0xff]],
    [[   -91,   -173,    -56], 0, [   786,   4888], [0xc0, 0x98, 0xdf, 0xff]],
    [[   -91,   -107,   -147], 0, [   376,   4888], [0xc8, 0xbd, 0xa4, 0xff]],
    [[    92,   -107,   -147], 0, [   376,   7304], [0x3f, 0xc0, 0xa8, 0xff]],
    [[    92,   -173,    -56], 0, [   786,   7304], [0x38, 0x94, 0xdd, 0xff]],
    [[    92,      0,   -182], 0, [     0,   7304], [0x37, 0x00, 0x8e, 0xff]],
    [[     0,   -204,      0], 0, [   990,   6096], [0x00, 0x82, 0x00, 0xff]],
    [[   -91,   -173,     57], 0, [  1194,   4888], [0xc8, 0x94, 0x23, 0xff]],
];

// 0x070238D8 - 0x07023BC8
const hmc_seg7_dl_070238D8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, hmc_seg7_texture_07004800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 64 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(hmc_seg7_lights_07023160.l, 1),
    gsSPLight(hmc_seg7_lights_07023160.a, 2),
    gsSPVertex(hmc_seg7_vertex_07023178, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 3,  4,  1, 0x0,  3,  5,  4, 0x0),
    gsSP2Triangles( 1,  4,  6, 0x0,  5,  7,  8, 0x0),
    gsSP2Triangles( 7,  9,  8, 0x0,  7, 10,  9, 0x0),
    gsSP2Triangles( 8,  9, 11, 0x0,  1, 12,  2, 0x0),
    gsSP2Triangles( 1,  6, 12, 0x0,  2, 12, 13, 0x0),
    gsSP1Triangle( 6, 14, 15, 0x0),
    gsSPVertex(hmc_seg7_vertex_07023278, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 3,  2,  4, 0x0,  5,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  6, 11,  7, 0x0),
    gsSP2Triangles( 7, 11, 12, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(hmc_seg7_vertex_07023378, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 1,  4,  3, 0x0,  5,  6,  7, 0x0),
    gsSP2Triangles( 8,  9,  6, 0x0,  9, 10,  6, 0x0),
    gsSP2Triangles( 9, 11, 10, 0x0,  6, 10, 12, 0x0),
    gsSP2Triangles(11, 13, 14, 0x0, 13, 15, 14, 0x0),
    gsSPVertex(hmc_seg7_vertex_07023478, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  2,  4, 0x0),
    gsSP2Triangles( 5,  6,  7, 0x0,  5,  8,  6, 0x0),
    gsSP2Triangles( 7,  6,  9, 0x0,  8, 10, 11, 0x0),
    gsSP2Triangles(10, 12, 11, 0x0, 10,  4, 12, 0x0),
    gsSP1Triangle(11, 12, 13, 0x0),
    gsSPVertex(hmc_seg7_vertex_07023558, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 1,  6,  2, 0x0,  1,  7,  6, 0x0),
    gsSP2Triangles( 2,  6,  8, 0x0,  9, 10, 11, 0x0),
    gsSP2Triangles(10, 12, 13, 0x0, 10, 13, 11, 0x0),
    gsSPVertex(hmc_seg7_vertex_07023638, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  1, 0x0),
    gsSP2Triangles( 4,  5,  1, 0x0,  4,  6,  5, 0x0),
    gsSP2Triangles( 1,  5,  7, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles( 8, 10,  9, 0x0,  8, 11, 10, 0x0),
    gsSP2Triangles( 9, 10, 12, 0x0,  1, 13,  2, 0x0),
    gsSP2Triangles( 1,  7, 13, 0x0,  2, 13, 14, 0x0),
    gsSPVertex(hmc_seg7_vertex_07023728, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 1,  4,  3, 0x0,  2,  3,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  7,  9, 10, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0,  8, 10, 11, 0x0),
    gsSP2Triangles( 9, 12, 13, 0x0, 12, 14, 13, 0x0),
    gsSP2Triangles(12,  5, 14, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(hmc_seg7_vertex_07023828, 11, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 1,  6,  2, 0x0,  1,  7,  6, 0x0),
    gsSP2Triangles( 2,  6,  8, 0x0,  7,  9,  3, 0x0),
    gsSP2Triangles( 9,  4,  3, 0x0,  9, 10,  4, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07023BC8 - 0x07023C70
export const hmc_seg7_dl_07023BC8 = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(0, 0, 0, 255),
    gsSPFogPosition(960, 1000),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_PASS2),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (64 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(hmc_seg7_dl_070238D8),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 2021-06-14 16:20:25 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
