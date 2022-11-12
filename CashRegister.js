/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/
// function checkCashRegister(price, cash, cid) {
//     let change = cash - price;
//     let cidTotal = 0;
//     for (let elem of cid) {
//         cidTotal += elem[1]*100;
//     }
//     if (change > cidTotal) {
//         return {status: "INSUFFICIENT_FUNDS", change: []};
//     } else if (change === cidTotal) {
//         return {status: "CLOSED", change: cid};
//     } else {
//         let changeArray = [];
//         cid = cid.reverse();
//         let moneyUnits = {"ONE HUNDRED": 10000, "TWENTY": 2000, "TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1};
//         for (let elem of cid) {
//             let holder = [elem[0], 0];
//             elem[1] = elem[1]*100;
//             while (change >= moneyUnits[elem[0]] && elem[1] > 0) {
//                 change -= moneyUnits[elem[0]];
//                 elem[1] -= moneyUnits[elem[0]];
//                 holder[1] += moneyUnits[elem[0]]/100;
//             }
//             if (holder[1] > 0) {
//                 changeArray.push(holder);
//             }
//         }
//         if (change > 0) {
//             return {status: "INSUFFICIENT_FUNDS", change: []};
//         }
//         return {status: "OPEN", change: changeArray};
//     }
// }



function checkCashRegister(price, cash, cid) {
    var denom = [
        { name: 'ONE HUNDRED', val: 100},
        { name: 'TWENTY', val: 20},
        { name: 'TEN', val: 10},
        { name: 'FIVE', val: 5},
        { name: 'ONE', val: 1},
        { name: 'QUARTER', val: 0.25},
        { name: 'DIME', val: 0.1},
        { name: 'NICKEL', val: 0.05},
        { name: 'PENNY', val: 0.01}
    ];
    var output = {status: null, change: []};
    var change = cash - price;
    var register = cid.reduce(function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, {total: 0});

    if(register.total === change) {
        output.status = 'CLOSED';
        output.change = cid;
        return output;
    }

    if(register.total < change) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }

    var change_arr = denom.reduce(function(acc, curr) {
        var value = 0;
        while(register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;
            change = Math.round(change * 100) / 100;
        }

        if(value > 0) {
            acc.push([ curr.name, value ]);
        }
        return acc;
    }, []);

    if(change_arr.length < 1 || change > 0) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
    output.status = 'OPEN';
    output.change = change_arr;
    return output;
}
  
console.log(checkCashRegister(
    19.5, 
    20, 
    [
        ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
        ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
        ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]
    ]
));