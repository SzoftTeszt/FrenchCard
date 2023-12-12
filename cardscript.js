class Card extends HTMLElement{
    constructor(){
        super()
        let signs=['♣', '♦', '♥', '♠']
        let colors=['pink','green','orange','cyan']

        let card=document.createElement('div')
        card.classList.add("card")

        let row=document.createElement('div')
        row.classList.add("row")
        
        let number=document.createElement('div')
        number.classList.add('number')

        let tisztek =['J', 'Q', 'K']
        
        let ertek = Number(this.dataset.number)
        if (ertek==1) ertek='A'
        if (ertek>=11) ertek=tisztek[ertek-11]
        number.innerHTML=ertek

        let sign=document.createElement('div')
        sign.classList.add("sign")
        sign.innerHTML=signs[Number(this.dataset.sign)]

        let szin = this.dataset.color
        if (!szin){
            if (Number(this.dataset.sign)==1 || Number(this.dataset.sign)==2)
                card.style.color="red"
            }
        else{
            szin=Number(szin)
            card.style.color=colors[szin]
            console.log(colors[szin])
        }


        row.appendChild(number)
        row.appendChild(sign)

        card.appendChild(row)
        card.appendChild(sign.cloneNode(true))
        card.appendChild(row.cloneNode(true))

        let linkElem=document.createElement('link')
        linkElem.setAttribute('rel','stylesheet')
        linkElem.setAttribute('href','cardstyle.css')

        const shadow=this.attachShadow({mode:'open'})
        shadow.appendChild(linkElem)
        shadow.appendChild(card)
}

}
customElements.define('my-card',Card)

