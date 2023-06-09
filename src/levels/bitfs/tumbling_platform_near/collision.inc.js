// Bitfs

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x07015288 - 0x0701530C
export const bitfs_seg7_collision_07015288 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(64, 0, -306),
    COL_VERTEX(64, 154, -306),
    COL_VERTEX(64, 154, 307),
    COL_VERTEX(64, 0, 307),
    COL_VERTEX(-63, 154, 307),
    COL_VERTEX(-63, 0, 307),
    COL_VERTEX(-63, 154, -306),
    COL_VERTEX(-63, 0, -306),
    COL_TRI_INIT(SURFACE_DEFAULT, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI(2, 4, 5),
    COL_TRI(2, 5, 3),
    COL_TRI(6, 4, 2),
    COL_TRI(6, 2, 1),
    COL_TRI(5, 4, 6),
    COL_TRI(5, 6, 7),
    COL_TRI(0, 3, 5),
    COL_TRI(0, 5, 7),
    COL_TRI(7, 6, 1),
    COL_TRI(7, 1, 0),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
