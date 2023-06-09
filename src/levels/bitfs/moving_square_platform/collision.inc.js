// Bitfs

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT, SURFACE_NOT_SLIPPERY
} from "../../../include/surface_terrains"

// 0x07015714 - 0x07015766
export const bitfs_seg7_collision_07015714 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x5),
    COL_VERTEX(0, 0, 0),
    COL_VERTEX(307, 307, -306),
    COL_VERTEX(307, 307, 307),
    COL_VERTEX(-306, 307, -306),
    COL_VERTEX(-306, 307, 307),
    COL_TRI_INIT(SURFACE_DEFAULT, 4),
    COL_TRI(0, 1, 2),
    COL_TRI(1, 0, 3),
    COL_TRI(4, 3, 0),
    COL_TRI(0, 2, 4),
    COL_TRI_INIT(SURFACE_NOT_SLIPPERY, 2),
    COL_TRI(1, 3, 4),
    COL_TRI(1, 4, 2),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
