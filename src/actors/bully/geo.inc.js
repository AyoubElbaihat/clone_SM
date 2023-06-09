import { GEO_ANIMATED_PART, GEO_BILLBOARD, GEO_CLOSE_NODE, GEO_DISPLAY_LIST, GEO_END, GEO_OPEN_NODE, GEO_SCALE, GEO_SHADOW, LAYER_ALPHA, LAYER_OPAQUE } from "../../engine/GeoLayout";
import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow";
import { bully_seg5_dl_05000398, bully_seg5_dl_05003708, bully_seg5_dl_050037A0, bully_seg5_dl_05003D40, bully_seg5_dl_05003EA8, bully_seg5_dl_05003FC8 } from "./model.inc";

// 0x0C000000
export const bully_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xC8, 70),
    GEO_OPEN_NODE(),
       GEO_SCALE(0x00, 24576),
       GEO_OPEN_NODE(),
          GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
          GEO_OPEN_NODE(),
             GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
             GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 75, null),
                GEO_OPEN_NODE(),
                   GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                   GEO_OPEN_NODE(),
                      GEO_ANIMATED_PART(LAYER_OPAQUE, 146, 0, 0, null),
                      GEO_OPEN_NODE(),
                         GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bully_seg5_dl_05003708),
                      GEO_CLOSE_NODE(),
                   GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, -75, null),
                GEO_OPEN_NODE(),
                   GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                   GEO_OPEN_NODE(),
                      GEO_ANIMATED_PART(LAYER_OPAQUE, 146, 0, 0, null),
                      GEO_OPEN_NODE(),
                         GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bully_seg5_dl_050037A0),
                      GEO_CLOSE_NODE(),
                   GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                GEO_OPEN_NODE(),
                   GEO_BILLBOARD(),
                   GEO_OPEN_NODE(),
                      GEO_DISPLAY_LIST(LAYER_ALPHA, bully_seg5_dl_05003D40),
                   GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bully_seg5_dl_05000398),
                GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, bully_seg5_dl_05003FC8),
             GEO_CLOSE_NODE(),
          GEO_CLOSE_NODE(),
       GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]}

// 0x0C000120
export const bully_boss_geo = () => { return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xC8, 210),
    GEO_OPEN_NODE(),
       GEO_SCALE(0x00, 49152),
       GEO_OPEN_NODE(),
          GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
          GEO_OPEN_NODE(),
             GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
             GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 75, null),
                GEO_OPEN_NODE(),
                   GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                   GEO_OPEN_NODE(),
                      GEO_ANIMATED_PART(LAYER_OPAQUE, 146, 0, 0, null),
                      GEO_OPEN_NODE(),
                         GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bully_seg5_dl_05003708),
                      GEO_CLOSE_NODE(),
                   GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, -75, null),
                GEO_OPEN_NODE(),
                   GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                   GEO_OPEN_NODE(),
                      GEO_ANIMATED_PART(LAYER_OPAQUE, 146, 0, 0, null),
                      GEO_OPEN_NODE(),
                         GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bully_seg5_dl_050037A0),
                      GEO_CLOSE_NODE(),
                   GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                GEO_OPEN_NODE(),
                   GEO_BILLBOARD(),
                   GEO_OPEN_NODE(),
                      GEO_DISPLAY_LIST(LAYER_ALPHA, bully_seg5_dl_05003EA8),
                   GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bully_seg5_dl_05000398),
                GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, bully_seg5_dl_05003FC8),
             GEO_CLOSE_NODE(),
          GEO_CLOSE_NODE(),
       GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]}