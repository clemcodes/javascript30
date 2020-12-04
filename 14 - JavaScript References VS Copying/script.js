    // start with strings, numbers and booleans
    let age = 100;
    let age2 = age;
    console.log(age, age2); // return  100 100
    age = 200;
    console.log(age, age2); // return 200 100

    let name = 'clem';
    let name2 = name;
    console.log(name, name2); // return clem clem
    name = 'Clementine';
    console.log(name, name2); // return clementine clem


    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;
    console.log(players, team); // same arrays

    // You might think we can just do something like this:
    team[3] = 'Lux';
    console.log(players, team);
    // however what happens when we update that array? - team is not the array, team is just a reference to the original array
    // now here is the problem!
    // oh no - we have edited the original array too!
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    // one way - slice
    const team2 = players.slice();
    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] ='heee hawww';
    console.log(team4, players);

    const team5 = Array.from(players);
    // now when we update it, the original one isn't changed
    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy: wrong way!
    const captain = person;
    captain.number = 99;
    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, { number: 99, age: 12 });
    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep (doesn't work for nested levels) - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const clem = {
      name:'clem',
      age:100,
      social:{
        twitter:'@clem',
        facebook:'clementine'
      }
    }

    const dev = Object.assign({}, clem);
    dev.social.twitter = '@clementine'; // changed the original too

    //cheating way, poor man's deep clone, not sure about the performance
    const dev2 = JSON.parse(JSON.stringify(clem)); // parse to turn the stringified back into an object
    dev2.social.twitter = '@clementine'; // original won't be touched
