import type { JSX } from "react"

const DocsPage = (): JSX.Element => {
  return (
    <>
      <h1>Sobre el proyecto</h1>
      <p>
        El objetivo de este simulador es que cualquier persona pueda aprender de
        manera intuitiva y guiada cómo los ordenadores ejecutan el código.
      </p>
      <p>
        Esta web dispone de un editor de código, un entorno de debugging y una
        documentación extensa donde los usuarios podrán aprender todo lo que
        necesitan para aprovechar el simulador al máximo.
      </p>
      <p>
        El simulador es una implementación de un ordenador con arquitectura de
        Von Neumann. El conjunto de instrucciones que utiliza es RISC-V en su
        versión RV32I. Esta es la variante más sencilla: 32 registros enteros de
        32 bits, operaciones aritméticas enteras, carga y almacenamiento en
        memoria, saltos y control de flujo, instrucciones de carga inmediatas y
        ejecución estrictamente alineada.
      </p>
      <h2>¿Qué es un programa informático?</h2>
      <p>
        Un programa informático es una serie de instrucciones que debe realizar
        un ordenador para conseguir un resultado específico.
      </p>
      <p>
        Los ordenadores solamente pueden ejecutar unas instrucciones muy
        específicas, que dependen del conjunto de instrucciones para el que haya
        sido diseñado el procesador. Estas instrucciones son muy básicas:
        operaciones con números enteros o decimales, mover datos entre partes
        del ordenador o realizar saltos en el código. Los procesadores modernos
        son capaces de ejecutar millones de estas instrucciones por segundo,
        convirtiendo tareas que para un humano serían complicadas y lentas en
        tareas prácticamente instantáneas.
      </p>
      <p>
        El código que ejecutan los ordenadores se llama ensamblador y es la
        representación directa de los 0 y 1 que utilizan los componentes
        electrónicos del ordenador. Escribir todas estas instrucciones básicas
        supondría muchísimo trabajo porque habria que indicar al ordenador cada
        uno de los pasos que debería seguir. En su lugar se utilizan lenguajes
        de programación, que permiten realizar las mismas operaciones con menos
        líneas de código y un código más legible para el ser humano. Luego, este
        código legible para los humanos se transforma a código ensamblador que
        los ordenadores pueden ejecutar.
      </p>
      <h3>¿Cómo se ejecuta un programa informático?</h3>
      <p>
        El proceso que sigue un ordenador para ejecutar un programa informático
        no difiere mucho del proceso que seguiría cualquier persona al cocinar.
        Los datos de entrada serían los ingredientes. Estos datos pueden ser una
        combinación de datos fijos, datos introducidos por un usuario o datos
        provenientes del exterior, por ejemplo de internet. El programa
        informático contiene las instrucciones con las que se deben procesar
        estos datos. Es nuestra receta. Al terminar la receta tendremos nuestro
        plato terminado.
      </p>
      <p>
        Lo más importante para poder seguir una lista de pasos es saber en qué
        paso estamos en cada momento. Los procesadores guardan en el contador de
        programa (CP) la posición en memoria de la siguiente instrucción que
        deben ejecutar. Para cada paso, el procesador leerá esta instrucción en
        la memoria, la decodificará para saber la operacion que debe realizar,
        obtendrá de la memoria los datos que necesite para operar (en caso de
        que los necesite) y realizará la operación.
      </p>
      <p>
        Los procesadores tienen unos registros en los que guardan los datos que
        están utilizando en ese momento para operar. Podemos entender esto como
        los platos o bandejas en los que dejamos la comida que hemos procesado
        de alguna manera pero no servirá luego para realizar algo más. Por
        ejemplo, para hacer una tortilla el primer paso sería obtener de la
        nevera (la memoria) los huevos, el siguiente paso sería batir los huevos
        y por último cocinarlos. En el paso intermedio no volvemos a guardar los
        huevos batidos en la nevera (memoria), sino que los dejamos en un plato
        o bol.
      </p>
      <h2>RISC-V</h2>
      <h3>Contador de programa</h3>
      <p>
        El contador de programa (CP) guarda la dirección de la siguiente
        instrucción.
      </p>
      <h3>Registros</h3>
      <p>Tiene 32 registros de propósito general de 32 bits, x0 a x31.</p>
      <table>
        <thead>
          <tr>
            <th>Registro</th>
            <th>ABI</th>
            <th>Propósito</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>x0</td>
            <td>zero</td>
            <td>
              Siempre 0. No se puede sobrescribir. Sirve para tener un valor 0
              siempre disponible o un registro para desechar resultados de
              operaciones
            </td>
          </tr>
          <tr>
            <td>x1</td>
            <td>ra</td>
            <td>
              Dirección de retorno (Return Address) tras la ejecución de una
              subrutina. Si hay varias subrutinas anidadas, será necesario el
              uso de la pila.
            </td>
          </tr>
          <tr>
            <td>x2</td>
            <td>sp</td>
            <td>Puntero de pila (Stack Pointer)</td>
          </tr>
          <tr>
            <td>x3</td>
            <td>gp</td>
            <td>
              Puntero global (Global Pointer). Apunta al lugar de memoria donde
              empiezan las variables globales o estáticas
            </td>
          </tr>
          <tr>
            <td>x4</td>
            <td>tp</td>
            <td>Puntero de hilo (Thread Pointer)</td>
          </tr>
          <tr>
            <td>x5-x7</td>
            <td>t0-t2</td>
            <td>
              Temporales. Son locales, no guardan su valor en llamadas a
              funciones.
            </td>
          </tr>
          <tr>
            <td>x8</td>
            <td>s0/fp</td>
            <td>
              Frame Pointer. Apunta al inicio de la pila reservada para la
              función. Se debe guardar si se llama a una función
            </td>
          </tr>
          <tr>
            <td>x9</td>
            <td>s1</td>
            <td>
              Saved register. Es un valor que se debe guardar durante llamadas a
              las funciones
            </td>
          </tr>
          <tr>
            <td>x10–x11</td>
            <td>a0–a1</td>
            <td>
              Argumentos de funciones o valores de retorno. Son la via principal
              para pasar datos entre funciones sin utilizar la pila.
            </td>
          </tr>
          <tr>
            <td>x12–x17</td>
            <td>a2–a7</td>
            <td>Argumentos adicinales (cuando x10–x11 no son suficiente)</td>
          </tr>
          <tr>
            <td>x18–x27</td>
            <td>s2–s11</td>
            <td>
              Saved registers. Mantienen su valor en la llamada a las funciones.
              Si una función los necesita, debe guardar su valor en la pila y
              luego recuperarlo
            </td>
          </tr>
          <tr>
            <td>x28–x31</td>
            <td>t3–t6</td>
            <td>
              Temporales. Son locales, no guardan su valor en llamadas a
              funciones.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Instrucciones</h3>
      <h4>Carga</h4>
      <h5>LB - Load Byte</h5>
      <p>Carga un byte con signo desde memoria a un registro.</p>
      <pre>LB x1, 0(x2) ; x1 = memoria[x2]</pre>

      <h5>LH - Load Halfword</h5>
      <p>Carga 2 bytes con signo desde memoria.</p>
      <pre>LH x3, 4(x2) ; x3 = memoria[x2+4]</pre>

      <h5>LW - Load Word</h5>
      <p>Carga 4 bytes desde memoria.</p>
      <pre>LW x4, 8(x2) ; x4 = memoria[x2+8]</pre>

      <h5>LBU - Load Byte Unsigned</h5>
      <p>Carga un byte sin signo desde memoria.</p>
      <pre>LBU x5, 0(x2)</pre>

      <h5>LHU - Load Halfword Unsigned</h5>
      <p>Carga 2 bytes sin signo desde memoria.</p>
      <pre>LHU x6, 4(x2)</pre>

      <h4>Almacenamiento</h4>
      <h5>SB - Store Byte</h5>
      <p>Guarda un byte de un registro en memoria.</p>
      <pre>SB x1, 0(x2)</pre>

      <h5>SH - Store Halfword</h5>
      <p>Guarda 2 bytes de un registro en memoria.</p>
      <pre>SH x3, 4(x2)</pre>

      <h5>SW - Store Word</h5>
      <p>Guarda 4 bytes de un registro en memoria.</p>
      <pre>SW x4, 8(x2)</pre>

      <h4>Aritméticas y lógicas</h4>
      <h5>ADD</h5>
      <p>Suma dos registros.</p>
      <pre>ADD x1, x2, x3 ; x1 = x2 + x3</pre>

      <h5>SUB</h5>
      <p>Resta dos registros.</p>
      <pre>SUB x1, x2, x3 ; x1 = x2 - x3</pre>

      <h5>SLL</h5>
      <p>Desplazamiento lógico a la izquierda.</p>
      <pre>SLL x1, x2, x3 ; x1 = x2 &lt;&lt; (x3 & 0x1F)</pre>

      <h5>SLT</h5>
      <p>Set Less Than (1 si rs1 &lt; rs2, else 0).</p>
      <pre>SLT x1, x2, x3</pre>

      <h5>SLTU</h5>
      <p>Set Less Than Unsigned.</p>
      <pre>SLTU x1, x2, x3</pre>

      <h5>XOR</h5>
      <p>OR exclusivo entre dos registros.</p>
      <pre>XOR x1, x2, x3</pre>

      <h5>SRL</h5>
      <p>Desplazamiento lógico a la derecha.</p>
      <pre>SRL x1, x2, x3</pre>

      <h5>SRA</h5>
      <p>Desplazamiento aritmético a la derecha.</p>
      <pre>SRA x1, x2, x3</pre>

      <h5>OR</h5>
      <p>OR lógico entre dos registros.</p>
      <pre>OR x1, x2, x3</pre>

      <h5>AND</h5>
      <p>AND lógico entre dos registros.</p>
      <pre>AND x1, x2, x3</pre>

      <h4>Aritméticas y lógicas inmediatas</h4>
      <h5>ADDI</h5>
      <p>Suma inmediata.</p>
      <pre>ADDI x1, x2, 10 ; x1 = x2 + 10</pre>

      <h5>SLTI</h5>
      <p>Set Less Than Immediate (con signo).</p>
      <pre>SLTI x1, x2, 5</pre>

      <h5>SLTIU</h5>
      <p>Set Less Than Immediate Unsigned.</p>
      <pre>SLTIU x1, x2, 5</pre>

      <h5>XORI</h5>
      <p>XOR con un valor inmediato.</p>
      <pre>XORI x1, x2, 0xFF</pre>

      <h5>ORI</h5>
      <p>OR con un valor inmediato.</p>
      <pre>ORI x1, x2, 0x0F</pre>

      <h5>ANDI</h5>
      <p>AND con un valor inmediato.</p>
      <pre>ANDI x1, x2, 0xF0</pre>

      <h5>SLLI</h5>
      <p>Shift Left Logical Immediate.</p>
      <pre>SLLI x1, x2, 2</pre>

      <h5>SRLI</h5>
      <p>Shift Right Logical Immediate.</p>
      <pre>SRLI x1, x2, 3</pre>

      <h5>SRAI</h5>
      <p>Shift Right Arithmetic Immediate.</p>
      <pre>SRAI x1, x2, 3</pre>

      <h4>Salto</h4>
      <h5>JAL</h5>
      <p>Salto y guardar dirección de retorno.</p>
      <pre>JAL x1, label ; x1 = PC+4, PC = label</pre>

      <h5>JALR</h5>
      <p>Salto relativo a un registro y guardar retorno.</p>
      <pre>JALR x1, 0(x2) ; x1 = PC+4, PC = x2+0</pre>

      <h4>Rama</h4>
      <h5>BEQ</h5>
      <p>Salta si dos registros son iguales.</p>
      <pre>BEQ x1, x2, label</pre>

      <h5>BNE</h5>
      <p>Salta si dos registros no son iguales.</p>
      <pre>BNE x1, x2, label</pre>

      <h5>BLT</h5>
      <p>Salta si rs1 &lt; rs2 (con signo).</p>
      <pre>BLT x1, x2, label</pre>

      <h5>BGE</h5>
      <p>Salta si rs1 &ge; rs2 (con signo).</p>
      <pre>BGE x1, x2, label</pre>

      <h5>BLTU</h5>
      <p>Salta si rs1 &lt; rs2 (sin signo).</p>
      <pre>BLTU x1, x2, label</pre>

      <h5>BGEU</h5>
      <p>Salta si rs1 &ge; rs2 (sin signo).</p>
      <pre>BGEU x1, x2, label</pre>

      <h4>Carga superior</h4>
      <h5>LUI</h5>
      <p>Carga los 20 bits superiores de un registro.</p>
      <pre>LUI x1, 0x12345 ; x1 = 0x12345000</pre>

      <h5>AUIPC</h5>
      <p>Agrega un valor inmediato al PC (para direcciones relativas).</p>
      <pre>AUIPC x1, 0x100 ; x1 = PC + 0x1000</pre>

      <h2>Código</h2>
      <h3>Sección de datos</h3>
      <p>Se define con .data</p>
      <p>Contiene datos estáticos o inicializados</p>
      <h3>Sección ejecutable</h3>
      <p>Se define con .text</p>
      <p>Contiene el código ejecutable</p>
      <h3>Sección de variables no inicializadas</h3>
      <p>Se define con .bss</p>
      <p>Guarda espacio para variables no inicializadas</p>
      <h3>Etiquetas</h3>
      <p>Se escriben como etiqueta:</p>
    </>
  )
}

export default DocsPage
