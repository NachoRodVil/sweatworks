const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Skill = require("../models/Skill");

router.get("/", (req, res) => {
    try {
        User.find().then(async (users) => {
            const arr = [];
            await Promise.all(
                users.map(async (user) => {
                    await Skill.findById(user.id_skills).then((skills) => {
                        const userData = {
                            bib: user.bib,
                            name: user.name,
                            age: user.age,
                            gender: user.gender,
                            time: user.time,
                            score: user.score,
                            img: user.img,
                            skills: skills.skills,
                            pah: skills.pah,
                            crc: skills.crc,
                        };
                        arr.push(userData);
                    });
                })
            );
            res.status(200).send(arr);
        });
    } catch (err) {
        res.json({ message: err });
    }
});

router.post("/", (req, res) => {
    try {
        const skill = new Skill({
            skills: req.body.skills,
            pah: req.body.pah,
            crc: req.body.crc,
        });

        skill
            .save()
            .then((data) => {
                const user = new User({
                    name: req.body.name,
                    age: req.body.age,
                    gender: req.body.gender,
                    bib: req.body.bib,
                    time: req.body.time,
                    score: req.body.score,
                    img: req.body.img,
                    id_skills: data._id,
                });
                user.save().then((data2) => {
                    res.status(200).send(data2);
                });
            })
            .catch((err) => {
                res.json({ message: err });
            });
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
