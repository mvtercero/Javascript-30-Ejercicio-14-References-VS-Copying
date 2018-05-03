"use strict";


// start with strings, numbers and booleans

    // let age = 30;
    // let age2 = age;
    // console.log(age, age2);
    // age = 100;
    // console.log(age, age2);

    // let name = "Sandra";
    // let name2 = name;
    // console.log(name, name2);
    // name = "Alejandra";
    // console.log(name, name2);

//Con number, string o booleano, si cambias el original, no actualiza la reasignación

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    // and we want to make a copy of it.

    const team = players;
    console.log(players, team); 

    // You might think we can just do something like this:

    // team[2] = "Almudena";
    // console.log(team);
    // console.log(players);

//Cuando actualizas el array team, editas el original también.
//Esto ocurre porque team no es una copia sino una referencia. 
//Players y team están apuntando al mismo sitio en la memoria

//¿Cómo se soluciona esto?
//Podemos hacerlo de 4 formas
//1. Creando una copia con el método slice

    const team2 = players.slice();

//Usamos el método slice para hacer una copia de una parte del array original, en un array nuevo. 
//Así el original no se modifica.

//2. Creando un nuevo array y concatenándolo con el original
    const team3 = [].concat(players);
    team3[0] = "Adalabers rules";
    console.log(team3);
    console.log(players);

//3. Usando el spread de ES6
    const team4 = [...players];
    team4[2] = "Soy un nuevo jugador";
    console.log(team4);
    console.log(players);

//4. Aplicando Array.from
    const team5 = Array.from(players);
    team5[1] = "Yihaaaaa";
    console.log(team5);
    console.log(players);

    // or create a new array and concat the old one in
    // or use the new ES6 Spread
    // now when we update it, the original one isn't changed
    // The same thing goes for objects, let's say we have a person object
    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

//OBJETOS
//Con los objetos ocurre lo mismo con los array

    // const captain = person;
    // captain.age = 100;
    // console.log(person);

//Si queremos hacer una copia, tenemos que usar Object.assign
//Object.assign se utiliza para copiar los valores de todas la propiedades enumerables de uno o más objetos fuente a un objeto destino. Retorna el objeto destino. 


    // and think we make a copy:
    // how do we take a copy instead?

    // const captain2= Object.assign({}, person, {age:101, daugther: 'Manolita Bros'});
    // console.log(captain2);
    // console.log(person);

    // We will hopefully soon see the object ...spread

    // const captain3= {...person};
    // console.log(captain3);
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const user = {
        name: 'ana',
        age: 29,
        social: {
            twitter: '@anaGon',
            facebook: 'soyAna'
        }
    };

    console.log(user);
    const newUser = Object.assign({}, user);
    console.log(newUser);
    //Probar en consola newUser.social.twitter= "@cool" para comprobar que así podríamos cambiar
    //el nivel más bajo pero que no se hace una copia profunda

    //Para hacer una copia profunda, convertimos el objeto en un string y lo volvemos a convertir en objeto
    const newUser2= JSON.parse(JSON.stringify(user));
    newUser2.social.facebook = 'cool';
    console.log(user,newUser2);

    //Consultar https://medium.com/@amartinezaguilar6/copiar-objetos-en-js-71d9da9b53f8
    //Consultar https://medium.com/@gloriafercu/clonando-objetos-en-javascript-ii-ecc5092ed702

