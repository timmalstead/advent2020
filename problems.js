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
var fourthDayInput = "iyr:2015 cid:189 ecl:oth byr:1947 hcl:#6c4ab1 eyr:2026\nhgt:174cm\npid:526744288\n\npid:688706448 iyr:2017 hgt:162cm cid:174 ecl:grn byr:1943 hcl:#808e9e eyr:2025\n\necl:oth hcl:#733820 cid:124 pid:111220591\niyr:2019 eyr:2001\nbyr:1933 hgt:159in\n\npid:812929897 hgt:159cm hcl:#fffffd byr:1942 iyr:2026 cid:291\necl:oth\neyr:2024\n\ncid:83 pid:524032739 iyr:2013 ecl:amb byr:1974\nhgt:191cm hcl:#ceb3a1 eyr:2028\n\necl:gry hcl:eefed5 pid:88405792 hgt:183cm cid:221 byr:1963 eyr:2029\n\npid:777881168 ecl:grn\nhgt:181cm byr:1923 eyr:2021 iyr:2018 hcl:#18171d\n\nbyr:1941 eyr:2027 ecl:gry iyr:2016 pid:062495008 hcl:#a5e1b5 hgt:178cm\n\ncid:56\nbyr:1971\nhcl:#efcc98 pid:649868696 iyr:2011 eyr:2025 hgt:164cm\n\necl:blu\npid:117915262 eyr:2023 byr:1925 iyr:2020 hcl:#888785\nhgt:188cm\n\niyr:2012\ncid:174\neyr:2024\npid:143293382 ecl:brn byr:1946 hgt:193cm\n\neyr:2021 iyr:2011\nhgt:192cm pid:251564680\nbyr:1976\necl:blu hcl:#602927\n\nbyr:1973 ecl:blu hgt:164cm\neyr:2022 pid:695538656 iyr:2010 cid:244 hcl:#b6652a\n\niyr:2014\neyr:2027 pid:358398181 ecl:hzl hgt:74in byr:1949 cid:329\nhcl:#ceb3a1\n\ncid:211\nbyr:1954 eyr:2023 hgt:172cm ecl:blu iyr:2019 hcl:#623a2f pid:657051725\n\npid:562699115 eyr:2026 byr:2000\nhgt:162cm hcl:#602927 ecl:amb iyr:2018\n\necl:brn\niyr:2013\npid:835184859 byr:1981 hgt:157cm eyr:2027 hcl:#b6652a\n\npid:763432667 byr:1981 hcl:#cfa07d ecl:brn\niyr:2010 hgt:63in cid:107\neyr:2027\n\nbyr:2009\nhgt:177cm cid:314\nhcl:f55bf8 eyr:2025\npid:632519974\niyr:2015 ecl:amb\n\neyr:2024 pid:614239656 hgt:169cm iyr:2014 ecl:hzl byr:1992\nhcl:#602927\n\necl:blu\neyr:2026\nhcl:#efcc98\nbyr:1980 iyr:2013\nhgt:161cm\npid:065413599\n\nhgt:182cm\neyr:2025 iyr:2013 pid:939088351 hcl:#b6652a byr:1994 ecl:amb\n\nhgt:65in cid:220 ecl:amb hcl:#ceb3a1\niyr:2013 eyr:2025 pid:167894964 byr:1976\n\nhgt:185cm cid:88 ecl:blu iyr:2020\neyr:2020\nhcl:#888785 pid:582683387\nbyr:1981\n\nhcl:#866857 eyr:2020 byr:1948\npid:358943355\necl:amb hgt:164cm iyr:2019\n\npid:127467714\nhcl:#ceb3a1 byr:1991 hgt:163cm eyr:2020 iyr:2017 ecl:blu cid:229\n\ncid:156 byr:1942 eyr:2024 hcl:#cfa07d\necl:blu pid:843747591\niyr:2014 hgt:173cm\n\nhcl:#a97842 hgt:165cm\niyr:2013 ecl:#781088 byr:1952\npid:516882944\neyr:2026\n\nhgt:179cm\nbyr:1969 pid:408297435 iyr:2020 ecl:oth hcl:#cfa07d eyr:2020\n\necl:amb iyr:2013 hcl:#b6652a eyr:2023 cid:88\npid:324081998 hgt:66in byr:1945\n\niyr:2012\neyr:2024\nhcl:#18171d\npid:756726480 byr:1947 ecl:oth\nhgt:164cm\n\necl:blu\nhcl:#fffffd byr:1951 iyr:2019 pid:544645775\nhgt:153cm eyr:2027\n\npid:655906238 ecl:brn eyr:2028 byr:1959 hgt:63in cid:338\niyr:2020\n\neyr:2020\nhcl:#602927 hgt:72in iyr:2014\npid:305025767\ncid:297 byr:1957 ecl:gry\n\nhgt:155cm byr:1942 hcl:#a97842\niyr:2014 ecl:gry pid:593995708\neyr:2022\n\npid:219206471 byr:1955 eyr:2030\nhcl:#a97842 ecl:oth iyr:2015 cid:134 hgt:170cm\n\niyr:2013 cid:268\neyr:2020\nhcl:#a97842 ecl:grn pid:235279200 hgt:178cm\nbyr:1952\n\niyr:2013 pid:016384352 eyr:2027\nhcl:#866857 ecl:grn hgt:161cm byr:1943\n\necl:amb hgt:169cm pid:149540593\niyr:2012\neyr:2040 hcl:#a97842 byr:1954\n\nbyr:1938\necl:brn hcl:#b6652a eyr:2026 hgt:184cm iyr:2018 pid:832531235\n\nbyr:1945 iyr:2015 hgt:171cm eyr:2028 pid:998746896 ecl:hzl hcl:#866857\n\nhgt:73in ecl:hzl eyr:2023 cid:343 pid:458004221 iyr:2017 byr:1962 hcl:#efcc98\n\nbyr:1970 hgt:159cm pid:925022199 iyr:2013\neyr:2028 hcl:#888785\necl:hzl\n\neyr:2027 iyr:2016 ecl:gry\nhcl:#cfa07d\npid:006246552 byr:1939 cid:124 hgt:177cm\n\nbyr:1982\niyr:2016 hgt:159cm\ncid:102 hcl:#fffffd\neyr:2029\necl:grn pid:619798285\n\niyr:2018\nhgt:189cm hcl:#efcc98\nbyr:1937 eyr:2023 pid:727551553 ecl:oth\n\niyr:2014 byr:1976\neyr:2020 hcl:#7d3b0c pid:125102070 ecl:amb\nhgt:186cm\n\nhgt:187cm byr:1949\npid:027653233 eyr:2021 hcl:#341e13 ecl:hzl\niyr:2020\n\niyr:2016\nbyr:1954 pid:545631256\nhcl:#602927 eyr:2023\nhgt:191cm ecl:amb\n\npid:509762954\nhgt:190cm ecl:hzl byr:1991\neyr:2022 iyr:2019\ncid:187\n\nhcl:#c0946f eyr:2024 hgt:152cm cid:277 iyr:2015 pid:872373191 byr:1988\n\npid:544267207 cid:113\niyr:2015\nhgt:181cm\nhcl:#6b5442\necl:gry\nbyr:1971\n\necl:gry\nhgt:161cm iyr:2012 byr:1965\npid:574527322 hcl:#fffffd\n\niyr:2018 byr:1976 hcl:#b6652a\npid:024582079 hgt:169cm ecl:oth eyr:2021\n\npid:020478204\nbyr:1945 hcl:#7d3b0c\ncid:239 eyr:2025 hgt:188cm\necl:grn\niyr:2012\n\neyr:2026 pid:202653345\nbyr:1988\nhcl:#2cdc09\nhgt:185cm iyr:2010\necl:hzl\n\nhgt:183cm iyr:2017\nhcl:#18171d byr:1977 eyr:2029 pid:804559436 ecl:grn\n\nhcl:#602927 pid:812072269 hgt:170cm eyr:2026 byr:1955 iyr:2020 ecl:gry\n\neyr:2023 iyr:2010\nhcl:#cfa07d pid:592419048 byr:1943\necl:brn\nhgt:172cm\n\necl:brn iyr:2013 pid:558179058\nhcl:#fffffd eyr:2022\nbyr:1922\ncid:331 hgt:64in\n\necl:xry\nhcl:ade850 eyr:1995 pid:976028541\niyr:2030 hgt:179cm\nbyr:2030\n\necl:#2872b1 pid:158cm eyr:1927 hcl:ee8e92\niyr:2014 hgt:190cm\nbyr:2025\n\nhgt:155cm cid:283 eyr:2020 ecl:blu pid:755165290 byr:1936 hcl:#733820 iyr:2012\n\neyr:2030\nbyr:1943\ncid:323 pid:906418061 hgt:157cm ecl:amb iyr:2010\nhcl:#7d3b0c\n\nhcl:#fffffd\npid:873200829 hgt:192cm eyr:2022 ecl:blu iyr:2016 byr:1920 cid:200\n\neyr:2021\nbyr:1963\nhcl:#a97842 pid:585551405\niyr:2019 cid:91\necl:brn hgt:60cm\n\nbyr:1946\npid:520273609 hcl:#341e13 cid:66\niyr:2020 hgt:154cm eyr:2024\necl:brn\n\necl:brn hcl:#d64d7b eyr:2020\nbyr:1957 hgt:181cm iyr:2019 pid:378496967 cid:135\n\npid:002446580\neyr:2027 byr:1939 hcl:#888785\niyr:2011 cid:168\necl:oth hgt:160cm\n\niyr:2019 hgt:70in hcl:#7d3b0c byr:1983\neyr:2024 pid:369493064 cid:54 ecl:oth\n\niyr:1979 pid:170cm\nhgt:65cm eyr:1933 hcl:z\n\necl:zzz pid:193cm hcl:z eyr:2020 byr:2013 iyr:2016 hgt:177in\n\niyr:2010 hgt:187cm\nbyr:1932\nhcl:z ecl:oth pid:665967850 eyr:2030\n\neyr:2029\niyr:2013 hcl:#b6652a ecl:amb\nbyr:1936 pid:516025566\nhgt:181cm\n\nhcl:#c0946f pid:238825672 byr:2000\niyr:2013 eyr:2028 ecl:amb hgt:183cm\n\neyr:2021 hcl:#866857\ncid:77 iyr:2017 hgt:156cm pid:271118829 ecl:amb\n\niyr:2014\nhcl:#fffffd\ncid:321 hgt:159cm ecl:gry\npid:691381062 eyr:2022 byr:1991\n\npid:111506492 hcl:#c1d296 iyr:2011\nbyr:1934 hgt:176cm cid:263 eyr:2028 ecl:amb\n\niyr:2014 hgt:64in eyr:2024 cid:193 hcl:#b6652a byr:1967\necl:oth pid:138677174\n\nhgt:168cm iyr:2020 eyr:2030\nhcl:#6b5442 ecl:brn pid:975843892 byr:1927\n\nbyr:1957 ecl:amb iyr:2012 pid:177266671 eyr:2026\nhcl:#866857 hgt:162cm\n\neyr:2029\nhcl:#341e13\nhgt:175cm pid:465809700 ecl:amb byr:1974\niyr:2010\n\nhcl:#a97842 iyr:2010\nhgt:176cm eyr:2029 byr:1931 ecl:grt pid:161604244\n\neyr:2024 iyr:2018 hgt:170in byr:1959 ecl:gmt hcl:#888785\npid:94163132\n\niyr:2011\nhgt:186cm pid:998471478 byr:1956 ecl:amb\neyr:2029\nhcl:#efcc98\ncid:76\n\necl:brn\nbyr:2001 pid:378527883 iyr:2013 hcl:#83bdc5 eyr:2020 hgt:181cm\n\niyr:2017 ecl:grn hgt:172cm hcl:#888785 cid:100\neyr:2022 byr:2030\npid:311562177\n\npid:097558436\ncid:141 hgt:152cm iyr:2019\necl:brn eyr:2023\nbyr:1940\nhcl:#6b5442\n\niyr:2016 eyr:2023 byr:1992\nhgt:174cm ecl:amb\npid:691291640 cid:190 hcl:#fffffd\n\nhcl:#623a2f ecl:brn\neyr:2028 cid:227 iyr:2012 hgt:74in pid:964273950 byr:1965\n\nhcl:#ceb3a1 eyr:2028\niyr:2013 pid:175294029 hgt:150cm ecl:grn\nbyr:1936\ncid:143\n\nbyr:1935 hcl:#a97842 ecl:oth hgt:180cm iyr:2019\npid:857891916\neyr:2026\n\npid:084518249 ecl:hzl eyr:2027 hcl:#c0946f hgt:192cm cid:315 byr:1961\niyr:2010\n\nhgt:67cm pid:37925169 eyr:2022\nhcl:z iyr:2012 cid:315 byr:2028 ecl:dne\n\nhcl:#c0946f byr:1924\nhgt:176cm cid:87 pid:682212551 iyr:2011\neyr:2026\necl:gry\n\nhgt:181cm byr:1935\niyr:2018 pid:644964785\neyr:2026 ecl:amb\n\npid:789810179\necl:gry eyr:2021\ncid:159 hgt:185cm iyr:2020 hcl:#602927\nbyr:1965\n\npid:672386364\niyr:2013 eyr:2021 byr:1951 hcl:#341e13\necl:gry hgt:173cm\n\nhcl:#18171d eyr:2030 pid:957722245 iyr:2012 byr:1955\necl:grn\nhgt:154cm\n\nbyr:1955 ecl:oth\nhcl:#cfa07d\neyr:2030\niyr:2013 pid:361945273 hgt:154cm\n\niyr:2012 eyr:2027 ecl:grn hcl:#16d373\nhgt:192cm\n\npid:275525273\nbyr:1986\niyr:2017\neyr:2022\necl:grn\nhgt:75in\nhcl:#919cc0\n\neyr:2029\ncid:84 hcl:#cfa07d iyr:2013 hgt:78\necl:brn\nbyr:1925 pid:281331549\n\neyr:2027\ncid:219 iyr:2016 byr:1971 hcl:#7d3b0c hgt:179cm ecl:grn\npid:301296222\n\neyr:2030 iyr:2010 pid:995982765\nbyr:1926 ecl:amb hcl:#888785 hgt:186cm\n\nbyr:1955 iyr:2015 hgt:165cm cid:101\neyr:2027 ecl:amb hcl:#602927\npid:168654790\n\nhcl:#7d3b0c byr:1956 eyr:2029 hgt:155cm\necl:grn pid:816685992\niyr:2016\n\necl:grn hcl:#cfa07d cid:71\npid:914724136 iyr:2012 eyr:2024\nhgt:184cm byr:1938\n\necl:gry\neyr:2029 hcl:#602927 pid:255062643 iyr:2015 hgt:175cm\n\nhcl:#341e13 iyr:2017 eyr:2028\npid:459704815 byr:1922\ncid:312\necl:brn hgt:152cm\n\necl:dne eyr:1981\npid:8356519470 hgt:176 iyr:1941 byr:2006 hcl:z\n\necl:amb pid:753377589 hcl:#a97842 eyr:2022 hgt:187cm\ncid:130 iyr:2013 byr:1961\n\npid:952444443\nhcl:#bde835 byr:1963 iyr:2020 eyr:2025\necl:amb hgt:162cm\n\neyr:2027 iyr:2018 hcl:#ceb3a1 hgt:152cm pid:882429463 ecl:blu byr:1969\n\ncid:134 eyr:2021 hcl:#a97842 hgt:63in\necl:grn byr:1975 iyr:2019 pid:154078695\n\nbyr:1956 eyr:2027\npid:396230480 hcl:#b6652a\nhgt:175cm iyr:2020 ecl:oth\n\necl:grn\ncid:263 hcl:#506937 byr:1924\neyr:2030 pid:705511368 hgt:159cm\niyr:2011\n\neyr:2020 hgt:178cm ecl:grn\nbyr:1947 hcl:#888785\npid:177476829 iyr:2019\n\necl:hzl cid:211 iyr:2016 hgt:176cm pid:405182470\nbyr:1952\nhcl:#866857 eyr:2028\n\neyr:2032 cid:152 ecl:gmt hgt:150in\npid:75969209\nbyr:2019 hcl:z iyr:1940\n\nhcl:#fffffd hgt:193cm pid:607407479 cid:300 byr:1944 iyr:2017\necl:oth\neyr:2026\n\nhcl:z\ncid:125 eyr:2040 ecl:dne byr:2015 pid:733096171 hgt:63cm\niyr:1922\n\npid:575721428 hgt:152cm cid:275\nhcl:#cfa07d eyr:2028\nbyr:1935 ecl:hzl iyr:2016\n\niyr:2012\necl:grn eyr:2027 hcl:#623a2f pid:029106453 byr:1984 hgt:168cm\n\necl:blu cid:140 eyr:2028 iyr:2018 hcl:#c0946f\nhgt:163cm byr:1944\npid:709288293\n\nbyr:1936\nhgt:172cm eyr:1997 hcl:#8b8c88 cid:50\niyr:2016 pid:205477922 ecl:grn\n\nhgt:170cm pid:872750582 eyr:2027 byr:1985 iyr:2017 hcl:#d6976a ecl:blu\n\nhgt:163cm\npid:189634089 cid:116 byr:1975 eyr:2030\nhcl:#efcc98 ecl:brn iyr:2020\n\necl:amb byr:1953 hcl:#6b5442 pid:418787965\niyr:2018 hgt:193cm\neyr:2026\n\necl:#3ec898 cid:339 hcl:#866857 eyr:2025 hgt:179cm pid:591430028 iyr:1936 byr:1995\n\npid:285371937 hgt:159cm\nbyr:1922\niyr:2013 eyr:2023 hcl:#6b5442 ecl:amb\n\npid:545260883 ecl:oth\nhgt:163cm\niyr:2015 eyr:2021 byr:1975 hcl:#866857\n\necl:hzl hgt:182cm pid:053762098 eyr:2023 cid:174 hcl:#6daac4 iyr:2017 byr:1937\n\nhgt:178cm iyr:2015 byr:1956 pid:815359103\necl:blu hcl:#cfa07d eyr:2030\n\nhcl:#7d3b0c\npid:438108851 hgt:162cm byr:1930 iyr:2014 eyr:2024 ecl:amb\n\neyr:2027 iyr:2019 hcl:#90eb1c hgt:178cm\npid:314810594 cid:278 ecl:amb\nbyr:2001\n\nbyr:1949 iyr:1942 hcl:#888785 ecl:hzl hgt:184cm eyr:2027 pid:899137640\n\nhgt:153cm\neyr:2022 iyr:2011 byr:1975\nhcl:#602927\necl:amb pid:178cm\n\nhcl:#6b5442\necl:amb iyr:2018 eyr:2025 pid:418735327 byr:1922 hgt:74in\n\necl:gmt hcl:z iyr:2024\neyr:1988 hgt:75cm cid:125 pid:690872200 byr:1928\n\neyr:2024 hgt:184cm\npid:4634589837 ecl:zzz iyr:2022 byr:2000 hcl:89c187\n\niyr:2017 byr:1966 hcl:#efcc98 ecl:brn pid:473085232 eyr:2021 hgt:174cm\n\nhgt:67in eyr:2030 iyr:2014 byr:1943 hcl:#602927 cid:344\necl:oth\npid:210476779\n\nbyr:1955\necl:oth\nhgt:193cm iyr:2012 hcl:#623a2f pid:818289829 eyr:2021\n\nbyr:2018 ecl:#872a51 iyr:2024 hcl:97783d\npid:155cm hgt:174cm\neyr:1964\n\nhcl:#6b5442 hgt:157cm byr:1932 ecl:brn pid:4275535874\neyr:2024 iyr:2015\n\npid:959861097\nhgt:151cm cid:140 byr:1935\neyr:2029\niyr:2018 ecl:hzl\nhcl:#623a2f\n\nhgt:181cm pid:911791767 eyr:2027\niyr:2016 byr:1962\necl:grn hcl:#866857\n\neyr:2021\nbyr:1994\nhgt:162cm hcl:#866857 ecl:oth iyr:2014\npid:712345689\n\nhcl:#7d3b0c\nhgt:170cm pid:600132416 eyr:2025\niyr:2016 byr:1978 ecl:brn\n\nhcl:#0a9307\ncid:287 byr:1940 pid:786271493\neyr:2028 hgt:186cm\niyr:2019 ecl:oth\n\neyr:2025 hgt:190cm ecl:hzl cid:228 iyr:2019\nbyr:1932\nhcl:#623a2f pid:648307551\n\npid:304587325 iyr:2019 byr:1923 hcl:#7d3b0c\nhgt:190cm\necl:gry eyr:2030\n\nhgt:188cm eyr:2027 byr:1958 pid:572934921\nhcl:#888785 ecl:hzl iyr:2010\n\niyr:2019\nhgt:178cm ecl:grn hcl:#7d3b0c pid:007601227\nbyr:1975 eyr:2023\n\npid:808872803 byr:1929\necl:grn\neyr:2022 iyr:2019 hgt:74in hcl:#602927\n\niyr:2019\ncid:67 hcl:#602927 pid:292601338 ecl:hzl\nbyr:2001 eyr:2023 hgt:171cm\n\nbyr:1962 eyr:2022 hcl:#b6652a hgt:193cm\necl:oth\niyr:2010\n\nhgt:70in iyr:2014 hcl:#a97842\ncid:169 eyr:2020 ecl:amb\npid:329751670 byr:1959\n\nbyr:1920\necl:oth hgt:172cm cid:57 pid:515139276\neyr:2030\nhcl:#18171d\niyr:2013\n\niyr:2012\nhcl:#a97842 pid:946040810 hgt:65in\nbyr:1936 ecl:amb eyr:2020\n\nbyr:1948 hcl:#18171d\niyr:2019\necl:hzl cid:185\neyr:2023\npid:583625200 hgt:191cm\n\nhgt:154cm eyr:2022\npid:460137392 iyr:2010\necl:grn\nhcl:#ceb3a1\n\neyr:2024\niyr:2016 pid:890698391 hgt:172cm hcl:#a97842 cid:271 ecl:oth byr:1926\n\nhgt:162cm pid:340904964 hcl:#b6652a\nbyr:1966\niyr:2010\ncid:260 eyr:2028\necl:amb\n\nbyr:1933 eyr:2029 pid:642043350\niyr:2016 hcl:#b6652a ecl:grn\n\npid:602218620 eyr:2023 ecl:blu\nhcl:#623a2f\nbyr:1950 hgt:168cm iyr:2015\n\necl:gry pid:490792384\nbyr:1974\nhcl:#a97842 iyr:2016 hgt:170cm\n\niyr:2020 ecl:gry byr:2002\neyr:2029 hcl:#9f45c4\nhgt:155cm pid:604239618\n\nhgt:190cm pid:560653271 iyr:2020 cid:349\neyr:2024 ecl:blu hcl:#efcc98 byr:1936\n\neyr:2021 byr:1964 hcl:#efcc98 ecl:grn iyr:2018\nhgt:165cm pid:218376636\n\npid:186217101\niyr:2019 hgt:155cm\nbyr:2017 eyr:2022 ecl:grn cid:349 hcl:ece72e\n\niyr:2015\neyr:2026 pid:802832833\nhcl:#888785 hgt:190cm ecl:brn\nbyr:1952\ncid:202\n\ncid:151 iyr:2017 hgt:152cm hcl:#a97842 eyr:2020 ecl:hzl\npid:554959609 byr:1941\n\ncid:116\niyr:2019 hgt:159cm byr:1992 pid:662111811\nhcl:#18171d ecl:oth eyr:2024\n\necl:grn byr:1966\niyr:1950 pid:585351486\neyr:2038 hgt:178in hcl:a27d2b\n\niyr:2014 cid:238 hgt:187cm pid:523401750 ecl:amb hcl:#18171d eyr:2023 byr:1984\n\neyr:2021 byr:1957\npid:340752324\niyr:2015 hgt:157cm\nhcl:#602927 cid:70\necl:oth\n\npid:458479816 ecl:hzl\neyr:2022 hcl:z\nhgt:60cm\nbyr:2012 iyr:2005\n\ncid:57\nhgt:154cm pid:446142864\nhcl:#341e13 byr:1968 eyr:2030\niyr:2019\necl:brn\n\neyr:2028\npid:243811429 byr:1977\niyr:2011 hcl:#18171d hgt:185cm ecl:oth\n\ncid:205 byr:1976 eyr:2029 pid:649877471 hcl:#cfa07d hgt:152cm\necl:blu\niyr:2013\n\niyr:2009 pid:559014976 ecl:oth hgt:189cm byr:1936 eyr:2037\nhcl:#efcc98\n\npid:134378987 byr:1983 iyr:2013 hgt:173cm\necl:oth hcl:#ceb3a1\ncid:80\neyr:2020\n\nhgt:151cm byr:1964 ecl:grn iyr:2010 hcl:#b6652a pid:939492531\neyr:2028\n\nbyr:1961 iyr:2014 hcl:#733820 hgt:179cm\neyr:2026 ecl:gry pid:732892920\n\niyr:2018 byr:1996\npid:944007809 ecl:hzl\nhcl:#866857 eyr:2021\nhgt:155cm\n\npid:374875696 hcl:#7d3b0c\necl:oth\nhgt:193cm byr:1948 cid:238\niyr:2020\n\npid:305782299 hcl:#b6652a\necl:brn\nhgt:172cm\niyr:2018 byr:1927\n\npid:945869114 cid:95 byr:1989 hgt:173cm eyr:2025 hcl:#b6652a iyr:2012 ecl:amb\n\npid:55484149\neyr:1958\niyr:1956 ecl:grn\ncid:95 byr:2028\nhcl:c2af7e\n\nhgt:176cm ecl:amb\nhcl:#a97842 eyr:2029 pid:937928270\ncid:251\nbyr:1978\niyr:2018\n\nhgt:154cm\ncid:213 pid:767329807 ecl:hzl\niyr:2013\nhcl:#888785\neyr:2026 byr:1998\n\ncid:158 hcl:#b6652a hgt:155cm iyr:2010 eyr:2025\nbyr:1980 pid:338567803 ecl:amb\n\nhcl:#efcc98 byr:1940 hgt:62in ecl:oth pid:537307591\neyr:2030\niyr:2017\ncid:179\n\nbyr:1965 eyr:2027 pid:691913618 hgt:75in\nhcl:#6b5442 ecl:gry iyr:2012\n\nhgt:163cm byr:1964 eyr:2025\niyr:2010 hcl:#ceb3a1 ecl:oth\npid:936536544\n\npid:712946803\ncid:343\nhgt:187cm ecl:oth iyr:2020 byr:1983 eyr:2030\nhcl:#7873b3\n\necl:blu\niyr:2010\nhcl:#fffffd\neyr:2030\nhgt:175cm pid:047567505 byr:1963\n\necl:gry byr:1946 eyr:2026 hcl:#602927\nhgt:164cm\niyr:2010\n\npid:223378458\niyr:2014 cid:151 ecl:hzl hgt:171cm\neyr:2020\nhcl:#341e13 byr:1964\n\necl:brn byr:1948\nhcl:#866857\nhgt:193cm eyr:2024\niyr:2013 cid:277\n\nhcl:#623a2f byr:1943 iyr:2011 ecl:oth\nhgt:184cm\npid:371604584 eyr:2024 cid:176\n\nhcl:#efcc98\neyr:2025 pid:241834382\nhgt:178cm\nbyr:1985\niyr:2017\n\nhcl:#c0946f\nbyr:1996 pid:701366586 eyr:2026 hgt:163cm iyr:2015 ecl:oth\n\nhgt:65cm hcl:#18171d\neyr:2024 ecl:brn pid:172cm\niyr:2010\nbyr:1990\n\nhcl:#fffffd pid:68659204 hgt:161cm iyr:2025\necl:#94b8aa byr:2021 eyr:2032\n\necl:blu iyr:2018 byr:1993 cid:184\nhgt:177cm pid:289871693 hcl:#733820 eyr:2026\n\ncid:138\necl:gry hgt:174cm eyr:2024 byr:1988 iyr:2014 hcl:#341e13 pid:864852584\n\ncid:321 eyr:2028 pid:93285596 hgt:173cm\niyr:2013 ecl:gry hcl:#623a2f\nbyr:1927\n\npid:431242259 eyr:2022 ecl:hzl\nbyr:1960 hgt:151cm hcl:#efcc98 iyr:2020\n\nhcl:#866857 eyr:2029 iyr:2016 ecl:grn pid:526060780 byr:1929\ncid:310 hgt:162cm\n\necl:blu hgt:183cm cid:168\niyr:2015\neyr:2021 byr:1951 hcl:#6b5442\npid:594960553\n\nhcl:#ceb3a1\niyr:2020 byr:1951 hgt:186cm eyr:2022 ecl:amb pid:317661479\n\niyr:2016\nhgt:163in hcl:#accfa0\necl:brn\npid:307377995 byr:2000 eyr:2028\n\npid:933380459\nbyr:1938\ncid:291 hcl:#c0946f\necl:oth iyr:2018\neyr:2026 hgt:170cm\n\nbyr:1974\npid:262927116 eyr:2027 ecl:gry\nhcl:#341e13 iyr:2014 cid:232 hgt:161cm\n\nhcl:#602927\nbyr:2001 iyr:2011\nhgt:177cm eyr:2028 pid:165733929 ecl:amb\n\nbyr:1922 cid:144 pid:333716867 hgt:183cm iyr:2015\nhcl:#c25ea9 eyr:2022 ecl:blu\n\neyr:2021 cid:147 byr:1978\niyr:2020 pid:938828535\nhcl:#7d3b0c ecl:amb hgt:159cm\n\nhgt:153cm ecl:hzl\ncid:232 byr:1953 hcl:#a97842 iyr:2016 pid:356632792 eyr:2029\n\npid:745727684 ecl:gry iyr:2020\nhcl:#a97842\neyr:2025 cid:275\nhgt:65in\nbyr:1957\n\nhcl:#733820\necl:grn iyr:2019 byr:1943 eyr:2024 hgt:70in\npid:953607814\n\necl:gry eyr:2028 hcl:#cfa07d\nhgt:163cm\nbyr:1942 iyr:2019 pid:310104177\n\nhgt:190cm\neyr:2027 iyr:2010 byr:1978\necl:gry\nhcl:#964ba7\n\ncid:320\neyr:2022 hgt:169cm\necl:blu hcl:#a97842 iyr:2015 pid:669007078 byr:1986\n\niyr:2019 pid:901370677 hcl:7f2398 cid:305\necl:amb eyr:2011 hgt:190cm byr:1991\n\necl:brn\ncid:256 byr:1987 iyr:2017 eyr:2026 hcl:#623a2f pid:875646528\nhgt:160cm\n\nbyr:1955 pid:120131971 hcl:#18171d\nhgt:156cm\necl:blu\niyr:2011 eyr:2028\n\niyr:2020 ecl:brn cid:188\nhgt:157cm\neyr:2026\npid:504067323 hcl:#733820 byr:1982\n\ncid:102 hgt:177cm\nhcl:#733820 ecl:hzl byr:1984 pid:542750146 eyr:2028 iyr:2020\n\npid:419639528 iyr:2013 hgt:175cm ecl:blu\neyr:2026 byr:1999 hcl:#733820\n\nbyr:1963 eyr:2020\npid:683641152 ecl:gry cid:207 hgt:180cm\nhcl:#cfa07d\niyr:2020\n\nhgt:192cm pid:156436859 iyr:2020 hcl:#cfa07d\necl:blu byr:1963 eyr:2025 cid:147\n\neyr:2002\nhcl:z iyr:2011\npid:6830168962\nhgt:156in cid:288 byr:2029\n\neyr:2021\npid:277739802 byr:1992 ecl:hzl iyr:2020\nhcl:#7c5fe8 hgt:184cm\n\nbyr:1989 pid:066973099\niyr:2017\neyr:2022 ecl:hzl hcl:#888785 hgt:76in\n\nhcl:#866857\niyr:2016 cid:306\necl:hzl\npid:453816800 byr:1971 hgt:71in eyr:2030\n\npid:248573931 hcl:#cfa07d\niyr:2014 eyr:2024 hgt:186cm byr:1970 cid:128 ecl:blu\n\npid:172567579 ecl:brn iyr:2014 byr:1948 cid:309\nhgt:151cm hcl:#888785 eyr:2024\n\nhgt:153cm eyr:2026 byr:1929 ecl:hzl pid:684760742\nhcl:#c45e93 iyr:2018\n\npid:#d50a43\niyr:1940\necl:#7880a9 byr:2018 hcl:dc2fa7 hgt:185in eyr:1978\n\nhcl:#602927 cid:71 eyr:2020\npid:620634584 hgt:157cm byr:1991\niyr:2020 ecl:amb\n\neyr:2023\nbyr:1959 iyr:1947 hgt:152cm ecl:#503286 pid:63978523 hcl:57dd0d\n\nhgt:190cm\nbyr:1955 ecl:blu\npid:507892696\nhcl:#9bd1f0 eyr:2029\niyr:2010\n\npid:365539813\neyr:2022 hcl:#623a2f iyr:2020 hgt:184cm\necl:oth byr:1920 cid:213\n\ncid:50 ecl:oth pid:774859218 hgt:193cm\niyr:2017 byr:1925 hcl:#866857\neyr:2021\n\nhgt:189cm\niyr:2019 byr:1937\nhcl:#a97842\neyr:2025 ecl:oth\npid:787390180\n\niyr:2019 eyr:2027 hgt:183cm\necl:hzl pid:549757712\nbyr:1956\nhcl:#866857\n\npid:755580715\nhcl:#602927 hgt:187cm iyr:2017 byr:1925 eyr:2020 ecl:blu\n\niyr:2019 hgt:69in\necl:amb\nhcl:#602927 eyr:2026\npid:951019647 byr:1974\n\nbyr:1943 eyr:2034 hgt:150 pid:#36aedf ecl:oth\nhcl:z\n\neyr:2024\necl:hzl pid:824745692 iyr:2012 hcl:06ab6e\nbyr:1944\nhgt:159cm\ncid:183\n\nhgt:169cm ecl:blu\neyr:2030 iyr:2013 byr:1945 pid:791359040 hcl:#7d3b0c\n\niyr:2018\necl:hzl hgt:152cm\nhcl:#18171d eyr:2026 byr:1924 pid:534667048\n\neyr:2029 pid:933295825\niyr:2011\nhcl:#cfa07d byr:1981\nhgt:164cm ecl:grn\n\necl:amb byr:1964 iyr:2018\npid:014457573\ncid:152\neyr:2028 hgt:171cm hcl:#866857\n\nhgt:167cm\nbyr:1974 iyr:2012 ecl:amb pid:512315114\ncid:278\neyr:2028 hcl:#623a2f\n\nhgt:153cm ecl:oth iyr:2012\neyr:2027 hcl:#888785 byr:1999 pid:416990697\n\neyr:2025 ecl:blu byr:1991 hcl:#866857\nhgt:189cm pid:546461828\n\niyr:2016\nbyr:1988\nhgt:160cm eyr:2025 ecl:amb hcl:#602927\npid:562766105\n\necl:oth byr:1942\nhcl:#341e13 pid:564975864 cid:158\nhgt:159cm eyr:2028\niyr:2018\n\npid:406209763 hgt:170cm cid:331\niyr:2018 eyr:2026 byr:1981\nhcl:#733820 ecl:gry\n\npid:279164109 ecl:oth\ncid:197 hcl:#7d3b0c\neyr:2024\nhgt:185cm iyr:2020 byr:1925\n\nhcl:#efcc98 ecl:hzl\ncid:92 hgt:190cm pid:724466265 iyr:2020\neyr:2025 byr:1996\n\nbyr:1996\ncid:55 pid:906572505 ecl:grn eyr:2022 hcl:#602927 hgt:160cm iyr:2014\n\neyr:2028 hcl:#b6652a ecl:hzl hgt:186cm iyr:2016 pid:132872161 byr:1932\n\nhcl:#fffffd iyr:2019 eyr:2020 hgt:188cm\nbyr:1951 ecl:brn\npid:842126902\n\nhcl:#602927\nhgt:158cm\neyr:2023 iyr:2010\npid:681061896 byr:1977 ecl:gry\n\niyr:2018 hgt:192cm byr:1970 cid:200 ecl:grn eyr:2027\npid:164408694 hcl:#888785\n\neyr:2029\npid:447061655 iyr:2010 hcl:#341e13 ecl:oth\ncid:187 hgt:185cm byr:1943\n\nbyr:1925 iyr:2012 eyr:2025\nhgt:190cm hcl:#18171d pid:017534154 ecl:brn\n\nhgt:172cm byr:1923\neyr:2026 iyr:2015\npid:580812884 hcl:#c0946f ecl:hzl\n\nhcl:#888785 eyr:2028\nbyr:1952 ecl:brn pid:818889983\niyr:2010 hgt:180cm\n\neyr:2026 ecl:gry byr:1982 hgt:188cm hcl:#c0946f pid:610689703 iyr:2011\n\neyr:2028\niyr:2018\npid:921660781 ecl:amb\nhcl:#cfa07d hgt:178cm byr:1975\n\nbyr:1977 pid:667631009 iyr:2010\ncid:86 eyr:2022 hgt:189cm hcl:#7d3b0c ecl:oth\n\npid:214679440 hgt:190cm ecl:blu iyr:2017\neyr:2025 cid:292\n\necl:amb\niyr:2017 hcl:531ad3\nhgt:163 pid:689027667 byr:2006 eyr:2033\n\nhgt:68in byr:1928 iyr:2010 cid:227 eyr:2023\necl:hzl pid:#87bab9 hcl:#fffffd\n\necl:grn byr:1940 cid:294 hgt:152cm pid:310277488\niyr:2015 hcl:#18171d eyr:2030\n\nbyr:1965 pid:240720987\neyr:2030 ecl:oth hgt:192cm hcl:#733820\niyr:2016\n\npid:830487275\necl:blu byr:1930\nhcl:#b6652a iyr:2013 hgt:188cm eyr:2025\n\nhgt:177cm byr:1955 eyr:2030 ecl:amb pid:476675886 iyr:2016 hcl:#c0946f\n\npid:152702068 iyr:2016 hcl:#b6652a\ncid:82 ecl:blu eyr:2029 byr:1975 hgt:161cm\n\npid:136852264\neyr:2024 cid:339 ecl:oth byr:1949 iyr:2011\n\niyr:2020 pid:772739059\neyr:2025 hgt:157cm\nbyr:1945 ecl:brn\nhcl:#6b5442\n\nhcl:#18171d eyr:2022\niyr:2018 ecl:grn byr:1933 pid:053763751\n\npid:214212776 hcl:#18171d\neyr:2030\niyr:2020 byr:1988\ncid:122\nhgt:170cm ecl:oth\n\npid:883116919 iyr:2018 ecl:brn byr:1938 hgt:187cm eyr:2020\n\niyr:2020 hcl:#a97842\ncid:329 eyr:2025 byr:1946 pid:636649774\necl:grn hgt:158cm\n\neyr:2023\necl:blu hgt:161cm\nhcl:#341e13 byr:1951\niyr:2020 pid:461889565 cid:97\n\nhgt:168cm pid:492241189\neyr:2029\niyr:2013\ncid:150\nbyr:1980 hcl:#cfa07d ecl:hzl\n\nbyr:1998 ecl:gry hgt:150cm eyr:2024 pid:401735295 cid:153 hcl:#733820 iyr:2016\n\necl:hzl hgt:184cm iyr:2018\nbyr:2001\npid:453480077 eyr:2025 hcl:#a97842";
var fourthDayArr = fourthDayInput.split(/\n\n/);
var arrSplit = fourthDayArr.map(function (str) {
    return str.split(/[\n|\s]/).map(function (str) { return str.split(":"); });
});
var arrOfObj = arrSplit.map(function (arr) {
    return arr.reduce(function (obj, array) {
        obj[array[0]] = array[1];
        return obj;
    }, {});
});
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
var numberOfValidPassports = arrOfObj.reduce(function (num, obj) {
    var numOfValues = 0;
    for (var value in obj)
        numOfValues++;
    if (numOfValues > 6)
        if (numOfValues === 8 || (numOfValues === 7 && "cid" in obj === false)) {
            var validFields = 0;
            if ("byr" in obj) {
                var birthYear = +obj.byr;
                if (birthYear >= 1920 && birthYear <= 2002)
                    validFields++;
            }
            if ("iyr" in obj) {
                var issueYear = +obj.iyr;
                if (issueYear >= 2010 && issueYear <= 2020)
                    validFields++;
            }
            if ("eyr" in obj) {
                var expiryYear = +obj.eyr;
                if (expiryYear >= 2020 && expiryYear <= 2030)
                    validFields++;
            }
            if ("hgt" in obj) {
                var height = obj.hgt;
                var heightNum = +height.slice(0, height.length - 2);
                if (height.endsWith("cm"))
                    if (heightNum >= 150 && heightNum <= 193)
                        validFields++;
                if (height.endsWith("in"))
                    if (heightNum >= 59 && heightNum <= 76)
                        validFields++;
            }
            if ("ecl" in obj) {
                var colors = [
                    "amb",
                    "blu",
                    "brn",
                    "gry",
                    "grn",
                    "hzl",
                    "oth",
                ];
                if (colors.includes(obj.ecl))
                    validFields++;
            }
            if ("pid" in obj) {
                if (obj.pid.length === 9)
                    validFields++;
            }
            if ("hcl" in obj) {
                var hairColorRed = /^#[a-f0-9]{6}$/;
                if (hairColorRed.test(obj.hcl))
                    validFields++;
            }
            if (validFields === 7)
                num++;
        }
    return num;
}, 0);
console.log(numberOfValidPassports);
