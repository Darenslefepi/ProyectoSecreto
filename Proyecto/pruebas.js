var array = [1, false, true, "andres", 0.05, [8, "felipe", false, true], {camilo: "canasto", david: "queso", wilinton: "aventuras"}]
console.log(array.length)
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[5].length)
console.log(array[5][0])
console.log(array[5][1])
console.log(array[5][2])
console.log(array[5][3])
console.log(array[6])
console.log(array[6].camilo)
console.log(array[6].david)
console.log(array[6].wilinton)
array.push("vaca vacuna")
console.log(array.length)
console.log(array[7])
console.log(typeof array[0])
console.log(typeof array[1])
console.log(typeof array[2])
console.log(typeof array[3])
console.log(typeof array[4])
console.log(typeof array[5])
console.log(typeof array[5][3])
console.log(typeof array[6])
console.log(typeof array[6].camilo)
console.log(typeof array[7])
console.log(array)

const numeros = [1, 2, 3, 4, 5]
const cuadrados = numeros.map(function(numero) {
    return numero * numero
})

console.log(cuadrados)

const suma = numeros.reduce(function(acumlador, numero) {
    return acumlador + numero
})
console.log(suma)

const catds = {
    mimi: {
        name: "Mimi",
        followers: [320, 120, 70]
    },
    milo: {
        name: "Milo",
        followers: [400, 300, 100, 200]
    },
    gizmo: {
        name: "Gizmo",
        followers: [250, 750]
    }
}

for (let suma in catds) {
    console.log(suma) 
}

const milo = catds.milo.followers.reduce(function(acumulador, numero) {
    return acumulador + numero
})
console.log(milo)
const mimi = catds.mimi.followers.reduce((a, b) => a + b )
console.log(mimi)
console.log(catds.milo.followers)
console.log(catds.milo.followers.length)

const cats = [{name: "milo", followers: [200, 150, 850]}, {name: "yuyi", followers: [350, 440, 600]}, {name: "kuky", followers: [400, 350, 260]}]
console.log(cats)
for(let michi of cats) {
    console.log(michi.followers.reduce((a, b) => a + b))
    
}

function findFamousCats(cats) {
    // Tu código aquí 👈
    let famososGatos = {
      catNames: [],
      maxNumSeguidor: 0,
    };
    for (let i = 0; i < cats.length; i++) {
      const cat = cats[i]
      //console.log(cat[i])
      const totalSeguidor = cat.followers.reduce((a, b) => a + b);
      //console.log(totalSeguidor)
      if (totalSeguidor === famososGatos.maxNumSeguidor) {
        famososGatos.catNames.push(cat.name)
        //console.log(famososGatos)
      }
      if (totalSeguidor > famososGatos.maxNumSeguidor) {
        famososGatos.catNames = []
        //console.log(famososGatos)
        famososGatos.catNames.push(cat.name)
        //console.log(famososGatos)
        famososGatos.maxNumSeguidor = totalSeguidor
        //console.log(famososGatos)
      }
    }
    return famososGatos.catNames
  }
  console.log(findFamousCats(cats))

console.log(cats[1].followers.reduce((a, b) => a * b))
console.log(cats[1].followers.reduce((a, b) => a + b))
console.log(cats[1].followers.reduce((a, b) => a - b))
console.log(cats[1].followers.reduce((a, b) => a / b))
console.log(cats[1].followers.reduce((a, b) => a % b))
console.log(cats[0].followers.reduce((a, b) => a + b))
console.log(cats[2].followers.reduce((a, b) => a + b))

//seccion de objetos

let carro = {
    marca: "Toyota",
    encender: function() {
      console.log("El carro ha sido encendido");
    }
  };

  console.log(carro)
  console.log(carro.marca)
  console.log(carro.encender())

let students = [{
          name: "Pedro",
          grades: [90, 87, 88, 90],
        },
        {
          name: "Jose",
          grades: [99, 71, 88, 96],
        },
        {
          name: "Maria",
          grades: [92, 81, 80, 96],
        },
]
for (let promedio of students) {
    console.log(promedio.grades.reduce((a, b) => a + b))
    console.log(promedio.name)
}
console.log(students[2].grades)

  function getStudentAverage(students) {
    let finales = {
        classAverage: 0,
        students: [{
            name: "y",
            average: 0
        }]
    } 
    for (let notas of students) {
        let promedios = (notas.grades.reduce((a, b) => a + b) / notas.grades.length )
        console.log(promedios)
        console.log(notas.grades.reduce((a, b) => a + b) / notas.grades.length)
        console.log(notas.name)
        console.log(notas.grades.length)
        //finales.classAverage = promedios.reduce((a, b) => a + b)
        finales.students[0].name = (notas.name)
        finales.students[0].average = promedios
        console.log(finales.students[0].name)
        console.log(finales.students)
        console.log(finales)
        //console.log(finales.students[0].average.reduce((a, b) => a + b))
    }
    for (let media of finales.students) {
        console.log(media)
    }
  }
  getStudentAverage(students)