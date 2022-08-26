// 



class Ship {
  constructor(name, hull, firepower, accuracy) {
      this.name = name,
      this.hull = hull,
      this.firepower = firepower, 
      this.accuracy = accuracy
  }
  
}

class MainShip extends Ship {
  constructor(name, hull, firepower, accuracy) {
      super(name, hull, firepower, accuracy)
      
          this.name = "USS Assembly",
              this.hull = 20,
              this.firepower = 5,
              this.accuracy = .7
      }
      attackAlien(target){
          let randomNum = Math.random()
          if (randomNum <= this.accuracy) {
              console.log("Attack")
          }
          else {
              (console.log('You have missed!'))
          }
      }
  }


class AlienShip extends Ship {
   constructor(name, hull, firepower, accuracy){
      super(name, hull, firepower, accuracy)
      this.name = name,
      this.hull = (Math.floor(Math.random() * 3) + 3), // function getRandomArbitrary(min, max) { Math.random() * (max - min) + min;
      this.firepower = (Math.floor(Math.random() * 2) + 2),
      this.accuracy =  (Math.floor(Math.random()* .2) + .6)
  }
  attackMain(target) {
      let randomNum = Math.random()
       if (randomNum < this.accuracy) {
           console.log('You hit the target!');
       }
       else { console.log('You have missed!') }
      }
}
  
    // add additional properties for the "Main Ship"'
  const USSAssembly = new MainShip 
  const alienShip1 = new AlienShip ("Alien Ship 1")
  const alienShip2 = new AlienShip ("Alien Ship 2")
  const alienShip3 = new AlienShip ("Alien Ship 3")
  const alienShip4 = new AlienShip ("Alien Ship 4")
  const alienShip5 = new AlienShip ("Alien Ship 5")
  const alienShip6 = new AlienShip ("Alien Ship 6")


  const allAlien = [alienShip1 , alienShip2, alienShip3, alienShip4 , alienShip5, alienShip6]
    console.log(allAlien)


USSAssembly.attackAlien(alienShip4)