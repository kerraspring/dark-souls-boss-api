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