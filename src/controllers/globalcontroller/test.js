const td1_div1 = document.createElement("div");
const td1_div2 = document.createElement("div");
const td1_div2_img = document.createElement("img");
const td1_div3 = document.createElement("div");
const td1_div3_img1 = document.createElement("img");
const td1_div3_img2 = document.createElement("img");

td1_div1.classList.add("rune-spell");
td1_div2.classList.add("runeStyle");
td1_div3.classList.add("spell");

td1_div2_img.src = `https://ddragon.leagueoflegends.com/cdn/img/${team1[1].basicSummoner.runes.main.style}`;
td1_div3_img1.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/spell/${team1[1].basicSummoner.spells.first}.png`;
td1_div3_img2.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/spell/${team1[1].basicSummoner.spells.second}.png`;

td1_div2.appendChild(td1_div2_img);
td1_div3.appendChild(td1_div3_img1);
td1_div3.appendChild(td1_div3_img2);

td1_div1.appendChild(td1_div2);
td1_div1.appendChild(td1_div3);

team1_tbody_td[1][0].appendChild(td1_div1);

const td2_div1 = document.createElement("div");
const td2_div1_span1 = document.createElement("span");
const td2_div1_img1 = document.createElement("img");
const td2_div1_span2 = document.createElement("span");

td2_div1.classList.add("championInfo");
td2_div1_span1.classList.add("level");
td2_div1_span2.classList.add("summonerName");

td2_div1_span1.innerText = `${team1[1].basicSummoner.champLevel}`;
td2_div1_span2.innerText = `${team1[1].basicSummoner.summonerName}`;

td2_div1_img1.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/champion/${team1[1].basicSummoner.champion}.png`;

td2_div1.appendChild(td2_div1_span1);
td2_div1.appendChild(td2_div1_img1);
td2_div1.appendChild(td2_div1_span2);

team1_tbody_td[1][1].appendChild(td2_div1);

const td3_div1 = document.createElement("div");
const td3_div1_img1 = document.createElement("img");
const td3_div1_img2 = document.createElement("img");
const td3_div1_img3 = document.createElement("img");
const td3_div1_img4 = document.createElement("img");
const td3_div1_img5 = document.createElement("img");
const td3_div1_img6 = document.createElement("img");
const td3_div1_img7 = document.createElement("img");

td3_div1.classList.add("items");
td3_div1_img1.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[1].basicSummoner.items.item0}.png`;
td3_div1_img2.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[1].basicSummoner.items.item1}.png`;
td3_div1_img3.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[1].basicSummoner.items.item2}.png`;
td3_div1_img4.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[1].basicSummoner.items.item3}.png`;
td3_div1_img5.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[1].basicSummoner.items.item4}.png`;
td3_div1_img6.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[1].basicSummoner.items.item5}.png`;
td3_div1_img7.src = `http://ddragon.leagueoflegends.com/cdn/11.21.1/img/item/${team1[1].basicSummoner.items.item6}.png`;

td3_div1.appendChild(td3_div1_img1);
td3_div1.appendChild(td3_div1_img2);
td3_div1.appendChild(td3_div1_img3);
td3_div1.appendChild(td3_div1_img4);
td3_div1.appendChild(td3_div1_img5);
td3_div1.appendChild(td3_div1_img6);
td3_div1.appendChild(td3_div1_img7);

team1_tbody_td[1][2].appendChild(td3_div1);

const td4_div1 = document.createElement("div");
const td4_div1_span = document.createElement("span");
td4_div1.classList.add("grade");
td4_div1_span.innerText = "2 / 7 / 9";
td4_div1.appendChild(td4_div1_span);
team1_tbody_td[1][3].appendChild(td4_div1);

const td5_div1 = document.createElement("div");
const td5_div1_span = document.createElement("span");
td5_div1.classList.add("minionKills");
td5_div1_span.innerText = "105";
td5_div1.appendChild(td5_div1_span);
team1_tbody_td[1][4].appendChild(td5_div1);

const td6_div1 = document.createElement("div");
const td6_div1_span = document.createElement("span");
td6_div1.classList.add("gold");
td6_div1_span.innerText = "20000";
td6_div1.appendChild(td6_div1_span);
team1_tbody_td[1][5].appendChild(td6_div1);
