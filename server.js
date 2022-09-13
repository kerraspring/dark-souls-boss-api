const express = require('express')
const app = express();
const cors = require('cors');
const PORT = 5000

app.use(cors())

app.listen(process.env.PORT || PORT, function() {
    console.log(`running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.sendFile(__dirname + '/api.html')
})

app.get('/api/:boss', (req, res) => {
    const bossName = req.params.boss.toLowerCase()
    if(bosses[bossName]){
        res.json(bosses[bossName])
    }else{
        res.json(bosses['unknown'])
    }
})

const bosses = {
    'asylum demon': {
        name: 'Asylum Demon',
        location: 'Northern Undead Asylum',
        drops: "1 Humanity, 2,000 souls",
        possibleDrops: "Big Pilgrim Key, Demon's Great Hammer"
    },
    'taurus demon': {
        name: 'Taurus Demon',
        location: 'Undead Burg',
        drops: '3,000 souls, 1 Humanity, 1 Homeward Bone',
        possibleDrops: "Demon's Greataxe"
    },
    'bell gargoyle': {
        name: 'Bell Gargoyle',
        location: 'Undead Parish',
        drops: "10,000 Souls, 1 Twin Humanities, Gargoyle's Halberd",
        possibleDrops: 'Gargoyle Shield, Gargoyle Helm, Gargoyle Tail Axe'
    },
    'capra demon': {
        name: 'Capra Demon',
        location: 'Undead Burg',
        drops: '6,000 souls, Key to Depths, 1 Humanity, 1 Homeward Bone',
        possibleDrops: 'Demon Great Machete'
    },
    'ceaseless': {
        name: 'Ceaseless Discharge',
        location: 'Demon Ruins',
        drops: '20,000 souls, 1 Humanity, 1 Homeward Bone'
    },
    'centipede': {
        name: 'Centipede Demon',
        location: 'Demon Ruins',
        drops: '40,000 souls, Orange Charred Ring, 1 Humanity, 1 Homeward Bone'
    },
    'quelaag': {
        name: 'Chaos Witch Quelaag',
        location: 'Blighttown',
        drops: '20,000 Soul, Soul of Quelaag, 1 Twin Humanities'
    },
    'priscilla': {
        name: 'Crossbreed Priscilla',
        location: 'Painted World of Ariamis',
        drops: "Soul of Priscilla, 30,000 souls, 1 Twin Humanities",
        possibleDrops: "Priscilla's Dagger"
    },
    'gwyndolin': {
        name: 'Dark Sun Gwyndolin',
        location: 'Anor Londo',
        drops: 'Soul of Gwyndolin, 40,000 souls'
    },
    'firesage': {
        name: 'Demon Firesage',
        location: 'Demon Ruins',
        drops: "20,000 souls, Demon's Catalyst, 1 Humanity"
    },
   'four kings' : {
        name: 'Four Kings',
        location: 'The Abyss',
        drops: 'Bequeathed Lord Soul Shard, 60,000 souls, 4 Humanity'
   },
   'gaping dragon': {
        name: 'Gaping Dragon',
        location: 'The Depths',
        drops: '25,000 souls, Blighttown Key, 1 Twin Humanities, 1 Homeward Bone',
        possibleDrops: 'Dragon King Greataxe'
   },
   'sif': {
        name: 'Great Grey Wolf Sif',
        location: 'Darkroot Garden',
        drops: 'Soul of Sif, 40,000 souls, Covenant of Artorias, 1 Humanity, 1 Homeward Bone'
   },
   'gwyn': {
        name: 'Gwyn, Lord of Cinder',
        location: 'Kiln of the First Flame',
        drops: '70,000 souls, Soul of Gwyn, Lord of Cinder'
   },
   'iron golem': {
        name: 'Iron Golem',
        location: "Sen's Fortress",
        drops: 'Core of an Iron Golem, 40,000 souls, 1 Humanity'
   },
   'moonlight butterfly': {
        name: 'Moonlight Butterfly',
        location: 'Darkroot Garden',
        drops: '1 Humanity, Soul of the Moonlight Butterfly',
        possibleDrops: 'Blue Titanite Chunk, Blue Titanite Chunk, Blue Titanite Slab'
   },
   'nito': {
        name: 'Gravelord Nito',
        location: 'Tomb of Giants',
        drops: 'Lord Soul, 60,000 souls, 1 Humanity'
   },
   'o and s': {
        name: 'Ornstein and Smough',
        location: 'Anor Londo',
        drops: 'Soul of Ornsetin or Soul of Smough, 50,000 souls, Leo Ring'
   },
   'pinwheel': {
        name: 'Pinwheel',
        location: 'The Catacombs',
        drops: '15,000 souls, Rite of Kindling, 1 Humanity, Mask of the Father or Mother or Child'
   },
   'seath': {
        name: 'Seath the Scaleless',
        location: 'Crystal Cave',
        drops: '60,000 souls, Bequeathed Lord Soul of Shard, 1 Humanity',
        possibleDrops: 'Moonlight Greatsword'
   },
   'stray demon': {
        name: 'Stray Demon',
        location: 'Undead Asylum',
        drops: 'Titanite Slab, 20,000 souls, 1 Humanity, 1 Homeward Bone'
   },
   'bed of chaos': {
        name: 'Bed of Chaos',
        location: 'Lost Izalith',
        drops: "Lord's Soul, 60,000 souls, 1 Humanity"
   },
    'kalameet': {
        name: 'Black Dragon Kalameet',
        location: 'Royal Wood',
        drops: '60,000 souls, Calamity Ring',
        possibleDrops: 'Obsidian Greatsword'
    },
    'artorias': {
        name: 'Artorias the Abysswalker',
        location: 'Royal Wood',
        drops: '25,000 souls, Soul of Artorias',
    },
    'manus': {
        name: 'Manus, Father of the Abyss',
        location: 'Chasm of the Abyss',
        drops: '60,000 souls, Soul of Manus,10 Humanity',
    },
    'unknown': {
        location: 'unknown',
        drops: 'unknown',
        possibleDrops: 'unknown'
    }
}
