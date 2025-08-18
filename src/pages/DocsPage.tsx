import type { JSX } from "react"

const DocsPage = (): JSX.Element => {
  return (
    <>
      <h1>Joan Computer Simulator</h1>
      <p>
        El objetivo de este simulador es que cualquier persona pueda aprender de
        manera intuitiva y guiada cómo los ordenadores compilan y ejecutan
        código.
      </p>
      <p>
        Esta web dispone de un editor de código, un compilador interactivo, un
        entorno de debugging y una documentación extensa donde los usuarios
        podrán aprender todo lo que necesitan para aprovechar el simulador al
        máximo.
      </p>
      <p>
        El simulador utiliza una versión reducida de Typescript. Este código se
        compila a código ensamblador de RISC-V en su versión RV32I y se ejecuta
        por el procesador.
      </p>
      <p>
        Todos los pasos se pueden simular paso a paso de manera interactiva:
        análisis léxico, análisis sintáctivo, generación de código intermedio,
        ensamblado y ejecución.
      </p>
    </>
  )
}

export default DocsPage
