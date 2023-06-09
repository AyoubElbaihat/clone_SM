// Lll

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../../../include/surface_terrains"

// 0x0701D71C - 0x0701D7D0
export const lll_seg7_collision_hexagonal_platform = [
    COL_INIT(),
    COL_VERTEX_INIT(0xC),
    COL_VERTEX(0, 0, -895),
    COL_VERTEX(768, 307, -383),
    COL_VERTEX(768, 0, -383),
    COL_VERTEX(768, 307, 384),
    COL_VERTEX(768, 0, 384),
    COL_VERTEX(0, 307, -895),
    COL_VERTEX(0, 307, 896),
    COL_VERTEX(0, 0, 896),
    COL_VERTEX(-767, 307, 384),
    COL_VERTEX(-767, 0, 384),
    COL_VERTEX(-767, 307, -383),
    COL_VERTEX(-767, 0, -383),
    COL_TRI_INIT(SURFACE_DEFAULT, 16),
    COL_TRI(0, 1, 2),
    COL_TRI(2, 1, 3),
    COL_TRI(2, 3, 4),
    COL_TRI(0, 5, 1),
    COL_TRI(5, 3, 1),
    COL_TRI(5, 6, 3),
    COL_TRI(4, 3, 6),
    COL_TRI(4, 6, 7),
    COL_TRI(5, 8, 6),
    COL_TRI(7, 6, 8),
    COL_TRI(7, 8, 9),
    COL_TRI(5, 10, 8),
    COL_TRI(9, 8, 10),
    COL_TRI(9, 10, 11),
    COL_TRI(11, 10, 5),
    COL_TRI(11, 5, 0),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
