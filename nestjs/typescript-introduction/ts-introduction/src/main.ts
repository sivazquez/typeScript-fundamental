import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { pokemons, limber } from './bases/01-types'
import { decoratorInstance } from './bases/02-decorators.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript </h1>
    ${
      pokemons.map((item) => `
      <div>
        name is ${item.name}.
      </div>
    `.trim()).join('')
  }
  <a>Limber: id - ${limber.id}, name - ${limber.name}  
 ${ console.log(limber.getData())}  
  </a>
  <p>Decorador</p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

decoratorInstance.scream();