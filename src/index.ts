import {readFile} from 'fs';

/**
 * pares de datos para cada elemento
 */
type Elemento = {
  peso: number,
  valor: number
}

/**
 * datos de la bolsa
 */
type Bolsa = {
  capacidad: number
  n_elementos: number,
  elementos: Elemento[]
}

/**
 * calse plantilla
 */
abstract class Registro{
  protected bolsa: Bolsa;
  protected datos: string;

  constructor(Bag: Bolsa){ 
    this.bolsa = Bag
    this.datos = ""
  }

  public run(){
    this.hook()
    this.pocesar()
    this.hook2()
  }

  protected pocesar(){
    console.log("Procesando...")
  }
  protected hook() { console.log("no ha sido procesado")}
  protected hook2() {console.log("Archivo procesado")}
}

/**
 * clase registro de fichero JSON, no funciona
 */
class RegistroJSON extends Registro {

  constructor(Bolsa: Bolsa){
    super(Bolsa)
  }

  protected pocesar(): void {
    readFile('formato_JSON.JSON', (err, data) => {
      if (err) {
        console.log('There must be a problem with the file you are trying to read');
      } else {
        // console.log(data.toString());
        this.datos = data.toString()  
        let datos = this.datos.split("\n")
        // this.bolsa.capacidad = datos[1].substring()
        console.log(datos)
        // this.bolsa.capacidad = JSON.parse(datos)
        // // console.log(datos)
        // let capacidad = datos[0].split(" ")
        // this.bolsa.capacidad = parseInt(capacidad[0])
        // this.bolsa.n_elementos = parseInt(datos[1])
        // for (let i = 2; i < datos.length; i++) {
        //   let elemento = datos[i].split(" ")
        //   let peso = parseInt(elemento[0])
        //   let valor = parseInt(elemento[1])
        //   this.bolsa.elementos.push({peso, valor})
        // }
        // console.log(this.bolsa)
      }
    });
    //intr
  }
}

/**
 * clase REgistro de fichero CSV
 */
class RegistroCSV extends Registro {

  constructor(Bolsa: Bolsa){
    super(Bolsa)
  }

  protected pocesar(): void {
    readFile('formato_csv.csv', (err, data) => {
      if (err) {
        console.log('There must be a problem with the file you are trying to read');
      } else {
        // console.log(data.toString());
        this.datos = data.toString()  
        let datos = this.datos.split("\n")
        // console.log(datos)
        let capacidad = datos[0].split(" ")
        this.bolsa.capacidad = parseInt(capacidad[0])
        this.bolsa.n_elementos = parseInt(datos[1])
        for (let i = 2; i < datos.length; i++) {
          let elemento = datos[i].split(" ")
          let peso = parseInt(elemento[0])
          let valor = parseInt(elemento[1])
          this.bolsa.elementos.push({peso, valor})
        }
        console.log(this.bolsa)
      }
    });
    //introducir los valores en la bolsa

    
  }
}

const tipo: Bolsa = { capacidad: 0, n_elementos: 0, elementos: []}

const variable = new RegistroCSV(tipo)

const variable2 = new RegistroJSON(tipo)

// variable.run()

variable2.run()