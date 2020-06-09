const sendResponse = require("../utils/sendResponse");
const sendDeletableResponse = require("../utils/sendDeletableResponse");

module.exports = message => {
    let request = message.content.substr(message.content.indexOf(" ")).trim();

    if (request === "") {
        return sendDeletableResponse(message, `You... didn't ask me to translate anything.`);
    }

    let translatedRequest = request;
    for (let [key, value] of translations) {
        translatedRequest = translatedRequest.replace(key, value);
    }

    if (request.toUpperCase() == request) {
        translatedRequest.toUpperCase();
    }

    sendResponse(message, `I think that's something like, "${translatedRequest}"`);
};

// Maps iterate in insertion order
const translations = new Map([
    [/tanyao/gi, "All Simples"],
    [/kuitan/gi, "open All Simples"],
    [/tenpai/gi, "ready"],
    [/tsumogiri/gi, "drawn tile cut"],
    [/tsumo/gi, "self-draw"],
    [/tedashi/gi, "cut from hand"],
    [/ryanmen/gi, "side wait"],
    [/kanchan/gi, "closed wait"],
    [/penchan/gi, "edge wait"],
    [/shanpon/gi, "double pon wait"],
    [/tanki/gi, "pair wait"],
    [/hadaka/gi, "four-call"],
    [/entotsu/gi, "side wait plus pon wait"],
    [/sanmenchan/gi, "3-way side wait"],
    [/gyakuten/gi, "comeback"],
    [/nakasuji/gi, "middle suji"],
    [/nagare/gi, "flow"],
    [/shanten/gi, "away from ready"],
    [/ukeire/gi, "effective tiles"],
    [/iishanten/gi, "1-away"],
    [/ryanshanten/gi, "2-away"],
    [/nobetan/gi, "stretched single"],
    [/yonrenkei/gi, "four consecutive tiles"],
    [/nakabukure/gi, "bulging shape"],
    [/menzen/gi, "closed"],
    [/sanshoku/gi, "Mixed Triple Sequence"],
    [/iipeikou/gi, "Pure Double Sequence"],
    [/dabuton/gi, "double east"],
    [/chanta/gi, "Half Outside Hand"],
    [/rinshan kaihou/gi, "After a Kan"],
    [/rinshan/gi, "After a Kan"],
    [/chankan/gi, "Robbing a Kan"],
    [/haitei/gi, "final drawn tile"],
    [/houtei/gi, "final discarded tile"],
    [/ryanpeikou/gi, "Twice Pure Double Sequence"],
    [/chinitsu/gi, "Full Flush"],
    [/nagashi/gi, "Mangan At Draw"],
    [/chiitoitsu/gi, "Seven Pairs"],
    [/sanshokudokou/gi, "Triple Triplets"],
    [/sanankou/gi, "Three Concealed Triplets"],
    [/sankantsu/gi, "Three Quads"],
    [/toitoi/gi, "All Triplets"],
    [/honitsu/gi, "Half Flush"],
    [/shousangen/gi, "Little Three Dragons"],
    [/honroutou/gi, "All Terminals and Honors"],
    [/junchan/gi, "Fully Outside Hand"],
    [/kokushi/gi, "Thirteen Orphans"],
    [/chuuren/gi, "Nine Gates"],
    [/tenhou/gi, "Blessing of Heaven (or maybe the online platform)"],
    [/chihou/gi, "Blessing of Earth"],
    [/renhou/gi, "Blessing of Man"],
    [/suuankou/gi, "Four Concealed Triplets"],
    [/suukantsu/gi, "Four Quads"],
    [/ryuuiisou/gi, "All Green"],
    [/chinroutou/gi, "All Terminals"],
    [/tsuuiisou/gi, "All Honors"],
    [/daisangen/gi, "Big Three Dragons"],
    [/daisuushii/gi, "Big Four Winds"],
    [/shousuushii/gi, "Small Four Winds"],
    [/mawashi/gi, "safely push"],
    [/betaori/gi, "fully fold"],
    [/zentsu/gi, "fully push"],
    [/noten/gi, "not ready"],
    [/yamagoshi/gi, "pass up a win to target another player"],
    [/tonpu/gi, "East-only game"],
    [/hanchan/gi, "East-South game"],
    [/sanma/gi, "three player"],
    [/pao/gi, "responsiblity for a yakuman"],
    [/sekinin barai/gi, "responsibility for a yakuman"],
    [/chiitoi/gi, "seven pairs"],
    [/tonpuu/gi, "East-only game"],
    [/tonpuusen/gi, "East-only game"],
    [/yama/gi, "wall"],
    [/wanpai/gi, "dead wall"],
    [/wanzu/gi, "characters"],
    [/shichifukusei/gi, "Seven Stars"],
    [/shabo/gi, "dual pon wait"],
    [/harabote/gi, "bulging shape"],
    [/bazoro/gi, "rule adding 2 han to every won hand"],
    [/furikomi/gi, "strategic deal-in"],
    [/sokurii/gi, "instant riichi"],
    [/suufon renda/gi, "Four Winds Draw"],
    [/suucha riichi/gi, "Four Riichi Draw"],
    [/minkan/gi, "open kan"],
    [/daiminkan/gi, "called kan"],
    [/shouminkan/gi, "added kan"],
    [/kuikae/gi, "swap calling"],
    [/houou/gi, "Phoenix room"],
    [/tokujou/gi, "Upper Dan room"],
    [/joukyuu/gi, "Lower Dan room"],
    [/ippan/gi, "Beginner room"],
    [/agari/gi, "win"],
    [/rentai/gi, "1st + 2nd place rate"],
    [/tobi/gi, "bankrupt"],
    [/keishiki/gi, "tenpai without the ability to win"],
    [/keiten/gi, "tenpai without the ability to win."],
    [/kabe/gi, "walled tile"],
    [/genbutsu/gi, "perfectly safe tile"],
    [/shimocha/gi, "right player"],
    [/kamicha/gi, "left player"],
    [/toimen/gi, "player across"],
    [/ryankan/gi, "double closed shape"],
    [/karagiri/gi, "cut, from hand, the drawn tile"],
    [/damaten/gi, "closed tenpai without riichi"],
    [/dama/gi, "closed tenpai without riichi"],
    [/takame/gi, "most valuable out"],
    [/yasume/gi, "least valueable out"],
    [/sashikomi/gi, "strategic deal-in"],
    [/ankan/gi, "closed kan"],
    [/ryuukyoku/gi, "exhaustive draw"],
    [/kyuushu/gi, "9 tiles 9 types"],
    [/kskh/gi, "9 tiles 9 types"],
    [/kyushu/gi, "0 tiles 9 types"],
    [/aotenjou/gi, "skyrocketing"],
    [/wareme/gi, "hot wall rule"],
    [/manzu/gi, "characters"],
    [/souzu/gi, "bamboo"],
    [/pinzu/gi, "circles"],
    [/honba/gi, "repeat"],
    [/hms/gi, "Hittori Mahjong Simulator"],
    [/mentsu/gi, "complete shape"],
    [/taatsu/gi, "incomplete shape"],
    [/toitsuba/gi, "round with many pairs"],
    [/toitsu/gi, "pair"],
    [/koutsu/gi, "triplet."],
    [/shuntsu/gi, "run"],
    [/jantou/gi, "final pair"],
    [/jansou/gi, "mahjong parlour"],
    [/shuugi/gi, "bonus payment"],
    [/kuisagari/gi, "open penalty"],
    [/tenbo/gi, "point sticks"],
    [/yakitori/gi, "never won a hand"],
    [/washizu/gi, "clear tiles"],
    [/kuinobashi/gi, "shape-improving call"],
    [/sakigiri/gi, "preemptive discard"],
    [/sotogawa/gi, "an early discard making outer tiles safer"],
    [/oikake/gi, "chasing"],
    [/zawa/gi, "scary"],
    [/otoshi/gi, "cut"],
    [/haipai/gi, "starting hand"],
    [/daichisei/gi, "Seven Stars"],
    [/ishinouenimosannen/gi, "Three Years on the Stone"],
    [/renchan/gi, "repeat"],
    [/paarenchan/gi, "eight repeat yakuman"],
    [/sanrenkou/gi, "Three Connected Triplets"],
    [/suurenkou/gi, "Four Connected Triplets"],
    [/shiisanpuutaa/gi, "13 Disconnected Tiles"],
    [/shiisuupuutaa/gi, "14 Disconnected Tiles"],
    [/daisharin/gi, "Big Wheels"],
    [/daichikurin/gi, "Bamboo Forest"],
    [/daisuurin/gi, "Numerous Numbers (look I didn't make the translation)"],
    [/karaten/gi, "no-out tenpai"],
    [/machi/gi, "wait"],
    [/atamahane/gi, "head bump"],
    [/bakahon/gi, "Half Flush only"],
    [/nomi/gi, "only"],
    [/kita/gi, "replaced North"],
    [/nuki/gi, "replaced North"],
    [/meijin/gi, "7d <2000R"],
    [/atozuke/gi, "wait where only some outs give a yaku"],
    [/enchousen/gi, "sudden death round"],
    [/oorasu/gi, "All Last"],
    [/agariyame/gi, "rule allowing dealer to end the game if they win during All Last in first"],
    [/moupai/gi, "tilesface reading"],
    [/ganpai/gi, "marked tiles"],
    [/musuji/gi, "non-suji"],
    [/benikujaku/gi, "Red Peacock"],
    [/bakaze/gi, "round wind"],
    [/jikaze/gi, "seat wind"],
    [/otakaze/gi, "guest wind"],
    [/yonma/gi, "four player."],
    [/shibori/gi, "squeeze play"],
    [/ryanhan shibari/gi, "two han restriction"],
    [/shibari/gi, "restriction"],
    [/saburokyuu/gi, "3-6-9 wait"],
    [/saburo/gi, "3-6 wait"],
    [/kiriage/gi, "counted"],
    [/kakan/gi, "added kan"],
    [/ippatsu/gi, "one-shot"],
    [/paifu/gi, "game record"],
    [/kyoutaku/gi, "bonus sticks"],
    [/buttobi/gi, "below zero points"],
    [/chombo/gi, "greivous error"],
    [/sokuri/gi, "instant riichi"],
    [/gari/gi, "replaced tile"],
    [/natsuki/gi, "the best bot ever"],
    [/sakizumo/gi, "early drawing"],
    [/oyakaburi/gi, "dealer's larger payment on tsumo"],
    [/shonpai/gi, "live tile"],
    [/sanchahou/gi, "Triple Ron Draw"],
    [/suukaikan/gi, "Four Kan Draw"],
    [/ankou/gi, "closed triplet"],
    [/anjun/gi, "closed run"],
    [/minkou/gi, "called triplet"],
    [/minjun/gi, "called sequence"],
    [/jihai/gi, "honor tiles"],
    [/yaochuu/gi, "terminal and honor tiles"],
    [/aidayonken/gi, "four tile gap"],
    [/aida yon ken/gi, "four tile gap"],
    [/ikasama/gi, "cheating"],
    [/tengo/gi, "1000 points to 50 yen."],
    [/tenpin/gi, "1000 points to 100 yen."],
    [/dekapin/gi, "1 point to 1 yen."],
    [/aka/gi, "red"],
    [/oya/gi, "dealer"],
    [/hatsu/gi, "<:6z:466437922317402143>"],
    [/chun/gi, "<:7z:466437922279784469>"],
    [/haku pocchi/gi, "jewelled haku"],
    [/haku/gi, "<:5z:466437921550106625>"],
    [/ton/gi, "<:1z:466437921688518656>"],
    [/nan/gi, "<:2z:466437922594226187>"],
    [/sha/gi, "<:3z:466437922560671744>"],
    [/xia/gi, "<:3z:466437922560671744>"],
    [/pei/gi, "<:4z:466437922518728744>"],
    [/uma/gi, "placement bonus"],
    [/oka/gi, "ante"],
    [/itsu/gi, "Pure Straight"],
    [/ittsu/gi, "Pure Straight"],
    [/kawashite/gi, "quickly winning to prevent opponents from winning"],
    [/yakuhai/gi, "valuable honor"],
    [/fuuro/gi, "meld"],
    [/nashi/gi, "disallowed"],
    [/ari/gi, "allowed"]
]);