// 0x0700E5B0 - 0x0700E6B0

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles, gsSP1Triangle,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCycleType, gsDPSetRenderMode, gsDPSetDepthSource,
    gsDPSetFogColor, gsSPFogPosition, gsSPSetGeometryMode, gsDPSetCombineMode,
    gsSPClearGeometryMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize,
    gsSPDisplayList,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CYC_2CYCLE,
    G_RM_FOG_SHADE_A, G_RM_AA_ZB_TEX_EDGE2, G_ZS_PIXEL, G_FOG, G_CC_DECALRGBA, G_CC_PASS2,
    G_LIGHTING, G_CULL_BACK, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE,
    G_ON, G_TEXTURE_IMAGE_FRAC, G_TX_CLAMP, G_OFF, G_CYC_1CYCLE, G_RM_AA_ZB_TEX_EDGE, G_RM_NOOP2,
    G_CC_SHADE
} from "../../../../../include/gbi"
import {
    cave_09001000, cave_09003000
} from "../../../../../textures/cave"

const hmc_seg7_vertex_0700E5B0 = [
    [[  6244,    154,   2560], 0, [  4056,  -3098], [0xff, 0xff, 0xff, 0xff]],
    [[  5579,    154,   2560], 0, [ -2586,  -3098], [0xff, 0xff, 0xff, 0xff]],
    [[  5579,    256,   2458], 0, [ -2586,  -2076], [0xff, 0xff, 0xff, 0xff]],
    [[   901,   2048,   3564], 0, [     0,  10186], [0xff, 0xff, 0xff, 0xff]],
    [[   901,   3072,   3564], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   901,   3072,   4076], 0, [  5078,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   901,   2048,   4076], 0, [  5078,  10186], [0xff, 0xff, 0xff, 0xff]],
    [[   901,   2048,   4076], 0, [  3034,   6098], [0xff, 0xff, 0xff, 0xff]],
    [[   901,   3072,   4076], 0, [  3034,  -4120], [0xff, 0xff, 0xff, 0xff]],
    [[   410,   3072,   4076], 0, [ -1870,  -4120], [0xff, 0xff, 0xff, 0xff]],
    [[   410,   2048,   4076], 0, [ -1870,   6098], [0xff, 0xff, 0xff, 0xff]],
    [[  6244,    922,   2560], 0, [  4056,   4564], [0xff, 0xff, 0xff, 0xff]],
    [[  5579,    922,   2560], 0, [ -2584,   4564], [0xff, 0xff, 0xff, 0xff]],
    [[ -2578,   1434,   1346], 0, [  5590,   4054], [0xff, 0xff, 0xff, 0xff]],
    [[ -2899,   1434,   1506], 0, [  2012,   4054], [0xff, 0xff, 0xff, 0xff]],
    [[ -3128,   1434,   1048], 0, [  2012,  -1054], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700E6B0 - 0x0700E7A0
const hmc_seg7_vertex_0700E6B0 = [
    [[  6244,    154,   2560], 0, [  4056,  -3098], [0xff, 0xff, 0xff, 0xff]],
    [[  5579,    256,   2458], 0, [ -2586,  -2076], [0xff, 0xff, 0xff, 0xff]],
    [[  6244,    256,   2458], 0, [  4056,  -2076], [0xff, 0xff, 0xff, 0xff]],
    [[  5579,    922,   2458], 0, [ -2584,   4564], [0xff, 0xff, 0xff, 0xff]],
    [[  6244,    922,   2458], 0, [  4056,   4564], [0xff, 0xff, 0xff, 0xff]],
    [[ -3586,   1434,   1277], 0, [ -3096,  -1054], [0xff, 0xff, 0xff, 0xff]],
    [[ -3631,   1434,   1872], 0, [ -6162,   4054], [0xff, 0xff, 0xff, 0xff]],
    [[ -4089,   1434,    956], 0, [ -6162,  -6164], [0xff, 0xff, 0xff, 0xff]],
    [[ -3357,   1434,   1735], 0, [ -3096,   4054], [0xff, 0xff, 0xff, 0xff]],
    [[ -2578,   1434,   1346], 0, [  5590,   4054], [0xff, 0xff, 0xff, 0xff]],
    [[ -3128,   1434,   1048], 0, [  2012,  -1054], [0xff, 0xff, 0xff, 0xff]],
    [[ -3036,   1434,    430], 0, [  5588,  -6164], [0xff, 0xff, 0xff, 0xff]],
    [[ -3128,   1536,   1048], 0, [ -2074,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3128,   1434,   1048], 0, [ -2074,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -2899,   1434,   1506], 0, [  3034,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700E7A0 - 0x0700E880
const hmc_seg7_vertex_0700E7A0 = [
    [[ -3631,   1536,   1872], 0, [ -6162,   4054], [0xff, 0xff, 0xff, 0xff]],
    [[ -3357,   1536,   1735], 0, [ -3096,   4054], [0xff, 0xff, 0xff, 0xff]],
    [[ -3586,   1536,   1277], 0, [ -3096,  -1054], [0xff, 0xff, 0xff, 0xff]],
    [[ -4089,   1536,    956], 0, [ -6162,  -6164], [0xff, 0xff, 0xff, 0xff]],
    [[ -3036,   1536,    430], 0, [  5588,  -6164], [0xff, 0xff, 0xff, 0xff]],
    [[ -3128,   1536,   1048], 0, [  2012,  -1054], [0xff, 0xff, 0xff, 0xff]],
    [[ -2578,   1536,   1346], 0, [  5590,   4054], [0xff, 0xff, 0xff, 0xff]],
    [[ -2899,   1536,   1506], 0, [  2012,   4054], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,   1126,   4403], 0, [     0,   7120], [0xff, 0xff, 0xff, 0xff]],
    [[  2406,   1331,   4147], 0, [  2522,   3544], [0xff, 0xff, 0xff, 0xff]],
    [[  2048,   1126,   4403], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3128,   1536,   1048], 0, [ -2074,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2899,   1434,   1506], 0, [  3034,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -2899,   1536,   1506], 0, [  3034,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700E880 - 0x0700E980
const hmc_seg7_vertex_0700E880 = [
    [[ -3586,   1536,   1277], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3128,   1434,   1048], 0, [  5078,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -3128,   1536,   1048], 0, [  5078,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3586,   1434,   1277], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -3357,   1536,   1735], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3357,   1434,   1735], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -3586,   1434,   1277], 0, [  5078,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -3586,   1536,   1277], 0, [  5078,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2048,   1126,   4403], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2406,   1331,   4147], 0, [  2522,   3544], [0xff, 0xff, 0xff, 0xff]],
    [[  2048,   1126,   3891], 0, [  5078,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2048,      0,   3891], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2048,   1126,   3891], 0, [     0, -10252], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,   1126,   3891], 0, [  7122, -10252], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,   1126,   3891], 0, [  5078,   7120], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,   1126,   4403], 0, [     0,   7120], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700E980 - 0x0700EA50
const hmc_seg7_vertex_0700E980 = [
    [[  2765,      0,   4403], 0, [  7122,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,   1126,   4403], 0, [  7122, -10252], [0xff, 0xff, 0xff, 0xff]],
    [[  2048,   1126,   4403], 0, [     0, -10252], [0xff, 0xff, 0xff, 0xff]],
    [[  2048,      0,   4403], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2048,   1126,   3891], 0, [  5078, -10252], [0xff, 0xff, 0xff, 0xff]],
    [[  2048,      0,   3891], 0, [  5078,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,      0,   3891], 0, [  5078,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,   1126,   4403], 0, [     0, -10252], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,      0,   4403], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2048,      0,   3891], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,   1126,   3891], 0, [  7122, -10252], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,      0,   3891], 0, [  7122,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,   1126,   3891], 0, [  5078, -10252], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700EA50 - 0x0700EB40
const hmc_seg7_vertex_0700EA50 = [
    [[  6543,    819,   6646], 0, [  3034,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  6543,   1024,   6646], 0, [  3034,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  7588,   1024,   6646], 0, [ -7388,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  6543,    819,   3594], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  6543,   1024,   2550], 0, [ 10392,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  6543,    819,   2550], 0, [ 10392,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  6543,   1024,   3594], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  7588,    819,   3594], 0, [ -7388,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  6543,   1024,   3594], 0, [  3034,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  6543,    819,   3594], 0, [  3034,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  7588,   1024,   3594], 0, [ -7388,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  6543,    819,   7690], 0, [ 10392,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  6543,   1024,   6646], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  6543,    819,   6646], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  6543,   1024,   7690], 0, [ 10392,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700EB40 - 0x0700EC30
const hmc_seg7_vertex_0700EB40 = [
    [[   410,    819,   4086], 0, [ 10290,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   410,   1024,   4086], 0, [ 10290,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1444,   1024,   4086], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  6543,    819,   6646], 0, [  3034,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  7588,   1024,   6646], 0, [ -7388,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  7588,    819,   6646], 0, [ -7388,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1444,    819,   6646], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1444,   1024,   7680], 0, [ -9330,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1444,    819,   7680], 0, [ -9330,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1444,   1024,   6646], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   399,    819,   6646], 0, [ -7388,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1444,   1024,   6646], 0, [  3034,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1444,    819,   6646], 0, [  3034,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   399,   1024,   6646], 0, [ -7388,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1444,    819,   4086], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700EC30 - 0x0700ECB0
const hmc_seg7_vertex_0700EC30 = [
    [[  1444,    819,   4086], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1444,   1024,   4618], 0, [ -4220,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  1444,    819,   4618], 0, [ -4220,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  1444,   1024,   4086], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   922,   1024,   4618], 0, [  5078,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   410,    819,   4618], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   922,    819,   4618], 0, [  5078,    990], [0xff, 0xff, 0xff, 0xff]],
    [[   410,   1024,   4618], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700ECB0 - 0x0700EE38
const hmc_seg7_dl_0700ECB0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, cave_09001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(hmc_seg7_vertex_0700E5B0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11,  1,  0, 0x0),
    gsSP2Triangles(11, 12,  1, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(hmc_seg7_vertex_0700E6B0, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
    gsSP2Triangles( 2,  3,  4, 0x0,  5,  6,  7, 0x0),
    gsSP2Triangles( 5,  8,  6, 0x0,  9, 10, 11, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 10,  5,  7, 0x0),
    gsSP1Triangle(10,  7, 11, 0x0),
    gsSPVertex(hmc_seg7_vertex_0700E7A0, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 4,  3,  2, 0x0,  4,  2,  5, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSPVertex(hmc_seg7_vertex_0700E880, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles( 9, 14, 10, 0x0, 14,  9, 15, 0x0),
    gsSPVertex(hmc_seg7_vertex_0700E980, 13, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 3,  4,  5, 0x0,  3,  2,  4, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
    gsSP1Triangle( 6, 12,  7, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700EE38 - 0x0700EF00
const hmc_seg7_dl_0700EE38 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, cave_09003000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(hmc_seg7_vertex_0700EA50, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(hmc_seg7_vertex_0700EB40, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
    gsSP1Triangle( 0,  2, 14, 0x0),
    gsSPVertex(hmc_seg7_vertex_0700EC30, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700EF00 - 0x0700EFD8
export const hmc_seg7_dl_0700EF00 = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_TEX_EDGE2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(0, 0, 0, 255),
    gsSPFogPosition(960, 1000),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_PASS2),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(hmc_seg7_dl_0700ECB0),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(hmc_seg7_dl_0700EE38),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_TEX_EDGE, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 2021-06-14 16:20:25 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
