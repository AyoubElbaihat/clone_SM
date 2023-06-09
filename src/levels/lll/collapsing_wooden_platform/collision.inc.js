// Lll

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0701D21C - 0x0701D294
export const lll_seg7_collision_0701D21C = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(-255, 0, 64),
    COL_VERTEX(-255, 154, -63),
    COL_VERTEX(-255, 0, -63),
    COL_VERTEX(256, 154, -63),
    COL_VERTEX(256, 0, -63),
    COL_VERTEX(-255, 154, 64),
    COL_VERTEX(256, 154, 64),
    COL_VERTEX(256, 0, 64),
    COL_TRI_INIT(SURFACE_DEFAULT, 10),
    COL_TRI(0, 1, 2),
    COL_TRI(2, 1, 3),
    COL_TRI(2, 3, 4),
    COL_TRI(5, 3, 1),
    COL_TRI(0, 5, 1),
    COL_TRI(5, 6, 3),
    COL_TRI(3, 6, 7),
    COL_TRI(3, 7, 4),
    COL_TRI(7, 6, 5),
    COL_TRI(7, 5, 0),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
