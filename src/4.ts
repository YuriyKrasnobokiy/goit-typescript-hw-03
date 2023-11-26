class Key {
  private signature: number = Math.random();

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(protected key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  public door: boolean = true;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person) {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }
  abstract OpenDoor(key: Key): boolean;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
    this.door = false;
  }

  OpenDoor(key: Key): boolean {
    return key.getSignature() === this.key.getSignature();
  }

  openDoor() {
    if (this.OpenDoor(this.key)) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor();

house.comeIn(person);

// export {};
