const express = require('express')
const app = express();
const PORT = 5000

const bosses = {
    'asylum demon': {
        location: 'Northern Undead Asylum',
        drops: "1 Humanity, 2,000 souls",
        possibleDrops: "Big Pilgrim Key, Demon's Great Hammer"
    },
    'taurus demon': {
        location: 'Undead Burg',
        drops: '3,000 souls, 1 Humanity, 1 Homeward Bone',
        possibleDrops: "Demon's Greataxe"
    },
    'bell gargoyle': {
        location: 'Undead Parish',
        drops: "10,000 Souls, 1 Twin Humanities, Gargoyle's Halberd",
        possibleDrops: 'Gargoyle Shield, Gargoyle Helm, Gargoyle Tail Axe'
    },
    'capra demon': {
        location: 'Undead Burg',
        drops: '6,000 souls, Key to Depths, 1 Humanity, 1 Homeward Bone',
        possibleDrops: 'Demon Great Machete'
    },
    'centipede demon': {
        location: 'Demon Ruins',
        drops: '40,000 souls, Orange Charred Ring, 1 Humanity, 1 Homeward Bone'
    },
    'crossbreed priscilla': {
        location: 'Painted World of Ariamis',
        drops: "Soul of Priscilla, 30,000 souls, 1 Twin Humanities",
        possibleDrops: "Priscilla's Dagger"
    },
    'dark sun gwyndolin': {
        location: 'Anor Londo',
        drops: 'Soul of Gwyndolin, 40,000 souls'
    },
    'demon firesage': {
        location: 'Demon Ruins',
        drops: "20,000 souls, Demon's Catalyst, 1 Humanity"
    },
   'four kings' : {
        location: 'The Abyss',
        drops: 'Bequeathed Lord Soul Shard, 60,000 souls, 4 Humanity'
   },
   'gaping dragon': {
        location: 'The Depths',
        drops: '25,000 souls, Blighttown Key, 1 Twin Humanities, 1 Homeward Bone',
        possibleDrops: 'Dragon King Greataxe'
   },
   'great grey wolf sif': {
        location: 'Darkroot Garden',
        drops: 'Soul of Sif, 40,000 souls, Covenant of Artorias, 1 Humanity, 1 Homeward Bone'
   },
   'gwyn': {
        location: 'Kiln of the First Flame',
        drops: '70,000 souls, Soul of Gwyn, Lord of Cinder'
   },
   'iron golem': {
        location: "Sen's Fortress",
        drops: 'Core of an Iron Golem, 40,000 souls, 1 Humanity'
   },
   'moonlight butterfly': {
        location: 'Darkroot Garden',
        drops: '1 Humanity, Soul of the Moonlight Butterfly',
        possibleDrops: 'Blue Titanite Chunk, Blue Titanite Chunk, Blue Titanite Slab'
   },
   'gravelord nito': {
        location: 'Tomb of Giants',
        drops: 'Lord Soul, 60,000 souls, 1 Humanity'
   },
   'ornstein and smough': {
        location: 'Anor Londo',
        drops: 'Soul of Ornsetin or Soul of Smough, 50,000 souls, Leo Ring'
   },
   'pinwheel': {
        location: 'The Catacombs',
        drops: '15,000 souls, Rite of Kindling, 1 Humanity, Mask of the Father or Mother or Child'
   },
   'seath the scaleless': {
        location: 'Crystal Cave',
        drops: '60,000 souls, Bequeathed Lord Soul of Shard, 1 Humanity',
        possibleDrops: 'Moonlight Greatsword'
   },
   'stray demon': {
        location: 'Undead Asylum',
        drops: 'Titanite Slab, 20,000 souls, 1 Humanity, 1 Homeward Bone'
   },
   'bed of chaos': {
        location: 'Lost Izalith',
        drops: "Lord's Soul, 60,000 souls, 1 Humanity"
   },
    'unknown': {
        location: 'unknown',
        drops: 'unknown',
        possibleDrops: 'unknown'
    }
}

app.listen(PORT, function() {
    console.log('listening')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:boss', (req, res) => {
    const bossName = req.params.boss.toLowerCase()
    if(bosses[bossName]){
        res.json(bosses[bossName])
    }else{
        res.json(bosses['unknown'])
    }
})