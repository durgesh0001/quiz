/*
3) Read a text file containing a set of flat polygons represented as one polygon per line. 
Each line contains a comma-separated list of side lengths (for example “3,4,8,5,7”). 
Write a function to classify the set of polygons into four mutually exclusive subsets: triangles, rectangles, squares, and everything else. 
The union of all four subsets should be the original set of polygons. All the sides of the polygons are connected and the angles between them are irrelevant. 
Only consider the lengths. 
*/
//here we are assuming line
var line1 = "4,4,4,4";
var line2 = "1,2,3,4";
var line3 = "3,4,3,4";
var line4 = "1,2,3";
var line5 = "1,2,3,4,6";


function typeOfSubset(str) {
    var temp = str.split(",");
    if (temp.length > 4) {
        return "other";
    } else {
        var numberOfDiffentValueCount = count(temp);
        if (numberOfDiffentValueCount == 1) {
             return "squares";
        } else if (numberOfDiffentValueCount == 2) {
            var isRectangles = true;
            var tempArray = str.split(",");
            for (var i = 0; i < tempArray.length - 1; i++) {
                var j = i++;
                if (tempArray[i] == tempArray[j]) {
                    isRectangles = false;
                }
            }
            if (isRectangles) {
              return "Rectangles";

            } else {
                return "other";
            }
        } else if (numberOfDiffentValueCount == 3) {
                   return "triangles";
        } else {
             return "others";

        }
    }

}

function count(array_elements) {
    var count = 0;
    array_elements.sort();
    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                // console.log(current + ' comes --> ' + cnt + ' times<br>');
                count = count + 1;
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }

    if (cnt > 0) {
        // console.log(current + ' comes --> ' + cnt + ' times<br>');
        count = count + 1;

    }

    return count;

}


var typeNameOfSubset=typeOfSubset(line4);
console.log(typeNameOfSubset);