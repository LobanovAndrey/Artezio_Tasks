#### Кратко описать, какими принципами ООП вы пользуетесь при разработке приложений (на каких этапах, обосновать)

Начальным этапом каждой разработки приложений является написание интерфейса (класса без реализации), пользователь не будет знать, как и где реализован данный класс, и сможет осущевлявять взаимодействие с ним только через доступный ему интерфейс. У всех полей и методов, есть свои модифакаторы доступа:
* private - элемент класса доступен только внутри базового класса
* protected - элемент класса доступен внутри базового класса и у классов наследников
* public - элемент класса доступен всем классам

 В этом отчасти проявляется одна из важнейших парадигм ООП **инкапсуляция** - объединение данных и методов объекта и определение способов их хранения, при которых данные и методы защищаются от неверного использования.

Одним из важных свойст, позволяющих обрабатывать значения разных типов идентичным образом, то есть исполнять один и тот же код для данных разных типов, является **параметрический полиморфизм**. Довольно часто использвуется, если требуется одинаковое поведение и реализация, у нескольких методов с разными типом аргументов.

Ещё одним подвидом полиморфизма, является **ad hoc полиморфизм**, поддерживающийся во многих языках
посредством перегрузки функций и методов.

Их ключевым отличием ялвляется то, что параметрический полиморфизм подразумевает исполнение одного и того же кода для всех допустимых типов аргументов, тогда как ad hoc полиморфизм подразумевает исполнение потенциально разного кода для разных типов данных.

Очень часто при разработке приложений возникает необходимость написать класс, имеющий схожие методы и поля с другим классом. Вместо того, чтобы заново писать один и тот же код, можно использовать **наследование** - свойство системы, позволяющее описать новый класс на основе уже существующего с частично или полностью заимствующейся функциональностью.

* Класс, от которого производится наследование, называется **базовым, родительским или суперклассом.** 
* Новый класс называется **потомком, наследником, дочерним или производным классом.**

В некоторых языках программирования поддерживается **множественное наследование** - позволяет дочерниму классу наследовать элементы более, чем от одного базового класса.

Помимо наследования, между классами возможны следующие взаимоотношения:

* **Агрегация** – инициализация члена класса переданным объектом другого класса (объект другого класса создан отдельно, но связывается с классом).
* **Композиция** – один класс является членом другого класса и существует только вместе с ним.
