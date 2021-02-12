class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('PlayerCount');
        playerCountRef.on("value", (data) => {
            PlayerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            PlayerCount: count
        });
    }

    update() {
        var PlayerIndex = "Players/player" + this.index;
        database.ref(PlayerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('Players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
