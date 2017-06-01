/*
2) Write a function to calculate the cumulative TTL of the following set of requests. (The provided answer is correct and should not be modified. )
 
let requests = [
{requestId: ‘poiax’,  startedAt: 1489744808, ttl: 8},
{requestId: ‘kdfhd’,  startedAt: 1489744803, ttl: 3},
{requestId: ‘uqwyet’, startedAt: 1489744806, ttl: 12}, 
{requestId: ‘qewaz’,  startedAt: 1489744810, ttl: 1}
]
 
let cumulativeTtl = 15

*/
// start of question 2
let requests = [{
        requestId: "poiax",
        startedAt: 1489744808,
        ttl: 8
    },
    {
        requestId: "kdfhd",
        startedAt: 1489744803,
        ttl: 3
    },
    {
        requestId: "uqwyet",
        startedAt: 1489744806,
        ttl: 12
    },
    {
        requestId: "qewaz",
        startedAt: 1489744810,
        ttl: 1
    }
];

// function to calculate the cumulative TTL
function cumulativeTTL(req) {
     //sorting
    var compare = function(a, b) {
        if (a.startedAt < b.startedAt)
            return -1;
        if (a.startedAt > b.startedAt)
            return 1;
        return 0;
    }

    var tempSortRequest = req.sort(compare);//apply sorting
    var tempCumulativeTtl = 0;
    var tempRequest = [];
    var tempt = tempSortRequest.map(function(x) {
        x.endTime = x.startedAt + x.ttl; //finding out endtime of process
        tempRequest.push(x); //pushing new object to tempRequest
    });
    for (var i = 0; i < tempRequest.length; i++) {
        if (i != 0) {
            if (tempRequest[i].endTime >= tempRequest[i - 1].endTime) {
                tempCumulativeTtl = tempCumulativeTtl + tempRequest[i].ttl;

            }
        } else {

            tempCumulativeTtl = tempCumulativeTtl + tempRequest[i].ttl;
        }

    }
    return tempCumulativeTtl;
}
// start of question 2

var cumulativeTtl = cumulativeTTL(requests);
console.log(cumulativeTtl);