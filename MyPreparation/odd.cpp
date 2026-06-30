#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

vector<int> findMinMax(vector<int>& arr) {
    vector<int> sortedArr = arr;
    
    // Sort array
    sort(sortedArr.begin(), sortedArr.end()); 
    return {sortedArr[0], sortedArr[sortedArr.size()-1]};
}

int main() {
    vector<int> arr = {3, 5, 4, 1, 9};
    vector<int> result = findMinMax(arr);
    cout << result[0] << " " << result[1] << endl;
    return 0;
}