const mongoose = require("mongoose");

const SkillSchema = mongoose.Schema({
    skills: {
        str: { type: Number, default: 0 },
        end: { type: Number, default: 0 },
        dex: { type: Number, default: 0 },
        dec: { type: Number, default: 0 },
    },
    pah: {
        hc: {
            p: { type: Boolean, default: false },
            r: { type: Boolean, default: false },
            w: { type: Boolean, default: false },
            f: { type: Boolean, default: false },
            time: { type: Number, default: 0 },
            score: { type: Number, default: 0 },
        },
        rfth: {
            p: { type: Boolean, default: false },
            r: { type: Boolean, default: false },
            w: { type: Boolean, default: false },
            f: { type: Boolean, default: false },
            time: { type: Number, default: 0 },
            score: { type: Number, default: 0 },
        },
        cd: {
            p: { type: Boolean, default: false },
            r: { type: Boolean, default: false },
            w: { type: Boolean, default: false },
            f: { type: Boolean, default: false },
            time: { type: Number, default: 0 },
            score: { type: Number, default: 0 },
        },
        st: {
            p: { type: Boolean, default: false },
            r: { type: Boolean, default: false },
            w: { type: Boolean, default: false },
            f: { type: Boolean, default: false },
            time: { type: Number, default: 0 },
            score: { type: Number, default: 0 },
        },
        sb: {
            p: { type: Boolean, default: false },
            r: { type: Boolean, default: false },
            w: { type: Boolean, default: false },
            f: { type: Boolean, default: false },
            time: { type: Number, default: 0 },
            score: { type: Number, default: 0 },
        },
    },
    crc: {
        cc: {
            p: { type: Boolean, default: false },
            r: { type: Boolean, default: false },
            w: { type: Boolean, default: false },
            f: { type: Boolean, default: false },
            time: { type: Number, default: 0 },
            score: { type: Number, default: 0 },
        },
        tc: {
            p: { type: Boolean, default: false },
            r: { type: Boolean, default: false },
            w: { type: Boolean, default: false },
            f: { type: Boolean, default: false },
            time: { type: Number, default: 0 },
            score: { type: Number, default: 0 },
        },
        da: {
            p: { type: Boolean, default: false },
            r: { type: Boolean, default: false },
            w: { type: Boolean, default: false },
            f: { type: Boolean, default: false },
            time: { type: Number, default: 0 },
            score: { type: Number, default: 0 },
        },
        nc: {
            p: { type: Boolean, default: false },
            r: { type: Boolean, default: false },
            w: { type: Boolean, default: false },
            f: { type: Boolean, default: false },
            time: { type: Number, default: 0 },
            score: { type: Number, default: 0 },
        },
        dw: {
            p: { type: Boolean, default: false },
            r: { type: Boolean, default: false },
            w: { type: Boolean, default: false },
            f: { type: Boolean, default: false },
            time: { type: Number, default: 0 },
            score: { type: Number, default: 0 },
        },
    },
});

module.exports = mongoose.model("Skill", SkillSchema);
