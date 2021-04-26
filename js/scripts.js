var productPrice = document.querySelector("#ProductPrice")
var tariff = document.querySelector("#Tariff")
var percentOfSalePrice = document.querySelector("#PercentOfSalePrice")
var income = document.querySelector("#income")
var removeText = document.querySelector("#textIncome")
var txt = document.querySelector("#text1")
var txt2 = document.querySelector("#text2")
var txt3 = document.querySelector("#text3")

function send(){
  var custoReal = ((Number(productPrice.value) + Number(tariff.value)) / (1 - Number(percentOfSalePrice.value)));
  var valorVenda = ((Number(productPrice.value) + Number(tariff.value)) / (1 - Number(percentOfSalePrice.value) - Number(income.value) / 100));
  var valorLucro = (Number(valorVenda) - Number(custoReal));
  removeText.remove();
  income.remove();
  console.log(txt[1])
  txt.innerHTML = ("Custo Real: " + custoReal.toFixed(2)*(-1));
  txt2.innerHTML = ("Custo de Venda: " + valorVenda.toFixed(2)*(-1));
  txt3.innerHTML = ("Lucro: " + valorLucro.toFixed(2));
}