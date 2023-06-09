// Poundable Pole

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_NO_CAM_COLLISION
} from "../../include/surface_terrains"

// Poundable Pole

// 0x06002490 - 0x06002580
export const poundable_pole_collision_06002490 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x10),
    COL_VERTEX(-39, -19, -96),
    COL_VERTEX(-39, 410, -96),
    COL_VERTEX(40, 410, -96),
    COL_VERTEX(-96, -19, -39),
    COL_VERTEX(-96, 410, -39),
    COL_VERTEX(97, 410, -39),
    COL_VERTEX(97, 410, 40),
    COL_VERTEX(97, -19, -39),
    COL_VERTEX(97, -19, 40),
    COL_VERTEX(40, -19, -96),
    COL_VERTEX(-96, 410, 40),
    COL_VERTEX(-39, 410, 97),
    COL_VERTEX(40, 410, 97),
    COL_VERTEX(-96, -19, 40),
    COL_VERTEX(-39, -19, 97),
    COL_VERTEX(40, -19, 97),

    COL_TRI_INIT(SURFACE_NO_CAM_COLLISION, 22),
    COL_TRI(8, 6, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(3, 1, 0),
    COL_TRI(3, 4, 1),
    COL_TRI(1, 5, 2),
    COL_TRI(1, 6, 5),
    COL_TRI(1, 4, 6),
    COL_TRI(7, 6, 8),
    COL_TRI(7, 5, 6),
    COL_TRI(9, 5, 7),
    COL_TRI(9, 2, 5),
    COL_TRI(0, 2, 9),
    COL_TRI(6, 10, 11),
    COL_TRI(6, 4, 10),
    COL_TRI(6, 11, 12),
    COL_TRI(8, 12, 15),
    COL_TRI(13, 4, 3),
    COL_TRI(13, 10, 4),
    COL_TRI(14, 10, 13),
    COL_TRI(14, 11, 10),
    COL_TRI(15, 11, 14),
    COL_TRI(15, 12, 11),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2022-07-04 22:16:59 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
