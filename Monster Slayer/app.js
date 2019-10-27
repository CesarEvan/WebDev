new Vue({
    el:'#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods:{
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        Attack: function() {
            var damage = this.calculatedamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isplayer: true,
                text: 'Player hits monster for = ' + damage
            });
            if(this.checkWin()) {
                return;
            }
            this.mosnterAttack();
        },
        specialAttack: function() {
            var damage = this.calculatedamage(10,20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isplayer: true,
                text: 'Player hits monster Hard for = ' + damage
            });
            if(this.checkWin()) {
                return;
            }
            this.mosnterAttack();
        },
        heal: function() {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isplayer: true,
                text: 'Player Heal for = 10 '
            });
            this.mosnterAttack();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        mosnterAttack: function() {
            var damage = this.calculatedamage(5,12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isplayer: false,
                text: 'Monster hits Player for = ' + damage
            });
        },
        calculatedamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if(thi.monsterHealth <= 0) {
                if(confirm("You win! New game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.playerHealth <= 0) {
                if(confirm("You lose! New game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
    }
});