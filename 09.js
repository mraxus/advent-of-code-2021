const { runIfMain } = require('./lib');

const input = `8765432876678945459896432459890123456789219865434989979901998765323556789657898764567891098998765434
9874321234589432348789321598799234678897909954329878567899899877612345678945999843456792987989896749
8763210345694321245697632987678949789956798768210965456789789998543456989656795432345679876578987898
9654321256789490126789549876567898991239899876361294389895678987654567899878985321234569765459999997
9987632345678989436799699965488987989398998765452983278954589998767678998989877410165698864348999876
9876545656789678945678989876599435678987769876879874367895678989878789987898764321234987653237898765
9987656787894569876989876989678924569876646987998765458998789876989899876789985542349876740126897654
9898789898923478987899965498789013498765435598999876569549898765491958965678997643598765432234789733
7659899949012568999998654349898923987654323459789989678956999987210247893234987654679876646545678921
8943987632123499998987543235967899876543212345678998789767999976321356932123798767898989757856789210
9892976543234589987896432123459954987694901296789879894979879895442497893434679878987699898979895431
6789897654445679876797543234998943298989892989899854923989769789559989999545789989996543999989999432
5498789795556798765989954549887890129876789879998763212398953678998777898956896799987654596593798945
6987678989667987654567896698776789234965678968989654349987832545987666587897945698798865985432567896
9876545978979876543456789797665678999876989657678965698976521239876553436998934987659879876521456989
8765434867898765432123999985434567989999898746567896797985430156985432125789929876545998765432369878
9654323456999878743234899876545879878986799432458987986896543239876321014679898975434989878543498767
8543212345899987656356789998956998767365678921234699765987854345995432123789767894329876987654987656
7642101236789898767467897998767989656234589893365678954598765456796563254997854695498765498765699545
8953212349898789878878976789879876542123456794456789763239879767987654367896743989987656329878998732
9874325456987698989989765699998765421012567895567999976345989878998765457965432579876543210989987656
9965434569876567896593454789019876432323456789698999895457895989879886768996921434998954329896798767
9896745678995458976432123898923987563456597898789998789567923998765998879989890123459895439765679878
6789656789985349876521012347894699654767689969899987678978919899654389989876799234598789598954569989
5678977899876456965432123656789798765878997656909876567899896789563278998765678965987699987893498797
4567898954987569876543234768899899978989876543212985456789785679432167899894368979876569876794989656
3456789543298678987665949879901997989393989875693987677897654567993456789989257898765498765689876543
4767895432109789398779898999219986593212699976989698989979743456789567899872145679876976434569765432
5878976999219893239898787688998765432103568989876549598765432345678978998763234568989895423678994321
6989989878923994945987654567899876543212456798765435459876544456789989789654545899998789312345789210
7897898767894989896898543479901987754323569899654321347987657697897695678965696789987678923456794321
8956789658965976789999932678912398965434678998765430456798788789965434567898789899876567894578996492
9345896545699875899998754567899459876698789989876521667899899899874323456789899998765458989989876583
1234998436989984578919765678998967998789897876989542458901999998763212568996989987654345678991987674
0145897649876543478909878989997898939899976765697656599212989987654323457895678998943234789993998989
1236789789987632367899989099976989210998765434798768989929876598765456568954589989876345899989899393
2345678996798741456789692198765678921989854325679879878898995439987597899123699879865456999878789212
3456789345989652367899543987654569899876543212587989766787889212398698989234678965976569899967678909
4569893239876543478998959876543456789987654343456799654566778901998789876545789894989698789245567898
7678910199987654989787899965432345899899765454678898743274767999899894987959899783299987652123478956
8989891989898765698676989996965476789769876565679987632123456789789943499898987672129876543012679545
9398789978799876789565679989896789893456987898789996543234567897678901598767898541012998654323589434
3235699865689987895434569876789999932397999919899987654345698976567892989656789432123679767434789323
2123789654569998998765689765459899991989892104967898765456789323456919876545979943234569898945678912
5234598943498969899878798974345678989876789213456899876567893212967923998634567894456978999658789301
4345987932987656789989987853259899878765678926597999987879972109899899954323458965667899698767894212
5459976891096545898999876543166789954323567897989989999989763298798767893214789876778976549878965343
6598765789198234567890989643234567897212489999878978932197654987654457894505678987889989432989976458
7987654678954345678921298754677678976523478987654567893239769876543348995412567898996798745699989767
9876553567895656799432999895989789765434569876543456789398978989432156789323456799865598658789998999
8765432348998789897699878976799899879595998765432456789987899998541067897434767896543498767899987878
9876567856789893999989769997896967998989899843201234599876798987656778976545988987632349898999876667
3987678767898942198978958989965456987878799955432345698765987699767889997676799998543456999987765553
2598789878967899987665347679874349876765679876543456789894346569898999998789899987654967899876543412
3479897989656798976544234568993298765434589987654567899989212345979109879895978998769898998765432104
4567976799967987896432123467989197654323678998795678949872101234568912965934569239898789129876543212
5698975439878976989521012349878989765444589549887899434965212365679329854323478945987678939987664343
6989996323989865878932325679769878976765698932998976323984345886789498765512567899876567898999875455
9878989101998764559943434598657567999879967891019985419875456789899999897673698999765456787896996567
6665678919875432345894545987545456789998856789127896909976568990999886998784567898954323456965987678
5454567899965321456795659876532347895987645896546789898987779432398775679895678987553213969894598789
4343456989893210187899869998745498934593234569657898767999899693989654567976789876432109898789789899
3232569878789323245678978987656899329982125678999929859878998989876543456989899876545298765698999989
2101698767678935378989989998767895498765434599989219543767997978965432367899986997656987654567899878
3212987654567896569999898999889996569876745789878998932459876567897645458998765698967996543456789767
4329898743456789878998787899999789678989876798767867893589965456989656567897654569898985432369898958
6598765432569890989998656789998678989999987988658457789679854345678967878976543456789876543456976545
7679876544779921299876545679987567898998799876542345698798743234567898989987012497898987658767898432
8789987965678932345965434598765456787897645987675457899987652123478949294932123989997898769878999321
9899899876799899499854323459876347896789434998989598912398543234589432123893239878976799878989895210
6987654987898788987643212398765224345679599879598789329987654345796593435694399967985987989998764391
5698765698989656598654453569654101236789989765459895498998965656789989576989989857899896598979975989
4549896999876544459976564698763232345678978976326989987899876767894578989879876745998765457868896978
3434989898765432345987875987654356456999567895445679876789989878923467899767965632349874356456789765
2129878789879861236798986798765467567893476789678998765898999989212349998959974321298773212345678954
1098767678989954345679999899876567678942345698789989654567898994323498987898943210987654301236789763
2129656567898767856789989945987898789321236789899876543678967895434987976567894321298795412345678932
3398945458789978967899875434598999893210145899999987632123456899549876565456789452349987523656789321
4987832345679989878965954323659989996325676789789876541012345678998765434345678963456998654767895433
9876721234789195999654321012349878985434599897698765432123457789129654321234569765599899767878998545
9985432345893234999875432123498969876565678999549876543239567899998765510135789876988789998989987678
9996543476954359898989545434987656987676789998932987754568978989879976521234899989876567899597999999
8987654988967898767898956599743345999887899997891298767679989679767965432345678999985478943456898789
7898765699878987656767898987651239878998999886989359878789794598659876743466989998996568912967987678
6789896789989996543556789998962998767899698765878999989897659987543987654789999987987879999899876569
5678987891299987852345698999879876546954569854769678993998798876432398765678999876598989988789853459
4589998999398798961234567899998765434593298943454567892349987654321239878799598765459999877698767998
5678999998987643210123698978999854323989197652123678901239998789544345989895459654387898764579989887
6989789987987654521234789769798765439878989764345678999498989898955456896999598783236987653467898796
7895678976798977432545896555679877569967878978456789988987678987896787945698987672145898762546987675
8934589765639876567656789434567988698756567897569898767896569876789898934987898543236789651234976563
9125678954323997879878992123458999796645456789678999658789498765678999129876789654345898743999895432
1014567896212598998989943254569234985432346899989889545678987654589991019965699976456789859886789421
2123698965403459987899854365678959874321234589998775434569898767678989198764789897567898998765678942
5436789876514998896789765498789198765210123478999654323459799878989678987653456789678967987954567893
6545678984329876745678996568893239654341234567896543212997689989294569876532345678999659876543478954
7676789996534965434556789678965498765454345678987654329876589990123456987646756789876545989832349895
8987996987649876323645678989876989876565656789498765435987678921247897898767897896543234598747456797
9598945699799765101234678994989878987676987892349989745698799432356998959988998965432123459656567898
3459656789987654212345789543298769998987898921235697656789896565467899543299439878943434598767898999`;

const getMatrix = (input) => {
  const M = input.split('\n').map((line) => line.split('').map(Number));
  M.get = (x, y) => ((M[y] || [])[x] >= 0 ? M[y][x] : 99);
  M.size = () => ({ w: M[0].length, h: M.length });
  return M;
};

const getLowPoints = (M) => {
  const { w, h } = M.size();
  const lowPoints = [];
  let heat;

  for (let x = 0; x < w; x += 1) {
    for (let y = 0; y < h; y += 1) {
      heat = M.get(x, y);
      if (
        heat < M.get(x - 1, y) &&
        heat < M.get(x + 1, y) &&
        heat < M.get(x, y - 1) &&
        heat < M.get(x, y + 1)
      ) {
        lowPoints.push({ x, y, value: heat });
      }
    }
  }
  return lowPoints;
};

const countBasin = (M, x, y, alreadyCounted = {}) => {
  if (alreadyCounted[`${x},${y}`]) return 0;

  alreadyCounted[`${x},${y}`] = true;

  const value = M.get(x, y);

  if (value >= 9) return 0;

  return (
    1 +
    countBasin(M, x + 1, y, alreadyCounted) +
    countBasin(M, x - 1, y, alreadyCounted) +
    countBasin(M, x, y + 1, alreadyCounted) +
    countBasin(M, x, y - 1, alreadyCounted)
  );
};

function part1(input) {
  const M = getMatrix(input);
  const lowPoints = getLowPoints(M);

  return lowPoints.reduce((riskLevel, { value }) => riskLevel + value + 1, 0);
}

function part2(input) {
  const M = getMatrix(input);
  const lowPoints = getLowPoints(M);
  const basinSizes = lowPoints.map(({ x, y }) => countBasin(M, x, y)).sort((a, b) => b - a);
  const top3basins = basinSizes.slice(0, 3);

  const basinProduct = top3basins.reduce((sum, s) => sum * s);

  return basinProduct;
}

part1.desc = 'Risk level at low points';
part1.tests = [
  {
    input: `2199943210
3987894921
9856789892
8767896789
9899965678`,
    result: 15,
  },
];

part2.desc = 'Product of 3 largest basins';
part2.tests = [1134];

runIfMain(module, input, part1, part2);

module.exports = {
  part1,
  part2,
};
