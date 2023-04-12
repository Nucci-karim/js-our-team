// ------------object da usare------------ //
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// inizio ciclo for per strampa

for( let i=0; i < team.length; i++ ){

    let Elemento = team[i]

     document.querySelector('.row').innerHTML += 
     `
         <div class="col">
             <div class="card" style="width: 18rem;">
                 <img src="..." class="card-img-top" alt="...">
                 <div class="card-body" id='${i}'>
                    <h5 class="card-title">${ Elemento.name }</h5>
                    <p class="card-text">${ Elemento.role }</a>
                 </div>
             </div>
         </div>
     `

// ciclo per i nomi singoli 
     let Nomi = Elemento.name

     for( let k=0; k < Nomi.length; k++ ){
        let ElementoNome = Nomi[k]

        document.getElementById( i ).append(ElementoNome)

     }

}
