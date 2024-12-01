class TileType {

    constructor(name, texture) {
        this.name = name;
        this.texture = texture;
    }
}

class Tile {

    constructor(position, type) {
        this.position = position;
        this.type = type;
    }
}

class TileFactory {

    static tileTypes = new Map();

    static getTileType(name, texture) {

        const typeKey = name + texture;

        let type = TileFactory.tileTypes.get(typeKey);

        if (type == null) {
            type = new TileType(name, texture);
            TileFactory.tileTypes.set(typeKey, type);
        }

        return type;
    }
}



function clientCode() {

    const terrains = [
        { name: 'Grass', texture: 'grass.png' },
        { name: 'Water', texture: 'water.png' },
        { name: 'Mountain', texture: 'mountain.png' },
    ];

    const map = [];

    for (let x = 0; x < 1000; x++) {
        for (let y = 0; y < 1000; y++) {
            const randomTerrain = terrains[Math.floor(Math.random() * terrains.length)];
            const tileType = TileFactory.getTileType(randomTerrain.name, randomTerrain.texture);
            const tile = new Tile({x, y}, tileType);
            map.push(tile);
        }
    }

    console.log(`Generated a map with ${map.length} tiles.`);
    console.log(`Unique terrain types created: ${TileFactory.tileTypes.size}`);
}

clientCode();
