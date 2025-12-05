**Memory Management -**



To run any code first it comes to RAM or we can say it loaded to RAM by Operating System.



Then CPU runs the code



Suppose a 16 Byte RAM , so imagine it like a 4\*4 matrix each block of 1 byte (8 bits = 1 byte)



Stack and Heap- https://www.notion.so/Lecture-03-V8-Engine-Memory-Allocation-27a3a78e0e228017963adec0533f0d78



Why we need the Stack and Heaps ?



Fixed size data stored in stack but the unfixed data like Strings are stored in Heaps and that heap address is stored in stack.



**Memory Allocation in JavaScript -**


**Homework -** We know our system is on 36 or 64 bit



32 bit: address size: 4 bytes (32 bits)

64 bit: address size: 8 bytes (64 bits) 



Both Primitive and Non Primitive Data Types are stored on Heap.



For null, undefined true and false the memory location in heap is fixed.



In JavaScript also in Java there is a garbage collector that remove data this is not being point out



How loops become fast ?



Problem was that if you loop for(i=0; i<100; i++){
Every time a memory address will created as the data is immutable in JS



to solve this - we predict that with the memory address.



31 bits store the data and 1 bit to define do we need to go to data or not



1 means - to go to data

0 means - not to go to the address



















