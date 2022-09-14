const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ];


function contarOvejas(ovejas) {
    let listaOvejas = [];
    let regularEx = /n+a/gi
    ovejas.forEach((oveja)=> {
      if (oveja.color == "rojo" && regularEx.test(oveja.name)){
        listaOvejas.push(oveja);
      }
    });
    return listaOvejas;
  }


  const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)