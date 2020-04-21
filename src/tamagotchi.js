export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.health = 10;
    this.fullness = 10;
    this.happiness = 10;
    this.tiredness = 10;
    this.sick = false;
    this.medsAllowed = false;
    this.medsOffered = false;
    this.poop = false;
    this.healthMult = 1;
    this.lifeStage = 0;
  }

  setLife() {
    setInterval(() => {
      this.tiredness--;
      this.happiness -= .5;
      this.fullness -= 2;
      this.age += 0.5;

      if (this.tiredness <= 3) {
        this.health = this.health - (1 * this.healthMult);
      }

      if (this.happiness <= 3) {
        this.health = this.health - (1 * this.healthMult);
      }

      if (this.health <= 4 && this.lifeStage < 3) {
        this.sick = true;
        this.healthMult = 1.5;
      } else if (this.health <= 6 && this.lifeStage === 3) {
        this.sick = true;
        this.healthMult = 1.5
      }

      if (this.sick === true && this.medsOffered === false) {
        this.allowMedicine();
      }

      if (this.age % 1.5 === 0) {
        this.poopFunction();
      }

      if (this.age % 2.5 === 0) {
        this.evolve();
      }

      if (this.fullness <= 3) {
        this.health = this.health - (2 * this.healthMult);
      } else if (this.fullness >= 8 && !this.sick) {
        if (this.health < 10) {
          this.health += 1;
        }
      }


    }, 30000);
  }

  evolve() {
    if (this.lifeStage < 3) {
      this.lifeStage++;
    }
  }

  didYouDie() {
    if (this.health <= 0) {
      return true;
    } else {
      return false;
    }
  }

  poopFunction() {
    this.poop = true;
    setTimeout(() => {
      if (this.poop === true) {
        this.sick = true;
        this.healthMult = 1.5;
      }
    }, 30000);
  }

  cleanPoop() {
    this.poop = false;
  }

  allowMedicine() {
    this.medsAllowed = true;
    setTimeout(() => {
      this.medsAllowed = false;
      this.medsOffered = true;
    }, 10001);
  }

  feed() {
    if (this.sick === true) {
      this.fullness += 2;
    } else {
      this.fullness = 10;
    }

  }

  play() {
    if (this.sick === true) {
      this.happiness += 2;
    } else {
      this.happiness = 10;
    }

  }

  tuckIn() {
    if (this.sick === true) {
      this.tiredness += 2;
    } else {
      this.tiredness = 10;
    }
  }

  medicine() {
    this.health = 5;
    this.sick = false;
    this.healthMult = 1;
  }
}