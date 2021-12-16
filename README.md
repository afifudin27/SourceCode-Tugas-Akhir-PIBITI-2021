# SourceCode-Tugas-Akhir-PIBITI-2021
Repositori ini berisi source code tugas akhir PIBITI 2021 "Start your journey with Javascript".

# SOAL TUGAS AKHIR PIBITI 2021

## 1. Pyramid Builder
Buatlah function buildPyramid(n), dimana n adalah tinggi dari pyramid tersebut. Block pembangun diwakili dengan *. Function ini mereturn array.

[Lihat jawaban disini](../1_pyramidBuilder.js)

## 2. which One is Bigger
Buatah sebuah function dengan nama bigger_score(str1, str2), function ini akan mengambil 2 argument berupa string. Function ini akan membandingan mana dari 2 string tersebut yang memiliki nilai yang lebih besar. Score ditentukan dari penjumlahan letak huruf dalam string. Function ini akan mereturn string yang memiliki nilai lebih besar.

[Lihat jawaban disini](../2_WhichOneIsBigger.js)

## 3. Decimal sum to Binnary
Buatlah function dec2bin(a, b), fungsi ini akan menerima 2 argumen bilangan bulat positif (integer) dan menjumlahkannya. Lalu mereturn hasil penjumlahannya dalam bentuk biner.

[Lihat jawaban disini](../1_pyramidBuilder.js)

## 4. Palindrome
Palindrome adalah sebutan kata, frasa, angka, atau susunan lainnya, yang dapat dibaca dengan sama baik dari depan maupun belakang. Contohnya kata "Kakak", "Malam", "taat", "kasur rusak".

[Lihat jawaban disini](../1_pyramidBuilder.js)

Buatlah fungsi isPalindrome(word), yang mengambil parameter berupa string tanpa huruf kapital. Fungsi ini akan mengembalikan nilai Boolean true jika parameter yang dimasukkan berupa palindrome, dan false jika bukan palindrome.

[Lihat jawaban disini](../1_pyramidBuilder.js)

## 5. Digital Root
Akar digital (digital root) merupakan penjumlahan rekursif dari semua digit yang ada pada sebuah angka. Buatlah function digital_root(n), dengan argument n berupa bilangan bulat positif (integer). Fungsi ini akan menjumlahkan semua digit dalam n. Jika hasil penjumlahan diri dari n memiliki lebih dari satu digit, lakukan penjumlhan digit lagi sampai menghasilkan angka satu digit.

[Lihat jawaban disini](../1_pyramidBuilder.js)

## 6. Narcisisstic Number
Dalam matematika, angka narsistik merupakan angka positif dimana angka tersebut bila tiap digitnya dipangkatkan dengan banyaknya digit lalu dijumlahkan, hasilnya adalah angka itu sendiri. Contoh angka narsistik:
* 153=13+53+33=153 (Angka narsistik. Tiap digit dipangkatkan tiga dan dijumlah. Pangkat 3 karena 153 merupakan bilangan 3 digit.)
* 27=22+72=53 (Bukan Angka narsistik)

Buatlah sebuah fungsi Bernama narcissistics(n), dimana n merupakan bilangan bulat positif (integer). Function tersebut akan mereturn nilai Boolean true jika parameter yang dimasukkan adalah angka narsistik, dan false jika parameter yang dimasukkan bukan angka narsistik.

[Lihat jawaban disini](../1_pyramidBuilder.js)

## 7. Object Oriented Programming
Buatlah sebuah class dengan nama Shape, class ini memiliki 2 method yaitu:
* Area( ): mereturn luas dari objek yang dibuat.
* Circumference( ): mereturn keliling dari objek yang dibuat.

Shape merupakan parent class yang memiliki 3 child class, yaitu Rectangle, Triangle, dan Circle. Masing-masing child class ini memiliki beberapa attribute yang sama, yaitu:

* Length/base: menampung Panjang/alas dari objek (diinisialisasi saat membuat objek).
* Width/height: menampung leabr/tinggi dari objek (diinisialisasi saat membuat objek).
* Area(private attribute): menampung luas dari instance.
* Circumference(private attribute): menampung keliling dari objek.

*(Untuk child class Circle hanya memiliki 3 atribute, artribut length dan width digantikan oleh attribute radius, menampung jari2 dari objek(di inisialisasi saat membuat objek))*

Setelah membuat class, simpan file berisi parent class dan child class dengan nama “shape.js”. Buat file baru Bernama “index.js”. Import semua kelas ke dalam index.js. Dalam file index.js buat objek bangun1, bangun2, dan bangun3. Dan panggil method area() dan circumference() untuk masing-masing objek.

[Lihat jawaban disini](../1_pyramidBuilder.js)
