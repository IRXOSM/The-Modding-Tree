addLayer("p", {
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
            description: "Increases point gain",
            cost: new Decimal(10),
        },
        12: {
            description: "Doubles point gain",
            cost: new Decimal(35),
        },
        13: {
            description: "Even more points, who doesn't like that !?",
            cost: new Decimal(100),
        },
        21: {
            description: "While I give you upgrades, lets chat a bit. Don't you find the scaling too annoying?",
            cost: new Decimal(150),
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