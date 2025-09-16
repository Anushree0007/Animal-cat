class Animal{
  //special function that takes incoming parameters
  constructor(br="human", name="Nobody", lang="silence"){
    this.breed = br
    this.name = name
    this.language = lang
  }
  
  // personal fucntion
  talk(){
    print(this.language);
    
  }
  
  expressYourself(){
    print("Hello, I'm "+this.breed+", I say "+this.language)
    print("My name is "+this.name+"! "+this.language+"!")
    print ("Can we be friends?")
  }
}