// const prob1Input: number[] = [
//   1837,
//   1585,
//   1894,
//   1715,
//   1947,
//   1603,
//   1746,
//   1911,
//   1939,
//   1791,
//   1800,
//   1479,
//   1138,
//   1810,
//   1931,
//   1833,
//   1470,
//   1882,
//   1725,
//   1496,
//   1890,
//   1862,
//   1990,
//   1958,
//   1997,
//   1844,
//   1524,
//   541,
//   2001,
//   1591,
//   1687,
//   1941,
//   1940,
//   1561,
//   1813,
//   1654,
//   1500,
//   1575,
//   1826,
//   2006,
//   679,
//   1660,
//   1679,
//   1631,
//   2008,
//   575,
//   1583,
//   1883,
//   1904,
//   1436,
//   1650,
//   1532,
//   1907,
//   1803,
//   1693,
//   1700,
//   359,
//   1516,
//   1625,
//   1908,
//   1994,
//   1910,
//   1644,
//   1706,
//   1781,
//   1639,
//   1662,
//   1712,
//   1796,
//   1915,
//   1550,
//   1721,
//   1697,
//   1917,
//   1665,
//   1646,
//   1968,
//   1881,
//   1893,
//   1468,
//   1678,
//   1774,
//   285,
//   1754,
//   1856,
//   1677,
//   1823,
//   1802,
//   1681,
//   1587,
//   1767,
//   1711,
//   1900,
//   1983,
//   1787,
//   1996,
//   1726,
//   1982,
//   1971,
//   1553,
//   1542,
//   1863,
//   2002,
//   1831,
//   1891,
//   1555,
//   2000,
//   1847,
//   1783,
//   1873,
//   1761,
//   1742,
//   1534,
//   1993,
//   1898,
//   1973,
//   1974,
//   1597,
//   1540,
//   1581,
//   1864,
//   1452,
//   1637,
//   1649,
//   1886,
//   1965,
//   1460,
//   1664,
//   1701,
//   1647,
//   1812,
//   1937,
//   1902,
//   2004,
//   1991,
//   1718,
//   1887,
//   1606,
//   1748,
//   1737,
//   1608,
//   1641,
//   1710,
//   1724,
//   705,
//   1985,
//   1571,
//   1805,
//   131,
//   1788,
//   1707,
//   1513,
//   1615,
//   1897,
//   1476,
//   1927,
//   1745,
//   1926,
//   1839,
//   1807,
//   1955,
//   1692,
//   1645,
//   1699,
//   1471,
//   1604,
//   1830,
//   1622,
//   1972,
//   1866,
//   1814,
//   1816,
//   1855,
//   1820,
//   1034,
//   1673,
//   1704,
//   1969,
//   1580,
//   1980,
//   1739,
//   1896,
//   434,
//   497,
//   1851,
//   1933,
//   458,
//   1521,
//   1551,
//   1762,
//   2010,
//   1614,
//   1840,
//   1747,
//   1875,
//   1836,
//   1895,
//   1518,
//   1825,
//   1987,
// ]

// // const find2020 = (arrOfNums: number[]): number[] | void => {
// //   let left: number = 0
// //   let right: number = arrOfNums.length - 1
// //   while (left < right) {
// //     let sum = arrOfNums[left] + arrOfNums[right]
// //     if (sum === 2020) {
// //       return [arrOfNums[left], arrOfNums[right]]
// //     } else {
// //       left++
// //       right--
// //       console.log(sum)
// //     }
// //   }
// // }

// const arrLength = prob1Input.length

// // for (let i = 0; i < arrLength; i++) {
// //   for (let j = i + 1; j < arrLength; j++) {
// //     if (prob1Input[i] + prob1Input[j] === 2020)
// //       console.log(prob1Input[i] * prob1Input[j])
// //   }
// // }

// // for (let i = 0; i < arrLength; i++) {
// //   for (let j = i + 1; j < arrLength; j++) {
// //     for (let k = j + 1; k < arrLength; k++) {
// //       if (prob1Input[i] + prob1Input[j] + prob1Input[k] === 2020)
// //         console.log(prob1Input[i] * prob1Input[j] * prob1Input[k])
// //     }
// //   }
// // }

// const prob2Input: string = `1-5 k: kkkkhkkkkkkkkkk
// 5-7 k: blkqhtxfgktdkxzkksk
// 15-16 x: xxxxxxxxxxxxxxlf
// 3-5 j: fjpvj
// 17-20 x: zsxjrxkgxxxxxxxmxgxf
// 5-6 m: swjzmmmlx
// 2-4 v: vqdn
// 8-12 t: thllsbqtgdsf
// 10-17 h: vpbrjcbhnwqhhphxjk
// 8-9 p: zpwpppkqbpkpppp
// 5-6 t: wtxxts
// 3-8 v: vfsvhgvvhh
// 1-3 v: kvvvm
// 8-16 w: bwkqpdgwrbwjxrtqlwbw
// 3-8 s: sssssssbs
// 6-9 w: wwwwwcwwww
// 5-10 r: rvwrrlxbrjhp
// 1-4 r: rbnlkkrjphnnxpw
// 7-9 r: zxhrpmsrrxrlr
// 2-3 w: dwcvwb
// 2-4 v: vlvvvv
// 3-12 h: hbvdhhhhhqhhlzhs
// 8-10 t: tbgfvwbtvbnghfbhxz
// 4-8 m: dmvgkltn
// 4-6 x: xfxxxdcxxqr
// 1-2 p: pkcpmh
// 2-7 f: fkfffflf
// 9-11 m: mmmmbmkmmmmm
// 9-10 b: bbbbbbbbbz
// 6-7 z: zzzzzcp
// 4-7 c: cqccltd
// 3-4 w: wbvwcwllww
// 4-10 k: kkkmkkdkkkxkfh
// 5-6 x: xqftxz
// 9-13 r: rrbrrrrrxrrqrjrr
// 5-10 t: hjcxthjtvdd
// 8-17 c: bckccxqcmccxrckcl
// 16-18 b: jwxpkkmnbqftknzjkbr
// 5-6 r: rrrmrr
// 1-2 k: lkbhbkstth
// 17-18 j: jjjjjjjjjjzjjjjjxsj
// 4-12 t: tttkttttttttttttj
// 7-9 k: kkkkkkwkk
// 3-5 q: pjlql
// 9-14 t: tptjdnnzkvjqbthm
// 2-8 q: qwqqqqqqq
// 5-8 p: ppwwrphp
// 6-7 h: hhhhhtr
// 2-3 w: wvtfwwh
// 6-13 d: ddddjdmddcdkjd
// 2-4 k: xkhf
// 4-6 s: fdksdsq
// 2-3 x: xxjsx
// 1-11 b: ksbjfhgqbbbbvpcbg
// 5-12 f: fgfffffffffwfjsfzfs
// 5-7 p: ppppppq
// 10-14 z: zzjzfzzzzfzzzj
// 5-9 p: qxxmkfpspnpk
// 6-7 s: shqgnsq
// 10-15 v: vvvvvvvvvnvvvvvv
// 1-3 g: gxchngg
// 5-8 v: vvvvvvvcvv
// 9-14 s: sssflshssssssssssfs
// 4-7 v: kvlvdkvfn
// 9-10 x: xxxxxxxxxdxx
// 3-4 n: nnnnn
// 3-7 z: zzzzzznz
// 2-5 v: hnkgvxqqfq
// 3-9 m: vmbmbqrmks
// 5-8 g: ghggggjfggfd
// 13-15 m: tvhsdwphwtpkmlm
// 14-15 h: hhhghhhhshhhhch
// 15-18 s: bssssssvssssjszsss
// 6-7 h: hhfrhhmhhh
// 5-10 x: xxgxxxdxmmxrx
// 2-5 c: cztcgcwct
// 2-4 l: lllw
// 12-13 x: xxxxxxxxxxxgx
// 4-5 k: kckgkk
// 1-3 p: gqppndp
// 4-6 c: cdcnfr
// 6-7 v: vvmvvvfv
// 2-4 c: cdzc
// 7-8 x: xxxxxxxxxxwxx
// 2-5 z: zzzznns
// 6-7 k: kkkkkkk
// 13-15 t: ttttttftntttttxttttt
// 4-5 k: mckkmkxthk
// 3-6 h: hhchlhh
// 10-14 x: xxxxxxxxxsxxxxxx
// 1-2 n: nknnnz
// 1-14 r: prrrrrrrrrrrrrr
// 1-3 p: gpppp
// 1-15 x: xxxxdxxwxxxxxcxr
// 9-10 f: fffffffffk
// 4-5 m: mmmwmm
// 10-14 q: dtbtqwkspvxbtq
// 4-7 w: wzsxmpqgxjwsw
// 9-16 z: qftzzzfztnczwzzzjzzp
// 6-11 r: grrqvcjkhrrdrsrrrqr
// 8-11 g: gjbmwgggbgnggltgz
// 5-7 c: cccctcdcc
// 11-13 j: jjtzdlfrvjcjsjj
// 3-11 p: wmmrmblfbcppjvvfp
// 2-3 m: zgzrsf
// 9-13 t: tttttttttsttttt
// 2-4 m: skmm
// 3-4 l: nllx
// 5-6 h: hhhhhx
// 7-9 l: mlflqllgl
// 6-7 r: rrqcrnrlrrcr
// 1-4 x: xbxbbcxx
// 11-19 f: ddfzffnfffqffffffff
// 2-7 w: wtwwwthw
// 10-14 z: zzlzhzzzzkzzzzkzzzr
// 10-12 p: pplvpppwpnqpprspspp
// 12-14 g: gxghmjgggggjgggggg
// 4-5 w: whlmwx
// 1-10 g: cggzggbsgzr
// 2-5 p: ppppzjp
// 4-6 b: bbbfbbbbxbbbbbbbbbb
// 12-14 r: rrrrrrrrrrrhrr
// 9-10 f: fvdkjxfgpf
// 4-7 v: vvvnpqv
// 4-14 r: rrrwcrxrqmrrrrrrrrr
// 10-15 z: zszjzjzzmzzzzzd
// 8-11 v: vvvvvvvvvvv
// 10-11 v: vvvvlvvvlrvv
// 4-7 j: fbbbhjjj
// 1-5 d: ldddd
// 2-5 p: flkszkmgp
// 4-11 h: gclqbxbphsj
// 2-4 h: jthhhh
// 8-9 f: fqfffgfqfffffff
// 2-9 v: znfvsxrdw
// 12-14 c: cccccccrccmhccc
// 2-5 k: tkwkk
// 3-4 f: ffqffff
// 3-5 j: jkjjm
// 7-10 t: kvggzgqjttrg
// 8-17 h: whhhhhhhhgvhkhhhs
// 2-16 s: spsssgssssssszsssvhp
// 6-7 s: jssssbk
// 7-8 f: fhfffqfn
// 6-12 q: pmfgxqdcwsnqvfpbxqt
// 2-3 x: khqxfx
// 4-11 z: rzzzzzvzzzz
// 2-4 x: xrsx
// 3-13 g: ggggqmggggggglg
// 2-4 c: vccs
// 3-4 s: szvsfs
// 11-17 x: csxxxzxxrkzqxxzxxxbx
// 13-16 h: zhjhhhhbhhhfshhhqhh
// 16-20 s: zjljhcpwdzgbkdsssgrs
// 6-7 t: ttqtttbxtt
// 3-4 w: wlswk
// 8-9 l: lllllglrllll
// 8-9 d: ddddddqdnd
// 8-10 c: cccccccccbcc
// 2-6 n: fnxlng
// 6-10 g: gggggggggt
// 4-13 p: pmptpjpppkpppvpp
// 12-13 b: hbwpjmnxcwvfl
// 7-10 c: tccccclcccc
// 16-17 n: mnnjnmrnjnnnnnnnn
// 3-4 r: wxrr
// 9-16 x: xxxxxxxxxxxxxxxnx
// 1-5 v: vxvgm
// 7-11 l: lllnlhllnlljcll
// 4-9 s: sdhtjsdfsstl
// 9-11 n: nnbszpzwkmf
// 15-16 k: kpvfgsrkptkkbdkj
// 3-5 j: nfrjffxjh
// 6-9 j: dxrrhnwwjm
// 9-10 x: xxxxxxxxpxx
// 3-4 n: nndnnnnlnnsnnnnn
// 2-4 n: mgnc
// 16-18 g: gggggggggggggggggsg
// 8-19 p: lbmcxkxfhwltkbjzppp
// 6-8 l: lllllllbnllflz
// 1-2 g: zggggg
// 10-12 n: vxddjhnnvnrr
// 1-3 f: sftff
// 12-13 q: qqqqxqqqqqqqcq
// 1-3 r: trqrrrrrr
// 5-15 g: ggggfgggggggggdggg
// 5-6 l: zpzcklk
// 3-8 j: jjcjjjjjj
// 11-15 k: kkmkkkkkkkljkkk
// 3-4 x: hxdb
// 8-13 g: vggggfgdpggghmg
// 6-9 q: qqqqqcqqqqqqqqq
// 5-6 z: zzszbz
// 8-15 k: knfkxkzjvbqqdkvc
// 13-16 n: xbngntvnqdnfnnfd
// 1-9 s: sshstsssv
// 5-7 s: szsslsss
// 5-7 n: nnxhdfnnr
// 2-5 m: mfbdm
// 10-13 l: qnzhxkkwflllrllz
// 4-8 h: mnhtnbhxw
// 4-5 b: wbwbp
// 4-13 s: jttsbbszhssvt
// 8-12 r: rrrrrrrhrrrrr
// 3-6 w: sxvnksbvdwlg
// 11-14 x: xxrxxxnxbxxxkx
// 16-17 s: szssssssssssssssc
// 5-8 l: hlllclllllllllllll
// 3-4 l: lllhl
// 3-12 s: ntsmzknclldtlsq
// 5-10 m: mmmmmmmmmlmmmm
// 7-10 x: jxkhxkxbbvlmn
// 4-6 t: tttttwt
// 18-19 l: nlbllqqvqqlmpllxldc
// 1-2 m: mpmmmgqm
// 3-7 t: ttfttqgtttttt
// 3-6 r: brrrrfrt
// 9-14 d: sddddddxdnxddzdd
// 5-6 c: szcxsc
// 3-9 m: cprvpmmmm
// 12-16 p: ppppppppppptpppp
// 3-7 q: qqsqqqbq
// 2-11 g: bgndtnltsgg
// 5-6 c: kctccckcxcc
// 8-9 q: qfzbfnbjzljzcvhpswgt
// 17-18 j: jjjjjjnjjpdjxwjqwjfb
// 2-5 g: dhkldg
// 4-6 s: rwssbs
// 11-12 g: ggmggcgpgmgn
// 1-2 f: flcnv
// 10-11 c: ccccccccccrc
// 14-19 h: hhhhhhhnhhhhhbhhhhhh
// 9-10 v: bnvvzctvvw
// 3-7 v: gdhvpqv
// 6-8 c: ccnccfcc
// 6-9 j: zjdjlfnjjjjnfj
// 8-9 q: qqqqqqqfq
// 12-14 t: ptgsttgttttttkttst
// 9-12 p: ppzppppkjpppqppd
// 3-4 g: gggfggng
// 4-9 z: zzzqqdzrrzzz
// 5-7 f: bjbftff
// 12-13 w: wvwwwwwwwwwmwzfwww
// 1-4 h: htnd
// 5-10 m: nlbtmgfmpqzfv
// 11-14 j: jcjjgjjjfjjjjzjfj
// 9-10 n: nnnnnnnnnznq
// 3-5 t: ttttmt
// 7-9 n: nnntnnbnnnn
// 7-14 l: btlsjhlgglhrlkllgrb
// 4-5 g: hctgg
// 4-6 b: ksbbjbljnfsd
// 2-3 h: hhsx
// 4-10 h: pgmhbbhmpsvxnhdtsh
// 5-11 q: pqrsdqqqqqqqq
// 1-4 s: sssq
// 6-7 r: shpvlsr
// 1-2 f: fsff
// 8-14 z: zgzhbwkzdjtglgxzh
// 10-14 j: djjjjgrgjjjjjkj
// 2-12 g: ggxtdhcjpfdg
// 1-2 f: frfffffmffft
// 18-20 d: ddpkddbzdkdkxzddhrdx
// 4-7 b: bwdbrbkq
// 8-10 d: dhddddddmt
// 7-9 z: znzzzzzzt
// 4-11 r: jtcrcsfjrkrfnttm
// 4-5 k: hkkkkk
// 3-19 m: vtxnccshqhlvfkwrxtnw
// 8-9 h: hcvhghzfhrhh
// 5-6 r: bqdcjrkrrwqvrr
// 6-12 r: rprmrnrfkbrrwm
// 19-20 f: fffffffffffffffffgff
// 6-8 d: dmdddhddd
// 4-11 w: mwwwwdwkwwfwww
// 9-10 r: rrrqhvfrrhrftrprr
// 9-11 p: ppppdpsghpp
// 2-5 m: mmnmmtttwvk
// 6-10 q: qlfqkqdbqb
// 8-9 r: rrrrfrrrprrrrrrfr
// 4-6 l: nwnklltxl
// 3-7 b: fzvpjtbjb
// 3-7 r: rrsrxzrbrrrqx
// 2-4 n: cnbg
// 6-8 t: ttqtttfjhtxtgdrtn
// 4-5 g: gghgggg
// 7-10 s: rgdqsqstvwl
// 4-11 w: wwwsjwwwbwjwwww
// 3-6 q: qkpqhfqq
// 3-5 l: xbhmlrlllvq
// 6-7 v: gltvcvkn
// 3-4 t: ttthttt
// 11-13 n: nnnrdndnngffnnnnnn
// 1-4 t: nttvt
// 4-6 h: hhhhhl
// 4-6 l: rlgmlqmtlptdf
// 9-16 x: bqkxsfdhxlhwmzrqn
// 9-10 m: mmmsmmmmmvmcm
// 4-6 b: bbbbbd
// 11-15 g: ggggggggggggggng
// 1-2 v: bvvssfblvnxqp
// 5-6 v: pvtjvpvvv
// 1-4 c: cccnccccccccccccc
// 8-11 s: sssssssjsxxsss
// 5-8 d: ddddgddd
// 6-13 z: jxzxzzhzznzqw
// 6-12 r: drzdgkrctcnd
// 11-12 k: kkkkkckrkkkwbtbkvkk
// 16-18 t: swtvgprhjnzlgsjjst
// 5-11 k: kkkkkkkkkkpkkkk
// 4-7 j: jjjjjjjjjjj
// 6-8 d: kdddkdtt
// 1-5 c: cccsk
// 10-17 n: nnnnnnnnnrnnnnnnfn
// 5-9 z: zpzznzzzzzvzzzzz
// 5-20 t: tltttztnttttttvtttct
// 2-14 l: lrlllllllllllll
// 1-12 h: hhhhwhhhhkhshh
// 2-4 p: spbpppkppnjfx
// 11-15 d: ddddzdcdddddshdw
// 9-10 h: qhcwgthzsh
// 2-4 t: bhdtttbfwjpthntmrq
// 3-4 z: jzdz
// 7-16 k: hkvxwzkqrkbsltgcx
// 3-4 v: vcqv
// 2-7 x: xdtgjjxfh
// 15-17 c: ccnzdlcpzrccbcccf
// 3-7 g: zsgrmgrh
// 3-7 z: zqjzzlzcvzzzls
// 6-9 f: cnzdlfnqvzkq
// 2-5 m: jmfhgwmmc
// 7-9 r: rrrrrrrws
// 4-9 g: gdsgggbkdgg
// 11-13 l: ztrzlltljglzcr
// 10-13 g: ggggdjgtgggzrgg
// 12-16 k: zpfdzxwbzfkptwqkn
// 15-16 p: ppppmpppppppppwpp
// 8-14 b: bmhgtpdbbsrkbgvwd
// 10-12 k: ktkkkkkkrnkjkksk
// 2-10 d: dhdwdffhdqngs
// 4-7 g: ggglggggggggggg
// 1-10 f: xfffffffffff
// 6-11 m: mxmnvsmwmmmww
// 15-16 k: qskxqzknqkfhtlbkhx
// 4-5 b: hbbbt
// 11-14 k: kvkkdkkvkdskrkk
// 1-6 b: bjvbqs
// 2-3 r: dxzsvqtqvxrbv
// 6-8 c: cscrxrcklcscvkmbccc
// 4-8 d: dddjddddmd
// 4-13 x: dprmsnhxzxnxmv
// 5-6 j: jhkjjz
// 5-8 z: mzzjzhzbwdzl
// 9-11 x: xxxxxxxxlxx
// 4-5 d: dxdvndddpddddddddvnl
// 2-5 v: vvvvlv
// 5-11 m: cmmgmmmmmmmmmtc
// 13-14 r: rrrrrrrrrrrwjrrr
// 4-14 w: rlvwwwglzlxggwhkhk
// 17-18 d: dddddddddvddddhddldm
// 3-6 r: gmrprm
// 5-6 m: fpmjlmmzjb
// 12-14 j: jjjjjjjjjjcjjq
// 12-14 f: ffffwfffffbdfq
// 9-10 j: jjjjjjjjbjjj
// 1-3 z: dzzzkz
// 1-2 w: swtcxgdqgnlj
// 1-2 v: wvvv
// 1-3 h: rhrr
// 2-6 x: wxxmtbmcsr
// 6-7 d: ddndtfdd
// 8-13 j: cjqjjwwhjcswbthcj
// 3-4 x: xhxxppxnwmwkhdx
// 7-9 j: ggrjjbjjjnjvjjj
// 3-9 g: tzghddllprgs
// 11-13 r: jhdvbchsrzlxrwjrz
// 12-13 g: gwgggggggggglg
// 2-14 m: kmmcwwhprtskhwwvg
// 1-4 r: rzrssthbbhjdmnx
// 5-12 f: ffffgffffffff
// 19-20 j: jjjtjjjjjjjjjjjjjjjj
// 5-6 n: gnfnnnn
// 4-10 b: bbbmbbbbbbbbb
// 1-2 x: xsxs
// 17-18 r: rjrrrrrrrrrrrrrrzr
// 12-16 b: bgpvgbkbkhbqwbvbtbvg
// 1-11 q: qqqqqqqqqqxq
// 8-11 l: lllllfllllgll
// 3-4 h: hrtc
// 9-10 l: llvllnllkbwlslldllm
// 6-8 j: jjjjzsjj
// 3-6 n: mnxqjn
// 2-3 g: ghgg
// 2-16 q: qkqqqqrqqqqqqqqqqqqq
// 2-6 n: nnngrbfqshlmnnskdwpw
// 4-13 f: fffffffffffffff
// 4-5 s: nvcstplm
// 7-14 n: nzcnntnsdnbnngnnnpnk
// 16-18 v: vmvvvvvvvvvvvvvcvv
// 5-6 l: llllhq
// 5-10 d: ddddddbddqd
// 12-14 h: hhhhhhhhhhhzhhhh
// 11-12 b: bbbbqblbbwbnbbblbt
// 3-4 n: nwnqbtn
// 6-10 v: vgvvpvvdvbzq
// 10-11 m: mmmmmmmmmmmmm
// 6-8 b: bbbvjpvb
// 5-7 c: rcccccs
// 5-7 n: nqjksznntnzgnznmjj
// 7-8 r: rrrrrrrfrrrrrr
// 7-10 c: ccmccszccsmcbccggclc
// 1-8 s: sssssssxs
// 3-8 j: jxjjjxjj
// 7-10 z: zzzzzzczzzzzz
// 1-4 g: gdzgg
// 8-9 b: sqbbbbvhb
// 16-17 s: clssssssssflvssss
// 10-11 h: vhjhhhwhhpsh
// 3-5 z: jczzmzz
// 1-8 p: cztfpjcpp
// 4-7 w: twwprwwcww
// 2-3 x: xsxx
// 4-11 m: mswmmdkmmmqmwmfnqmt
// 8-11 b: lpbbbbbbbgb
// 4-14 n: nnnnnnnnnnnnnwnn
// 5-7 m: mrxsvmnwbmq
// 3-4 w: wwtjw
// 4-5 x: xxxxsxx
// 7-10 v: jkxhvtvfcvcsfvrbczkv
// 6-8 v: vvvvvtdvfjpc
// 11-12 h: hxqhhhhhmhnh
// 1-3 h: chhh
// 4-9 n: nnncnnnnnn
// 14-20 z: zrzzhwzmtzfktvrwqzxq
// 11-13 j: jkjjdgjjvpjjmkj
// 3-4 n: rcrfknnn
// 3-8 c: ccsccrccc
// 10-16 n: nnnnnnnnntnnnnnnn
// 8-13 p: tpvzplvlppphpzppjp
// 3-5 r: srrrsrhr
// 18-19 g: gggggdnfggqgwgggsgpg
// 13-18 m: mcjmmhmsvswcrmkmmmm
// 3-9 p: bjpgzprcplf
// 6-9 g: ggkgsgggj
// 1-7 v: vvvvvvmzv
// 6-16 h: hhhhrhhhthhhhhhq
// 2-3 v: tfvq
// 1-9 v: svvbwcvvvvl
// 10-11 d: dfdddddddhdddd
// 7-9 v: sscbdsvvr
// 3-6 q: wvrrvqrqczg
// 7-9 v: gmqzvpvbvd
// 2-20 v: tbmpjzvhqbklqtsllcfv
// 7-11 v: vvvvvvvvvvv
// 11-13 s: kknsbrcpsjblhrsbkh
// 2-7 n: fnnnmpstcklhwzmwx
// 6-14 d: kdmdhlddddddmv
// 17-18 z: zzzzzzzzzzzzzzzzrr
// 2-4 k: hmkfkklq
// 11-14 n: nnnnnnnnnnznnn
// 6-10 k: hnvpcckbxkpks
// 1-5 d: dmdpvjgdcglnssx
// 6-9 k: xzhqkpxvkkdtskkkwk
// 7-9 p: ppppcpppppp
// 4-5 r: qnvrrhvshwrsrxc
// 8-9 l: lllllllzk
// 9-10 s: sssssssssks
// 8-9 d: ddqzdddsd
// 4-16 k: kkkkkkksfwkkfkkhkk
// 10-11 n: rtpdqfmrnknr
// 5-6 z: zfzzztzxzzv
// 8-19 f: hvtkcwpfdgqwwqfwwvvb
// 5-7 v: vtmvtvwd
// 1-2 s: hpsp
// 10-12 d: jddddddddddc
// 8-10 s: tvsxfdgjts
// 6-7 x: xdbkbjxd
// 3-16 m: plmmxkwpcjgqgbrm
// 2-7 c: bqrdnscbkc
// 2-3 m: mnpmshpnqwz
// 4-7 g: kngcjgg
// 1-5 l: llllcl
// 4-11 k: kkkrkkkmkkkkkt
// 8-9 t: tttstvttsttt
// 11-12 c: cxzcjcccclnt
// 1-3 w: wwpss
// 2-7 p: zpsmqpx
// 4-9 x: whdsxdmncxwplxbh
// 17-19 p: qpqpppjppppfppppppp
// 1-2 b: bwbwxrbgb
// 5-6 n: nnpnbhpn
// 5-12 m: pmmmsmvmmmmmmm
// 5-9 q: vqpqqqqqbqqqfs
// 12-15 m: mmmmfmmmbmrwmmqmm
// 1-5 w: wtnflwwr
// 5-6 j: zdhhnrqpbcjkj
// 9-16 r: fmrzrrrrrrrrrsrfr
// 2-3 s: dmsq
// 1-18 w: wwwwwwwwwwwwwlwwws
// 2-9 c: cswcrbrccccqj
// 15-17 m: mmmmmmjzmmmmmmmmhm
// 1-9 n: nnnpnfkxnnlrpssnxbv
// 7-9 x: kvgqdhxhxvbm
// 5-8 l: ljllmclllftjzqk
// 9-12 j: jjjjjjjjjjjkj
// 12-13 h: hhhhhhhhhhhrh
// 11-13 f: ffffvfrfffmfff
// 3-13 n: dhnnndnnmwndrnnnhnnj
// 1-4 w: qswww
// 11-12 r: rjrcrrrcrrpkrr
// 1-5 k: kkkkjbs
// 3-4 r: vzrr
// 2-3 k: kmkkkkkkkk
// 3-4 v: vkdg
// 2-5 j: vtjpv
// 7-10 t: ttttmttjntqttz
// 2-3 x: xkzxxt
// 4-7 w: qhwzvswkhw
// 1-2 l: wqwnl
// 6-12 r: fzrrhrgrrzfxr
// 3-4 d: dddtdfbddd
// 12-16 g: gggggggggggcgggg
// 11-14 h: hhhkfhcshhchhhxhhhh
// 1-2 f: zfff
// 6-7 z: zzzzjgzz
// 12-19 k: tkgkkkkfkgkxgkqgkkn
// 12-13 c: ccccccccccczcc
// 16-17 z: zzzzzzzzzzzzzzzzn
// 4-5 b: bbbpbbzbbb
// 17-18 c: nvfkfcwxxjlrrslwcpc
// 7-10 v: kwcfvvvxvx
// 9-13 q: qqqqqqqqqqqqwq
// 1-4 g: pjgdhgnmzggd
// 7-11 d: ddddddzdbdd
// 17-20 j: npdnjjjjjjjjkzcfjslf
// 5-10 q: zkthrrkzqg
// 6-14 j: jjjjjjjjjjjjjkj
// 5-10 t: tbtttfbmztq
// 3-4 s: sssv
// 6-8 w: wwwlzwwwwwdk
// 1-11 l: vffmrflltflkwxldl
// 8-10 j: jjpjvjjjjb
// 6-7 p: hpqhvpzpphdkpp
// 3-4 m: mmtv
// 9-15 l: lllllgllllmllll
// 10-12 m: mmmmvhmmmmgtvg
// 2-6 w: wwwwwgwbt
// 7-13 m: mmmmmmmmmmmmm
// 1-5 r: gjcskhrz
// 5-12 s: bvggstbnhjfdfwz
// 7-8 c: ctxcfppcccc
// 12-14 j: jjjjjjjjjjjhjp
// 14-17 t: ttxttttptttttttttttt
// 1-8 l: lllllltf
// 7-8 r: qrrrrrrsvrhm
// 1-13 q: qqqqqrqqqqqqgqqqsq
// 4-9 n: qpnmnzpnnnnmxtr
// 6-11 z: qczxzzkzbkznzrvnvkz
// 7-13 b: bbbbbbkbbbbbsbb
// 6-9 c: ccfqncjszc
// 1-5 l: lrlsl
// 2-8 f: pfbtbvpjmzwpccsbm
// 2-4 d: wnjd
// 10-11 n: nnnnnnnnnxndnnnn
// 3-4 c: cccc
// 8-9 r: rflrrrvrh
// 3-4 b: thbs
// 3-9 q: zcqqbdrws
// 1-6 d: dlmncvgd
// 2-3 n: bmnfknkt
// 9-13 n: nzbpvpmfnwdnn
// 7-14 f: wpntqfsttpvflf
// 13-15 w: cwwwzspwwwswwlxp
// 4-7 j: jjjmjjj
// 10-14 m: bnrnlmhdfwnhfmdc
// 2-4 z: kzntlwtbzx
// 11-13 w: wwwwwwwrbwwww
// 6-7 g: pwggggv
// 5-9 h: sbdxfjffznxghlwtc
// 10-11 c: ccccccccccpccc
// 2-4 h: hnhbc
// 4-5 z: fjblqlpdwbl
// 1-5 d: dddddd
// 6-7 n: nnnfjnlvnxvnnn
// 4-5 m: mmzvmm
// 13-18 w: nxxwkwbwwpzgwwkwwfww
// 8-9 g: ggghkwbgc
// 9-10 v: vvhpjzvvvvfcnlvvgvq
// 1-15 k: kpprkqmkthtkwvd
// 16-17 b: rrhdbfwpntvjphvbb
// 16-19 k: kkkkkkqknkkkvkkfwkkk
// 5-9 d: dwddddddddzd
// 10-14 g: gggggdgggrgkpzgk
// 9-12 x: bffxxdjwsxcx
// 3-10 b: nbgbzbbbbbbbbbbdb
// 15-17 x: xxxxxzxxxxxxxxxxt
// 1-5 h: xhthhdq
// 5-16 j: spfjjmjjjjjjjjjjjjjj
// 3-6 b: hzbbbbmbkdrb
// 11-13 m: mwmmmmrmmmmmmmmmm
// 16-17 v: vvvvvvvvvvvvvbvvv
// 17-19 g: ggggggggggggggggggg
// 2-3 h: gfhvhjwh
// 4-6 f: fjgzwf
// 1-5 x: kjwhxntxhxfcxlfgb
// 6-7 s: snssplq
// 7-13 x: kxgxxxxxmxglhxx
// 3-5 j: ljjvdhp
// 13-14 c: gjtrlcblfbqvcw
// 13-15 k: kkkkkkkkkkkkkkk
// 5-8 t: vtfvttttmszk
// 9-11 q: qjtsqqqqfbq
// 3-8 f: fftfrvfcfqfff
// 6-8 f: fffffffdf
// 3-8 l: lhllwvlltzlw
// 7-14 p: hpxrnnbpqrcjtpvjpgq
// 1-12 z: lzzzzpzgzzgz
// 4-5 c: ccgqcnc
// 10-11 x: tpmddsxqjdx
// 8-10 p: pnpfppppqpcpf
// 1-6 q: qqzkqh
// 1-4 g: wggc
// 16-17 f: fffhfxqffftfffffhf
// 7-8 c: dcvckvbc
// 7-12 z: zzkzzzhzzjvz
// 2-12 z: dkghplwzdnpzq
// 3-4 r: gdkvhr
// 3-4 t: ttbx
// 8-13 s: sqzsssstsgssslsss
// 1-4 s: csssss
// 5-7 j: jfzjjvjjkjzwjrjtjw
// 2-12 s: sgcssssszfqsssn
// 8-13 p: pzlhpxpsphppz
// 2-12 m: mllzwvmzkgbmns
// 17-20 k: kkzkkkknkkkkkkkkkkkh
// 11-13 j: jxhqjjpwjljjj
// 17-18 z: zzzzzzzrzzzzzzzzzl
// 2-7 c: vhrqfckjrh
// 7-11 p: pppppnpppppj
// 9-11 x: xxnxxvxbxxxxgrxmxxw
// 12-13 h: psltjhhhvmthh
// 1-2 q: hsxqqlqxwqm
// 6-14 b: bzdnbblbbsbbnbb
// 3-17 z: wlwfbbxnztpvfgdzzl
// 5-6 z: zzszzrmkplrzz
// 12-14 z: zzzzzzzzkzzzvvmzzz
// 16-17 x: xpxxbxxxxxxxxhckxn
// 6-11 w: wkwhmgwwwwwwwww
// 9-14 f: ffffffffzffffff
// 3-4 q: qqjqsq
// 13-14 z: zzzclzzzzrzzzzzzzz
// 1-3 x: xxxxxxxx
// 9-11 w: wvwrwwwdfpwwxwdw
// 2-10 s: zssqsxqqtm
// 3-10 b: bbbbbbbbbxb
// 4-7 l: llllllb
// 10-11 j: jjjjjjgcjqjjj
// 12-13 t: tttsptxtttttvbktmt
// 5-6 z: zzzzpzzzz
// 10-11 q: qqqqqqqqqhq
// 6-12 w: drkfkwwwnvccmxdfwx
// 3-4 h: rsht
// 10-12 m: mmjmlmhmmmmnm
// 4-6 s: sssssss
// 2-3 z: mwccbpff
// 2-16 t: tzttttttttttttttt
// 1-2 j: sjjjjjjjjj
// 10-11 b: wbbbbbbbbbdbwq
// 6-9 r: rngrdrlrvmrbrr
// 8-9 t: hplttzttt
// 18-19 v: vvvvvvvvvvvvvvvvvck
// 11-16 p: pxnnsvpmfpxvbpnpppc
// 9-11 b: bbhsbbnbwbbbbwvbb
// 6-11 r: rmngrbbmrwrprjwrr
// 5-7 p: kpjlppjp
// 2-9 m: mtmmmmmmhm
// 1-3 l: llknl
// 5-6 s: sssssvs
// 1-3 v: vvbvvvvvvvvvmvvvv
// 3-4 f: ffffff
// 10-12 w: gjnwbwwwhdww
// 10-13 w: wwwwwwwwwkwwww
// 3-4 r: rrrrrw
// 4-5 n: nlnnm
// 1-15 b: bbbbbqbbbbbtlbbbb
// 3-4 l: glgl
// 4-5 k: bkkkkkk
// 2-8 j: dwtxvrdj
// 6-10 x: mwrznjhznxxx
// 14-15 d: dldddddddddddddd
// 4-14 s: rsssszsnzscdhrgp
// 1-8 m: kmmmmmmxmmmmmt
// 4-9 m: svkmmdmxm
// 2-7 f: fpffffffff
// 8-10 h: scpsvhkhjcp
// 7-11 x: xmzxxxxxxxtxxxx
// 13-14 p: dswdpggstpqjpc
// 8-14 j: jdjjjjfjsbjjxwjjbjj
// 3-6 m: mmlmmqkwmmmmmm
// 4-5 k: kkkpkk
// 2-7 t: tbttzxtm
// 3-5 n: jtnrlnbjnkztvknwnj
// 2-4 r: rrrwfghwrxpg
// 7-9 f: cffffffff
// 4-6 l: cmdsllz
// 2-4 z: rzzr
// 2-3 r: rzrrk
// 2-4 d: rddb
// 5-6 d: pvdddwdgkgdx
// 2-3 j: sjvfpftdkjkfg
// 5-6 s: vzdmgsk
// 13-14 d: wdddddddddddxbd
// 6-9 l: llllldcllll
// 3-4 r: rrjrn
// 7-11 f: ffffffffkfj
// 5-8 p: pxnmcppspxp
// 8-10 l: vplxllngbdl
// 7-18 w: wwwwwwwnwmwwwwwwwmww
// 2-4 x: mxxx
// 4-13 g: nnbxkmcrgpskgqg
// 3-7 l: llllllz
// 5-10 h: mgksbvscjbcfrmhgplw
// 2-13 g: mbgphwnkdndsg
// 15-18 x: xxzxxxxxxxxxxxxxxxx
// 1-3 x: xxrxxx
// 10-11 l: llslllllllp
// 1-5 n: nnrnpnnn
// 4-5 h: rhhlv
// 4-6 p: fvkrppswpdpp
// 5-12 d: dlrkxwdxgdjdwj
// 11-13 j: jjjjjjjjjjjjj
// 9-10 w: wwkwwwwwwvw
// 3-4 p: xzpjwvzmkppsppjz
// 3-11 r: vtrhfmdhpsqrrbwrlmc
// 8-15 d: hdcddddqdwfdddtdddd
// 2-4 d: mdkt
// 11-18 k: kjbtldlkfndkcbjsrk
// 3-14 h: hbhjlhlhhhvhhqh
// 4-6 x: zlkxxfrxmsl
// 7-8 g: gmmgtqgknbqzg
// 10-12 v: vvvvvvvfvxvvvv
// 7-11 n: nnnnnnnnnnc
// 2-5 t: btqcb
// 3-4 j: kgjsjvj
// 4-6 h: skhnbt
// 1-6 x: snxxxxxx
// 3-15 c: hccccjkbnctnxcc
// 12-17 s: ltsssshssqstssxsk
// 12-19 r: rkrbrrrrrxqcrrrggrsr
// 6-8 p: ppppprpjp
// 4-5 v: vvvvvxsrv
// 3-4 k: gskskzwmwfltkkgzxllz
// 3-10 h: qmvhhdqthhhshthhd
// 4-6 q: qfjklq
// 11-13 f: fmfffffffffhh
// 8-14 s: vlqlskgsjvgmfhgvzfft
// 5-8 d: dbrdwdkdddddd
// 4-5 b: bbwmr
// 18-19 d: cddsddvrddndwdpddgdd
// 4-5 l: llsls
// 4-6 h: mhszhh
// 15-16 g: gggggggggggggzggg
// 2-4 x: bxcxwflqrnrrrb
// 3-17 s: xhgvmzncgctsqdpks
// 4-18 p: rprpfcxprrmncmmwqj
// 1-2 v: vzvwvvvvbv
// 8-9 m: mmfmmhvbq
// 10-11 z: vzqjzzlzkzv
// 1-4 r: rrrsrn
// 3-12 k: kctvqmgbbxskbww
// 1-6 s: fsssgmsqss
// 5-6 k: kkkkkv
// 1-7 m: mvmmqmq
// 3-8 b: skbfbwhbbgwfcgnmjsk
// 7-9 s: sssssslsn
// 4-6 n: nnnnzbnn
// 2-4 x: kxnnqrvxtgch
// 13-17 w: xshwjqwgsnwrwwcww
// 12-13 l: lllljlwllllllll
// 2-3 k: kkkk
// 16-19 s: sssssssssssssssmssss
// 5-12 c: cfccpccpccchccc
// 9-13 j: vjjjjgjljhjjbjjfj
// 10-14 r: jrrrrrrrrkrrrrrvrr
// 6-10 b: bxbbkbbbbn
// 17-18 f: tvxfdgwgfgjdsqcppqkq
// 11-17 m: mmzmmrmhmmpmmmmmmm
// 8-9 v: vvrvvvkvkvv
// 3-8 g: wgcgpgghgpgdggfx
// 5-10 r: rrrrgrrrrk
// 7-15 l: sllnpklfqllglld
// 1-2 z: wzzwg
// 9-10 v: vvqvvvvkvbv
// 2-8 s: sljssddnsscsns
// 4-5 g: snzgpngj
// 1-6 c: ccccgtclgqchvcx
// 12-14 n: nnnnhnnnqpnpnnnn
// 11-13 p: wpdmppdpppfpp
// 3-11 b: bjbbndmbbbnbbbbbbb
// 9-13 x: qxxxxxxxkxxxxxlxxm
// 4-6 p: pqpnmp
// 1-5 j: jjckjjpmjbcmc
// 4-6 q: qqsdqqkkqdqg
// 7-11 l: qslplhlvqxqm
// 14-15 g: vggggvggpggggprggg
// 6-7 t: ttthtttttttt
// 2-3 g: qglgg
// 11-14 t: kdjwqgbtnzcdltt
// 10-11 c: cccclccccck
// 15-16 r: rrrrrrrrrrrrrrrh
// 5-7 m: vjbfbcxxdwxcgrfzmzhd
// 6-7 t: tttzftmt
// 14-16 n: nnnnnnnnnnnnnpnn
// 4-12 s: rgmktzvjlwssx
// 8-12 v: vvvvvvvvvvvsvvvbvvvv
// 2-3 w: kvwqmw
// 12-13 s: dlqsssssmvfskss
// 7-8 k: lpkfkkklbkkk
// 3-5 f: nvftfntf
// 5-7 t: qtfkhtxttqctmttvc
// 11-13 b: blbbbbbbzhvbb
// 4-5 w: wwwwxs
// 11-12 n: nnnnnnnnnnpnnn
// 11-16 t: ttttttttvtkttttnt
// 12-16 j: wjjjdwjjmjjjjjjd
// 5-6 q: bqqqvq
// 1-2 s: kssx
// 1-3 j: qmcj
// 5-10 v: ckjtsqsdvvvhctvfvhkv
// 5-8 l: kllhlrlzljll
// 9-10 j: lgvgjbccjrn
// 4-5 j: jbhhvjbcjggjhwx
// 5-6 m: mmmmqms
// 3-7 v: hvpvmmt
// 5-9 z: zzzlbzzjzrvxvkhxhzdj
// 3-5 f: fkfmknbzmwbcmh
// 8-10 n: nvjnklncnnp
// 4-10 p: ppptpfpppgppp
// 14-17 z: zzzczzzrzzzzzzzzncz
// 1-5 w: wwwwlwh
// 19-20 q: wzrqqqdmqqqzqqqvqqqq
// 2-4 f: tflf
// 4-5 t: tjqtltrtf
// 17-18 t: ttttttttttttttttdtjt
// 6-12 s: mhfslsfndcsvkr
// 7-16 r: rdprghmtcrrmrrlv
// 12-13 h: hhhhhhhhhhhph
// 12-15 k: kkkkkkkkkfkkdkbnk
// 16-17 h: hhscfhvhxvklqshhhmh
// 1-7 w: whwwdwwdz
// 2-3 b: bbpbb
// 8-9 n: frnnnnncmn
// 2-4 b: hbpbpsnj
// 11-19 f: qhggmffvmfjptmksfvf
// 8-10 b: rbbldmcbbxb
// 1-3 t: tjxfsmmttw
// 3-5 v: vvvvdvvvn
// 5-8 m: jmhmmvmjkx
// 7-9 x: xxkbxxxvxx
// 10-12 f: ffrffcfxnffrnfvffff
// 6-8 t: sttghztn
// 2-5 l: cmrllltb
// 8-9 f: sskbzzxgfhvc
// 4-7 k: kpkljpqfkkhkfkk
// 19-20 r: rfrrrhmrrrnrrtvrsrrr
// 3-4 x: sxxzn
// 5-7 k: zlkgpwk
// 3-12 k: drqkqbzgkhqkqb
// 3-4 g: qgfg
// 3-4 z: bkfx
// 6-12 f: bffxfnkfffgf
// 3-12 n: xhrlptrqvzfnmptvtjcb
// 4-6 z: kzhzrp
// 1-2 n: ngnnnknjnnn
// 7-9 n: nnnnnnvnnnnnnnn
// 10-12 s: sgssssmssssss
// 2-11 l: lmlllslthwlldn
// 13-16 b: bbbbbqmbbzbbbbbhb
// 4-6 p: pppbpp
// 2-6 n: nnxnpnnn
// 9-13 b: bbbbbbbbbbbblbbb
// 11-13 h: hhkghxdhfhhdkchjr
// 6-10 w: wwwwwhwwwwwrpww
// 6-7 w: mgpwwsw
// 10-11 n: njnnnntsnfntcqnnn
// 7-9 f: ffffffrfng
// 2-6 x: xxjgxnqxxkqf
// 6-11 n: nwnfvzndsdnn
// 16-18 c: cgccccccccccccxcct
// 11-17 t: wtktgqtcpttqkqfgznt
// 4-5 w: wwwwc
// 2-5 k: gqkck
// 15-16 k: kzkkkkkkmkkkdkkpkvkg
// 3-4 s: cslss
// 1-8 w: hwgwwwwwzsbwfwwwg
// 7-14 m: hrkqfmpfzmjqqmmgrdcm
// 2-8 r: sqrrrrrr
// 11-15 l: cphdwnphlkcbvllvw
// 4-7 f: vsxgfnf
// 8-10 q: qqqqqqqtqq
// 6-8 l: llllzqlll
// 9-14 j: kjjjjjjjvmjvjz
// 4-6 x: pxxxbx
// 10-16 h: hkhjhghhsghhhhhhhhhn
// 8-10 x: xchbxtgxqrrxvmzw
// 18-19 n: nnnnnnnnnnnnnnnnnnn
// 1-12 n: nnnnnnnnnnnnn
// 5-12 l: xmklnkmpqlfllwhrm
// 6-7 b: kfhbpbvbfbpbbtsxk
// 8-18 n: nnnnnnzznnnnnnnnnznn
// 10-16 h: hhhhhhhhhhhhjhhchh
// 12-13 l: lnlllllgklllx
// 5-7 x: xxxxlxxxxxx
// 3-4 g: gggn
// 3-14 g: gjgxgcggvdggggqgngqg
// 9-10 g: gggggggggt
// 3-6 r: rrntrrrrbrs
// 3-10 g: ggkbdgggkgg
// 3-4 k: twjqtkt
// 12-13 m: mzvnqmmpcbvmk
// 3-8 p: wxflqbvppqq
// 3-6 w: ljdlfwkzwmgkwxghbqv
// 11-15 p: nplwjprspcppvsvpfppp
// 5-16 v: vqvcmvjvnvvprvnqvnpc
// 10-11 g: ggggggggggng
// 13-16 b: sbbbbxqdbdblrbbbb
// 1-4 k: czlk
// 6-7 f: rffffsff
// 8-9 w: wdrnwtqmwqdpx
// 2-3 r: rxrr
// 3-4 r: hrrmrvj
// 10-15 v: cvffvvsvvpvvvnvvgjvv
// 12-19 b: bbbbbbbbbbbrbbbbbbbb
// 3-5 n: nvnhz
// 2-4 d: hddl
// 2-3 v: fvclhvp
// 3-15 h: xwhsnhndxgcqjfqtvm
// 1-3 h: rhhhh
// 15-18 f: ffffffmfffthfftfjf
// 1-4 h: hrxw
// 1-4 v: kvvv
// 6-12 r: crxrrzrnprrr
// 7-8 q: qqqfqqwqqqqq
// 3-4 l: lljllll
// 1-3 h: hhshh
// 2-3 q: qvqb
// 13-20 p: plpqtpppsgpppppppppz
// 9-15 w: wwwwwnwbbfwwwwwsw
// 11-12 k: kkkxqkksdlkg
// 8-14 k: kkkgkkkkgdjkxnktxd
// 17-18 s: sbsmssnssssstnsssq
// 4-10 s: sssbhfcssssxx
// 3-4 l: drbl
// 8-13 j: tjjtjjhljjjnjd
// 11-12 q: nrsqrqcmzqql
// 7-11 x: wxxlxxgwvxx
// 13-16 n: nnnnnnnnnknnjnnn
// 15-16 l: dwvlwglrhvqllllvvl
// 3-7 b: bbbbbbm
// 11-12 v: vvqlvvvvbvvktvvw
// 1-8 n: nwnnmpvx
// 7-8 f: zskgxljq
// 7-14 b: qxbpwbgvbgqdlbtfjdbq
// 3-9 v: vbxvrvhqvq
// 2-3 c: czfc
// 7-10 t: mtttnzvcttttjtt
// 6-14 l: lllllklllhlglll
// 3-4 b: wgzbpwpbj
// 1-6 z: mzzzbrzz
// 5-10 t: tttjtftttdttttttlt
// 9-10 z: hzzzvzzzmzz
// 14-19 n: lppspwbnhtzxcnrkgpn
// 5-7 n: bnnnnnt
// 11-12 v: hkkhvgvtvvvvqvjxv
// 2-11 w: wwjpfvqwnhwcmg
// 9-15 b: zbqndbbbbbbbbsk
// 11-13 d: dddddddddblddmddk
// 1-11 n: ngnnfnvnbkjpn
// 1-5 l: llllkllvl
// 17-19 g: gtggggcggfggzvgqgzn
// 9-10 g: ggggsslgxg
// 7-12 r: qrdrnrgdrrrrrrlr
// 1-3 h: hmkgg
// 4-9 t: jngjtmkms
// 2-5 p: qqfrpmnnppgpvpmwdfpp
// 10-11 m: mmmlsmmmmbqm
// 2-7 c: cpbdvfccxdzczsptncnn
// 6-7 d: mtdqrdd
// 10-12 v: vvvvvvvvvsvvvvvvv
// 13-14 q: gqqqqqqqqqqqqz
// 1-4 m: fmmmmm
// 4-10 b: bklbbzmdsnq
// 3-5 w: tjwwhkbbpwtt
// 4-5 l: llldv
// 3-4 t: ttttt
// 8-16 t: xlqhtttlhssjhxtt
// 12-14 m: mmmmmmtmmmmmmzm
// 1-2 c: cccc
// 1-4 x: mxkxcndbsfvfnxjwxh
// 9-13 n: nglxnhnnrktnnfznn`

// const splitter: string[] = prob2Input.split(/\n/)
// const splitMap = splitter.map((str) => {
//   const arr = str.split(" ")
//   const first = arr[0].split("-")
//   return {
//     least: +first[0],
//     most: +first[1],
//     letter: arr[1],
//     string: arr[2],
//   }
// })

// // console.log(splitMap)

// // {least: 9,most: 13, letter: "n:"", string:"nglxnhnnrktnnfznn"}
// // const splitReduce = splitMap.reduce((number, val) => {
// //   const firstLetter = val.letter[0]
// //   const matcher = new RegExp(`[^${firstLetter}]`, "g")
// //   const stringLength = val.string.replace(matcher, "").length
// //   if (stringLength >= val.least && stringLength <= val.most) number++
// //   return number
// // }, 0)

// const splitReduce = splitMap.reduce((number, val) => {
//   const { least, most, letter, string } = val
//   const matcher = letter[0]
//   if (
//     (string[least - 1] === matcher && string[most - 1] !== matcher) ||
//     (string[most - 1] === matcher && string[least - 1] !== matcher)
//   )
//     number++
//   //   if (most + 1 > string.length) number++
//   return number
// }, 0)

// // console.log(splitReduce)

// const b = { least: 1, most: 3, letter: "j:", string: "qmcj" }

// const test = (val: any): boolean | void => {
//   const { least, most, letter, string } = val
//   const matcher = letter[0]
//   if (
//     (string[least - 1] === matcher && string[most - 1] !== matcher) ||
//     (string[most - 1] === matcher && string[least - 1] !== matcher)
//   )
//     return true
//   return false
// }

// // console.log(test(b))

// const day3Data: string = `..#..#......###.#...#......#..#
// ...#.....#...#...#..........#..
// ....#.#...............#.#.#....
// .........#.......##............
// #.#....#.#####.##.#........#..#
// .....#...##.#..#.##...#.#..#...
// #.#..###.#........#....##...#.#
// ..###.....#..###.....##........
// #.#.#...........#.....#.#....##
// ...#.#.##.##.#.#......#...##.#.
// .....##.#..#....#..#...##...###
// ...#.....#..#..#...#.#....##...
// .#...##.#.........#...#.#......
// ....#...#.....#......#...#.....
// .#...#.....#....#......#...#...
// #...#......####..##...###......
// ....#..#......##.##.....#..#...
// ....#....#.......#..#...#....#.
// ...##..#.##..#.#...#..##.......
// ##.#..#.....#.##.#....#..##....
// #....#....#.....#..#.#.#.....#.
// ##...#.###.....#....#..#.#.#...
// #..#.......#...#.#...#.#.....#.
// ....#.#.......#.....###..#..#.#
// ......####...#.#..#..#.#.#.#...
// #...##.....#...#.#.........#.#.
// ......#...##.#..#.#........#...
// ..#.#...........#..##...###.##.
// #......#.#......#.....#.....#.#
// .#...............###.#.###.....
// ...#...........##..#...##..##.#
// #......#.##.#............#.##.#
// .#.#....#....###........#..#...
// ...##.#.#..#.##.#..##..#.##..##
// .....#...#.#.#...#....#......#.
// ..............#...##...........
// ..............##........#..###.
// .#.##.......#.....##.#......#..
// ..#......#..#.#####..#.#.......
// #.#..#...#.#..#....#..#.##..#..
// ...##.......#.#............#...
// ...#....#..#.##.###.......#.###
// ..###..#....#..#.....##...#..#.
// ..#.###.##......###....#....##.
// ...#...##...###....##.....###.#
// .....#.....#.#.#.........#..###
// #.#......#.#..#.####..#........
// #....#.##.......##.............
// ..##...........#....#.....##..#
// ..#...#...........#....#...#...
// ...#...#...#.....#..#....#....#
// #......##.........#.#...##...#.
// .##..#...#.....#....#.##.####.#
// #..##.##.#......#.............#
// .#.....#..##.###.#.#.#.........
// .###....###..#....#..#.#.#..##.
// ....#........#..#....##..#.#.#.
// .....#..........#..........#...
// .#.##..#..#...#..#.##.#.##.....
// .#....#...#......#.#..##.##..#.
// .###.#...#.#.##....#.....#..##.
// ......##.......#..#.......#.#.#
// .##.#.#.#......#.......#.......
// #..#...##......#.......#......#
// ...#..#...##.#...#..##.........
// .....#..###...##...#..#.#...#.#
// ..#.#.#....##..#.#.#.#...#.....
// .....#.#.#..#..#.#.#...#.......
// #.#.#...#.#.....#.#.#.##.###...
// .....#.#.....####..#...........
// ..#.#.#...........##..#.#....#.
// .#..#......#..#...........###..
// ..#...###.##......#..###...#..#
// #.#..#.....#..#.##.#..#.#.....#
// .....................#.#..#....
// ...##..##...#.#..#..##.#....#..
// .#..#.#....#...#.#.##..........
// ....##.....#..#..##.........##.
// ..##...##........#.#....#...###
// .#...#............#.#.#.#......
// #...#........#..#..#...#.#.....
// ..#..........#.......###.##....
// #...........###..#....##..#.##.
// ##...#..#.##.....#...........#.
// .#..##.....#..#.#.....##.#..#.#
// ..#..#.##....#.........#.#.#...
// #..#...#...#..#...........##...
// .....#.......#.#......#.#.#...#
// ..#.#..#..#.#.#.......#.#...#..
// ......#.....##.....#.....##.##.
// #.#..#......#......#.####.##...
// .####...#####.#....#.#..##.....
// ............#....#....#....##..
// ###.........#............#.#...
// ...#...#....#.##..#...#......##
// ...##.#.#.##.##.#.....#...#.#..
// ...#.....#...#..##......#.#.##.
// .##.#......##................##
// ......#.....#..##.............#
// #.#...##..#..#..#.##.....#..#..
// #......###.....#....##...##...#
// ....#..#.....#.......####...##.
// #.#...#.#...#..........#..##..#
// ....#..#....#................##
// .####..#........#..#.#...#.....
// ##.###...#.##........#..##.....
// ..###..##...#...#..#...##.....#
// ......#..##....................
// .#...#......#.#.##..#........#.
// ..#...#####.....##.....#...#...
// .#..#....#..#....##.#....#..##.
// .#.....##..###.#.....#.#.#.##..
// #..##.....##...#.....#..#.#....
// #.##......#.#......#..........#
// #####........#.............#...
// .#..#..##..#....#.....#..####..
// ...#..##.##...####....#.##...##
// ..........#....#...........##.#
// #...##...#...##....#.....#.....
// .......#..#.....#.#.#.#.#.....#
// ...#..##..####..#..##.#.##....#
// #...#...#...........#.#.....#.#
// ..#.....##...###.........#..##.
// .......##..#.......#.......##..
// #.#....#....#.###............#.
// ...#......#.#.............#.#..
// ......#..#....#....#....#..#...
// .....##..#...........##...#.##.
// ..#....#.##.#......#...........
// #...#....#.#.#.#.#..#..........
// .#..#..........#..#.#.....#....
// .....##......##....#.#.....#.#.
// .....#..#..........#....#.....#
// ....#..#..#.#...#.#..#..#..##.#
// .#..##.#..##...###.#..........#
// ..###..#......#...##...#.#.....
// ..#...#...#.....#.......#....#.
// #...##..#.##.#....##.....#.....
// ..#.#.....#...#...#............
// .......#.#.#..#.....###.#...##.
// ....##.......#####...##..##..#.
// #...#.##.....#.#...##.........#
// ..#.##..........#..###.#....#..
// #......#.##...#...#.....###....
// ................#.##...........
// ##.###.#.#.#.##......##..#....#
// ..#.#........##..#..##.........
// ###....#..#....#..##....#.....#
// #......#..#...........#.#...##.
// ...###.......#...#......##..#.#
// .......#...##.#.#...#.##......#
// ......##..#...##.#.#...##....#.
// ..#...#...#...#.#.....#..##..#.
// ..##...#.....#.....#..##.......
// ....#........#.#.##.......#.#..
// #...#..##..#..##..#...#......#.
// ...#..#.#.#..#..#..####...#....
// #..#..#......#......#..#.######
// #..#..#..#........#..#.#....###
// #..##..#.#.##.....#..#......#.#
// ##.......##.#..#.............#.
// ..........#.#..#..#............
// ....#.#.#.#...#......#......#..
// ###.#.#.........#.......#...##.
// #.............####..#...#.##...
// ....##.......#................#
// ###...#..#......##....#.####.#.
// ..##.##.#.#.#.#...#.......#...#
// .....#.##......#.......##..#.#.
// .#...#.##..#.......#.#....#.#.#
// ##...##..#....#..#...#....#....
// ..........#...##.#..##.......##
// #.#...#....#......#.#.......###
// ......#...#.##....#....##.#.##.
// ..#..#.......#.......#....##...
// ##..##.......##............#.#.
// .#.#...#..#.#.###......#.......
// #...#..##....#...###..#.#.....#
// .#.....#........#..##.#.#.#....
// ..#.##....#..#...........#...#.
// .....#.#...#.##..###...#...#...
// #....####.......#..#.#...#.....
// ....#.....#....##..#.##.....###
// ........#.#.....###....#.#.....
// ...#.....#.##.....#......#.....
// .....#...####......###..#...##.
// #.#......#..........#..##.#..#.
// ..##......###...#...#.......#..
// #...#.#...#.#.........#........
// ....#..#.##.#.##.###..#.....#..
// .#.#.#......#.#........#.....#.
// .....#.#..#....#...#.....#.#.##
// ##.............#..#.....#.#....
// #............#..#....##......##
// #....#......#......#....##..#..
// .#....#............#......##..#
// ..#.#.#..#.#....##.#.......#.##
// #.##.....#...#......#...#......
// .......#...........#..#.##..#.#
// ##.....##.#.....####..........#
// ...#.......#.#.............#..#
// ...##........##..#..#.#........
// .#.##...#.....##.#......#....#.
// .#................#.#...#..#...
// #....#.#.#......#.#.#.##....#..
// ..#......#............#...#....
// ###..#.##........#....##.#...#.
// .#..#..#......##...............
// ....##.............#....##...##
// ..#.#..#.#####....##.......###.
// ......#...#..#.#....#.#..#...#.
// .........#..##.##...#....##..##
// .............#.##....###.#.....
// ..#................#..#.#..#...
// ...#........#......#..###......
// .#.#.#....#.........#...###.###
// .........#..#.#......##.....#..
// #...##..#.#.###..###...........
// ...#.#.#..#......#..##.#.##....
// .....##.......#................
// .##....#.#.#.##.....#.##......#
// ...#........#...##.#.##..##...#
// ..#..........#.#......####..##.
// ............#.#.#.#.....#......
// ..##.####.#..#....#..#..##.....
// ......#........#...#..#.#..###.
// #.#..............#..#...#..#...
// ....#............#...#..#...##.
// ..##....#...##.##.#..........##
// ..#..#.........#..#.....#.#....
// #.....#.###...##...##...##.....
// #.#...#..#####.#...#..#.....#..
// ..#.....###...#.........#.#...#
// ....#.##.........#.#.....#.#.#.
// ..........##...#....#.#.#.....#
// ...#...........#.....###.......
// #....#..#...#.....#.......#....
// .#.#.....#..##..##..#........#.
// .#.#.....#....#...#.#.##.......
// ....###...#...###.##....#......
// ...#.#.##....#...##......#...#.
// #....#...##.....#.##.#.....#.##
// .#.#.....##.##.##..###...#.....
// .#.#......#..#..#........#.#..#
// ........#...##........##...#...
// .#..#.#.#..#.....#....#...#.#..
// #......#...#.#...#..#.#..#.....
// .#......#.....#.........###.#..
// #..#..........##..###.......#..
// #..#..#....#......#......#.....
// ......#.....##.........##....#.
// #..#.#...#...#.##.#..#..##.....
// ....#.#....###..#.....#...##.#.
// ..##.....##.#..#..##..#.#......
// .........#..#....###...#.#....#
// .........#...#...#...#......##.
// .......#..#.....#.#.#...#...#..
// ............#.....###......#..#
// #....##..###.......#...##....##
// ..#.##..#####..##.#...#......#.
// #.#..#...###.............#.#...
// ##...#..#..#.#....#.#.......#..
// .....#....##.....###.##..#.....
// ......##..##..#.#..####.#......
// ..#...#.#....#...#.#.........#.
// ##.....#.#....#..#..##........#
// ...........#..#........##..#...
// ..##.#...#.#.#..##..#..#..#..##
// ..........#.###.....#..#.....#.
// ......#............###..##.##..
// .#.......#..#...........#.###.#
// #...#..##............##.......#
// .###..#...#.#....#....#......#.
// ..##.........##............#.#.
// .##.......##....#.#.#....#..#.#
// #.##........#.....#.##...#.#...
// #......#....#.#......##....#..#
// #.##..##..#...#.###......#.....
// ..........#.#....###.#.....##..
// #..##...#.###..#.............#.
// .#.#......#.##.#...#....#.....#
// .##...#..##...#...........#.##.
// .##..#.#.#..#.....#.....###....
// .#...#.#.#..#..#....##...#..#..
// #.#.#....#.....#..#..##..#.#...
// ......#..#...####..#.........#.
// .#.#..#......#...#..####.....#.
// ...#.#...#...#....##..#.#.#.##.
// ...#........##.............#.#.
// ...#...#...#.......#..#.#.#..##
// .####.#...##......#.##.##.#.#..
// #..###...........#..#.#...#.#.#
// ###...#.#..#...#.#...#.#..#.#.#
// #....#.....##...#.#...#..#.#...
// .#........##.##....##..#..#....
// .#.#.#..#........#...#..#.#.#.#
// #.##.....#.#...#....##...#..#.#
// ..#.......##.#.###............#
// ##....###..##.........##..#.#..
// ...##...#...#..###.#.....##..#.
// ###.................#.#..#.....
// ....#......#.....#..###......##
// .......#...##..#...............
// .#.....#..#.....#...##...#...##
// .....##....#.#..#.##.....#...#.
// #..####.#....#..#.....#....#..#
// ..#..##.#.##......#..#.#....#..
// ..#.#.#.#.....#...#...#..#.....
// .#........#.#...#.#..#...##....
// .#...#.#...#..#.#...###...#.#..
// #.....#...##..#.....#...#.#..#.
// ...#....#................#.#...
// ......##.#.#..........#...#....
// .##..#.#.#...#..#...####.#.....
// #......#....#..#.......#.......
// .#........#.#.#....###.#..##...
// ....##......#.....##...#...#...
// ..#..#.#.#...#..#.####.##......
// ...#........#.#.##.#..#.##.#...
// .#..##...#...#...##.......##.#.
// #...#.#......#.................
// ..#..#.....#....##...#..###....
// .#...#.........#.#.##.#........`

// const day3Split: string[] = day3Data.split("\n")
// const rowLength: number = day3Split[0].length
// const numOfHashes: number = day3Split.reduce(
//   (num: number, str: string, i: number): number => {
//     if (str[(i * 7) % rowLength] === "#") num++
//     return num
//   },
//   0
// )

// let linePos: number = 0
// let charPos: number = 0
// let secondTotal: number = 0

// const right: number = 1
// const down: number = 2

// for (let i = 0; i < rowLength; i += 2) {
//   if (day3Split[linePos][charPos] === "#") secondTotal++
//   linePos += down
//   charPos += right
//   if (charPos >= rowLength) {
//     charPos = charPos - rowLength
//   }
// }

// console.log(secondTotal)

// const answerForSecondPartOfDayThree: number = 292 * 81 * 89 * 101 * 44

// console.log(answerForSecondPartOfDayThree)

const fourthDayInput: string = `iyr:2015 cid:189 ecl:oth byr:1947 hcl:#6c4ab1 eyr:2026
hgt:174cm
pid:526744288

pid:688706448 iyr:2017 hgt:162cm cid:174 ecl:grn byr:1943 hcl:#808e9e eyr:2025

ecl:oth hcl:#733820 cid:124 pid:111220591
iyr:2019 eyr:2001
byr:1933 hgt:159in

pid:812929897 hgt:159cm hcl:#fffffd byr:1942 iyr:2026 cid:291
ecl:oth
eyr:2024

cid:83 pid:524032739 iyr:2013 ecl:amb byr:1974
hgt:191cm hcl:#ceb3a1 eyr:2028

ecl:gry hcl:eefed5 pid:88405792 hgt:183cm cid:221 byr:1963 eyr:2029

pid:777881168 ecl:grn
hgt:181cm byr:1923 eyr:2021 iyr:2018 hcl:#18171d

byr:1941 eyr:2027 ecl:gry iyr:2016 pid:062495008 hcl:#a5e1b5 hgt:178cm

cid:56
byr:1971
hcl:#efcc98 pid:649868696 iyr:2011 eyr:2025 hgt:164cm

ecl:blu
pid:117915262 eyr:2023 byr:1925 iyr:2020 hcl:#888785
hgt:188cm

iyr:2012
cid:174
eyr:2024
pid:143293382 ecl:brn byr:1946 hgt:193cm

eyr:2021 iyr:2011
hgt:192cm pid:251564680
byr:1976
ecl:blu hcl:#602927

byr:1973 ecl:blu hgt:164cm
eyr:2022 pid:695538656 iyr:2010 cid:244 hcl:#b6652a

iyr:2014
eyr:2027 pid:358398181 ecl:hzl hgt:74in byr:1949 cid:329
hcl:#ceb3a1

cid:211
byr:1954 eyr:2023 hgt:172cm ecl:blu iyr:2019 hcl:#623a2f pid:657051725

pid:562699115 eyr:2026 byr:2000
hgt:162cm hcl:#602927 ecl:amb iyr:2018

ecl:brn
iyr:2013
pid:835184859 byr:1981 hgt:157cm eyr:2027 hcl:#b6652a

pid:763432667 byr:1981 hcl:#cfa07d ecl:brn
iyr:2010 hgt:63in cid:107
eyr:2027

byr:2009
hgt:177cm cid:314
hcl:f55bf8 eyr:2025
pid:632519974
iyr:2015 ecl:amb

eyr:2024 pid:614239656 hgt:169cm iyr:2014 ecl:hzl byr:1992
hcl:#602927

ecl:blu
eyr:2026
hcl:#efcc98
byr:1980 iyr:2013
hgt:161cm
pid:065413599

hgt:182cm
eyr:2025 iyr:2013 pid:939088351 hcl:#b6652a byr:1994 ecl:amb

hgt:65in cid:220 ecl:amb hcl:#ceb3a1
iyr:2013 eyr:2025 pid:167894964 byr:1976

hgt:185cm cid:88 ecl:blu iyr:2020
eyr:2020
hcl:#888785 pid:582683387
byr:1981

hcl:#866857 eyr:2020 byr:1948
pid:358943355
ecl:amb hgt:164cm iyr:2019

pid:127467714
hcl:#ceb3a1 byr:1991 hgt:163cm eyr:2020 iyr:2017 ecl:blu cid:229

cid:156 byr:1942 eyr:2024 hcl:#cfa07d
ecl:blu pid:843747591
iyr:2014 hgt:173cm

hcl:#a97842 hgt:165cm
iyr:2013 ecl:#781088 byr:1952
pid:516882944
eyr:2026

hgt:179cm
byr:1969 pid:408297435 iyr:2020 ecl:oth hcl:#cfa07d eyr:2020

ecl:amb iyr:2013 hcl:#b6652a eyr:2023 cid:88
pid:324081998 hgt:66in byr:1945

iyr:2012
eyr:2024
hcl:#18171d
pid:756726480 byr:1947 ecl:oth
hgt:164cm

ecl:blu
hcl:#fffffd byr:1951 iyr:2019 pid:544645775
hgt:153cm eyr:2027

pid:655906238 ecl:brn eyr:2028 byr:1959 hgt:63in cid:338
iyr:2020

eyr:2020
hcl:#602927 hgt:72in iyr:2014
pid:305025767
cid:297 byr:1957 ecl:gry

hgt:155cm byr:1942 hcl:#a97842
iyr:2014 ecl:gry pid:593995708
eyr:2022

pid:219206471 byr:1955 eyr:2030
hcl:#a97842 ecl:oth iyr:2015 cid:134 hgt:170cm

iyr:2013 cid:268
eyr:2020
hcl:#a97842 ecl:grn pid:235279200 hgt:178cm
byr:1952

iyr:2013 pid:016384352 eyr:2027
hcl:#866857 ecl:grn hgt:161cm byr:1943

ecl:amb hgt:169cm pid:149540593
iyr:2012
eyr:2040 hcl:#a97842 byr:1954

byr:1938
ecl:brn hcl:#b6652a eyr:2026 hgt:184cm iyr:2018 pid:832531235

byr:1945 iyr:2015 hgt:171cm eyr:2028 pid:998746896 ecl:hzl hcl:#866857

hgt:73in ecl:hzl eyr:2023 cid:343 pid:458004221 iyr:2017 byr:1962 hcl:#efcc98

byr:1970 hgt:159cm pid:925022199 iyr:2013
eyr:2028 hcl:#888785
ecl:hzl

eyr:2027 iyr:2016 ecl:gry
hcl:#cfa07d
pid:006246552 byr:1939 cid:124 hgt:177cm

byr:1982
iyr:2016 hgt:159cm
cid:102 hcl:#fffffd
eyr:2029
ecl:grn pid:619798285

iyr:2018
hgt:189cm hcl:#efcc98
byr:1937 eyr:2023 pid:727551553 ecl:oth

iyr:2014 byr:1976
eyr:2020 hcl:#7d3b0c pid:125102070 ecl:amb
hgt:186cm

hgt:187cm byr:1949
pid:027653233 eyr:2021 hcl:#341e13 ecl:hzl
iyr:2020

iyr:2016
byr:1954 pid:545631256
hcl:#602927 eyr:2023
hgt:191cm ecl:amb

pid:509762954
hgt:190cm ecl:hzl byr:1991
eyr:2022 iyr:2019
cid:187

hcl:#c0946f eyr:2024 hgt:152cm cid:277 iyr:2015 pid:872373191 byr:1988

pid:544267207 cid:113
iyr:2015
hgt:181cm
hcl:#6b5442
ecl:gry
byr:1971

ecl:gry
hgt:161cm iyr:2012 byr:1965
pid:574527322 hcl:#fffffd

iyr:2018 byr:1976 hcl:#b6652a
pid:024582079 hgt:169cm ecl:oth eyr:2021

pid:020478204
byr:1945 hcl:#7d3b0c
cid:239 eyr:2025 hgt:188cm
ecl:grn
iyr:2012

eyr:2026 pid:202653345
byr:1988
hcl:#2cdc09
hgt:185cm iyr:2010
ecl:hzl

hgt:183cm iyr:2017
hcl:#18171d byr:1977 eyr:2029 pid:804559436 ecl:grn

hcl:#602927 pid:812072269 hgt:170cm eyr:2026 byr:1955 iyr:2020 ecl:gry

eyr:2023 iyr:2010
hcl:#cfa07d pid:592419048 byr:1943
ecl:brn
hgt:172cm

ecl:brn iyr:2013 pid:558179058
hcl:#fffffd eyr:2022
byr:1922
cid:331 hgt:64in

ecl:xry
hcl:ade850 eyr:1995 pid:976028541
iyr:2030 hgt:179cm
byr:2030

ecl:#2872b1 pid:158cm eyr:1927 hcl:ee8e92
iyr:2014 hgt:190cm
byr:2025

hgt:155cm cid:283 eyr:2020 ecl:blu pid:755165290 byr:1936 hcl:#733820 iyr:2012

eyr:2030
byr:1943
cid:323 pid:906418061 hgt:157cm ecl:amb iyr:2010
hcl:#7d3b0c

hcl:#fffffd
pid:873200829 hgt:192cm eyr:2022 ecl:blu iyr:2016 byr:1920 cid:200

eyr:2021
byr:1963
hcl:#a97842 pid:585551405
iyr:2019 cid:91
ecl:brn hgt:60cm

byr:1946
pid:520273609 hcl:#341e13 cid:66
iyr:2020 hgt:154cm eyr:2024
ecl:brn

ecl:brn hcl:#d64d7b eyr:2020
byr:1957 hgt:181cm iyr:2019 pid:378496967 cid:135

pid:002446580
eyr:2027 byr:1939 hcl:#888785
iyr:2011 cid:168
ecl:oth hgt:160cm

iyr:2019 hgt:70in hcl:#7d3b0c byr:1983
eyr:2024 pid:369493064 cid:54 ecl:oth

iyr:1979 pid:170cm
hgt:65cm eyr:1933 hcl:z

ecl:zzz pid:193cm hcl:z eyr:2020 byr:2013 iyr:2016 hgt:177in

iyr:2010 hgt:187cm
byr:1932
hcl:z ecl:oth pid:665967850 eyr:2030

eyr:2029
iyr:2013 hcl:#b6652a ecl:amb
byr:1936 pid:516025566
hgt:181cm

hcl:#c0946f pid:238825672 byr:2000
iyr:2013 eyr:2028 ecl:amb hgt:183cm

eyr:2021 hcl:#866857
cid:77 iyr:2017 hgt:156cm pid:271118829 ecl:amb

iyr:2014
hcl:#fffffd
cid:321 hgt:159cm ecl:gry
pid:691381062 eyr:2022 byr:1991

pid:111506492 hcl:#c1d296 iyr:2011
byr:1934 hgt:176cm cid:263 eyr:2028 ecl:amb

iyr:2014 hgt:64in eyr:2024 cid:193 hcl:#b6652a byr:1967
ecl:oth pid:138677174

hgt:168cm iyr:2020 eyr:2030
hcl:#6b5442 ecl:brn pid:975843892 byr:1927

byr:1957 ecl:amb iyr:2012 pid:177266671 eyr:2026
hcl:#866857 hgt:162cm

eyr:2029
hcl:#341e13
hgt:175cm pid:465809700 ecl:amb byr:1974
iyr:2010

hcl:#a97842 iyr:2010
hgt:176cm eyr:2029 byr:1931 ecl:grt pid:161604244

eyr:2024 iyr:2018 hgt:170in byr:1959 ecl:gmt hcl:#888785
pid:94163132

iyr:2011
hgt:186cm pid:998471478 byr:1956 ecl:amb
eyr:2029
hcl:#efcc98
cid:76

ecl:brn
byr:2001 pid:378527883 iyr:2013 hcl:#83bdc5 eyr:2020 hgt:181cm

iyr:2017 ecl:grn hgt:172cm hcl:#888785 cid:100
eyr:2022 byr:2030
pid:311562177

pid:097558436
cid:141 hgt:152cm iyr:2019
ecl:brn eyr:2023
byr:1940
hcl:#6b5442

iyr:2016 eyr:2023 byr:1992
hgt:174cm ecl:amb
pid:691291640 cid:190 hcl:#fffffd

hcl:#623a2f ecl:brn
eyr:2028 cid:227 iyr:2012 hgt:74in pid:964273950 byr:1965

hcl:#ceb3a1 eyr:2028
iyr:2013 pid:175294029 hgt:150cm ecl:grn
byr:1936
cid:143

byr:1935 hcl:#a97842 ecl:oth hgt:180cm iyr:2019
pid:857891916
eyr:2026

pid:084518249 ecl:hzl eyr:2027 hcl:#c0946f hgt:192cm cid:315 byr:1961
iyr:2010

hgt:67cm pid:37925169 eyr:2022
hcl:z iyr:2012 cid:315 byr:2028 ecl:dne

hcl:#c0946f byr:1924
hgt:176cm cid:87 pid:682212551 iyr:2011
eyr:2026
ecl:gry

hgt:181cm byr:1935
iyr:2018 pid:644964785
eyr:2026 ecl:amb

pid:789810179
ecl:gry eyr:2021
cid:159 hgt:185cm iyr:2020 hcl:#602927
byr:1965

pid:672386364
iyr:2013 eyr:2021 byr:1951 hcl:#341e13
ecl:gry hgt:173cm

hcl:#18171d eyr:2030 pid:957722245 iyr:2012 byr:1955
ecl:grn
hgt:154cm

byr:1955 ecl:oth
hcl:#cfa07d
eyr:2030
iyr:2013 pid:361945273 hgt:154cm

iyr:2012 eyr:2027 ecl:grn hcl:#16d373
hgt:192cm

pid:275525273
byr:1986
iyr:2017
eyr:2022
ecl:grn
hgt:75in
hcl:#919cc0

eyr:2029
cid:84 hcl:#cfa07d iyr:2013 hgt:78
ecl:brn
byr:1925 pid:281331549

eyr:2027
cid:219 iyr:2016 byr:1971 hcl:#7d3b0c hgt:179cm ecl:grn
pid:301296222

eyr:2030 iyr:2010 pid:995982765
byr:1926 ecl:amb hcl:#888785 hgt:186cm

byr:1955 iyr:2015 hgt:165cm cid:101
eyr:2027 ecl:amb hcl:#602927
pid:168654790

hcl:#7d3b0c byr:1956 eyr:2029 hgt:155cm
ecl:grn pid:816685992
iyr:2016

ecl:grn hcl:#cfa07d cid:71
pid:914724136 iyr:2012 eyr:2024
hgt:184cm byr:1938

ecl:gry
eyr:2029 hcl:#602927 pid:255062643 iyr:2015 hgt:175cm

hcl:#341e13 iyr:2017 eyr:2028
pid:459704815 byr:1922
cid:312
ecl:brn hgt:152cm

ecl:dne eyr:1981
pid:8356519470 hgt:176 iyr:1941 byr:2006 hcl:z

ecl:amb pid:753377589 hcl:#a97842 eyr:2022 hgt:187cm
cid:130 iyr:2013 byr:1961

pid:952444443
hcl:#bde835 byr:1963 iyr:2020 eyr:2025
ecl:amb hgt:162cm

eyr:2027 iyr:2018 hcl:#ceb3a1 hgt:152cm pid:882429463 ecl:blu byr:1969

cid:134 eyr:2021 hcl:#a97842 hgt:63in
ecl:grn byr:1975 iyr:2019 pid:154078695

byr:1956 eyr:2027
pid:396230480 hcl:#b6652a
hgt:175cm iyr:2020 ecl:oth

ecl:grn
cid:263 hcl:#506937 byr:1924
eyr:2030 pid:705511368 hgt:159cm
iyr:2011

eyr:2020 hgt:178cm ecl:grn
byr:1947 hcl:#888785
pid:177476829 iyr:2019

ecl:hzl cid:211 iyr:2016 hgt:176cm pid:405182470
byr:1952
hcl:#866857 eyr:2028

eyr:2032 cid:152 ecl:gmt hgt:150in
pid:75969209
byr:2019 hcl:z iyr:1940

hcl:#fffffd hgt:193cm pid:607407479 cid:300 byr:1944 iyr:2017
ecl:oth
eyr:2026

hcl:z
cid:125 eyr:2040 ecl:dne byr:2015 pid:733096171 hgt:63cm
iyr:1922

pid:575721428 hgt:152cm cid:275
hcl:#cfa07d eyr:2028
byr:1935 ecl:hzl iyr:2016

iyr:2012
ecl:grn eyr:2027 hcl:#623a2f pid:029106453 byr:1984 hgt:168cm

ecl:blu cid:140 eyr:2028 iyr:2018 hcl:#c0946f
hgt:163cm byr:1944
pid:709288293

byr:1936
hgt:172cm eyr:1997 hcl:#8b8c88 cid:50
iyr:2016 pid:205477922 ecl:grn

hgt:170cm pid:872750582 eyr:2027 byr:1985 iyr:2017 hcl:#d6976a ecl:blu

hgt:163cm
pid:189634089 cid:116 byr:1975 eyr:2030
hcl:#efcc98 ecl:brn iyr:2020

ecl:amb byr:1953 hcl:#6b5442 pid:418787965
iyr:2018 hgt:193cm
eyr:2026

ecl:#3ec898 cid:339 hcl:#866857 eyr:2025 hgt:179cm pid:591430028 iyr:1936 byr:1995

pid:285371937 hgt:159cm
byr:1922
iyr:2013 eyr:2023 hcl:#6b5442 ecl:amb

pid:545260883 ecl:oth
hgt:163cm
iyr:2015 eyr:2021 byr:1975 hcl:#866857

ecl:hzl hgt:182cm pid:053762098 eyr:2023 cid:174 hcl:#6daac4 iyr:2017 byr:1937

hgt:178cm iyr:2015 byr:1956 pid:815359103
ecl:blu hcl:#cfa07d eyr:2030

hcl:#7d3b0c
pid:438108851 hgt:162cm byr:1930 iyr:2014 eyr:2024 ecl:amb

eyr:2027 iyr:2019 hcl:#90eb1c hgt:178cm
pid:314810594 cid:278 ecl:amb
byr:2001

byr:1949 iyr:1942 hcl:#888785 ecl:hzl hgt:184cm eyr:2027 pid:899137640

hgt:153cm
eyr:2022 iyr:2011 byr:1975
hcl:#602927
ecl:amb pid:178cm

hcl:#6b5442
ecl:amb iyr:2018 eyr:2025 pid:418735327 byr:1922 hgt:74in

ecl:gmt hcl:z iyr:2024
eyr:1988 hgt:75cm cid:125 pid:690872200 byr:1928

eyr:2024 hgt:184cm
pid:4634589837 ecl:zzz iyr:2022 byr:2000 hcl:89c187

iyr:2017 byr:1966 hcl:#efcc98 ecl:brn pid:473085232 eyr:2021 hgt:174cm

hgt:67in eyr:2030 iyr:2014 byr:1943 hcl:#602927 cid:344
ecl:oth
pid:210476779

byr:1955
ecl:oth
hgt:193cm iyr:2012 hcl:#623a2f pid:818289829 eyr:2021

byr:2018 ecl:#872a51 iyr:2024 hcl:97783d
pid:155cm hgt:174cm
eyr:1964

hcl:#6b5442 hgt:157cm byr:1932 ecl:brn pid:4275535874
eyr:2024 iyr:2015

pid:959861097
hgt:151cm cid:140 byr:1935
eyr:2029
iyr:2018 ecl:hzl
hcl:#623a2f

hgt:181cm pid:911791767 eyr:2027
iyr:2016 byr:1962
ecl:grn hcl:#866857

eyr:2021
byr:1994
hgt:162cm hcl:#866857 ecl:oth iyr:2014
pid:712345689

hcl:#7d3b0c
hgt:170cm pid:600132416 eyr:2025
iyr:2016 byr:1978 ecl:brn

hcl:#0a9307
cid:287 byr:1940 pid:786271493
eyr:2028 hgt:186cm
iyr:2019 ecl:oth

eyr:2025 hgt:190cm ecl:hzl cid:228 iyr:2019
byr:1932
hcl:#623a2f pid:648307551

pid:304587325 iyr:2019 byr:1923 hcl:#7d3b0c
hgt:190cm
ecl:gry eyr:2030

hgt:188cm eyr:2027 byr:1958 pid:572934921
hcl:#888785 ecl:hzl iyr:2010

iyr:2019
hgt:178cm ecl:grn hcl:#7d3b0c pid:007601227
byr:1975 eyr:2023

pid:808872803 byr:1929
ecl:grn
eyr:2022 iyr:2019 hgt:74in hcl:#602927

iyr:2019
cid:67 hcl:#602927 pid:292601338 ecl:hzl
byr:2001 eyr:2023 hgt:171cm

byr:1962 eyr:2022 hcl:#b6652a hgt:193cm
ecl:oth
iyr:2010

hgt:70in iyr:2014 hcl:#a97842
cid:169 eyr:2020 ecl:amb
pid:329751670 byr:1959

byr:1920
ecl:oth hgt:172cm cid:57 pid:515139276
eyr:2030
hcl:#18171d
iyr:2013

iyr:2012
hcl:#a97842 pid:946040810 hgt:65in
byr:1936 ecl:amb eyr:2020

byr:1948 hcl:#18171d
iyr:2019
ecl:hzl cid:185
eyr:2023
pid:583625200 hgt:191cm

hgt:154cm eyr:2022
pid:460137392 iyr:2010
ecl:grn
hcl:#ceb3a1

eyr:2024
iyr:2016 pid:890698391 hgt:172cm hcl:#a97842 cid:271 ecl:oth byr:1926

hgt:162cm pid:340904964 hcl:#b6652a
byr:1966
iyr:2010
cid:260 eyr:2028
ecl:amb

byr:1933 eyr:2029 pid:642043350
iyr:2016 hcl:#b6652a ecl:grn

pid:602218620 eyr:2023 ecl:blu
hcl:#623a2f
byr:1950 hgt:168cm iyr:2015

ecl:gry pid:490792384
byr:1974
hcl:#a97842 iyr:2016 hgt:170cm

iyr:2020 ecl:gry byr:2002
eyr:2029 hcl:#9f45c4
hgt:155cm pid:604239618

hgt:190cm pid:560653271 iyr:2020 cid:349
eyr:2024 ecl:blu hcl:#efcc98 byr:1936

eyr:2021 byr:1964 hcl:#efcc98 ecl:grn iyr:2018
hgt:165cm pid:218376636

pid:186217101
iyr:2019 hgt:155cm
byr:2017 eyr:2022 ecl:grn cid:349 hcl:ece72e

iyr:2015
eyr:2026 pid:802832833
hcl:#888785 hgt:190cm ecl:brn
byr:1952
cid:202

cid:151 iyr:2017 hgt:152cm hcl:#a97842 eyr:2020 ecl:hzl
pid:554959609 byr:1941

cid:116
iyr:2019 hgt:159cm byr:1992 pid:662111811
hcl:#18171d ecl:oth eyr:2024

ecl:grn byr:1966
iyr:1950 pid:585351486
eyr:2038 hgt:178in hcl:a27d2b

iyr:2014 cid:238 hgt:187cm pid:523401750 ecl:amb hcl:#18171d eyr:2023 byr:1984

eyr:2021 byr:1957
pid:340752324
iyr:2015 hgt:157cm
hcl:#602927 cid:70
ecl:oth

pid:458479816 ecl:hzl
eyr:2022 hcl:z
hgt:60cm
byr:2012 iyr:2005

cid:57
hgt:154cm pid:446142864
hcl:#341e13 byr:1968 eyr:2030
iyr:2019
ecl:brn

eyr:2028
pid:243811429 byr:1977
iyr:2011 hcl:#18171d hgt:185cm ecl:oth

cid:205 byr:1976 eyr:2029 pid:649877471 hcl:#cfa07d hgt:152cm
ecl:blu
iyr:2013

iyr:2009 pid:559014976 ecl:oth hgt:189cm byr:1936 eyr:2037
hcl:#efcc98

pid:134378987 byr:1983 iyr:2013 hgt:173cm
ecl:oth hcl:#ceb3a1
cid:80
eyr:2020

hgt:151cm byr:1964 ecl:grn iyr:2010 hcl:#b6652a pid:939492531
eyr:2028

byr:1961 iyr:2014 hcl:#733820 hgt:179cm
eyr:2026 ecl:gry pid:732892920

iyr:2018 byr:1996
pid:944007809 ecl:hzl
hcl:#866857 eyr:2021
hgt:155cm

pid:374875696 hcl:#7d3b0c
ecl:oth
hgt:193cm byr:1948 cid:238
iyr:2020

pid:305782299 hcl:#b6652a
ecl:brn
hgt:172cm
iyr:2018 byr:1927

pid:945869114 cid:95 byr:1989 hgt:173cm eyr:2025 hcl:#b6652a iyr:2012 ecl:amb

pid:55484149
eyr:1958
iyr:1956 ecl:grn
cid:95 byr:2028
hcl:c2af7e

hgt:176cm ecl:amb
hcl:#a97842 eyr:2029 pid:937928270
cid:251
byr:1978
iyr:2018

hgt:154cm
cid:213 pid:767329807 ecl:hzl
iyr:2013
hcl:#888785
eyr:2026 byr:1998

cid:158 hcl:#b6652a hgt:155cm iyr:2010 eyr:2025
byr:1980 pid:338567803 ecl:amb

hcl:#efcc98 byr:1940 hgt:62in ecl:oth pid:537307591
eyr:2030
iyr:2017
cid:179

byr:1965 eyr:2027 pid:691913618 hgt:75in
hcl:#6b5442 ecl:gry iyr:2012

hgt:163cm byr:1964 eyr:2025
iyr:2010 hcl:#ceb3a1 ecl:oth
pid:936536544

pid:712946803
cid:343
hgt:187cm ecl:oth iyr:2020 byr:1983 eyr:2030
hcl:#7873b3

ecl:blu
iyr:2010
hcl:#fffffd
eyr:2030
hgt:175cm pid:047567505 byr:1963

ecl:gry byr:1946 eyr:2026 hcl:#602927
hgt:164cm
iyr:2010

pid:223378458
iyr:2014 cid:151 ecl:hzl hgt:171cm
eyr:2020
hcl:#341e13 byr:1964

ecl:brn byr:1948
hcl:#866857
hgt:193cm eyr:2024
iyr:2013 cid:277

hcl:#623a2f byr:1943 iyr:2011 ecl:oth
hgt:184cm
pid:371604584 eyr:2024 cid:176

hcl:#efcc98
eyr:2025 pid:241834382
hgt:178cm
byr:1985
iyr:2017

hcl:#c0946f
byr:1996 pid:701366586 eyr:2026 hgt:163cm iyr:2015 ecl:oth

hgt:65cm hcl:#18171d
eyr:2024 ecl:brn pid:172cm
iyr:2010
byr:1990

hcl:#fffffd pid:68659204 hgt:161cm iyr:2025
ecl:#94b8aa byr:2021 eyr:2032

ecl:blu iyr:2018 byr:1993 cid:184
hgt:177cm pid:289871693 hcl:#733820 eyr:2026

cid:138
ecl:gry hgt:174cm eyr:2024 byr:1988 iyr:2014 hcl:#341e13 pid:864852584

cid:321 eyr:2028 pid:93285596 hgt:173cm
iyr:2013 ecl:gry hcl:#623a2f
byr:1927

pid:431242259 eyr:2022 ecl:hzl
byr:1960 hgt:151cm hcl:#efcc98 iyr:2020

hcl:#866857 eyr:2029 iyr:2016 ecl:grn pid:526060780 byr:1929
cid:310 hgt:162cm

ecl:blu hgt:183cm cid:168
iyr:2015
eyr:2021 byr:1951 hcl:#6b5442
pid:594960553

hcl:#ceb3a1
iyr:2020 byr:1951 hgt:186cm eyr:2022 ecl:amb pid:317661479

iyr:2016
hgt:163in hcl:#accfa0
ecl:brn
pid:307377995 byr:2000 eyr:2028

pid:933380459
byr:1938
cid:291 hcl:#c0946f
ecl:oth iyr:2018
eyr:2026 hgt:170cm

byr:1974
pid:262927116 eyr:2027 ecl:gry
hcl:#341e13 iyr:2014 cid:232 hgt:161cm

hcl:#602927
byr:2001 iyr:2011
hgt:177cm eyr:2028 pid:165733929 ecl:amb

byr:1922 cid:144 pid:333716867 hgt:183cm iyr:2015
hcl:#c25ea9 eyr:2022 ecl:blu

eyr:2021 cid:147 byr:1978
iyr:2020 pid:938828535
hcl:#7d3b0c ecl:amb hgt:159cm

hgt:153cm ecl:hzl
cid:232 byr:1953 hcl:#a97842 iyr:2016 pid:356632792 eyr:2029

pid:745727684 ecl:gry iyr:2020
hcl:#a97842
eyr:2025 cid:275
hgt:65in
byr:1957

hcl:#733820
ecl:grn iyr:2019 byr:1943 eyr:2024 hgt:70in
pid:953607814

ecl:gry eyr:2028 hcl:#cfa07d
hgt:163cm
byr:1942 iyr:2019 pid:310104177

hgt:190cm
eyr:2027 iyr:2010 byr:1978
ecl:gry
hcl:#964ba7

cid:320
eyr:2022 hgt:169cm
ecl:blu hcl:#a97842 iyr:2015 pid:669007078 byr:1986

iyr:2019 pid:901370677 hcl:7f2398 cid:305
ecl:amb eyr:2011 hgt:190cm byr:1991

ecl:brn
cid:256 byr:1987 iyr:2017 eyr:2026 hcl:#623a2f pid:875646528
hgt:160cm

byr:1955 pid:120131971 hcl:#18171d
hgt:156cm
ecl:blu
iyr:2011 eyr:2028

iyr:2020 ecl:brn cid:188
hgt:157cm
eyr:2026
pid:504067323 hcl:#733820 byr:1982

cid:102 hgt:177cm
hcl:#733820 ecl:hzl byr:1984 pid:542750146 eyr:2028 iyr:2020

pid:419639528 iyr:2013 hgt:175cm ecl:blu
eyr:2026 byr:1999 hcl:#733820

byr:1963 eyr:2020
pid:683641152 ecl:gry cid:207 hgt:180cm
hcl:#cfa07d
iyr:2020

hgt:192cm pid:156436859 iyr:2020 hcl:#cfa07d
ecl:blu byr:1963 eyr:2025 cid:147

eyr:2002
hcl:z iyr:2011
pid:6830168962
hgt:156in cid:288 byr:2029

eyr:2021
pid:277739802 byr:1992 ecl:hzl iyr:2020
hcl:#7c5fe8 hgt:184cm

byr:1989 pid:066973099
iyr:2017
eyr:2022 ecl:hzl hcl:#888785 hgt:76in

hcl:#866857
iyr:2016 cid:306
ecl:hzl
pid:453816800 byr:1971 hgt:71in eyr:2030

pid:248573931 hcl:#cfa07d
iyr:2014 eyr:2024 hgt:186cm byr:1970 cid:128 ecl:blu

pid:172567579 ecl:brn iyr:2014 byr:1948 cid:309
hgt:151cm hcl:#888785 eyr:2024

hgt:153cm eyr:2026 byr:1929 ecl:hzl pid:684760742
hcl:#c45e93 iyr:2018

pid:#d50a43
iyr:1940
ecl:#7880a9 byr:2018 hcl:dc2fa7 hgt:185in eyr:1978

hcl:#602927 cid:71 eyr:2020
pid:620634584 hgt:157cm byr:1991
iyr:2020 ecl:amb

eyr:2023
byr:1959 iyr:1947 hgt:152cm ecl:#503286 pid:63978523 hcl:57dd0d

hgt:190cm
byr:1955 ecl:blu
pid:507892696
hcl:#9bd1f0 eyr:2029
iyr:2010

pid:365539813
eyr:2022 hcl:#623a2f iyr:2020 hgt:184cm
ecl:oth byr:1920 cid:213

cid:50 ecl:oth pid:774859218 hgt:193cm
iyr:2017 byr:1925 hcl:#866857
eyr:2021

hgt:189cm
iyr:2019 byr:1937
hcl:#a97842
eyr:2025 ecl:oth
pid:787390180

iyr:2019 eyr:2027 hgt:183cm
ecl:hzl pid:549757712
byr:1956
hcl:#866857

pid:755580715
hcl:#602927 hgt:187cm iyr:2017 byr:1925 eyr:2020 ecl:blu

iyr:2019 hgt:69in
ecl:amb
hcl:#602927 eyr:2026
pid:951019647 byr:1974

byr:1943 eyr:2034 hgt:150 pid:#36aedf ecl:oth
hcl:z

eyr:2024
ecl:hzl pid:824745692 iyr:2012 hcl:06ab6e
byr:1944
hgt:159cm
cid:183

hgt:169cm ecl:blu
eyr:2030 iyr:2013 byr:1945 pid:791359040 hcl:#7d3b0c

iyr:2018
ecl:hzl hgt:152cm
hcl:#18171d eyr:2026 byr:1924 pid:534667048

eyr:2029 pid:933295825
iyr:2011
hcl:#cfa07d byr:1981
hgt:164cm ecl:grn

ecl:amb byr:1964 iyr:2018
pid:014457573
cid:152
eyr:2028 hgt:171cm hcl:#866857

hgt:167cm
byr:1974 iyr:2012 ecl:amb pid:512315114
cid:278
eyr:2028 hcl:#623a2f

hgt:153cm ecl:oth iyr:2012
eyr:2027 hcl:#888785 byr:1999 pid:416990697

eyr:2025 ecl:blu byr:1991 hcl:#866857
hgt:189cm pid:546461828

iyr:2016
byr:1988
hgt:160cm eyr:2025 ecl:amb hcl:#602927
pid:562766105

ecl:oth byr:1942
hcl:#341e13 pid:564975864 cid:158
hgt:159cm eyr:2028
iyr:2018

pid:406209763 hgt:170cm cid:331
iyr:2018 eyr:2026 byr:1981
hcl:#733820 ecl:gry

pid:279164109 ecl:oth
cid:197 hcl:#7d3b0c
eyr:2024
hgt:185cm iyr:2020 byr:1925

hcl:#efcc98 ecl:hzl
cid:92 hgt:190cm pid:724466265 iyr:2020
eyr:2025 byr:1996

byr:1996
cid:55 pid:906572505 ecl:grn eyr:2022 hcl:#602927 hgt:160cm iyr:2014

eyr:2028 hcl:#b6652a ecl:hzl hgt:186cm iyr:2016 pid:132872161 byr:1932

hcl:#fffffd iyr:2019 eyr:2020 hgt:188cm
byr:1951 ecl:brn
pid:842126902

hcl:#602927
hgt:158cm
eyr:2023 iyr:2010
pid:681061896 byr:1977 ecl:gry

iyr:2018 hgt:192cm byr:1970 cid:200 ecl:grn eyr:2027
pid:164408694 hcl:#888785

eyr:2029
pid:447061655 iyr:2010 hcl:#341e13 ecl:oth
cid:187 hgt:185cm byr:1943

byr:1925 iyr:2012 eyr:2025
hgt:190cm hcl:#18171d pid:017534154 ecl:brn

hgt:172cm byr:1923
eyr:2026 iyr:2015
pid:580812884 hcl:#c0946f ecl:hzl

hcl:#888785 eyr:2028
byr:1952 ecl:brn pid:818889983
iyr:2010 hgt:180cm

eyr:2026 ecl:gry byr:1982 hgt:188cm hcl:#c0946f pid:610689703 iyr:2011

eyr:2028
iyr:2018
pid:921660781 ecl:amb
hcl:#cfa07d hgt:178cm byr:1975

byr:1977 pid:667631009 iyr:2010
cid:86 eyr:2022 hgt:189cm hcl:#7d3b0c ecl:oth

pid:214679440 hgt:190cm ecl:blu iyr:2017
eyr:2025 cid:292

ecl:amb
iyr:2017 hcl:531ad3
hgt:163 pid:689027667 byr:2006 eyr:2033

hgt:68in byr:1928 iyr:2010 cid:227 eyr:2023
ecl:hzl pid:#87bab9 hcl:#fffffd

ecl:grn byr:1940 cid:294 hgt:152cm pid:310277488
iyr:2015 hcl:#18171d eyr:2030

byr:1965 pid:240720987
eyr:2030 ecl:oth hgt:192cm hcl:#733820
iyr:2016

pid:830487275
ecl:blu byr:1930
hcl:#b6652a iyr:2013 hgt:188cm eyr:2025

hgt:177cm byr:1955 eyr:2030 ecl:amb pid:476675886 iyr:2016 hcl:#c0946f

pid:152702068 iyr:2016 hcl:#b6652a
cid:82 ecl:blu eyr:2029 byr:1975 hgt:161cm

pid:136852264
eyr:2024 cid:339 ecl:oth byr:1949 iyr:2011

iyr:2020 pid:772739059
eyr:2025 hgt:157cm
byr:1945 ecl:brn
hcl:#6b5442

hcl:#18171d eyr:2022
iyr:2018 ecl:grn byr:1933 pid:053763751

pid:214212776 hcl:#18171d
eyr:2030
iyr:2020 byr:1988
cid:122
hgt:170cm ecl:oth

pid:883116919 iyr:2018 ecl:brn byr:1938 hgt:187cm eyr:2020

iyr:2020 hcl:#a97842
cid:329 eyr:2025 byr:1946 pid:636649774
ecl:grn hgt:158cm

eyr:2023
ecl:blu hgt:161cm
hcl:#341e13 byr:1951
iyr:2020 pid:461889565 cid:97

hgt:168cm pid:492241189
eyr:2029
iyr:2013
cid:150
byr:1980 hcl:#cfa07d ecl:hzl

byr:1998 ecl:gry hgt:150cm eyr:2024 pid:401735295 cid:153 hcl:#733820 iyr:2016

ecl:hzl hgt:184cm iyr:2018
byr:2001
pid:453480077 eyr:2025 hcl:#a97842`

const fourthDayArr: string[] = fourthDayInput.split(/\n\n/)
const arrSplit: Array<Array<Array<any>>> = fourthDayArr.map((str) =>
  str.split(/[\n|\s]/).map((str) => str.split(":"))
)
const arrOfObj: any[] = arrSplit.map((arr) =>
  arr.reduce((obj, array) => {
    obj[array[0]] = array[1]
    return obj
  }, {})
)

// const numberOfValidPassports: number = arrOfObj.reduce((num, obj) => {
//   let numOfValues: number = 0
//   // const numOfValues = Object.values(obj).length

//   for (const value in obj) numOfValues++

//   if (numOfValues > 6) {
//     if (numOfValues === 8) num++
//     if (numOfValues === 7 && "cid" in obj === false) num++
//   }
//   return num
// }, 0)

const numberOfValidPassports: number = arrOfObj.reduce((num, obj) => {
  let numOfValues: number = 0
  for (const value in obj) numOfValues++

  if (numOfValues > 6)
    if (numOfValues === 8 || (numOfValues === 7 && "cid" in obj === false)) {
      let validFields: number = 0
      if ("byr" in obj) {
        const birthYear = +obj.byr
        if (birthYear >= 1920 && birthYear <= 2002) validFields++
      }
      if ("iyr" in obj) {
        const issueYear: number = +obj.iyr
        if (issueYear >= 2010 && issueYear <= 2020) validFields++
      }
      if ("eyr" in obj) {
        const expiryYear = +obj.eyr
        if (expiryYear >= 2020 && expiryYear <= 2030) validFields++
      }
      if ("hgt" in obj) {
        const height = obj.hgt
        const heightNum = +height.slice(0, height.length - 2)
        if (height.endsWith("cm"))
          if (heightNum >= 150 && heightNum <= 193) validFields++
        if (height.endsWith("in"))
          if (heightNum >= 59 && heightNum <= 76) validFields++
      }
      if ("ecl" in obj) {
        const colors: string[] = [
          "amb",
          "blu",
          "brn",
          "gry",
          "grn",
          "hzl",
          "oth",
        ]
        if (colors.includes(obj.ecl)) validFields++
      }
      if ("pid" in obj) {
        if (obj.pid.length === 9) validFields++
      }
      if ("hcl" in obj) {
        const hairColorRed: RegExp = /^#[a-f0-9]{6}$/
        if (hairColorRed.test(obj.hcl)) validFields++
      }

      if (validFields === 7) num++
    }

  return num
}, 0)

console.log(numberOfValidPassports)
