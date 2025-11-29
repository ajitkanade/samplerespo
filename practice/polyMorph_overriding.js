
class Animal{
    speak(){
        console.log("Animal speak in different language");
            }
}
class Dog extends Animal{
    speak(){
    console.log("Bhaw Bhaw");
           }
}
class Cat extends Animal{
    speak(){
        console.log("Mewo Mewdo");
    }
}

const dog1=new Dog();
dog1.speak();
 
const cat1=new Cat();
cat1.speak();

const animal1=new Animal();
animal1.speak();
