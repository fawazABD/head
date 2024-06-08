
// Define Gymnasium class
class Gymnasium {
    constructor(name, address, telephone) {
      this.name = name;
      this.address = address;
      this.telephone = telephone;
    }
  }
  
  // Define Member class
  class Member {
    constructor(id, lastName, firstName, address, dateOfBirth, gender) {
      this.id = id;
      this.lastName = lastName;
      this.firstName = firstName;
      this.address = address;
      this.dateOfBirth = dateOfBirth;
      this.gender = gender;
    }
  }
  
  // Define Session class
  class Session {
    constructor(sportType, schedule, maxCapacity) {
      this.sportType = sportType;
      this.schedule = schedule;
      this.maxCapacity = maxCapacity;
      this.membersRegistered = [];
    }
  
    registerMember(member) {
      if (this.membersRegistered.length < this.maxCapacity) {
        this.membersRegistered.push(member);
        return true;
      } else {
        return false; // Session is full
      }
    }
  }
  
  // Define Coach class
  class Coach {
    constructor(lastName, firstName, age, specialty) {
      this.lastName = lastName;
      this.firstName = firstName;
      this.age = age;
      this.specialty = specialty;
    }
  }
  
  // Example usage:
  const gymnasium = new Gymnasium("Fitness Center", "123 Main St", "555-1234");
  
  const member = new Member("001", "Doe", "John", "456 Elm St", "1990-01-01", "Male");
  
  const session = new Session("Yoga", "Monday 6:00 PM", 20);
  
  const coach1 = new Coach("Smith", "Alice", 35, "Yoga");
  const coach2 = new Coach("Jones", "Bob", 40, "CrossFit");
  
  session.registerMember(member);
  
  console.log(session.membersRegistered);
  