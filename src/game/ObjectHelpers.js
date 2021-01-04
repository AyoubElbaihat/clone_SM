import { SpawnObjectInstance as Spawn } from "./SpawnObject"
import { AreaInstance as Area } from "./Area"
import { geo_obj_init, geo_obj_init_animation_accel } from "../engine/graph_node"
import { oPosX, oPosY, oPosZ, oFaceAngleRoll, oFaceAnglePitch, oFaceAngleYaw, oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw, oParentRelativePosX, oParentRelativePosY, oParentRelativePosZ, oBehParams2ndByte, oBehParams, oVelX, oForwardVel, oVelZ, oVelY, oGravity, oAnimState, oIntangibleTimer, oAnimations } from "../include/object_constants"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { atan2s, mtxf_rotate_zxy_and_translate } from "../engine/math_util"
import { sins, coss } from "../utils"
import { GeoRendererInstance as GeoRenderer } from "../engine/GeoRenderer"

export const geo_switch_anim_state = (run, node) => {
    if (run == 1) {
        let obj = GeoRenderer.gCurGraphNodeObject.wrapperObjectNode.wrapperObject

        const switchCase = node

        if (GeoRenderer.gCurGraphNodeHeldObject) {
            obj = GeoRenderer.gCurGraphNodeHeldObject.objNode
        }

        // if the case is greater than the number of cases, set to 0 to avoid overflowing
        // the switch.
        if (obj.rawData[oAnimState] >= switchCase.numCases) {
            obj.rawData[oAnimState] = 0
        }

        switchCase.selectedCase = obj.rawData[oAnimState]
    }
}

const spawn_object_at_origin = (parent, model, behavior) => {

    const obj = Spawn.create_object(behavior)

    obj.parentObj = parent
    obj.header.gfx.unk18 = parent.header.gfx.unk18
    obj.header.gfx.unk19 = parent.header.gfx.unk18

    geo_obj_init(obj.header.gfx, Area.gLoadedGraphNodes[model], [0,0,0], [0,0,0])

    return obj

}

export const spawn_object_abs_with_rot = (parent, model, behavior, x, y, z, rx, ry, rz) => {
    const newObj = spawn_object_at_origin(parent, model, behavior)
    obj_set_pos(newObj, x, y, z)
    obj_set_angle(newObj, rx, ry, rz)
    return newObj
}

export const obj_apply_scale_to_matrix = (obj, dst, src) => {
    dst[0][0] = src[0][0] * obj.header.gfx.scale[0]
    dst[1][0] = src[1][0] * obj.header.gfx.scale[1]
    dst[2][0] = src[2][0] * obj.header.gfx.scale[2]
    dst[3][0] = src[3][0]

    dst[0][1] = src[0][1] * obj.header.gfx.scale[0]
    dst[1][1] = src[1][1] * obj.header.gfx.scale[1]
    dst[2][1] = src[2][1] * obj.header.gfx.scale[2]
    dst[3][1] = src[3][1]

    dst[0][2] = src[0][2] * obj.header.gfx.scale[0]
    dst[1][2] = src[1][2] * obj.header.gfx.scale[1]
    dst[2][2] = src[2][2] * obj.header.gfx.scale[2]
    dst[3][2] = src[3][2]

    dst[0][3] = src[0][3]
    dst[1][3] = src[1][3]
    dst[2][3] = src[2][3]
    dst[3][3] = src[3][3]
}

export const obj_build_transform_from_pos_and_angle = (obj, posIndex, angleIndex) => {
    const translate = new Array(3)
    const rotation = new Array(3)

    translate[0] = obj.rawData[posIndex + 0]
    translate[1] = obj.rawData[posIndex + 1]
    translate[2] = obj.rawData[posIndex + 2]

    rotation[0] = obj.rawData[angleIndex + 0]
    rotation[1] = obj.rawData[angleIndex + 1]
    rotation[2] = obj.rawData[angleIndex + 2]

    mtxf_rotate_zxy_and_translate(obj.transform, translate, rotation)

} 

const obj_translate_local = (obj, posIndex, localTranslateIndex) => {
    const dx = obj.rawData[localTranslateIndex + 0]
    const dy = obj.rawData[localTranslateIndex + 1]
    const dz = obj.rawData[localTranslateIndex + 2]

    obj.rawData[posIndex + 0] += obj.transform[0][0] * dx + obj.transform[1][0] * dy + obj.transform[2][0] * dz
    obj.rawData[posIndex + 1] += obj.transform[0][1] * dx + obj.transform[1][1] * dy + obj.transform[2][1] * dz
    obj.rawData[posIndex + 2] += obj.transform[0][2] * dx + obj.transform[1][2] * dy + obj.transform[2][2] * dz
}

const obj_build_relative_transform = (obj) => {
    obj_build_transform_from_pos_and_angle(obj, oParentRelativePosX /* Takes all XYZ */, oFaceAnglePitch, /* Takes all roll, pitch, yaw */)
    obj_translate_local(obj, oPosX, oParentRelativePosX)
}

export const linear_mtxf_mul_vec3f = (m, dst, v) => {
    for (let i = 0; i < 3; i++) {
        dst[i] = m[0][i] * v[0] + m[1][i] * v[1] + m[2][i] * v[2]
    }
}

export const linear_mtxf_transpose_mul_vec3f = (m, dst, v) => {
    for (let i = 0; i < 3; i++) {
        dst[i] = m[i][0] * v[0] + m[i][1] * v[1] + m[i][2] * v[2]
    }
}

export const spawn_object_relative = (behaviorParam, relativePosX, relativePosY, relativePosZ, parent, model, behavior) => {

    const obj = spawn_object_at_origin(parent, model, behavior)

    obj_copy_pos_and_angle(obj, parent)
    obj_set_parent_relative_pos(obj, relativePosX, relativePosY, relativePosZ)
    obj_build_relative_transform(obj)

    obj.rawData[oBehParams2ndByte] = behaviorParam
    obj.rawData[oBehParams] = (behaviorParam & 0xFF) << 16

    return obj
}

export const spawn_object = (parent, model, behavior) => {
    const obj = spawn_object_at_origin(parent, model, behavior)
    obj_copy_pos_and_angle(obj, parent)
    return obj
}

export const obj_copy_pos_and_angle = (dst, src) => {

    obj_copy_pos(dst, src)
    obj_copy_angle(dst, src)
}

export const obj_copy_angle = (dst, src) => {

    dst.rawData[oFaceAnglePitch] = src.rawData[oFaceAnglePitch]
    dst.rawData[oFaceAngleYaw] = src.rawData[oFaceAngleYaw]
    dst.rawData[oFaceAngleRoll] = src.rawData[oFaceAngleRoll]

    dst.rawData[oMoveAnglePitch] = src.rawData[oMoveAnglePitch]
    dst.rawData[oMoveAngleYaw] = src.rawData[oMoveAngleYaw]
    dst.rawData[oMoveAngleRoll] = src.rawData[oMoveAngleRoll]
}

export const obj_copy_pos = (dst, src) => {

    dst.rawData[oPosX] = src.rawData[oPosX]
    dst.rawData[oPosY] = src.rawData[oPosY]
    dst.rawData[oPosZ] = src.rawData[oPosZ]
}

export const obj_set_pos = (obj, x, y, z) => {

    obj.rawData[oPosX] = x
    obj.rawData[oPosY] = y
    obj.rawData[oPosZ] = z
}

export const obj_set_parent_relative_pos = (obj, relX, relY, relZ) => {
    obj.rawData[oParentRelativePosX] = relX
    obj.rawData[oParentRelativePosY] = relY
    obj.rawData[oParentRelativePosZ] = relZ

}

export const obj_set_angle = (obj, pitch, yaw, roll) => {

    obj.rawData[oFaceAnglePitch] = pitch
    obj.rawData[oFaceAngleYaw] = yaw
    obj.rawData[oFaceAngleRoll] = roll

    obj.rawData[oMoveAnglePitch] = pitch
    obj.rawData[oMoveAngleYaw] = yaw
    obj.rawData[oMoveAngleRoll] = roll
}

export const cur_obj_within_12k_bounds = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oPosX] < -12000 || 12000 < o.rawData[oPosX]) return 0
    if (o.rawData[oPosY] < -12000 || 12000 < o.rawData[oPosY]) return 0
    if (o.rawData[oPosZ] < -12000 || 12000 < o.rawData[oPosZ]) return 0

    return 1
}

export const cur_obj_become_tangible = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oIntangibleTimer] = 0
}

export const cur_obj_scale = (scale) => {
    const o = ObjectListProc.gCurrentObject
    o.header.gfx.scale[0] = scale
    o.header.gfx.scale[1] = scale
    o.header.gfx.scale[2] = scale
}

export const cur_obj_init_animation_with_accel_and_sound = (animIndex, accel) => {
    const o = ObjectListProc.gCurrentObject
    const anims = o.rawData[oAnimations]
    const animAccel = parseInt(accel * 65536.0)
    geo_obj_init_animation_accel(o.header.gfx, anims[animIndex], animAccel)
}

export const cur_obj_compute_vel_xz = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oVelX] = o.rawData[oForwardVel] * sins(o.rawData[oMoveAngleYaw])
    o.rawData[oVelZ] = o.rawData[oForwardVel] * coss(o.rawData[oMoveAngleYaw])
}

export const cur_obj_move_using_vel_and_gravity = () => {
    const o = ObjectListProc.gCurrentObject
    if (cur_obj_within_12k_bounds()) {
        o.rawData[oPosX] += o.rawData[oVelX]
        o.rawData[oPosZ] += o.rawData[oVelZ]
        o.rawData[oVelY] += o.rawData[oGravity]
        o.rawData[oPosY] += o.rawData[oVelY]
    }
}

export const cur_obj_move_using_fvel_and_gravity = () => {
    cur_obj_compute_vel_xz()
    cur_obj_move_using_vel_and_gravity()
}

export const cur_obj_push_mario_away = (radius) => {
    const o = ObjectListProc.gCurrentObject
    const marioRelX = ObjectListProc.gMarioObject[0].rawData[oPosX] - o.rawData[oPosX]
    const marioRelZ = ObjectListProc.gMarioObject[0].rawData[oPosZ] - o.rawData[oPosZ]
    const marioDist = Math.sqrt(Math.pow(marioRelX, 2) + Math.pow(marioRelZ, 2))

    if (marioDist < radius) {
        LevelUpdate.gMarioState[0].pos[0] += (radius - marioDist) / radius * marioRelX
        LevelUpdate.gMarioState[0].pos[2] += (radius - marioDist) / radius * marioRelZ
    }
}

export const dist_between_objects = (obj1, obj2) => {
    const dx = obj1.rawData[oPosX] - obj2.rawData[oPosX]
    const dy = obj1.rawData[oPosY] - obj2.rawData[oPosY]
    const dz = obj1.rawData[oPosZ] - obj2.rawData[oPosZ]
    return Math.sqrt(dx * dx + dy * dy + dz * dz)
}

export const obj_angle_to_object = (obj1, obj2) => {
    const x1 = obj1.rawData[oPosX], z1 = obj1.rawData[oPosZ]
    const x2 = obj2.rawData[oPosX], z2 = obj2.rawData[oPosZ]

    return atan2s(z2 - z1, x2 - x1)
}
