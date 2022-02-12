class School{
    constructor(name,level,numberOfStudent){
      this._name=name;
      this._level=level;
      this._numberOfStudent=numberOfStudent;
    }
    get name(){
      return this._name
    }
    get level(){
      return this._level;
    }
    get numberOfStudent(){
      return this._numberOfStuent;
    }
    set numberOfStudent(newNumberOfStudents){
      if (typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents
  
      }else{
        return "Invalid input: numberOfStudents must be set to a Number.";
      }
    }
  
   quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers){
      substituteTeachers = [];
      let randomNumber = Math.floor(Math.random() * substituteTeachers.length);
      
      return substituteTeachers[randomNumber];
  
    }
  
  }
  
  class PrimarySchool  extends School {
    constructor(name,level,numberOfStudents, pickupPolicy){
      super(name, 'Primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    
    get pickupPolicy(){
      return this._pickupPolicy;
    }
    
  }
  
  class HighSchool  extends School {
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'High', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  const  lorraineHansbury=new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  console.log(lorraineHansbury);
  
  lorraineHansbury.quickFacts();
  
  School.pickSubstituteTeacher('Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli');
  
  const alSmith=new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith._sportsTeams);
  
  