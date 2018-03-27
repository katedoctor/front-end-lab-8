function Config({ name, attack, hitpoints }) {
  this.name = name;
  this.attack = attack;
  this.hitpoints = hitpoints;
  this.currentHitpoints = hitpoints;
}

Config.prototype.getHitpoints = function () {
  return this.currentHitpoints;
}

Config.prototype.setHitpoints = function (num) {
  this.currentHitpoints = num;
}

Config.prototype.getTotalHitpoints = function () {
  return this.hitpoints;
}

Config.prototype.setTotalHitpoints = function (num) {
  this.hitpoints = num;
}

Config.prototype.getAttack = function () {
  return this.attack;
}

Config.prototype.setAttack = function (num) {
  this.attack = num;
}

Config.prototype.fight = function (enemy) {
  if (enemy.isAlive() && this !== enemy) {
    if (this.countFight) {
      enemy.currentHitpoints -= this.attack * 2;
      this.countFight--;
    } else {
      enemy.currentHitpoints -= this.attack;
    }
  } else if (!enemy.isAlive()) {
    this.gets1(enemy);
  }
}


Config.prototype.isAlive = function () {
  return this.hitpoints > 0;
}



function Champion({ name, attack, hitpoints }) {
  this.name = name;
  this.attack = attack;
  this.hitpoints = hitpoints;
  this.currentHitpoints = hitpoints;
  this.hit = false;

  Config.call(this, { name, attack, hitpoints });

  this.heal = function () {
    this.currentHitpoints += 5;
    if (this.hitpoints > this.currentHitpoints) {
      this.hitpoints = this.currentHitpoints;
    }
  }

  this.defence = function () {
    this.setTotalHitpoints(this.hitpoints + 1);
    this.hit = true;
    return this.hit;
  }

  this.gets1 = function () {
    this.attack++;
  }

  Config.prototype.fight = function (enemy) {
    if (enemy !== this && enemy.isAlive()) {
      enemy.currentHitpoints = enemy.currentHitpoints - this.attack;
    }
    if (!enemy.isAlive()) {
      this.gets1();
    }
  }
}


Champion.prototype = Object.create(Config.prototype);
Champion.prototype.constructor = Champion;


function Monster({ name, attack, hitpoints }) {
  this.name = name;
  this.attack = attack;
  this.hitpoints = hitpoints;
  this.countFight = 0;
  this.hit = false;

  Config.call(this, { name, attack, hitpoints });


  this.enrage = function () {
    this.countFight = 2;
  }

  this.fury = function () {
    if (this.hitpoints > 5) {
      this.currentHitpoints -= 5;
      this.hitpoints -= 5;
      this.attack += 2;
    }
  }

  this.gets1 = function () {
    this.hitpoints = Math.floor(this.hitpoints + enemy.currentHitpoints * 0.25);
    this.currentHitpoints = Math.floor(this.currentHitpoints + enemy.currentHitpoints * 0.1);
  }

  Config.prototype.fight = function (enemy) {
    let damage = this.attack;
    if ((enemy != this) && enemy.isAlive()) {
      if (this.countFight > 0) {
        damage *= 2;
        this.countFight -= 1;
      }
      if (enemy.hit > 0) {
        damage = 0;
        enemy.hit -= 1;
      }
      enemy.currentHitpoints -= damage;
    }
  }
}

Monster.prototype = Object.create(Config.prototype);
Monster.prototype.constructor = Monster;