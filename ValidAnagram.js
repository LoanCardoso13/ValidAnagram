str = "anagram"
str2 = "nagaram"

alert(str.split('').sort().join() == str2.split('').sort().join());