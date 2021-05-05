var productPrice = document.querySelector("#ProductPrice")
var tariff = document.querySelector("#Tariff")
var percentOfSalePrice = document.querySelector("#PercentOfSalePrice")
var income = document.querySelector("#income")
var removeText = document.querySelector("#textIncome")
var txt = document.querySelector("#text1")
var txt2 = document.querySelector("#text2")
var txt3 = document.querySelector("#text3")
var sndBtn = document.querySelector("#sendBtn")
var txtBtn = document.querySelector("#txtBtn")

function send(){
  var custoReal = ((Number(productPrice.value) + Number(tariff.value)) / (1 - Number(percentOfSalePrice.value)));
  var valorVenda = ((Number(productPrice.value) + Number(tariff.value)) * (1 - Number(percentOfSalePrice.value) - Number(income.value) / 100));
  var valorLucro = ((Number(valorVenda) - Number(custoReal))*(-1));
  removeText.remove();
  income.remove();
  percentOfSalePrice.remove();
  tariff.remove();
  productPrice.remove();
  txt.innerHTML = ("Custo Real: R$" + custoReal.toFixed(2)*(-1));
  txt2.innerHTML = ("Custo de Venda: R$" + valorVenda.toFixed(2)*(-1));
  txt3.innerHTML = ("Lucro: R$" + valorLucro.toFixed(2));
  txtBtn.innerHTML = ("Limpar")
  sndBtn.setAttribute("onclick", "window.location.reload(true)")
  if(productPrice.value == 0 || Tariff.value == 0 || percentOfSalePrice.value == 0 || income.value == 0) {
    txt.innerHTML = ("Um ou mais campos estão vazios, por favor, pereencha-os")
    txt2.remove();
    txt3.remove();
  }
}

