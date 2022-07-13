function BinarySearch(arr, low, high, key) {
    var mid = low+Math.floor((high-low)/2)
    if(arr[mid]==key) {
        return mid
    }
    if(arr[mid]>key) {
      return BinarySearch(arr, low, mid-1, key)
    }
    return BinarySearch(arr, mid+1, high, key)
}
var array = [20, 30, 34, 40, 44]
var index= BinarySearch(array, 0 , array.length-1, 30)
console.log(`Key Element at position index ${index}`);