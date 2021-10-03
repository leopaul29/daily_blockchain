// coingecko.js
// Implementations for all the calls for the coingecko endpoints.
import Api from "./api";

// Method to get a list of top 20 crypto marketcap
export const getTop20Marketcap = async () => {
  try {
    /*const response = await Api.get(
      "/coins/markets?vs_currency=usd&per_page=20&page=1"
    );
    return response;*/
    return top20;
  } catch (error) {
    console.error(error);
  }
};

// Get a pokemon details by name
export const getCoinById = async (id) => {
  try {
    const response = await Api.get(`/coins/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};


let top20 = [{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":47994,"market_cap":902803281317,"market_cap_rank":1,"fully_diluted_valuation":1006648679765,"total_volume":25807771160,"high_24h":48315,"low_24h":47260,"price_change_24h":222.48,"price_change_percentage_24h":0.46572,"market_cap_change_24h":-1112683583.836792,"market_cap_change_percentage_24h":-0.1231,"circulating_supply":18833650.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":64805,"ath_change_percentage":-26.03062,"ath_date":"2021-04-14T11:54:46.763Z","atl":67.81,"atl_change_percentage":70592.16685,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2021-10-03T16:14:21.568Z"},{"id":"ethereum","symbol":"eth","name":"Ethereum","image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880","current_price":3416.38,"market_cap":401873811898,"market_cap_rank":2,"fully_diluted_valuation":null,"total_volume":18983216865,"high_24h":3461.05,"low_24h":3359.48,"price_change_24h":31.48,"price_change_percentage_24h":0.93006,"market_cap_change_24h":2011837607,"market_cap_change_percentage_24h":0.50313,"circulating_supply":117777862.5615,"total_supply":null,"max_supply":null,"ath":4356.99,"ath_change_percentage":-21.68595,"ath_date":"2021-05-12T14:41:48.623Z","atl":0.432979,"atl_change_percentage":787960.58547,"atl_date":"2015-10-20T00:00:00.000Z","roi":{"times":94.1650607351005,"currency":"btc","percentage":9416.50607351005},"last_updated":"2021-10-03T16:14:18.920Z"},{"id":"cardano","symbol":"ada","name":"Cardano","image":"https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860","current_price":2.27,"market_cap":72878919672,"market_cap_rank":3,"fully_diluted_valuation":102273792494,"total_volume":1783547276,"high_24h":2.32,"low_24h":2.23,"price_change_24h":-0.023361590563,"price_change_percentage_24h":-1.01894,"market_cap_change_24h":-292891396.80667114,"market_cap_change_percentage_24h":-0.40028,"circulating_supply":32066390668.4135,"total_supply":45000000000.0,"max_supply":45000000000.0,"ath":3.09,"ath_change_percentage":-26.44792,"ath_date":"2021-09-02T06:00:10.474Z","atl":0.01925275,"atl_change_percentage":11693.05699,"atl_date":"2020-03-13T02:22:55.044Z","roi":null,"last_updated":"2021-10-03T16:14:33.301Z"},{"id":"tether","symbol":"usdt","name":"Tether","image":"https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707","current_price":1.0,"market_cap":69053155105,"market_cap_rank":4,"fully_diluted_valuation":null,"total_volume":57065936755,"high_24h":1.01,"low_24h":0.993525,"price_change_24h":0.00287852,"price_change_percentage_24h":0.28769,"market_cap_change_24h":-49920131.4901886,"market_cap_change_percentage_24h":-0.07224,"circulating_supply":68896070575.3929,"total_supply":68896070575.3929,"max_supply":null,"ath":1.32,"ath_change_percentage":-24.24733,"ath_date":"2018-07-24T00:00:00.000Z","atl":0.572521,"atl_change_percentage":75.06432,"atl_date":"2015-03-02T00:00:00.000Z","roi":null,"last_updated":"2021-10-03T16:11:19.994Z"},{"id":"binancecoin","symbol":"bnb","name":"Binance Coin","image":"https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615","current_price":427.97,"market_cap":66103362130,"market_cap_rank":5,"fully_diluted_valuation":72947527017,"total_volume":1461802123,"high_24h":438.32,"low_24h":425.03,"price_change_24h":-4.859152799731,"price_change_percentage_24h":-1.12265,"market_cap_change_24h":-876749510.5363998,"market_cap_change_percentage_24h":-1.30897,"circulating_supply":154533651.9,"total_supply":170533651.9,"max_supply":170533651.9,"ath":686.31,"ath_change_percentage":-37.74132,"ath_date":"2021-05-10T07:24:17.097Z","atl":0.0398177,"atl_change_percentage":1073004.29912,"atl_date":"2017-10-19T00:00:00.000Z","roi":null,"last_updated":"2021-10-03T16:14:14.805Z"},{"id":"solana","symbol":"sol","name":"Solana","image":"https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png?1616489452","current_price":173.09,"market_cap":51720342092,"market_cap_rank":6,"fully_diluted_valuation":84851346667,"total_volume":3105709355,"high_24h":177.29,"low_24h":166.83,"price_change_24h":1.22,"price_change_percentage_24h":0.70802,"market_cap_change_24h":592263440,"market_cap_change_percentage_24h":1.15839,"circulating_supply":297840203.486568,"total_supply":488630611.0,"max_supply":488630611.0,"ath":213.47,"ath_change_percentage":-18.93629,"ath_date":"2021-09-09T02:24:33.650Z","atl":0.500801,"atl_change_percentage":34453.44064,"atl_date":"2020-05-11T19:35:23.449Z","roi":null,"last_updated":"2021-10-03T16:14:40.787Z"},{"id":"ripple","symbol":"xrp","name":"XRP","image":"https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731","current_price":1.06,"market_cap":49679370346,"market_cap_rank":7,"fully_diluted_valuation":106265034361,"total_volume":4017646810,"high_24h":1.09,"low_24h":1.03,"price_change_24h":0.02338617,"price_change_percentage_24h":2.24763,"market_cap_change_24h":1000371097,"market_cap_change_percentage_24h":2.05504,"circulating_supply":46750439262.0,"total_supply":100000000000.0,"max_supply":100000000000.0,"ath":3.4,"ath_change_percentage":-68.70889,"ath_date":"2018-01-07T00:00:00.000Z","atl":0.00268621,"atl_change_percentage":39487.89314,"atl_date":"2014-05-22T00:00:00.000Z","roi":null,"last_updated":"2021-10-03T16:14:23.269Z"},{"id":"polkadot","symbol":"dot","name":"Polkadot","image":"https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776","current_price":32.06,"market_cap":33274359987,"market_cap_rank":8,"fully_diluted_valuation":null,"total_volume":956441738,"high_24h":33.34,"low_24h":31.58,"price_change_24h":-0.830536485089,"price_change_percentage_24h":-2.52538,"market_cap_change_24h":-908422605.5389137,"market_cap_change_percentage_24h":-2.65754,"circulating_supply":1036864257.79369,"total_supply":1117698993.29418,"max_supply":null,"ath":49.35,"ath_change_percentage":-35.19222,"ath_date":"2021-05-15T03:59:58.961Z","atl":2.7,"atl_change_percentage":1085.6352,"atl_date":"2020-08-20T05:48:11.359Z","roi":null,"last_updated":"2021-10-03T16:14:55.842Z"},{"id":"usd-coin","symbol":"usdc","name":"USD Coin","image":"https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389","current_price":1.0,"market_cap":32239891343,"market_cap_rank":9,"fully_diluted_valuation":null,"total_volume":1864826107,"high_24h":1.01,"low_24h":0.99311,"price_change_24h":0.00101952,"price_change_percentage_24h":0.10188,"market_cap_change_24h":156434578,"market_cap_change_percentage_24h":0.48759,"circulating_supply":32174532404.5587,"total_supply":32174449303.9487,"max_supply":null,"ath":1.17,"ath_change_percentage":-14.70269,"ath_date":"2019-05-08T00:40:28.300Z","atl":0.891848,"atl_change_percentage":12.15889,"atl_date":"2021-05-19T13:14:05.611Z","roi":null,"last_updated":"2021-10-03T16:14:13.833Z"},{"id":"dogecoin","symbol":"doge","name":"Dogecoin","image":"https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256","current_price":0.220692,"market_cap":29005774370,"market_cap_rank":10,"fully_diluted_valuation":null,"total_volume":933935233,"high_24h":0.225104,"low_24h":0.216674,"price_change_24h":-0.001856054916,"price_change_percentage_24h":-0.834,"market_cap_change_24h":-340357398.75671387,"market_cap_change_percentage_24h":-1.1598,"circulating_supply":131542299402.889,"total_supply":null,"max_supply":null,"ath":0.731578,"ath_change_percentage":-69.85895,"ath_date":"2021-05-08T05:08:23.458Z","atl":8.69e-05,"atl_change_percentage":253635.06081,"atl_date":"2015-05-06T00:00:00.000Z","roi":null,"last_updated":"2021-10-03T16:14:41.881Z"},{"id":"terra-luna","symbol":"luna","name":"Terra","image":"https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png?1567147072","current_price":43.28,"market_cap":17350940791,"market_cap_rank":11,"fully_diluted_valuation":43402013198,"total_volume":2197955203,"high_24h":46.03,"low_24h":40.78,"price_change_24h":2.28,"price_change_percentage_24h":5.55749,"market_cap_change_24h":886159193,"market_cap_change_percentage_24h":5.38215,"circulating_supply":399772718.190067,"total_supply":972297452.822946,"max_supply":1000000000.0,"ath":46.03,"ath_change_percentage":-5.96112,"ath_date":"2021-10-03T05:39:49.982Z","atl":0.121798,"atl_change_percentage":35438.26083,"atl_date":"2020-03-18T17:03:01.083Z","roi":null,"last_updated":"2021-10-03T16:14:27.526Z"},{"id":"avalanche-2","symbol":"AVAX","name":"Avalanche","image":"https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png?1604021818","current_price":69.94,"market_cap":15451843543,"market_cap_rank":12,"fully_diluted_valuation":50503882225,"total_volume":1057698217,"high_24h":73.38,"low_24h":68.2,"price_change_24h":-0.657187323523,"price_change_percentage_24h":-0.93084,"market_cap_change_24h":-133728666.75808144,"market_cap_change_percentage_24h":-0.85803,"circulating_supply":220286577.207551,"total_supply":377752194.4695483,"max_supply":720000000.0,"ath":79.31,"ath_change_percentage":-11.8073,"ath_date":"2021-09-23T08:14:35.857Z","atl":2.8,"atl_change_percentage":2396.99728,"atl_date":"2020-12-31T13:15:21.540Z","roi":null,"last_updated":"2021-10-03T16:15:00.291Z"},{"id":"uniswap","symbol":"uni","name":"Uniswap","image":"https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604","current_price":26.0,"market_cap":13543621719,"market_cap_rank":13,"fully_diluted_valuation":26052571395,"total_volume":419799051,"high_24h":27.16,"low_24h":25.86,"price_change_24h":-0.627872934648,"price_change_percentage_24h":-2.35816,"market_cap_change_24h":-399104395.63747025,"market_cap_change_percentage_24h":-2.86246,"circulating_supply":519857388.1320768,"total_supply":1000000000.0,"max_supply":1000000000.0,"ath":44.92,"ath_change_percentage":-42.14791,"ath_date":"2021-05-03T05:25:04.822Z","atl":1.03,"atl_change_percentage":2422.49754,"atl_date":"2020-09-17T01:20:38.214Z","roi":null,"last_updated":"2021-10-03T16:14:58.396Z"},{"id":"binance-usd","symbol":"busd","name":"Binance USD","image":"https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766","current_price":1.0,"market_cap":13175769454,"market_cap_rank":14,"fully_diluted_valuation":null,"total_volume":3848977186,"high_24h":1.01,"low_24h":0.993378,"price_change_24h":0.00276177,"price_change_percentage_24h":0.27627,"market_cap_change_24h":50318109,"market_cap_change_percentage_24h":0.38336,"circulating_supply":13141109749.91,"total_supply":13141109749.91,"max_supply":null,"ath":1.15,"ath_change_percentage":-13.29853,"ath_date":"2020-03-13T02:35:42.953Z","atl":0.901127,"atl_change_percentage":11.05111,"atl_date":"2021-05-19T13:04:37.445Z","roi":null,"last_updated":"2021-10-03T16:14:47.368Z"},{"id":"chainlink","symbol":"link","name":"Chainlink","image":"https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700","current_price":27.06,"market_cap":12353120947,"market_cap_rank":15,"fully_diluted_valuation":27059939581,"total_volume":857506314,"high_24h":27.85,"low_24h":26.76,"price_change_24h":-0.170085253787,"price_change_percentage_24h":-0.6247,"market_cap_change_24h":-143032228.10881805,"market_cap_change_percentage_24h":-1.14461,"circulating_supply":456509553.9174637,"total_supply":1000000000.0,"max_supply":1000000000.0,"ath":52.7,"ath_change_percentage":-48.64934,"ath_date":"2021-05-10T00:13:57.214Z","atl":0.148183,"atl_change_percentage":18161.21368,"atl_date":"2017-11-29T00:00:00.000Z","roi":null,"last_updated":"2021-10-03T16:14:43.770Z"},{"id":"algorand","symbol":"algo","name":"Algorand","image":"https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725","current_price":1.91,"market_cap":11649671915,"market_cap_rank":16,"fully_diluted_valuation":19092992724,"total_volume":599193336,"high_24h":1.94,"low_24h":1.75,"price_change_24h":0.088376,"price_change_percentage_24h":4.86457,"market_cap_change_24h":550943030,"market_cap_change_percentage_24h":4.96402,"circulating_supply":6101543159.33231,"total_supply":6645848035.60814,"max_supply":10000000000.0,"ath":3.56,"ath_change_percentage":-46.60677,"ath_date":"2019-06-20T14:51:19.480Z","atl":0.105336,"atl_change_percentage":1705.10393,"atl_date":"2020-03-13T02:20:48.438Z","roi":{"times":-0.2062110912691996,"currency":"usd","percentage":-20.621109126919958},"last_updated":"2021-10-03T16:15:00.906Z"},{"id":"litecoin","symbol":"ltc","name":"Litecoin","image":"https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580","current_price":170.06,"market_cap":11645620425,"market_cap_rank":17,"fully_diluted_valuation":14245719311,"total_volume":2957846265,"high_24h":172.8,"low_24h":166.83,"price_change_24h":-1.311196485307,"price_change_percentage_24h":-0.76512,"market_cap_change_24h":-201326167.85978508,"market_cap_change_percentage_24h":-1.69939,"circulating_supply":68668495.7334713,"total_supply":84000000.0,"max_supply":84000000.0,"ath":410.26,"ath_change_percentage":-58.66263,"ath_date":"2021-05-10T03:13:07.904Z","atl":1.15,"atl_change_percentage":14661.87039,"atl_date":"2015-01-14T00:00:00.000Z","roi":null,"last_updated":"2021-10-03T16:14:22.778Z"},{"id":"cosmos","symbol":"atom","name":"Cosmos","image":"https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960","current_price":38.65,"market_cap":10815992244,"market_cap_rank":18,"fully_diluted_valuation":null,"total_volume":816760651,"high_24h":41.5,"low_24h":38.18,"price_change_24h":-1.137016625884,"price_change_percentage_24h":-2.85809,"market_cap_change_24h":-290908642.81427,"market_cap_change_percentage_24h":-2.61917,"circulating_supply":280123092.473919,"total_supply":null,"max_supply":null,"ath":44.42,"ath_change_percentage":-13.27298,"ath_date":"2021-09-20T00:05:25.062Z","atl":1.16,"atl_change_percentage":3220.86067,"atl_date":"2020-03-13T02:27:44.591Z","roi":{"times":385.4537096511472,"currency":"usd","percentage":38545.37096511472},"last_updated":"2021-10-03T16:14:38.653Z"},{"id":"bitcoin-cash","symbol":"bch","name":"Bitcoin Cash","image":"https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492","current_price":567.56,"market_cap":10659877221,"market_cap_rank":19,"fully_diluted_valuation":11867796435,"total_volume":6971045014,"high_24h":574.94,"low_24h":547.31,"price_change_24h":14.57,"price_change_percentage_24h":2.6342,"market_cap_change_24h":225082526,"market_cap_change_percentage_24h":2.15704,"circulating_supply":18862593.6466884,"total_supply":21000000.0,"max_supply":21000000.0,"ath":3785.82,"ath_change_percentage":-85.04904,"ath_date":"2017-12-20T00:00:00.000Z","atl":76.93,"atl_change_percentage":635.70908,"atl_date":"2018-12-16T00:00:00.000Z","roi":null,"last_updated":"2021-10-03T16:14:51.400Z"},{"id":"wrapped-bitcoin","symbol":"wbtc","name":"Wrapped Bitcoin","image":"https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744","current_price":47998,"market_cap":9878995893,"market_cap_rank":20,"fully_diluted_valuation":9878995893,"total_volume":337428571,"high_24h":48299,"low_24h":47302,"price_change_24h":75.57,"price_change_percentage_24h":0.1577,"market_cap_change_24h":-3714143.1903305054,"market_cap_change_percentage_24h":-0.03758,"circulating_supply":205770.58493299,"total_supply":205770.58493299,"max_supply":205770.58493299,"ath":64565,"ath_change_percentage":-25.79818,"ath_date":"2021-04-14T12:00:05.340Z","atl":3139.17,"atl_change_percentage":1426.15286,"atl_date":"2019-04-02T00:00:00.000Z","roi":null,"last_updated":"2021-10-03T16:14:30.288Z"}]