customElements.define('honey-toggle-button',

    class ToggleButton extends HTMLElement {

        constructor() {
            super()
            console.log('constructor');

            // for init attribut defaults
            // e.g. this.src = '';


        }

        connectedCallback() {
            console.log('custom element is on the page!');

            if (!this.shadowRoot) {
              console.log('creating shadow dom');
              this.attachShadow({mode: 'open'});
              this.shadowRoot.appendChild(template.content.cloneNode(true));

              // onClick auf Button definieren
              this.button = this.shadowRoot.getElementById('button1');
              this.button.addEventListener('click', () => {
                  this.toggle();
              });
            }
         }

        disconnectedCallback() {
            console.log('element has been removed');
//            document.querySelector("honey-toggle-button").remove();
        }

        attributeChangedCallback(name, oldval, newval) {
            console.log(`the ${name} attribute has changed from ${oldval} to ${newval}!!`);

            // neuen Paragraph erzeugen und ans HTML Dokument anhängen
            const para = document.createElement('p');
            para.innerHTML='toogled';
            document.body.appendChild(para);
            // do something every time the attribute changes
        }


        static get observedAttributes() {
            return ['expanded'];
        }


        get expanded() {
            return this.hasAttribute('expanded');
        }

        // the second argument for setAttribute is mandatory, so we’ll use an empty string
        set expanded(val) {
            if (val) {
                this.setAttribute('expanded', '');
            }
            else {
                this.removeAttribute('expanded');
            }
        }

        toggle(){
           if( this.hasAttribute('expanded')){
               this.removeAttribute('expanded');
           }else{
               this.setAttribute('expanded', '');
           }
        }
    }
);

//    export default ToggleButton;


