// 0x07017D70 - 0x07017E60

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles, gsSP1Triangle,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_IA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATEIA,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { cave_0900C000 } from "../../../../../textures/cave"

const hmc_seg7_vertex_07017D70 = [
    [[ -5436,   1741,  -3404], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   2253,  -3404], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   2253,  -3916], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5324,   3425,  -6281], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -4914,   3015,  -6281], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5324,   3015,  -6281], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -4914,   3425,  -6281], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   2099,  -6476], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   2611,  -6988], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   2099,  -6988], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   2611,  -6476], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   1894,  -4940], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   2406,  -5452], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   1894,  -5452], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   2406,  -4940], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
];

// 0x07017E60 - 0x07017F50
const hmc_seg7_vertex_07017E60 = [
    [[ -4709,   2355,    374], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -4709,   1843,    374], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5221,   1843,    374], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   1741,  -3404], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   2253,  -3916], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5436,   1741,  -3916], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -3497,   2355,   -866], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -3621,   1843,  -1362], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -3497,   1843,   -866], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -3621,   2355,  -1362], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -4625,   2355,    454], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -4263,   1843,    816], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -4625,   1843,    454], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -4263,   2355,    816], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5221,   2355,    374], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
];

// 0x07017F50 - 0x07018040
const hmc_seg7_vertex_07017F50 = [
    [[ -6542,   1735,  -3916], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -6542,   2247,  -3404], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -6542,   1735,  -3404], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -7582,   2355,    114], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -7458,   1843,    611], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -7582,   1843,    114], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -7458,   2355,    611], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5597,   2355,   1112], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5368,   2355,    654], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5597,   1843,   1112], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5368,   1843,    654], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -6542,   2094,  -6988], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -6542,   2606,  -6988], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -6542,   2606,  -6476], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -6542,   2094,  -6476], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
];

// 0x07018040 - 0x070180F0
const hmc_seg7_vertex_07018040 = [
    [[ -5621,   3015,  -8191], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5621,   3425,  -8191], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5621,   3425,  -7781], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -6542,   1735,  -3916], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -6542,   2247,  -3916], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -6542,   2247,  -3404], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -3248,   2355,    127], 0, [   990,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -3372,   1843,   -369], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -3248,   1843,    127], 0, [   990,    990], [0xff, 0x55, 0x00, 0xb4]],
    [[ -3372,   2355,   -369], 0, [     0,      0], [0xff, 0x55, 0x00, 0xb4]],
    [[ -5621,   3015,  -7781], 0, [     0,    990], [0xff, 0x55, 0x00, 0xb4]],
];

// 0x070180F0 - 0x07018200
const hmc_seg7_dl_070180F0 = [
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_16b, 1, cave_0900C000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(hmc_seg7_vertex_07017D70, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(hmc_seg7_vertex_07017E60, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
    gsSP1Triangle(14,  0,  2, 0x0),
    gsSPVertex(hmc_seg7_vertex_07017F50, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 8, 10,  9, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 13, 14, 0x0),
    gsSPVertex(hmc_seg7_vertex_07018040, 11, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
    gsSP1Triangle( 0,  2, 10, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07018200 - 0x07018270
export const hmc_seg7_dl_07018200 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATEIA, G_CC_MODULATEIA),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(hmc_seg7_dl_070180F0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-06-14 16:20:25 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
