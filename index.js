let total = 0
const corpo = document.getElementsByTagName("body")
const _main = document.createElement("main")
_main.className = "maincontent"
const _container = document.createElement("div")
_container.className = "containerprincipal"
const _ulpri = document.createElement("ul")
_ulpri.className = "ulprincipal"
const _divtotal = document.createElement("div")
_divtotal.className = "total"
const _total = document.createElement("p")
_total.textContent = "R$"+total
const _butt = document.createElement("button")
_butt.textContent = "Finalizar compras"
corpo[0].appendChild(_main)
_main.appendChild(_container)
_container.appendChild(_ulpri)
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    const _item = document.createElement("li")
    _item.className = "item"
    const _nome = document.createElement("p")
    _nome.className = "name"
    _nome.textContent = element.name
    const _preco = document.createElement("p")
    _preco.className = "price"
    _preco.textContent = "R$"+element.price
    total = total + (element.price*100)
    _ulpri.appendChild(_item)
    _item.appendChild(_nome)
    _item.appendChild(_preco)
}
_total.textContent = "R$"+(total/100)
_container.appendChild(_divtotal)
_divtotal.appendChild(_total)
_divtotal.appendChild(_butt)