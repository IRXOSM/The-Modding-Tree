addLayer("P", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#4BDC13",                       // The color for this layer, which affects many elements.
    resource: "prestige points",            // The name of this layer's main prestige resource.
    row: 0,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.
    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.1,                          // "normal" prestige gain is (currency^exponent).
    upgrades: {
        rows: 2,
        cols: 3,
        11: {
            description: "Increases point gain | +4",
            cost: new Decimal(10),
        },
        12: {
            description: "Doubles point gain | x2",
            cost: new Decimal(35),
        },
        13: {
            description: "Even more points, who doesn't like that !? | ^1.2",
            cost: new Decimal(100),
        },
        21: {
            description: "While I give you upgrades, lets chat a bit. Don't you find the scaling too annoying? | +10",
            cost: new Decimal(150),
        },
        22: {
            description: "Well now lets skyrocket points! | ^2",
            cost: new Decimal(250),
        },
        23: {
            description: "Now you can finnaly get past the scaling, nice? | x25",
            cost: new Decimal(500),
        },
        
    },
    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns your exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return true }            // Returns a bool for if this layer's node should be visible in the tree.
})
addLayer("2P", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#4BDC13",                       // The color for this layer, which affects many elements.
    resource: "prestige prestige points",            // The name of this layer's main prestige resource.
    row: 1,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal("1e9"),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.
    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.1,                          // "normal" prestige gain is (currency^exponent).

    upgrades: {
        rows: 5,
        cols: 8,
        11: {
            description: "Welcome to Prestige Prestige, or PP. Even more points because why not | +985",
            cost: new Decimal(1),
        },
        
    },
    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns your exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return true }            // Returns a bool for if this layer's node should be visible in the tree.
})