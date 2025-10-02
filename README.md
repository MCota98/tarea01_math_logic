# tarea01_math_logic
Tarea #1
Lógica matemá,ca y proposicional

Descripción:
En la realización de esta práctica debe desarrollar los enunciados presentados a continuación, debe utilizar los procedimientos de la forma más ordenada y explícita posible.

Primera sección 
1. Utilice el procedimiento visto en clase para la conversión de los siguientes números decimales a binarios: 
a. 7  
7 / 2 = 3 resto 1 
3 / 2 = 1 resto 1
1 / 2 = 0 resto 1
Respuesta: 111

b. 45 
45 / 2 = 22 resto 1
22 / 2 = 11 resto 0 
11 / 2 = 5 resto 1
5 / 2 = 2 resto 1
2 / 2 = 1 resto 0
1 / 2 = 0 resto 1
Respuesta: 101101

c. 123 
123 / 2 = 61 resto 1
61 / 2 = 30 resto 1
30 / 2 = 15 resto 0
15 / 2 = 7 resto 1
7 / 2 = 3 resto 1
3 / 2 = 1 resto 1
1 / 2 = 0 resto 1
Respuesta: 1111011

d. 8.75 
Entero 8
8 / 2 = 4 resto 0
4 / 2 = 2 resto 0
2 / 2 = 1 resto 0
1 / 2 = 0 resto 1
Respuesta 1000
Fracción 0.75
0.75 * 2 = 1.5  se toma el 1
0.50 * 2 = 1 
Respuesta 11
Repuesta combinada: 1000.11

e. -18 (Utilice complemento a dos, ver un ejemplo en la sección de anexos de este documento).
18 / 2 = 9 resto 0
9 / 2 = 4 resto 1
4 /2 = 2 resto 0
2 / 2 = 1 resto 0
1 / 2 = 0 resto 1
Respuesta: 10010
En 8 bits: 0001 0010

Complemento a dos: 0001 0010 => 1110 1101
Sumar 1 al resultado:  1110  1101 + 1 => 1110 1110 

2. Realice las tablas de verdad de las siguientes operaciones de lógica booleana, ver un ejemplo en anexos: 
a. A ^ B 
b. (¬A ^ B) v C 
c. ¬(A v C) ^B 
d. (B ^ C)^(¬A) 
e. (M ^ (¬A)) v (¬C)

| M | A | C | ¬A | M ^ ¬A | ¬C | (M ^ ¬A) v ¬C |
|---|---|---|----|--------|----|---------------|
| T	| T	| T	| F	 |  F	  |  F |      F        |
| T	| T	| F	| F	 |  F	  |  T |      T        |
| T	| F	| T	| T	 |  T	  |  F |      T        |
| T	| F	| F	| T	 |  T	  |  T |      T        |
| F	| T	| T	| F	 |  F	  |  F |      F        |
| F	| T	| F	| F	 |  F	  |  T |      T        |
| F	| F	| T	| T	 |  F	  |  F |      F        |
| F	| F	| F	| T	 |  F	  |  T |      T        |




