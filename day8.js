//#region
var day8Input = "jmp +1\nacc -15\nacc +14\nacc +18\njmp +443\njmp +286\nacc +27\njmp +522\njmp +1\nacc -19\nacc +22\nacc +37\njmp +111\nacc +28\nacc +43\nacc +18\nnop +597\njmp +479\njmp +604\njmp +499\nacc +0\nacc +22\nacc +13\njmp +566\nacc -12\nacc +0\nnop +153\njmp +173\njmp +192\njmp +292\nacc +36\nacc +7\njmp +440\nacc -17\nacc +40\nacc +24\nacc -7\njmp +519\nnop +16\nacc +15\nacc +42\njmp +445\njmp +350\nacc +42\nacc +12\nacc +2\njmp +133\nacc +12\nacc +3\nacc +27\njmp +186\nacc +25\nacc +46\njmp +285\nacc +32\nacc -11\nacc -6\njmp +565\nnop +215\nacc +1\nacc +35\njmp +1\njmp +502\nacc +27\nacc +19\nacc -8\nacc -8\njmp +531\njmp -21\nnop +292\nacc +8\nacc -13\njmp +26\nacc +1\nacc +45\nnop -42\njmp +323\njmp +39\njmp +336\nacc +19\njmp -51\nacc +45\nacc +26\njmp +278\njmp +6\nacc +40\nnop +271\nacc -10\nnop -4\njmp +272\nnop -61\nacc +4\nacc -14\nacc +27\njmp -70\nacc -9\nacc +29\njmp +416\nacc +25\nacc +45\njmp +19\njmp +39\nacc -19\nacc +7\njmp +248\nacc +11\nacc +36\njmp +515\nacc +45\nacc +49\njmp +329\nacc +30\nacc +31\nacc +28\nacc +26\njmp +8\njmp +283\nacc +32\njmp +127\nacc +4\nacc +20\njmp +92\njmp +50\njmp +133\nacc +5\nacc +8\njmp +313\nacc +38\nacc +34\njmp +395\nacc +14\nacc +29\njmp +392\nnop +246\njmp +374\nnop +429\nnop +388\nacc +3\nacc +0\njmp +432\nacc -1\nacc +35\nacc +35\njmp +148\nacc +8\nacc +11\nacc +12\nacc -10\njmp +434\nacc -19\njmp +330\nnop +329\nacc +30\njmp +239\nacc -6\njmp -136\njmp +418\nnop +385\njmp +1\nacc +34\nacc +9\njmp +410\nnop -13\nacc +31\nacc +15\nacc +37\njmp -142\njmp +109\nacc -16\nnop +405\nnop +343\njmp +8\nacc +44\nacc -15\nacc +7\nacc +9\njmp +185\nacc +6\njmp +35\nnop -25\njmp +93\nacc +22\nacc -17\nacc +15\nacc +39\njmp +41\nnop -123\nacc +15\nacc +6\njmp -35\nacc +48\njmp +422\nacc -7\nnop +67\nnop +66\nacc +48\njmp -29\nacc -11\nacc +16\njmp +92\nacc +45\njmp +92\njmp +212\nacc -3\nacc -18\nnop -186\nnop +7\njmp -28\nnop +292\nacc +7\nnop -120\nacc +46\njmp +48\nacc -3\nacc -16\nacc +50\njmp -44\nacc -2\nacc -11\njmp +236\njmp +344\nacc +33\nacc +44\nacc +39\nnop -45\njmp -53\nacc -11\nnop +380\nacc +35\njmp +113\nnop +203\nacc +40\njmp +167\nacc +44\njmp +394\njmp +229\njmp -167\njmp -204\nacc +21\nacc +49\njmp +25\nacc -19\nacc -17\nacc +44\njmp -11\nacc +40\nacc +12\njmp +253\nacc +21\njmp +349\njmp +285\nacc +0\nnop +261\nacc +15\nacc +38\njmp +10\nacc +27\njmp +1\njmp +373\njmp -151\nacc +6\njmp -48\nacc +14\nacc -8\njmp -61\nacc +8\nacc +20\njmp +1\njmp +1\njmp +208\nacc -18\nacc +32\njmp +94\njmp +262\nacc +0\njmp -156\nnop +188\nnop +312\nacc +21\nacc +6\njmp -123\nacc +47\njmp +316\nacc +25\nnop +290\njmp +62\nacc -7\nacc +36\nnop +212\nacc +14\njmp +332\njmp +291\njmp +226\nacc +30\njmp -161\nacc +39\nacc +38\njmp +203\nnop +63\nnop -6\nacc -15\nnop -56\njmp +72\nacc +1\nacc +34\nacc +22\nacc +19\njmp -135\nacc +27\njmp -303\nacc +1\nacc +48\nacc -19\njmp +142\nacc +50\njmp +298\nacc +43\nacc +0\nacc +50\nacc +12\njmp +137\nacc +41\nnop +252\njmp -310\nacc +13\nacc +34\nacc -15\nacc +43\njmp +236\nacc +5\nacc -8\nacc +25\nacc +45\njmp +153\nacc -12\nacc +31\nacc -1\njmp +120\njmp +236\nacc +38\nnop -238\njmp -328\njmp +81\nacc +48\nacc +15\nacc -9\njmp -73\nnop -49\njmp -271\nacc -17\nacc -17\njmp +106\nnop +212\njmp -290\nacc +36\nnop +109\njmp +186\njmp -310\nacc +4\nacc +16\njmp +117\njmp +1\nacc +10\njmp +20\nacc +12\njmp -311\nacc +12\nacc +30\nnop +182\njmp -315\nacc +25\nacc +12\nacc +30\njmp +50\nacc -19\njmp -333\nacc +30\nnop +87\njmp -199\nacc +8\njmp +112\nacc -8\njmp -313\nacc +7\nacc +32\njmp +1\njmp +230\nacc +25\nacc +45\nacc +20\nacc +0\njmp -307\nacc +30\nnop -253\nacc +7\nacc +39\njmp -113\nacc -12\njmp +209\nacc +42\nacc +17\nacc -19\nacc +24\njmp -170\nacc +30\nacc +9\nacc -1\njmp -328\nacc +19\nacc +45\njmp +132\nnop -244\nnop +35\njmp +34\nacc -10\nacc +26\nacc +35\nnop -238\njmp +54\nacc +15\nnop -378\nacc +42\njmp -43\nacc -9\nacc -5\nacc -11\nnop -307\njmp -129\nnop -202\nacc -9\nnop -376\nacc +11\njmp -75\njmp +14\nacc -1\nacc +32\nacc -14\nacc +16\njmp +39\nacc +42\nacc +32\njmp -133\nacc +1\nacc +17\nnop +85\nacc +35\njmp +83\nacc +27\nacc +0\nacc -12\njmp -93\nacc +48\nacc +35\nnop +154\njmp -287\njmp -347\njmp -348\nacc +18\njmp -374\nacc -15\njmp +36\njmp -123\nacc -11\njmp +55\nacc +19\nacc +23\njmp -339\nnop +5\nacc +44\nacc +2\njmp +1\njmp -417\nacc +23\njmp -253\nacc -9\nacc -3\njmp -138\njmp -227\nacc +12\njmp -437\nacc +47\nacc +19\nacc -6\njmp -245\nacc +2\njmp -328\nacc -14\nacc +25\nacc +4\nacc -2\njmp -411\njmp -351\njmp -459\nacc +3\nacc +48\njmp -134\nnop +54\nacc -14\njmp -298\njmp -401\nacc -14\nacc +25\nnop -55\nacc -10\njmp -312\nacc -7\nacc +45\njmp -74\nacc +30\njmp -462\nacc +5\nacc -8\njmp -355\nacc +9\nacc +44\nacc +44\njmp -150\njmp -484\nacc +14\nacc +19\nacc -6\njmp -474\nacc -18\njmp -166\njmp -264\nacc -15\nacc +17\nacc +29\njmp -149\nnop -273\nacc +31\nacc +0\nacc -2\njmp -410\njmp -411\nacc +47\nacc -6\nnop -287\njmp -436\nacc +4\nnop +88\njmp -158\nacc +32\njmp +1\nacc -15\njmp -319\nacc -6\nacc -18\nacc +49\njmp -256\nacc -18\nacc +31\nacc +27\nacc +27\njmp -351\njmp +58\nacc +12\njmp +1\nacc +32\nnop -151\njmp -411\nacc +19\nacc +7\njmp -287\nacc +30\njmp -496\nacc -11\nacc +5\nacc +42\nacc +25\njmp -249\nacc -1\njmp -243\njmp -190\nacc +32\nacc +32\nacc +14\njmp +12\nacc +5\nacc +30\nacc +34\njmp -46\nacc -13\nacc +5\nacc +45\njmp -271\nacc +29\nacc +37\njmp -323\nnop -18\nacc -2\nacc +21\nacc -12\njmp -453\nacc -14\nacc +19\nnop -173\njmp -411\nacc +24\nacc -7\nnop -136\nacc +6\njmp -357\nacc -1\nacc -1\nacc +32\njmp -264\nacc +26\njmp -175\nacc +10\nacc +35\nnop -361\njmp -493\nacc +14\njmp -206\njmp -138\nacc -1\njmp -156\nacc +3\nacc +11\nacc -2\njmp -213\nacc +35\nacc -13\nacc +47\nacc +45\njmp -376\njmp -543\njmp -479\nacc +29\njmp -532\nacc +28\nacc +47\nacc -11\nacc -14\njmp +1";
//#endregion
var arr8 = day8Input.split(/\n/);
var arrMapped = arr8.map(function (str) {
    var arr = str.split(" ");
    return [arr[0], +arr[1]];
});
var arrLength = arr8.length;
var accum = 0;
var step = 0;
var memo = {};
while (!memo[step]) {
    memo[step] = true;
    var _a = arrMapped[step], cmd = _a[0], amt = _a[1];
    if (cmd == "acc") {
        accum += +amt;
    }
    else if (cmd == "jmp") {
        step += +amt - 1;
    }
    step += 1;
}
console.log(accum);
// const memo: any[] = []
// for (let i = 0; ; i += step) {
//   const instruction: Array<string | number> = arrMapped[i]
//   const instructMemo: string = instruction.toString()
//   if (memo.includes(instructMemo)) {
//     break
//   }
//   const [operation, argument] = instruction
//   if (operation === "acc") {
//     accum += argument as number
//     step = 1
//   } else if (operation === "jmp") {
//     step = argument as number
//   } else if (operation === "nop") {
//     step = 1
//   }
//   memo.push(instructMemo)
// }
// console.log(memo)
