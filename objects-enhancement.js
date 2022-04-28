const createInstructor = (firstName, lastName) => {
   return {
    firstName,
    lastName
   } 
}

const favoriteNum = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNum]: "That is my favorite"
}

const teacher = {
    firstName: "Colt",
    sayHi(){
        return "Hi!"
    },
    sayBye(){
        return this.firstname + " says bye!";
    }
}



const createAnimal = (species, verb, noise) => {
   return {
        species,
        [verb](){
          return noise
        }
   }
}

const horse = createAnimal("horse", "neigh", "neeeeeiiigh")
const dog = createAnimal("dog", "bark", "woooooof")
